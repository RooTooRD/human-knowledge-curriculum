<script lang="ts">
  import { ArrowRight } from "@lucide/svelte"
  import KnowledgeMap from "../components/KnowledgeMap.svelte"
  import { discipline_groups, disciplines } from "../lib/curriculum_index"

  const routes = [
    {
      years: "10",
      title: "Intensive",
      description: "Core units, tightly sequenced for sustained full-time study.",
      hours: "12,475"
    },
    {
      years: "15",
      title: "Balanced",
      description: "The core curriculum with selected extensions and reflection.",
      hours: "16,200"
    },
    {
      years: "20",
      title: "Full polymath",
      description: "Every core and extension unit with long-form capstones.",
      hours: "20,854"
    }
  ]
</script>

<main id="main">
  <section class="hero page_shell">
    <div class="hero_copy">
      <p class="eyebrow">A curriculum for an educated life</p>
      <h1 class="display">The map of a life spent learning.</h1>
      <p class="lede">
        A dependency-driven curriculum from first principles to polymath depth.
      </p>
      <div class="hero_actions">
        <a class="button" href="#/explore">Explore 39 disciplines <ArrowRight size={16} /></a>
        <a class="button_outline" href="#/pathways">Choose a lifelong route</a>
      </div>
      <dl class="hero_metrics">
        <div>
          <dt>634</dt>
          <dd>Knowledge units</dd>
        </div>
        <div>
          <dt>39</dt>
          <dd>Disciplines</dd>
        </div>
        <div>
          <dt>20,854</dt>
          <dd>Planned hours</dd>
        </div>
      </dl>
    </div>
    <KnowledgeMap />
  </section>

  <section class="route_section section_rule">
    <div class="page_shell route_inner">
      <header>
        <div>
          <p class="eyebrow">Three routes through the atlas</p>
          <h2 class="display">Choose your horizon.</h2>
        </div>
        <p>All routes share a foundation. Their difference is breadth, pace, and the depth of extension work.</p>
      </header>
      <div class="route_grid">
        {#each routes as route, index (route.years)}
          <a href="#/pathways" class="route">
            <span class="folio">0{index + 1}</span>
            <div class="route_years"><strong>{route.years}</strong><span>years</span></div>
            <div>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
            </div>
            <span class="route_hours">{route.hours} h</span>
            <ArrowRight size={18} />
          </a>
        {/each}
      </div>
    </div>
  </section>

  <section class="index_section page_shell">
    <header>
      <p class="eyebrow">The complete index</p>
      <h2 class="display">One curriculum. Five territories.</h2>
    </header>
    <div class="discipline_columns">
      {#each Object.entries(discipline_groups) as [group, slugs], group_index (group)}
        <section>
          <div class="group_heading">
            <span>0{group_index + 1}</span>
            <h3>{group}</h3>
          </div>
          <ol>
            {#each slugs as slug (slug)}
              {@const discipline = disciplines.find((item) => item.slug === slug)}
              {#if discipline}
                <li>
                  <a href="#/discipline/{discipline.slug}/overview">
                    <span>{discipline.title}</span>
                    <small>{discipline.unit_count}</small>
                  </a>
                </li>
              {/if}
            {/each}
          </ol>
        </section>
      {/each}
    </div>
    <a class="text_link full_index" href="#/explore">Open the complete curriculum index <ArrowRight size={15} /></a>
  </section>
</main>

<style>
  .hero {
    display: grid;
    min-height: 610px;
    align-items: center;
    padding-block: clamp(54px, 8vw, 100px);
    grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
    gap: clamp(50px, 8vw, 120px);
  }

  .hero_copy {
    max-width: 690px;
  }

  h1 {
    max-width: 680px;
    margin-top: 18px;
    font-size: clamp(3.6rem, 6.4vw, 6.8rem);
    line-height: 0.94;
  }

  .lede {
    max-width: 560px;
    margin: 28px 0 0;
    color: #47534c;
    font-family: var(--serif);
    font-size: clamp(1.08rem, 1.5vw, 1.35rem);
    line-height: 1.55;
  }

  .hero_actions {
    display: flex;
    margin-top: 34px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .hero_metrics {
    display: flex;
    margin: 52px 0 0;
    border-top: 1px solid var(--rule-strong);
  }

  .hero_metrics div {
    min-width: 145px;
    padding: 18px 28px 0 0;
  }

  .hero_metrics div + div {
    padding-left: 28px;
    border-left: 1px solid var(--rule);
  }

  dt {
    font-family: var(--serif);
    font-size: 1.55rem;
  }

  dd {
    margin: 3px 0 0;
    color: var(--muted);
    font-size: 0.63rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .route_section {
    background: var(--paper-deep);
  }

  .route_inner {
    padding-block: 62px 72px;
  }

  .route_inner > header {
    display: grid;
    align-items: end;
    margin-bottom: 36px;
    grid-template-columns: 1fr minmax(280px, 430px);
    gap: 40px;
  }

  .route_inner h2,
  .index_section h2 {
    margin-top: 8px;
    font-size: clamp(2.4rem, 4vw, 4.2rem);
  }

  .route_inner > header > p {
    margin: 0;
    color: var(--muted);
    font-family: var(--serif);
    line-height: 1.6;
  }

  .route_grid {
    border-top: 1px solid var(--rule-strong);
  }

  .route {
    display: grid;
    min-height: 116px;
    align-items: center;
    border-bottom: 1px solid var(--rule);
    grid-template-columns: 50px 120px 1fr 100px 24px;
    gap: 24px;
  }

  .route:hover {
    color: var(--green);
  }

  .folio,
  .route_hours {
    color: var(--muted);
    font-size: 0.66rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .route_years {
    display: flex;
    align-items: baseline;
    gap: 7px;
  }

  .route_years strong {
    font-family: var(--serif);
    font-size: 2.5rem;
    font-weight: 400;
  }

  .route_years span {
    color: var(--muted);
    font-size: 0.66rem;
    text-transform: uppercase;
  }

  .route h3 {
    margin: 0;
    font-family: var(--serif);
    font-size: 1.3rem;
    font-weight: 500;
  }

  .route p {
    margin: 5px 0 0;
    color: var(--muted);
    font-size: 0.78rem;
  }

  .index_section {
    padding-block: 80px 100px;
  }

  .index_section > header {
    max-width: 800px;
    margin-bottom: 52px;
  }

  .discipline_columns {
    display: grid;
    border-top: 1px solid var(--rule-strong);
    grid-template-columns: repeat(5, 1fr);
  }

  .discipline_columns > section {
    min-width: 0;
    padding: 24px 22px 10px;
  }

  .discipline_columns > section + section {
    border-left: 1px solid var(--rule);
  }

  .group_heading {
    min-height: 58px;
  }

  .group_heading span {
    color: var(--brass);
    font-size: 0.62rem;
    font-weight: 700;
  }

  .group_heading h3 {
    margin: 7px 0 0;
    font-family: var(--serif);
    font-size: 1.08rem;
    font-weight: 600;
  }

  ol {
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
  }

  li a {
    display: flex;
    min-height: 38px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--rule);
    gap: 10px;
    font-family: var(--serif);
    font-size: 0.84rem;
  }

  li a:hover {
    color: var(--brass);
  }

  li small {
    color: var(--muted);
    font-family: Inter, sans-serif;
    font-size: 0.58rem;
  }

  .full_index {
    margin-top: 42px;
  }

  @media (max-width: 1050px) {
    .hero {
      grid-template-columns: 1fr 0.85fr;
      gap: 42px;
    }

    .discipline_columns {
      grid-template-columns: repeat(3, 1fr);
    }

    .discipline_columns > section:nth-child(4) {
      border-left: 0;
    }

    .discipline_columns > section:nth-child(n + 4) {
      border-top: 1px solid var(--rule);
    }
  }

  @media (max-width: 760px) {
    .hero {
      display: flex;
      min-height: 0;
      padding-block: 56px 52px;
      flex-direction: column;
      align-items: stretch;
    }

    h1 {
      font-size: clamp(3.2rem, 16vw, 4.5rem);
    }

    .hero_actions {
      display: grid;
    }

    .hero_metrics {
      margin-top: 38px;
    }

    .hero_metrics div {
      min-width: 0;
      padding-right: 10px;
      flex: 1;
    }

    .hero_metrics div + div {
      padding-left: 12px;
    }

    dt {
      font-size: 1.2rem;
    }

    dd {
      font-size: 0.5rem;
    }

    .route_inner > header {
      display: block;
    }

    .route_inner > header > p {
      margin-top: 18px;
    }

    .route {
      padding-block: 18px;
      grid-template-columns: 34px 78px 1fr 18px;
      gap: 12px;
    }

    .route_hours {
      display: none;
    }

    .route_years strong {
      font-size: 2rem;
    }

    .route p {
      display: none;
    }

    .discipline_columns {
      display: block;
    }

    .discipline_columns > section {
      padding-inline: 0;
      border-top: 1px solid var(--rule);
      border-left: 0 !important;
    }

    .group_heading {
      min-height: 48px;
    }
  }
</style>
