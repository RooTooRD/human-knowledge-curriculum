<script lang="ts">
  import { ArrowLeft, Check, Clock3 } from "@lucide/svelte"
  import { units } from "../lib/curriculum_index"

  let {
    id,
    mastered_units,
    on_toggle_unit
  }: {
    id: string
    mastered_units: string[]
    on_toggle_unit: (id: string) => void
  } = $props()

  const unit = $derived(units.find((item) => item.id === id)!)
  const prerequisites = $derived(
    unit.prerequisites.map((prerequisite) => units.find((item) => item.id === prerequisite))
  )
  const unlocks = $derived(
    units.filter((item) => item.prerequisites.includes(unit.id)).slice(0, 12)
  )
  const mastered = $derived(mastered_units.includes(unit.id))
</script>

<main id="main" class="page_shell unit_page">
  <a class="back_link" href="#/discipline/{unit.discipline}/overview">
    <ArrowLeft size={14} />{unit.discipline_title}
  </a>

  <header>
    <div>
      <p class="eyebrow">{unit.id} · {unit.status}</p>
      <h1 class="display">{unit.title}</h1>
    </div>
    <dl>
      <div><dt>{unit.difficulty}</dt><dd>Level</dd></div>
      <div><dt>{unit.hours}</dt><dd>Hours</dd></div>
      <div><dt>{unit.prerequisites.length}</dt><dd>Prerequisites</dd></div>
    </dl>
  </header>

  <div class="unit_grid">
    <article>
      <section>
        <p class="eyebrow">Purpose and scope</p>
        <h2 class="display">What this unit establishes</h2>
        <p class="summary">{unit.summary}</p>
      </section>

      <section>
        <p class="eyebrow">Dependency chain</p>
        <h2 class="display">Know before you begin</h2>
        {#if prerequisites.length}
          <ol class="linked_units">
            {#each prerequisites as prerequisite, index (unit.prerequisites[index])}
              <li>
                {#if prerequisite}
                  <a href="#/unit/{prerequisite.id}">
                    <span>{prerequisite.id}</span>
                    <strong>{prerequisite.title}</strong>
                    <small>{prerequisite.discipline_title} · {prerequisite.difficulty}</small>
                  </a>
                {:else}
                  <div>
                    <span>External foundation</span>
                    <strong>{unit.prerequisites[index]}</strong>
                  </div>
                {/if}
              </li>
            {/each}
          </ol>
        {:else}
          <div class="entry_note">This is an entry unit. It assumes no curriculum units.</div>
        {/if}
      </section>

      {#if unlocks.length}
        <section>
          <p class="eyebrow">Downstream knowledge</p>
          <h2 class="display">What this unit unlocks</h2>
          <ol class="linked_units">
            {#each unlocks as unlocked (unlocked.id)}
              <li>
                <a href="#/unit/{unlocked.id}">
                  <span>{unlocked.id}</span>
                  <strong>{unlocked.title}</strong>
                  <small>{unlocked.discipline_title} · {unlocked.difficulty}</small>
                </a>
              </li>
            {/each}
          </ol>
        </section>
      {/if}
    </article>

    <aside>
      <p class="eyebrow">Unit record</p>
      <div class="seal">{unit.id}</div>
      <h2>{mastered ? "Mastered" : "Ready to study"}</h2>
      <p>
        Progress is stored privately in this browser. Mark the unit when you can demonstrate its outcomes without support.
      </p>
      <button class:mastered type="button" onclick={() => on_toggle_unit(unit.id)}>
        {#if mastered}<Check size={17} />Mark incomplete{:else}<Clock3 size={17} />Mark as mastered{/if}
      </button>
      <a href="#/discipline/{unit.discipline}/assessment">Open assessment criteria</a>
      <a href="#/discipline/{unit.discipline}/resources">Open learning resources</a>
    </aside>
  </div>
</main>

<style>
  .unit_page {
    padding-block: 46px 110px;
  }

  .back_link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  header {
    display: grid;
    align-items: end;
    margin-top: 52px;
    padding-bottom: 46px;
    border-bottom: 1px solid var(--rule-strong);
    grid-template-columns: 1fr auto;
    gap: 60px;
  }

  h1 {
    max-width: 970px;
    margin-top: 12px;
    font-size: clamp(3rem, 6vw, 6rem);
    line-height: 0.98;
  }

  dl {
    display: flex;
    margin: 0;
  }

  dl div {
    min-width: 100px;
    padding-left: 18px;
    border-left: 1px solid var(--rule);
  }

  dt {
    font-family: var(--serif);
    font-size: 1.05rem;
  }

  dd {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 0.53rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .unit_grid {
    display: grid;
    align-items: start;
    margin-top: 50px;
    grid-template-columns: minmax(0, 820px) 300px;
    gap: clamp(50px, 8vw, 120px);
  }

  article > section + section {
    margin-top: 58px;
    padding-top: 40px;
    border-top: 1px solid var(--rule);
  }

  article h2 {
    margin-top: 8px;
    font-size: 2.3rem;
  }

  .summary {
    margin: 22px 0 0;
    color: #445149;
    font-family: var(--serif);
    font-size: 1.18rem;
    line-height: 1.75;
  }

  .linked_units {
    margin: 24px 0 0;
    padding: 0;
    border-top: 1px solid var(--rule-strong);
    list-style: none;
  }

  .linked_units li {
    border-bottom: 1px solid var(--rule);
  }

  .linked_units a,
  .linked_units li > div {
    display: grid;
    min-height: 76px;
    align-content: center;
    grid-template-columns: 110px 1fr auto;
    gap: 18px;
  }

  .linked_units span,
  .linked_units small {
    color: var(--muted);
    font-size: 0.58rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .linked_units span {
    color: var(--brass);
    font-weight: 700;
  }

  .linked_units strong {
    font-family: var(--serif);
    font-size: 0.95rem;
    font-weight: 550;
  }

  .linked_units a:hover strong {
    color: var(--green);
  }

  .entry_note {
    margin-top: 24px;
    padding: 20px;
    border-left: 3px solid var(--brass);
    background: var(--paper-deep);
    font-family: var(--serif);
  }

  aside {
    position: sticky;
    top: 110px;
    padding: 26px;
    border: 1px solid var(--rule-strong);
  }

  .seal {
    display: grid;
    width: 112px;
    height: 112px;
    margin: 28px auto;
    place-items: center;
    border: 1px solid var(--brass);
    border-radius: 50%;
    color: var(--green);
    font-family: var(--serif);
    font-size: 1.05rem;
    box-shadow: inset 0 0 0 6px var(--paper), inset 0 0 0 7px var(--rule);
  }

  aside h2 {
    margin: 0;
    font-family: var(--serif);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  aside p:not(.eyebrow) {
    color: var(--muted);
    font-family: var(--serif);
    font-size: 0.85rem;
    line-height: 1.55;
    text-align: center;
  }

  aside button,
  aside > a {
    display: flex;
    width: 100%;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--green);
    background: var(--green);
    color: var(--paper);
    gap: 8px;
    font-size: 0.64rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
  }

  aside button.mastered {
    background: transparent;
    color: var(--green);
  }

  aside > a {
    min-height: 38px;
    border: 0;
    border-bottom: 1px solid var(--rule);
    color: var(--green);
    background: transparent;
  }

  aside button + a {
    margin-top: 18px;
  }

  @media (max-width: 900px) {
    header {
      display: block;
    }

    dl {
      margin-top: 32px;
    }

    .unit_grid {
      grid-template-columns: 1fr;
    }

    aside {
      position: static;
      grid-row: 1;
    }
  }

  @media (max-width: 600px) {
    .unit_page {
      padding-block: 32px 90px;
    }

    header {
      margin-top: 36px;
      padding-bottom: 30px;
    }

    h1 {
      font-size: 3rem;
    }

    dl div {
      min-width: 0;
      padding: 0 12px;
      flex: 1;
    }

    .unit_grid {
      margin-top: 30px;
      gap: 40px;
    }

    article h2 {
      font-size: 1.9rem;
    }

    .linked_units a,
    .linked_units li > div {
      padding-block: 14px;
      grid-template-columns: 82px 1fr;
    }

    .linked_units small {
      display: none;
    }
  }
</style>
