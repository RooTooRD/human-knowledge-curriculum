<script lang="ts">
  import DOMPurify from "dompurify"
  import { marked, Renderer } from "marked"
  import { slugify, strip_first_heading } from "../lib/content"

  let {
    markdown,
    discipline_slug = ""
  }: {
    markdown: string
    discipline_slug?: string
  } = $props()

  const renderer = new Renderer()
  const escape_html = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")

  renderer.heading = function ({ tokens, depth }) {
    const content = this.parser.parseInline(tokens)
    return `<h${depth} id="${slugify(content)}">${content}</h${depth}>`
  }

  renderer.link = function ({ href, title, tokens }) {
    let route = href
    if (/^(https?:|mailto:|#)/.test(href)) {
      route = href
    } else if (href.startsWith("../") && /\.md(?:#.*)?$/.test(href)) {
      const path = href.replace(/^\.\.\//, "").replace(/\.md.*$/, "")
      const parts = path.split("/")
      if (parts.length === 1) {
        route = parts[0] === "README" ? "#/about" : `#/document/${parts[0]}`
      } else {
        const [target, file] = parts
        route = `#/discipline/${target}/${file === "README" ? "overview" : file}`
      }
    } else if (/\.md(?:#.*)?$/.test(href) && discipline_slug) {
      const file = href.replace(/\.md.*$/, "")
      route = `#/discipline/${discipline_slug}/${file === "README" ? "overview" : file}`
    }
    const label = this.parser.parseInline(tokens)
    const title_attribute = title ? ` title="${title}"` : ""
    const external = /^https?:/.test(route) ? ` target="_blank" rel="noreferrer"` : ""
    return `<a href="${route}"${title_attribute}${external}>${label}</a>`
  }

  renderer.code = ({ text, lang }) =>
    lang === "mermaid"
      ? `<div class="mermaid">${escape_html(text)}</div>`
      : `<pre><code class="language-${lang ?? ""}">${escape_html(text)}</code></pre>`

  const html = $derived(
    DOMPurify.sanitize(
      marked.parse(strip_first_heading(markdown), { renderer }) as string,
      { USE_PROFILES: { html: true } }
    )
  )

  const render_html = (content: string) => (node: HTMLElement) => {
    node.innerHTML = content
    const diagrams = [...node.querySelectorAll<HTMLElement>(".mermaid")]
    if (diagrams.length) {
      void import("mermaid").then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: {
            primaryColor: "#ebe5d8",
            primaryTextColor: "#17231e",
            primaryBorderColor: "#0c4b36",
            lineColor: "#657069",
            secondaryColor: "#f4f0e7",
            tertiaryColor: "#f4f0e7",
            fontFamily: "Inter, system-ui, sans-serif"
          }
        })
        void mermaid.run({ nodes: diagrams })
      })
    }
  }
</script>

<article class="markdown" {@attach render_html(html)}></article>

<style>
  .markdown {
    max-width: 780px;
    font-family: var(--serif);
    font-size: 1.03rem;
    line-height: 1.75;
  }

  .markdown :global(h1),
  .markdown :global(h2),
  .markdown :global(h3),
  .markdown :global(h4) {
    color: var(--ink);
    font-family: var(--serif);
    font-weight: 500;
    letter-spacing: -0.025em;
    scroll-margin-top: 126px;
  }

  .markdown :global(h1) {
    font-size: 2.8rem;
  }

  .markdown :global(h2) {
    margin: 3.5rem 0 1.1rem;
    padding-top: 1.4rem;
    border-top: 1px solid var(--rule-strong);
    font-size: clamp(1.65rem, 3vw, 2.15rem);
  }

  .markdown :global(h3) {
    margin: 2.2rem 0 0.8rem;
    color: var(--green);
    font-size: 1.35rem;
  }

  .markdown :global(h4) {
    margin: 1.8rem 0 0.6rem;
    font-size: 1.05rem;
  }

  .markdown :global(p) {
    margin: 0 0 1.2rem;
  }

  .markdown :global(a) {
    color: var(--green);
    text-decoration: underline;
    text-decoration-color: rgba(12, 75, 54, 0.35);
    text-underline-offset: 3px;
  }

  .markdown :global(a:hover) {
    color: var(--brass);
  }

  .markdown :global(ul),
  .markdown :global(ol) {
    padding-left: 1.35rem;
  }

  .markdown :global(li) {
    margin-block: 0.42rem;
  }

  .markdown :global(blockquote) {
    margin: 1.8rem 0;
    padding: 1.2rem 1.5rem;
    border-left: 3px solid var(--brass);
    color: #425048;
    background: var(--paper-deep);
  }

  .markdown :global(code) {
    padding: 0.12em 0.35em;
    background: var(--paper-deep);
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 0.82em;
  }

  .markdown :global(pre) {
    overflow-x: auto;
    padding: 1.25rem;
    color: #e8efe9;
    background: #16251f;
  }

  .markdown :global(pre code) {
    padding: 0;
    color: inherit;
    background: transparent;
  }

  .markdown :global(table) {
    display: block;
    width: 100%;
    overflow-x: auto;
    margin: 1.7rem 0;
    border-collapse: collapse;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: 0.78rem;
    line-height: 1.45;
  }

  .markdown :global(th),
  .markdown :global(td) {
    min-width: 120px;
    padding: 0.75rem;
    border: 1px solid var(--rule);
    text-align: left;
    vertical-align: top;
  }

  .markdown :global(th) {
    color: var(--paper);
    background: var(--green);
    font-weight: 700;
  }

  .markdown :global(details) {
    margin: 1.2rem 0;
    border-block: 1px solid var(--rule);
    padding-block: 0.9rem;
  }

  .markdown :global(summary) {
    color: var(--green);
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-weight: 700;
    cursor: pointer;
  }

  .markdown :global(.mermaid) {
    overflow-x: auto;
    margin: 1.8rem 0;
    padding: 1.2rem;
    border: 1px solid var(--rule);
    background: rgba(255, 255, 255, 0.14);
  }

  .markdown :global(.mermaid svg) {
    display: block;
    max-width: 100%;
    height: auto;
    margin-inline: auto;
  }

  @media (max-width: 720px) {
    .markdown {
      font-size: 0.98rem;
      line-height: 1.68;
    }

    .markdown :global(h2) {
      margin-top: 2.7rem;
    }
  }
</style>
