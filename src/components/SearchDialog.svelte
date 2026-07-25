<script lang="ts">
  import { ArrowRight, Search, X } from "@lucide/svelte"
  import { disciplines, units } from "../lib/curriculum_index"

  let {
    open,
    on_close
  }: {
    open: boolean
    on_close: () => void
  } = $props()

  let query = $state("")
  const normalized_query = $derived(query.trim().toLowerCase())
  const search_words = $derived(normalized_query.split(/\s+/).filter((word) => word.length > 2))
  const search_score = (value: string) => {
    const normalized_value = value.toLowerCase()
    return normalized_value.includes(normalized_query)
      ? search_words.length + 2
      : search_words.filter((word) => normalized_value.includes(word)).length
  }
  const matching_disciplines = $derived(
    normalized_query
      ? disciplines
          .filter((discipline) => search_score(
            `${discipline.title} ${discipline.description} ${discipline.group}`
          ) > 0)
          .sort((first, second) =>
            search_score(`${second.title} ${second.description}`) -
            search_score(`${first.title} ${first.description}`)
          )
          .slice(0, 6)
      : disciplines.slice(0, 5)
  )
  const matching_units = $derived(
    normalized_query
      ? units
          .filter((unit) => search_score(
            `${unit.id} ${unit.title} ${unit.summary} ${unit.discipline_title}`
          ) > 0)
          .sort((first, second) =>
            search_score(`${second.id} ${second.title} ${second.summary}`) -
            search_score(`${first.id} ${first.title} ${first.summary}`)
          )
          .slice(0, 9)
      : units.filter((unit) => unit.difficulty === "Beginner").slice(0, 6)
  )

  const close_and_reset = () => {
    query = ""
    on_close()
  }

  const focus_input = (node: HTMLInputElement) => {
    node.focus()
  }
</script>

{#if open}
  <div class="backdrop" role="presentation" onclick={close_and_reset}>
    <dialog
      open
      class="search_dialog"
      aria-labelledby="search_title"
      onclick={(event) => event.stopPropagation()}
    >
      <header>
        <p class="eyebrow">Curriculum index</p>
        <h2 id="search_title">Search all knowledge</h2>
        <button type="button" aria-label="Close search" onclick={close_and_reset}>
          <X size={20} />
        </button>
      </header>

      <label class="search_field">
        <Search size={20} strokeWidth={1.7} />
        <span class="sr_only">Search disciplines and units</span>
        <input {@attach focus_input} bind:value={query} placeholder="Try ‘Bayesian inference’ or ‘AST-B01’" />
        <kbd>esc</kbd>
      </label>

      <div class="results">
        <div>
          <h3>Disciplines</h3>
          {#each matching_disciplines as discipline (discipline.slug)}
            <a href="#/discipline/{discipline.slug}/overview" onclick={close_and_reset}>
              <span class="result_code">{discipline.prefix}</span>
              <span>
                <strong>{discipline.title}</strong>
                <small>{discipline.unit_count} units · {discipline.group}</small>
              </span>
              <ArrowRight size={15} />
            </a>
          {:else}
            <p class="empty">No matching disciplines.</p>
          {/each}
        </div>

        <div>
          <h3>Knowledge units</h3>
          {#each matching_units as unit (unit.id)}
            <a href="#/unit/{unit.id}" onclick={close_and_reset}>
              <span class="result_code">{unit.id}</span>
              <span>
                <strong>{unit.title}</strong>
                <small>{unit.discipline_title} · {unit.difficulty}</small>
              </span>
              <ArrowRight size={15} />
            </a>
          {:else}
            <p class="empty">No matching units. Try a broader phrase.</p>
          {/each}
        </div>
      </div>
    </dialog>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    z-index: 80;
    inset: 0;
    display: grid;
    align-items: start;
    justify-items: center;
    padding: min(11vh, 100px) 20px 30px;
    background: rgba(13, 20, 17, 0.62);
  }

  .search_dialog {
    width: min(780px, 100%);
    max-height: min(760px, 82vh);
    overflow: auto;
    border: 1px solid var(--ink);
    background: var(--paper);
    box-shadow: 12px 16px 0 rgba(10, 24, 18, 0.18);
  }

  header {
    position: relative;
    padding: 28px 30px 22px;
    border-bottom: 1px solid var(--rule);
  }

  h2 {
    margin: 6px 0 0;
    font-family: var(--serif);
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 400;
    letter-spacing: -0.035em;
  }

  header button {
    position: absolute;
    top: 24px;
    right: 24px;
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border: 1px solid var(--rule);
    background: transparent;
    cursor: pointer;
  }

  .search_field {
    display: grid;
    min-height: 64px;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid var(--rule-strong);
    grid-template-columns: auto 1fr auto;
    gap: 14px;
  }

  input {
    width: 100%;
    border: 0;
    outline: 0;
    color: var(--ink);
    background: transparent;
    font-family: var(--serif);
    font-size: 1.05rem;
  }

  input::placeholder {
    color: #899089;
  }

  kbd {
    padding: 3px 6px;
    border: 1px solid var(--rule);
    color: var(--muted);
    font-size: 0.62rem;
  }

  .results {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
  }

  .results > div {
    min-width: 0;
    padding: 24px 20px 30px;
  }

  .results > div + div {
    border-left: 1px solid var(--rule);
  }

  h3 {
    margin: 0 10px 12px;
    color: var(--muted);
    font-size: 0.64rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .results a {
    display: grid;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid var(--rule);
    grid-template-columns: 53px 1fr auto;
    gap: 10px;
  }

  .results a:hover {
    background: var(--paper-deep);
  }

  .result_code {
    color: var(--brass);
    font-size: 0.63rem;
    font-weight: 750;
    letter-spacing: 0.08em;
  }

  strong,
  small {
    display: block;
  }

  strong {
    overflow: hidden;
    font-family: var(--serif);
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.25;
    text-overflow: ellipsis;
  }

  small {
    margin-top: 3px;
    color: var(--muted);
    font-size: 0.62rem;
    line-height: 1.3;
  }

  .empty {
    margin: 20px 10px;
    color: var(--muted);
    font-family: var(--serif);
    font-style: italic;
  }

  @media (max-width: 650px) {
    .backdrop {
      align-items: stretch;
      padding: 0;
    }

    .search_dialog {
      width: 100%;
      max-height: 100vh;
      border: 0;
      box-shadow: none;
    }

    header,
    .search_field {
      padding-inline: 20px;
    }

    .results {
      display: block;
    }

    .results > div {
      padding-inline: 10px;
    }

    .results > div + div {
      border-top: 1px solid var(--rule-strong);
      border-left: 0;
    }
  }
</style>
