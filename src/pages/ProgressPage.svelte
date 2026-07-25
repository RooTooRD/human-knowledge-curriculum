<script lang="ts">
  import { Download, RotateCcw } from "@lucide/svelte"
  import { disciplines, units } from "../lib/curriculum_index"
  import { export_progress } from "../lib/progress"

  let {
    mastered_units,
    on_clear
  }: {
    mastered_units: string[]
    on_clear: () => void
  } = $props()

  const mastered_hours = $derived(
    units
      .filter((unit) => mastered_units.includes(unit.id))
      .reduce((total, unit) => total + unit.hours, 0)
  )
  const discipline_progress = $derived(
    disciplines
      .map((discipline) => {
        const all_units = units.filter((unit) => unit.discipline === discipline.slug)
        const complete = all_units.filter((unit) => mastered_units.includes(unit.id)).length
        return { ...discipline, complete, percentage: complete / all_units.length * 100 }
      })
      .filter((discipline) => discipline.complete > 0)
      .sort((first, second) => second.percentage - first.percentage)
  )
  const recent_units = $derived(
    mastered_units
      .slice(-8)
      .reverse()
      .map((id) => units.find((unit) => unit.id === id))
      .filter((unit) => unit !== undefined)
  )
</script>

<main id="main" class="page_shell progress_page">
  <header>
    <div>
      <p class="eyebrow">Private learning record</p>
      <h1 class="display">Your progress.</h1>
    </div>
    <div class="actions">
      <button class="button_outline" type="button" onclick={() => export_progress(mastered_units)}>
        <Download size={15} />Export record
      </button>
      {#if mastered_units.length}
        <button class="clear_button" type="button" onclick={on_clear}>
          <RotateCcw size={14} />Clear progress
        </button>
      {/if}
    </div>
  </header>

  <dl class="metrics">
    <div><dt>{mastered_units.length}</dt><dd>Units mastered</dd></div>
    <div><dt>{mastered_hours.toLocaleString()}</dt><dd>Hours represented</dd></div>
    <div><dt>{discipline_progress.length}</dt><dd>Disciplines underway</dd></div>
    <div><dt>{Math.round(mastered_units.length / units.length * 100)}%</dt><dd>Curriculum complete</dd></div>
  </dl>

  {#if mastered_units.length}
    <div class="progress_grid">
      <section>
        <p class="eyebrow">Discipline progress</p>
        <div class="discipline_progress">
          {#each discipline_progress as discipline (discipline.slug)}
            <a href="#/discipline/{discipline.slug}/overview">
              <div>
                <span>{discipline.prefix}</span>
                <strong>{discipline.title}</strong>
              </div>
              <div class="bar"><span style:width="{discipline.percentage}%"></span></div>
              <small>{discipline.complete}/{discipline.unit_count}</small>
            </a>
          {/each}
        </div>
      </section>

      <aside>
        <p class="eyebrow">Recently mastered</p>
        <ol>
          {#each recent_units as unit (unit.id)}
            <li>
              <a href="#/unit/{unit.id}">
                <span>{unit.id}</span>
                <strong>{unit.title}</strong>
                <small>{unit.discipline_title}</small>
              </a>
            </li>
          {/each}
        </ol>
      </aside>
    </div>
  {:else}
    <section class="empty">
      <span class="zero">000</span>
      <p class="eyebrow">A clean beginning</p>
      <h2 class="display">Your record starts with one mastered unit.</h2>
      <p>
        Explore a discipline, open a knowledge unit, and mark it mastered only when you can demonstrate its outcomes without support.
      </p>
      <div>
        <a class="button" href="#/discipline/Foundations/overview">Begin with Foundations</a>
        <a class="button_outline" href="#/explore">Browse all disciplines</a>
      </div>
    </section>
  {/if}
</main>

<style>
  .progress_page {
    padding-block: 76px 110px;
  }

  header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 30px;
  }

  h1 {
    margin-top: 10px;
    font-size: clamp(3.5rem, 7vw, 7rem);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .clear_button {
    display: inline-flex;
    align-items: center;
    border: 0;
    color: var(--muted);
    background: transparent;
    gap: 7px;
    font-size: 0.64rem;
    cursor: pointer;
  }

  .metrics {
    display: grid;
    margin: 54px 0 0;
    border-block: 1px solid var(--rule-strong);
    grid-template-columns: repeat(4, 1fr);
  }

  .metrics div {
    padding: 24px;
  }

  .metrics div + div {
    border-left: 1px solid var(--rule);
  }

  dt {
    font-family: var(--serif);
    font-size: 2.2rem;
  }

  dd {
    margin: 5px 0 0;
    color: var(--muted);
    font-size: 0.57rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .progress_grid {
    display: grid;
    margin-top: 52px;
    grid-template-columns: minmax(0, 1fr) 330px;
    gap: 70px;
  }

  .discipline_progress,
  aside ol {
    margin-top: 18px;
    border-top: 1px solid var(--rule-strong);
  }

  .discipline_progress a {
    display: grid;
    min-height: 66px;
    align-items: center;
    border-bottom: 1px solid var(--rule);
    grid-template-columns: minmax(180px, 0.7fr) 1fr 45px;
    gap: 24px;
  }

  .discipline_progress div:first-child {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  .discipline_progress div:first-child span {
    color: var(--brass);
    font-size: 0.57rem;
    font-weight: 700;
  }

  .discipline_progress strong {
    font-family: var(--serif);
    font-size: 0.95rem;
    font-weight: 550;
  }

  .bar {
    height: 3px;
    background: var(--rule);
  }

  .bar span {
    display: block;
    height: 100%;
    background: var(--green);
  }

  .discipline_progress small {
    color: var(--muted);
    font-size: 0.58rem;
    text-align: right;
  }

  aside ol {
    padding: 0;
    list-style: none;
  }

  aside li {
    border-bottom: 1px solid var(--rule);
  }

  aside a {
    display: block;
    padding: 13px 0;
  }

  aside span,
  aside strong,
  aside small {
    display: block;
  }

  aside span {
    color: var(--brass);
    font-size: 0.55rem;
    font-weight: 700;
  }

  aside strong {
    margin-top: 4px;
    font-family: var(--serif);
    font-size: 0.9rem;
    font-weight: 550;
  }

  aside small {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.58rem;
  }

  .empty {
    max-width: 760px;
    margin: 90px auto 0;
    text-align: center;
  }

  .zero {
    display: block;
    margin-bottom: 30px;
    color: var(--rule);
    font-family: var(--serif);
    font-size: 7rem;
    letter-spacing: 0.08em;
    line-height: 1;
  }

  .empty h2 {
    margin: 14px 0 22px;
    font-size: clamp(2.3rem, 5vw, 4rem);
  }

  .empty > p:not(.eyebrow) {
    max-width: 570px;
    margin-inline: auto;
    color: var(--muted);
    font-family: var(--serif);
    line-height: 1.65;
  }

  .empty > div {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 850px) {
    .progress_grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 650px) {
    .progress_page {
      padding-block: 50px 90px;
    }

    header {
      display: block;
    }

    .actions {
      margin-top: 24px;
    }

    .metrics {
      grid-template-columns: repeat(2, 1fr);
    }

    .metrics div:nth-child(3) {
      border-top: 1px solid var(--rule);
      border-left: 0;
    }

    .metrics div:nth-child(4) {
      border-top: 1px solid var(--rule);
    }

    .discipline_progress a {
      grid-template-columns: 1fr 42px;
    }

    .bar {
      display: none;
    }

    .zero {
      font-size: 5rem;
    }
  }
</style>
