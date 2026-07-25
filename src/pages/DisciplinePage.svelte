<script lang="ts">
  import { ArrowLeft, ArrowRight, Check, ChevronRight, Clock3 } from "@lucide/svelte"
  import MarkdownDocument from "../components/MarkdownDocument.svelte"
  import {
    discipline_document,
    document_tabs,
    markdown_headings,
    type DocumentKey
  } from "../lib/content"
  import { disciplines, units } from "../lib/curriculum_index"

  let {
    slug,
    document,
    mastered_units,
    on_toggle_unit
  }: {
    slug: string
    document: DocumentKey
    mastered_units: string[]
    on_toggle_unit: (id: string) => void
  } = $props()

  const discipline = $derived(disciplines.find((item) => item.slug === slug)!)
  const discipline_units = $derived(units.filter((unit) => unit.discipline === slug))
  const markdown_promise = $derived(discipline_document(slug, document))
  const mastered_count = $derived(
    discipline_units.filter((unit) => mastered_units.includes(unit.id)).length
  )
  const total_hours = $derived(discipline.core_hours + discipline.extension_hours)
</script>

<main id="main">
  <header class="discipline_header page_shell">
    <a class="back_link" href="#/explore"><ArrowLeft size={14} />All disciplines</a>
    <div class="header_grid">
      <div>
        <p class="eyebrow">{discipline.group} · {discipline.prefix}</p>
        <h1 class="display">{discipline.title}</h1>
      </div>
      <p>{discipline.description}</p>
      <dl>
        <div><dt>{discipline.unit_count}</dt><dd>Units</dd></div>
        <div><dt>{discipline.core_count}</dt><dd>Core</dd></div>
        <div><dt>{discipline.extension_count}</dt><dd>Extension</dd></div>
        <div><dt>{total_hours}</dt><dd>Hours</dd></div>
      </dl>
    </div>
  </header>

  <nav class="document_tabs" aria-label="{discipline.title} documents">
    <div class="page_shell tab_inner">
      {#each document_tabs as tab (tab.key)}
        <a class:active={document === tab.key} href="#/discipline/{slug}/{tab.key}">{tab.label}</a>
      {/each}
    </div>
  </nav>

  <div class="reader page_shell">
    <aside class="unit_rail" aria-label="{discipline.title} units">
      <div class="rail_heading">
        <p class="eyebrow">Learning sequence</p>
        <span>{mastered_count}/{discipline.unit_count}</span>
      </div>
      <ol>
        {#each discipline_units as unit, index (unit.id)}
          <li class:mastered={mastered_units.includes(unit.id)}>
            <button
              type="button"
              aria-label={mastered_units.includes(unit.id) ? `Mark ${unit.title} incomplete` : `Mark ${unit.title} mastered`}
              onclick={() => on_toggle_unit(unit.id)}
            >
              {#if mastered_units.includes(unit.id)}
                <Check size={11} />
              {:else}
                <span>{String(index + 1).padStart(2, "0")}</span>
              {/if}
            </button>
            <a href="#/unit/{unit.id}">
              <small>{unit.id} · {unit.difficulty}</small>
              <strong>{unit.title}</strong>
            </a>
          </li>
        {/each}
      </ol>
    </aside>

    {#await markdown_promise}
      <section class="document loading" aria-live="polite">
        <p class="eyebrow">Opening document</p>
        <div></div>
        <div></div>
        <div></div>
      </section>
    {:then markdown}
      {@const headings = markdown_headings(markdown).slice(0, 14)}
      <section class="document">
        <div class="document_meta">
          <span>Document {document_tabs.findIndex((tab) => tab.key === document) + 1} of {document_tabs.length}</span>
          <span>Last generated from the curriculum source</span>
        </div>

        {#if document === "overview"}
          <section class="sequence">
            <div class="section_heading">
              <div>
                <p class="eyebrow">Essential sequence</p>
                <h2 class="display">Begin here.</h2>
              </div>
              <a class="text_link" href="#/discipline/{slug}/roadmap">Full roadmap <ArrowRight size={14} /></a>
            </div>
            <ol>
              {#each discipline_units.slice(0, 5) as unit, index (unit.id)}
                <li>
                  <span class="sequence_number">{String(index + 1).padStart(2, "0")}</span>
                  <a href="#/unit/{unit.id}">
                    <small>{unit.id} · {unit.difficulty}</small>
                    <strong>{unit.title}</strong>
                    <p>{unit.summary}</p>
                  </a>
                  <span class="hours"><Clock3 size={13} />{unit.hours} h</span>
                  <ChevronRight size={17} />
                </li>
              {/each}
            </ol>
          </section>
        {/if}

        <MarkdownDocument {markdown} discipline_slug={slug} />
      </section>

      <aside class="contents">
        <p class="eyebrow">On this page</p>
        <nav>
          {#each headings as heading, index (heading.anchor)}
            <button type="button" onclick={() => globalThis.document.getElementById(heading.anchor)?.scrollIntoView()}>
              <span>{String(index + 1).padStart(2, "0")}</span>{heading.label}
            </button>
          {/each}
        </nav>
        <section>
          <p class="eyebrow">Your progress</p>
          <strong>{Math.round((mastered_count / discipline.unit_count) * 100)}%</strong>
          <div class="progress_track"><span style:width="{(mastered_count / discipline.unit_count) * 100}%"></span></div>
          <small>{mastered_count} of {discipline.unit_count} units mastered</small>
        </section>
      </aside>
    {/await}
  </div>
</main>

<style>
  .discipline_header {
    padding-block: 36px 40px;
  }

  .back_link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .back_link:hover {
    color: var(--green);
  }

  .header_grid {
    display: grid;
    align-items: end;
    margin-top: 34px;
    grid-template-columns: minmax(280px, 0.85fr) minmax(320px, 1.1fr) auto;
    gap: clamp(30px, 5vw, 76px);
  }

  h1 {
    margin-top: 8px;
    font-size: clamp(3rem, 5vw, 5.6rem);
    line-height: 0.95;
  }

  .header_grid > p {
    margin: 0;
    color: #4e5b53;
    font-family: var(--serif);
    font-size: 1.02rem;
    line-height: 1.65;
  }

  dl {
    display: grid;
    min-width: 275px;
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  dl div {
    padding: 12px 16px;
    border-top: 1px solid var(--rule);
    border-left: 1px solid var(--rule);
  }

  dt {
    font-family: var(--serif);
    font-size: 1.35rem;
  }

  dd {
    margin: 2px 0 0;
    color: var(--muted);
    font-size: 0.54rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .document_tabs {
    position: sticky;
    z-index: 30;
    top: 73px;
    overflow-x: auto;
    border-block: 1px solid var(--rule-strong);
    background: var(--paper);
  }

  .tab_inner {
    display: flex;
    min-width: max-content;
  }

  .document_tabs a {
    position: relative;
    display: grid;
    min-height: 54px;
    place-items: center;
    padding-inline: 18px;
    color: var(--muted);
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .document_tabs a.active {
    color: var(--green);
  }

  .document_tabs a.active::after {
    position: absolute;
    right: 18px;
    bottom: -1px;
    left: 18px;
    height: 2px;
    background: var(--brass);
    content: "";
  }

  .reader {
    display: grid;
    align-items: start;
    padding-top: 42px;
    padding-bottom: 110px;
    grid-template-columns: 260px minmax(0, 810px) 210px;
    gap: clamp(30px, 4vw, 64px);
  }

  .unit_rail,
  .contents {
    position: sticky;
    top: 148px;
    max-height: calc(100vh - 168px);
    overflow-y: auto;
    scrollbar-width: thin;
  }

  .rail_heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--rule-strong);
  }

  .rail_heading > span {
    color: var(--muted);
    font-size: 0.62rem;
  }

  .unit_rail ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .unit_rail li {
    display: grid;
    padding: 13px 0;
    border-bottom: 1px solid var(--rule);
    grid-template-columns: 27px 1fr;
    gap: 10px;
  }

  .unit_rail li > button {
    display: grid;
    width: 23px;
    height: 23px;
    place-items: center;
    border: 1px solid var(--rule-strong);
    border-radius: 50%;
    color: var(--muted);
    background: transparent;
    font-size: 0.52rem;
    cursor: pointer;
  }

  .unit_rail li.mastered > button {
    border-color: var(--green);
    color: var(--paper);
    background: var(--green);
  }

  .unit_rail small,
  .unit_rail strong {
    display: block;
  }

  .unit_rail small {
    color: var(--brass);
    font-size: 0.51rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .unit_rail strong {
    margin-top: 4px;
    font-family: var(--serif);
    font-size: 0.78rem;
    font-weight: 500;
    line-height: 1.25;
  }

  .unit_rail a:hover strong {
    color: var(--green);
  }

  .document {
    min-width: 0;
  }

  .loading {
    padding-top: 28px;
  }

  .loading > div {
    height: 14px;
    margin-top: 24px;
    background: var(--rule);
  }

  .loading > div:nth-child(2) {
    width: 82%;
  }

  .loading > div:nth-child(3) {
    width: 64%;
  }

  .document_meta {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--rule);
    color: var(--muted);
    font-size: 0.57rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .sequence {
    margin-bottom: 58px;
    padding-top: 36px;
  }

  .section_heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 22px;
  }

  .section_heading h2 {
    margin: 6px 0 0;
    font-size: 2.5rem;
  }

  .sequence ol {
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--rule-strong);
    list-style: none;
  }

  .sequence li {
    display: grid;
    min-height: 105px;
    align-items: center;
    border-bottom: 1px solid var(--rule);
    grid-template-columns: 38px 1fr auto 18px;
    gap: 18px;
  }

  .sequence_number {
    color: var(--muted);
    font-size: 0.6rem;
  }

  .sequence small,
  .sequence strong {
    display: block;
  }

  .sequence a {
    min-width: 0;
  }

  .sequence small {
    color: var(--brass);
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .sequence strong {
    margin-top: 4px;
    font-family: var(--serif);
    font-size: 1.1rem;
    font-weight: 550;
  }

  .sequence p {
    overflow: hidden;
    margin: 5px 0 0;
    color: var(--muted);
    font-size: 0.7rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hours {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--muted);
    font-size: 0.6rem;
  }

  .contents > p {
    padding-bottom: 14px;
    border-bottom: 1px solid var(--rule-strong);
  }

  .contents nav {
    display: grid;
  }

  .contents nav button {
    display: grid;
    width: 100%;
    padding: 9px 0;
    border: 0;
    border-bottom: 1px solid var(--rule);
    color: var(--muted);
    background: transparent;
    font-family: var(--serif);
    font-size: 0.72rem;
    line-height: 1.3;
    text-align: left;
    grid-template-columns: 25px 1fr;
    cursor: pointer;
  }

  .contents nav button span {
    color: var(--brass);
    font-family: Inter, sans-serif;
    font-size: 0.5rem;
  }

  .contents nav button:hover {
    color: var(--green);
  }

  .contents > section {
    margin-top: 34px;
    padding: 18px;
    border: 1px solid var(--rule);
  }

  .contents > section strong {
    display: block;
    margin-top: 12px;
    font-family: var(--serif);
    font-size: 2rem;
    font-weight: 400;
  }

  .progress_track {
    height: 2px;
    margin: 10px 0;
    background: var(--rule);
  }

  .progress_track span {
    display: block;
    height: 100%;
    background: var(--brass);
  }

  .contents > section small {
    color: var(--muted);
    font-size: 0.57rem;
  }

  @media (max-width: 1150px) {
    .header_grid {
      grid-template-columns: 0.8fr 1.2fr;
    }

    dl {
      display: flex;
      grid-column: 1 / -1;
    }

    dl div {
      flex: 1;
    }

    .reader {
      grid-template-columns: 230px minmax(0, 1fr);
    }

    .contents {
      display: none;
    }
  }

  @media (max-width: 760px) {
    .discipline_header {
      padding-block: 28px 26px;
    }

    .header_grid {
      display: block;
      margin-top: 28px;
    }

    h1 {
      margin-bottom: 20px;
      font-size: clamp(3rem, 14vw, 4.2rem);
    }

    dl {
      margin-top: 24px;
    }

    dl div {
      padding-inline: 10px;
    }

    .document_tabs {
      top: 64px;
    }

    .document_tabs a {
      min-height: 48px;
      padding-inline: 14px;
    }

    .reader {
      display: block;
      padding-top: 26px;
      padding-bottom: 100px;
    }

    .unit_rail {
      display: none;
    }

    .document_meta span:last-child {
      display: none;
    }

    .section_heading h2 {
      font-size: 2.1rem;
    }

    .sequence li {
      min-height: 92px;
      grid-template-columns: 28px 1fr 14px;
      gap: 10px;
    }

    .hours {
      display: none;
    }

    .sequence strong {
      font-size: 0.98rem;
    }
  }
</style>
