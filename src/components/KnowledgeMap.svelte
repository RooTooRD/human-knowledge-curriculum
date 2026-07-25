<script lang="ts">
  import { disciplines } from "../lib/curriculum_index"

  const featured = [
    ["Foundations", 50, 50],
    ["Mathematics", 22, 29],
    ["History", 76, 25],
    ["Physics", 18, 69],
    ["Biology", 48, 79],
    ["Philosophy", 79, 69],
    ["Computer-Science", 7, 48],
    ["Economics", 91, 46]
  ] as const

  const title_for = (slug: string) =>
    disciplines.find((discipline) => discipline.slug === slug)?.title ?? slug
</script>

<div class="map" aria-label="A map connecting major fields of knowledge">
  <div class="map_label">
    <span>Knowledge atlas</span>
    <span>39 fields · one system</span>
  </div>
  <svg viewBox="0 0 100 100" role="img" aria-label="Interconnected knowledge disciplines">
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="20" />
    <path d="M50 50 22 29M50 50 76 25M50 50 18 69M50 50 48 79M50 50 79 69M50 50 7 48M50 50 91 46" />
    <path d="M22 29Q49 5 76 25M7 48Q16 57 18 69M48 79Q67 91 79 69M76 25Q91 32 91 46" />
    <path class="accent" d="M11 75Q46 99 87 76" />
  </svg>
  {#each featured as node (node[0])}
    <a class:center={node[0] === "Foundations"} class="node" style:left="{node[1]}%" style:top="{node[2]}%" href="#/discipline/{node[0]}/overview">
      <span></span>
      {title_for(node[0])}
    </a>
  {/each}
  <span class="coordinate coordinate_top">40°N · 21°E</span>
  <span class="coordinate coordinate_bottom">FIRST PRINCIPLES → CIVILIZATION</span>
</div>

<style>
  .map {
    position: relative;
    aspect-ratio: 1.08;
    overflow: hidden;
    border: 1px solid var(--rule);
    background: rgba(255, 255, 255, 0.12);
  }

  .map::before,
  .map::after {
    position: absolute;
    z-index: 0;
    border: 1px solid var(--rule);
    border-radius: 50%;
    content: "";
  }

  .map::before {
    inset: 12%;
  }

  .map::after {
    inset: 31%;
  }

  .map_label {
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 20px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    color: var(--muted);
    font-size: 0.58rem;
    font-weight: 650;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  svg {
    position: absolute;
    z-index: 1;
    inset: 8%;
    width: 84%;
    height: 84%;
    fill: none;
    stroke: rgba(12, 75, 54, 0.35);
    stroke-width: 0.32;
  }

  svg circle:nth-child(2) {
    stroke-dasharray: 1.5 2;
  }

  svg .accent {
    stroke: var(--brass);
    stroke-width: 0.5;
  }

  .node {
    position: absolute;
    z-index: 3;
    display: grid;
    min-width: 74px;
    justify-items: center;
    gap: 6px;
    color: var(--green);
    font-family: var(--serif);
    font-size: clamp(0.6rem, 1vw, 0.78rem);
    line-height: 1;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .node span {
    width: 7px;
    height: 7px;
    border: 1px solid var(--green);
    border-radius: 50%;
    background: var(--paper);
  }

  .node.center {
    font-size: 0.85rem;
    font-weight: 700;
  }

  .node.center span {
    width: 13px;
    height: 13px;
    border: 3px double var(--brass);
  }

  .node:hover {
    color: var(--brass);
  }

  .coordinate {
    position: absolute;
    z-index: 2;
    bottom: 16px;
    color: var(--muted);
    font-size: 0.5rem;
    letter-spacing: 0.13em;
  }

  .coordinate_top {
    left: 18px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .coordinate_bottom {
    right: 18px;
  }
</style>
