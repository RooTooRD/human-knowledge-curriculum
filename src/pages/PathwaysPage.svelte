<script lang="ts">
  import { ArrowRight, Check } from "@lucide/svelte"

  const pathways = [
    {
      years: "10",
      name: "Intensive core",
      hours: "12,475",
      weekly: "24",
      cadence: "48 study weeks each year",
      audience: "For a learner able to make the curriculum a central occupation.",
      includes: [
        "Every core knowledge unit",
        "Foundation projects and assessments",
        "One interdisciplinary capstone",
        "Quarterly synthesis and annual review"
      ]
    },
    {
      years: "15",
      name: "Balanced breadth",
      hours: "16,200",
      weekly: "21",
      cadence: "48 study weeks each year",
      audience: "For sustained study alongside professional and family commitments.",
      includes: [
        "Every core knowledge unit",
        "Half of all extension units",
        "Discipline and integration capstones",
        "Protected reading and review seasons"
      ]
    },
    {
      years: "20",
      name: "Full polymath",
      hours: "20,854",
      weekly: "20",
      cadence: "50 study weeks each year",
      audience: "For the complete curriculum, including expert extensions and original work.",
      includes: [
        "All 634 knowledge units",
        "Every project and assessment tier",
        "Expert studios and original research",
        "A public lifelong portfolio"
      ]
    }
  ]

  const seasons = [
    ["Orient", "Map prerequisites, establish study systems, and diagnose gaps."],
    ["Learn", "Study new material through retrieval, exercises, and deliberate practice."],
    ["Make", "Complete a project that forces knowledge into usable form."],
    ["Synthesize", "Connect fields, revisit weak knowledge, and present an integrated account."]
  ]
</script>

