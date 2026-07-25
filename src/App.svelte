<script lang="ts">
  import { onMount } from "svelte"
  import BottomNav from "./components/BottomNav.svelte"
  import Header from "./components/Header.svelte"
  import MobileMenu from "./components/MobileMenu.svelte"
  import SearchDialog from "./components/SearchDialog.svelte"
  import { parse_hash, route_title, type AppRoute } from "./lib/navigation"
  import { load_progress, save_progress } from "./lib/progress"
  import DisciplinePage from "./pages/DisciplinePage.svelte"
  import DocumentPage from "./pages/DocumentPage.svelte"
  import ExplorePage from "./pages/ExplorePage.svelte"
  import LandingPage from "./pages/LandingPage.svelte"
  import PathwaysPage from "./pages/PathwaysPage.svelte"
  import ProgressPage from "./pages/ProgressPage.svelte"
  import UnitPage from "./pages/UnitPage.svelte"

  let route = $state<AppRoute>(parse_hash(location.hash))
  let search_open = $state(false)
  let menu_open = $state(false)
  let mastered_units = $state<string[]>([])
  const page_title = $derived(route_title(route))

  const update_route = () => {
    route = parse_hash(location.hash)
    window.scrollTo({ top: 0, left: 0 })
  }

  const handle_keydown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault()
      search_open = true
    }
    if (event.key === "Escape") {
      search_open = false
      menu_open = false
    }
  }

  const toggle_unit = (id: string) => {
    mastered_units = mastered_units.includes(id)
      ? mastered_units.filter((unit_id) => unit_id !== id)
      : [...mastered_units, id]
    save_progress(mastered_units)
  }

  const clear_progress = () => {
    if (!window.confirm("Clear every mastered unit from this browser?")) return
    mastered_units = []
    save_progress(mastered_units)
  }

  onMount(() => {
    mastered_units = load_progress()
    if (!location.hash) location.hash = "/"
  })
</script>

<svelte:head>
  <title>{page_title}</title>
  <meta
    name="description"
    content="A dependency-driven lifelong curriculum from first principles to polymath depth."
  />
</svelte:head>

<svelte:window onhashchange={update_route} onkeydown={handle_keydown} />

<a class="skip_link" href="#main">Skip to content</a>
<Header {route} on_search={() => search_open = true} on_menu={() => menu_open = true} />

{#if route.name === "home"}
  <LandingPage />
{:else if route.name === "explore"}
  <ExplorePage />
{:else if route.name === "pathways"}
  <PathwaysPage />
{:else if route.name === "progress"}
  <ProgressPage {mastered_units} on_clear={clear_progress} />
{:else if route.name === "discipline"}
  <DisciplinePage
    slug={route.slug}
    document={route.document}
    {mastered_units}
    on_toggle_unit={toggle_unit}
  />
{:else if route.name === "unit"}
  <UnitPage id={route.id} {mastered_units} on_toggle_unit={toggle_unit} />
{:else if route.name === "about"}
  <DocumentPage document_key="README" title="What should an educated person know?" />
{:else if route.name === "document"}
  <DocumentPage document_key={route.key} title={route_title(route) ?? "Curriculum document"} />
{/if}

<footer class="site_footer">
  <div class="page_shell">
    <div>
      <p class="eyebrow">Human Knowledge</p>
      <p>A public, dependency-driven curriculum for a lifetime of serious learning.</p>
    </div>
    <nav aria-label="Reference documents">
      <a href="#/document/global-graph">Global graph</a>
      <a href="#/document/global-index">Knowledge index</a>
      <a href="#/document/master-schedule">Master schedule</a>
      <a href="#/about">About</a>
    </nav>
    <small>39 disciplines · 634 units · 20,854 planned hours</small>
  </div>
</footer>

<SearchDialog open={search_open} on_close={() => search_open = false} />
<MobileMenu
  open={menu_open}
  on_close={() => menu_open = false}
  on_search={() => search_open = true}
/>
<BottomNav {route} on_search={() => search_open = true} />

<style>
  .site_footer {
    border-top: 1px solid var(--rule-strong);
    color: var(--paper);
    background: var(--green);
  }

  .site_footer > div {
    display: grid;
    min-height: 190px;
    align-items: center;
    grid-template-columns: 1fr auto;
    gap: 30px 80px;
  }

  .site_footer .eyebrow {
    color: #d0b575;
  }

  .site_footer p:last-child {
    max-width: 480px;
    margin: 10px 0 0;
    color: rgba(244, 240, 231, 0.72);
    font-family: var(--serif);
  }

  .site_footer nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .site_footer nav a {
    font-size: 0.63rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .site_footer nav a:hover {
    color: #d0b575;
  }

  .site_footer small {
    grid-column: 1 / -1;
    padding-top: 18px;
    border-top: 1px solid rgba(244, 240, 231, 0.2);
    color: rgba(244, 240, 231, 0.55);
    font-size: 0.57rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 720px) {
    .site_footer {
      margin-bottom: 64px;
    }

    .site_footer > div {
      display: block;
      padding-block: 38px;
    }

    .site_footer nav {
      margin: 28px 0;
    }

    .site_footer small {
      display: block;
    }
  }
</style>
