<script lang="ts">
  import { ArrowRight, Search } from "@lucide/svelte"
  import { discipline_groups, disciplines, units } from "../lib/curriculum_index"

  let query = $state("")
  let group = $state("All")
  const groups = ["All", ...Object.keys(discipline_groups)]
  const filtered = $derived(
    disciplines.filter((discipline) => {
      const matches_group = group === "All" || discipline.group === group
      const value = query.trim().toLowerCase()
      return matches_group && (
        !value ||
        `${discipline.title} ${discipline.description} ${discipline.prefix}`
          .toLowerCase()
          .includes(value)
      )
    })
  )
</script>

<main id="main" class="page_shell explore">
  <header class="page_header">
    <div>
      <p class="eyebrow">Discipline atlas · 01—39</p>
      <h1 class="display">Explore the curriculum.</h1>
    </div>
    <p>
      Begin with a field, trace its prerequisites, and follow each knowledge unit from first contact to independent work.
    </p>
  </header>

  <div class="filters">
    <label>
      <Search size={18} />
      <span class="sr_only">Filter disciplines</span>
      <input bind:value={query} placeholder="Filter disciplines" />
    </label>
    <div class="group_filters" aria-label="Filter by territory">
      {#each groups as option (option)}
        <button class:active={group === option} type="button" onclick={() => group = option}>{option}</button>
      {/each}
    </div>
  </div>

  <p class="result_count">{filtered.length} disciplines shown</p>
  <div class="discipline_list">
    {#each filtered as discipline, index (discipline.slug)}
      {@const discipline_units = units.filter((unit) => unit.discipline === discipline.slug)}
      <article>
        <span class="index">{String(index + 1).padStart(2, "0")}</span>
        <div class="discipline_identity">
          <span class="prefix">{discipline.prefix}</span>
          <h2><a href="#/discipline/{discipline.slug}/overview">{discipline.title}</a></h2>
          <span class="group">{discipline.group}</span>
        </div>
        <p>{discipline.description}</p>
        <dl>
          <div><dt>{discipline.unit_count}</dt><dd>units</dd></div>
          <div><dt>{discipline.core_hours + discipline.extension_hours}</dt><dd>hours</dd></div>
          <div><dt>{discipline_units.filter((unit) => unit.difficulty === "Expert").length}</dt><dd>expert</dd></div>
        </dl>
        <a class="open" href="#/discipline/{discipline.slug}/overview" aria-label="Open {discipline.title}">
          <ArrowRight size={19} />
        </a>
      </article>
    {:else}
      <div class="empty">
        <p class="eyebrow">No result</p>
        <h2 class="display">No discipline matches that filter.</h2>
        <button class="button_outline" type="button" onclick={() => { query = ""; group = "All" }}>Clear filters</button>
      </div>
    {/each}
  </div>
</main>

<style>
  .explore {
    padding-block: 72px 110px;
  }

  .page_header {
    display: grid;
    align-items: end;
    grid-template-columns: 1fr minmax(320px, 500px);
    gap: 60px;
  }

  h1 {
    margin-top: 12px;
    font-size: clamp(3rem, 6vw, 6rem);
  }

  .page_header > p {
    margin: 0 0 10px;
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.08rem;
    line-height: 1.65;
  }

  .filters {
    display: grid;
    align-items: end;
    margin-top: 54px;
    border-block: 1px solid var(--rule-strong);
    padding-block: 16px;
    grid-template-columns: minmax(230px, 0.5fr) 1fr;
    gap: 32px;
  }

  label {
    display: flex;
    min-height: 42px;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--rule-strong);
  }

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    font-family: var(--serif);
    font-size: 1rem;
  }

  .group_filters {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
  }

  .group_filters button {
    padding: 7px 0;
    border: 0;
    border-bottom: 1px solid transparent;
    color: var(--muted);
    background: transparent;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
  }

  .group_filters button.active {
    border-color: var(--brass);
    color: var(--green);
  }

  .result_count {
    margin: 24px 0 8px;
    color: var(--muted);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .discipline_list {
    border-top: 1px solid var(--rule-strong);
  }

  article {
    display: grid;
    min-height: 160px;
    align-items: center;
    border-bottom: 1px solid var(--rule);
    grid-template-columns: 44px minmax(190px, 0.8fr) minmax(280px, 1.35fr) 210px 32px;
    gap: clamp(18px, 3vw, 45px);
  }

  article:hover {
    background: rgba(255, 255, 255, 0.16);
  }

  .index,
  .prefix,
  .group {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .index,
  .group {
    color: var(--muted);
  }

  .prefix {
    color: var(--brass);
  }

  h2 {
    margin: 6px 0;
    font-family: var(--serif);
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 500;
    line-height: 1.1;
  }

  h2 a:hover {
    color: var(--green);
  }

  article > p {
    margin: 0;
    color: var(--muted);
    font-family: var(--serif);
    font-size: 0.9rem;
    line-height: 1.55;
  }

  dl {
    display: grid;
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
  }

  dl div {
    padding-inline: 12px;
    border-left: 1px solid var(--rule);
  }

  dt {
    font-family: var(--serif);
    font-size: 1.1rem;
  }

  dd {
    margin: 2px 0 0;
    color: var(--muted);
    font-size: 0.54rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .open {
    color: var(--green);
  }

  .empty {
    padding: 80px 0;
    text-align: center;
  }

  .empty h2 {
    margin: 12px 0 24px;
    font-size: 2.4rem;
  }

  @media (max-width: 1000px) {
    article {
      grid-template-columns: 35px minmax(180px, 0.8fr) 1.2fr 30px;
    }

    dl {
      display: none;
    }
  }

  @media (max-width: 720px) {
    .explore {
      padding-block: 48px 90px;
    }

    .page_header {
      display: block;
    }

    .page_header > p {
      margin-top: 20px;
    }

    .filters {
      display: block;
      margin-top: 38px;
    }

    .group_filters {
      overflow-x: auto;
      margin-top: 12px;
      flex-wrap: nowrap;
    }

    .group_filters button {
      flex: none;
    }

    article {
      min-height: 136px;
      padding-block: 18px;
      grid-template-columns: 28px 1fr 24px;
      gap: 12px;
    }

    article > p {
      display: none;
    }

    h2 {
      font-size: 1.35rem;
    }
  }
</style>