<main id="main">
  <header class="pathway_hero page_shell">
    <p class="eyebrow">Lifelong pathways</p>
    <h1 class="display">Depth needs a horizon.</h1>
    <p>
      These are not degrees or rigid calendars. They are three credible paces through the same dependency graph, designed to survive real life.
    </p>
  </header>

  <section class="pathways page_shell">
    {#each pathways as pathway, index (pathway.years)}
      <article>
        <div class="pathway_number">0{index + 1}</div>
        <header>
          <p class="eyebrow">{pathway.years}-year route</p>
          <h2 class="display">{pathway.name}</h2>
          <p>{pathway.audience}</p>
        </header>
        <dl>
          <div><dt>{pathway.hours}</dt><dd>Total hours</dd></div>
          <div><dt>{pathway.weekly}</dt><dd>Hours weekly</dd></div>
          <div><dt>{pathway.cadence}</dt><dd>Cadence</dd></div>
        </dl>
        <ul>
          {#each pathway.includes as item (item)}
            <li><Check size={14} />{item}</li>
          {/each}
        </ul>
        <a href="#/explore">Enter the curriculum <ArrowRight size={15} /></a>
      </article>
    {/each}
  </section>

  <section class="annual_cycle section_rule">
    <div class="page_shell">
      <header>
        <p class="eyebrow">A repeatable year</p>
        <h2 class="display">Four seasons of serious study.</h2>
      </header>
      <ol>
        {#each seasons as season, index (season[0])}
          <li>
            <span>0{index + 1}</span>
            <h3>{season[0]}</h3>
            <p>{season[1]}</p>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <section class="principle page_shell">
    <p class="eyebrow">The governing principle</p>
    <blockquote>
      Move forward only when prerequisites are usable, not merely familiar. Return often enough that knowledge becomes part of judgment.
    </blockquote>
    <div>
      <a class="button" href="#/discipline/Foundations/roadmap">Start with Foundations</a>
      <a class="button_outline" href="#/discipline/Learning/roadmap">Build a learning system</a>
    </div>
  </section>
</main>

<style>
  .pathway_hero {
    padding-block: 88px 70px;
  }

  h1 {
    max-width: 950px;
    margin-top: 14px;
    font-size: clamp(3.5rem, 8vw, 7.5rem);
    line-height: 0.93;
  }

  .pathway_hero > p:last-child {
    max-width: 650px;
    margin: 34px 0 0 auto;
    color: var(--muted);
    font-family: var(--serif);
    font-size: 1.12rem;
    line-height: 1.7;
  }

  .pathways {
    display: grid;
    padding-bottom: 100px;
    grid-template-columns: repeat(3, 1fr);
  }

  .pathways article {
    position: relative;
    padding: 36px;
    border-block: 1px solid var(--rule-strong);
  }

  .pathways article + article {
    border-left: 1px solid var(--rule-strong);
  }

  .pathway_number {
    position: absolute;
    top: 20px;
    right: 22px;
    color: var(--brass);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
  }

  article h2 {
    margin-top: 8px;
    font-size: clamp(2.2rem, 3.2vw, 3.5rem);
    line-height: 1;
  }

  article header > p:last-child {
    min-height: 76px;
    margin: 22px 0 0;
    color: var(--muted);
    font-family: var(--serif);
    line-height: 1.55;
  }

  dl {
    display: grid;
    margin: 30px 0 0;
    border-top: 1px solid var(--rule);
    grid-template-columns: 1fr 1fr;
  }

  dl div {
    padding: 16px 0;
    border-bottom: 1px solid var(--rule);
  }

  dl div:nth-child(even) {
    padding-left: 16px;
    border-left: 1px solid var(--rule);
  }

  dl div:last-child {
    grid-column: 1 / -1;
  }

  dt {
    font-family: var(--serif);
    font-size: 1.15rem;
  }

  dd {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 0.54rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  ul {
    display: grid;
    min-height: 150px;
    margin: 28px 0;
    padding: 0;
    list-style: none;
    gap: 10px;
  }

  li {
    display: flex;
    align-items: start;
    gap: 9px;
    color: #4a574f;
    font-family: var(--serif);
    font-size: 0.88rem;
  }

  li :global(svg) {
    flex: none;
    margin-top: 4px;
    color: var(--green);
  }

  article > a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--green);
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .annual_cycle {
    padding-block: 80px;
    background: var(--paper-deep);
  }

  .annual_cycle header {
    max-width: 800px;
  }

  .annual_cycle h2 {
    margin-top: 10px;
    font-size: clamp(2.6rem, 5vw, 5rem);
  }

  .annual_cycle ol {
    display: grid;
    margin: 50px 0 0;
    padding: 0;
    border-top: 1px solid var(--rule-strong);
    list-style: none;
    grid-template-columns: repeat(4, 1fr);
  }

  .annual_cycle li {
    display: block;
    padding: 25px;
  }

  .annual_cycle li + li {
    border-left: 1px solid var(--rule);
  }

  .annual_cycle li span {
    color: var(--brass);
    font-size: 0.6rem;
  }

  .annual_cycle h3 {
    margin: 18px 0 8px;
    font-family: var(--serif);
    font-size: 1.5rem;
    font-weight: 500;
  }

  .annual_cycle li p {
    margin: 0;
    color: var(--muted);
    font-size: 0.8rem;
    line-height: 1.55;
  }

  .principle {
    padding-block: 100px 120px;
    text-align: center;
  }

  blockquote {
    max-width: 980px;
    margin: 28px auto 36px;
    font-family: var(--serif);
    font-size: clamp(1.8rem, 4vw, 3.5rem);
    line-height: 1.25;
  }

  .principle > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 900px) {
    .pathways {
      display: block;
    }

    .pathways article + article {
      border-top: 0;
      border-left: 0;
    }
  }

  @media (max-width: 680px) {
    .pathway_hero {
      padding-block: 56px 46px;
    }

    h1 {
      font-size: 3.8rem;
    }

    .pathways article {
      padding-inline: 12px;
    }

    .annual_cycle ol {
      display: block;
    }

    .annual_cycle li {
      border-bottom: 1px solid var(--rule);
      border-left: 0 !important;
    }
  }
</style>
