<script lang="ts">
  import { ArrowLeft } from "@lucide/svelte"
  import MarkdownDocument from "../components/MarkdownDocument.svelte"
  import { global_document } from "../lib/content"

  let {
    document_key,
    title
  }: {
    document_key: string
    title: string
  } = $props()

  const markdown_promise = $derived(global_document(document_key))
</script>

<main id="main" class="page_shell document_page">
  <a class="back_link" href="#/"><ArrowLeft size={14} />Curriculum home</a>
  <header>
    <p class="eyebrow">Human Knowledge · Reference document</p>
    <h1 class="display">{title}</h1>
  </header>
  {#await markdown_promise}
    <p class="loading">Opening reference document…</p>
  {:then markdown}
    <MarkdownDocument {markdown} />
  {/await}
</main>

<style>
  .document_page {
    padding-block: 42px 110px;
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
    max-width: 900px;
    margin: 54px 0 50px;
    padding-bottom: 42px;
    border-bottom: 1px solid var(--rule-strong);
  }

  h1 {
    margin-top: 12px;
    font-size: clamp(3.2rem, 7vw, 6.6rem);
    line-height: 0.95;
  }

  :global(.document_page > .markdown) {
    margin-inline: auto;
  }

  .loading {
    color: var(--muted);
    font-family: var(--serif);
    font-style: italic;
  }

  @media (max-width: 650px) {
    .document_page {
      padding-block: 32px 90px;
    }

    header {
      margin-block: 40px 30px;
    }
  }
</style>
