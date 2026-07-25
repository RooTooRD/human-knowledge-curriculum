<script lang="ts">
  import { Menu, Search } from "@lucide/svelte"
  import type { AppRoute } from "../lib/navigation"

  let {
    route,
    on_search,
    on_menu
  }: {
    route: AppRoute
    on_search: () => void
    on_menu: () => void
  } = $props()

  const active = (name: AppRoute["name"]) => route.name === name
</script>

<header class="site_header">
  <div class="header_inner">
    <a class="wordmark" href="#/" aria-label="Human Knowledge home">
      <span class="mark" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span>Human Knowledge</span>
    </a>

    <nav class="desktop_nav" aria-label="Primary navigation">
      <a class:active={active("explore") || route.name === "discipline"} href="#/explore">Explore</a>
      <a class:active={active("pathways")} href="#/pathways">Pathways</a>
      <a class:active={active("about")} href="#/about">About</a>
    </nav>

    <div class="header_actions">
      <button class="search_button" type="button" onclick={on_search}>
        <Search size={16} strokeWidth={1.8} />
        <span>Search the curriculum</span>
        <kbd>⌘ K</kbd>
      </button>
      <a class="route_button" href="#/pathways">Begin a route</a>
      <button class="menu_button" type="button" aria-label="Open navigation" onclick={on_menu}>
        <Menu size={21} strokeWidth={1.6} />
      </button>
    </div>
  </div>
</header>

<style>
  .site_header {
    position: sticky;
    z-index: 40;
    top: 0;
    border-top: 3px solid var(--green);
    border-bottom: 1px solid var(--rule);
    background: color-mix(in srgb, var(--paper) 94%, transparent);
    backdrop-filter: blur(12px);
  }

  .header_inner {
    display: grid;
    width: min(100%, var(--page));
    min-height: 70px;
    align-items: center;
    margin-inline: auto;
    padding-inline: clamp(20px, 4vw, 64px);
    grid-template-columns: 1fr auto 1fr;
  }

  .wordmark {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 12px;
    font-family: var(--serif);
    font-size: 1.08rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .mark {
    display: grid;
    width: 24px;
    height: 24px;
    align-content: center;
    border: 1px solid var(--green);
    padding: 4px;
    gap: 3px;
  }

  .mark span {
    display: block;
    height: 1px;
    background: var(--green);
  }

  .mark span:nth-child(2) {
    width: 70%;
  }

  .desktop_nav {
    display: flex;
    height: 100%;
    align-items: stretch;
    gap: 34px;
  }

  .desktop_nav a {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 680;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .desktop_nav a:hover,
  .desktop_nav a.active {
    color: var(--ink);
  }

  .desktop_nav a.active::after {
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 2px;
    background: var(--brass);
    content: "";
  }

  .header_actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
  }

  .search_button,
  .menu_button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .search_button {
    display: flex;
    min-width: 230px;
    min-height: 38px;
    align-items: center;
    gap: 9px;
    border-bottom: 1px solid var(--rule-strong);
    color: var(--muted);
    font-size: 0.75rem;
    text-align: left;
  }

  .search_button span {
    flex: 1;
  }

  kbd {
    padding: 2px 5px;
    border: 1px solid var(--rule);
    color: var(--muted);
    font-family: inherit;
    font-size: 0.62rem;
  }

  .menu_button {
    display: none;
  }

  .route_button {
    display: grid;
    min-height: 38px;
    place-items: center;
    padding-inline: 16px;
    color: var(--paper);
    background: var(--green);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  @media (max-width: 820px) {
    .header_inner {
      min-height: 62px;
      grid-template-columns: 1fr auto;
    }

    .desktop_nav,
    .route_button,
    .search_button span,
    kbd {
      display: none;
    }

    .search_button {
      min-width: auto;
      min-height: 42px;
      border: 0;
      padding: 10px;
    }

    .menu_button {
      display: grid;
      width: 42px;
      height: 42px;
      place-items: center;
    }
  }
</style>
