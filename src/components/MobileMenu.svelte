<script lang="ts">
  import { BookOpen, Compass, Route, X } from "@lucide/svelte"

  let {
    open,
    on_close,
    on_search
  }: {
    open: boolean
    on_close: () => void
    on_search: () => void
  } = $props()

  const close_from_backdrop = (event: MouseEvent) => {
    if (event.target === event.currentTarget) on_close()
  }
</script>

{#if open}
  <div class="menu_backdrop" role="presentation" onclick={close_from_backdrop}>
    <aside aria-label="Mobile navigation">
      <header>
        <p class="eyebrow">Navigate</p>
        <button type="button" aria-label="Close navigation" onclick={on_close}>
          <X size={20} />
        </button>
      </header>
      <nav>
        <a href="#/explore" onclick={on_close}><Compass size={19} />Explore the curriculum</a>
        <a href="#/pathways" onclick={on_close}><Route size={19} />Choose a pathway</a>
        <a href="#/progress" onclick={on_close}><BookOpen size={19} />Review your progress</a>
        <a href="#/about" onclick={on_close}>About this project</a>
        <button type="button" onclick={() => { on_close(); on_search() }}>Search all knowledge</button>
      </nav>
      <footer>39 disciplines · 634 units · 20,854 hours</footer>
    </aside>
  </div>
{/if}

<style>
  .menu_backdrop {
    position: fixed;
    z-index: 70;
    inset: 0;
    background: rgba(13, 20, 17, 0.55);
  }

  aside {
    display: flex;
    width: min(88vw, 380px);
    height: 100%;
    margin-left: auto;
    flex-direction: column;
    border-left: 1px solid var(--ink);
    background: var(--paper);
  }

  header {
    display: flex;
    min-height: 68px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid var(--rule);
  }

  header button {
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 0;
    background: transparent;
  }

  nav {
    display: grid;
    padding: 24px 20px;
  }

  nav a,
  nav button {
    display: flex;
    min-height: 58px;
    align-items: center;
    gap: 13px;
    border: 0;
    border-bottom: 1px solid var(--rule);
    color: var(--ink);
    background: transparent;
    font-family: var(--serif);
    font-size: 1.08rem;
    text-align: left;
    cursor: pointer;
  }

  nav button {
    margin-top: 24px;
    justify-content: center;
    border: 1px solid var(--green);
    color: var(--paper);
    background: var(--green);
    font-family: inherit;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  footer {
    margin-top: auto;
    padding: 20px;
    border-top: 1px solid var(--rule);
    color: var(--muted);
    font-size: 0.64rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
</style>
