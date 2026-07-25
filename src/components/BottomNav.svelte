<script lang="ts">
  import { ChartNoAxesColumnIncreasing, Compass, Route, Search } from "@lucide/svelte"
  import type { AppRoute } from "../lib/navigation"

  let {
    route,
    on_search
  }: {
    route: AppRoute
    on_search: () => void
  } = $props()
</script>

<nav class="bottom_nav" aria-label="Mobile primary navigation">
  <a class:active={route.name === "explore" || route.name === "discipline"} href="#/explore">
    <Compass size={19} />
    <span>Explore</span>
  </a>
  <a class:active={route.name === "pathways"} href="#/pathways">
    <Route size={19} />
    <span>Pathways</span>
  </a>
  <a class:active={route.name === "progress"} href="#/progress">
    <ChartNoAxesColumnIncreasing size={19} />
    <span>Progress</span>
  </a>
  <button type="button" onclick={on_search}>
    <Search size={19} />
    <span>Search</span>
  </button>
</nav>

<style>
  .bottom_nav {
    position: fixed;
    z-index: 50;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    height: 64px;
    border-top: 1px solid var(--rule-strong);
    background: var(--paper);
  }

  a,
  button {
    position: relative;
    display: grid;
    flex: 1;
    place-content: center;
    justify-items: center;
    gap: 4px;
    border: 0;
    color: var(--muted);
    background: transparent;
    font-size: 0.57rem;
    font-weight: 680;
    letter-spacing: 0.04em;
    cursor: pointer;
  }

  a.active {
    color: var(--green);
  }

  a.active::before {
    position: absolute;
    top: 0;
    width: 24px;
    height: 2px;
    background: var(--brass);
    content: "";
  }

  @media (max-width: 720px) {
    .bottom_nav {
      display: flex;
    }
  }
</style>
