import { defineConfig } from "zfb/config";
import { zudoDoc } from "@takazudo/zudo-doc/config";

// zudo-doc 4.x single-entry config API (epic zudolab/zudo-doc#2651): the whole
// site configuration is one `zudoDoc({...})` call. It shallow-merges these
// fields over the package defaults and returns a complete ZfbConfig — the host
// spreads nothing. Only non-default fields are set below; everything omitted
// keeps its documented @default (see @takazudo/zudo-doc/config). The canonical
// seven directives (note/tip/info/warning/danger/caution/details) are the
// package default, so `directives` is omitted.
export default defineConfig(
  zudoDoc({
    // ── Deploy shell ──────────────────────────────────────────────────────
    // Cloudflare adapter — required for the Workers deploy. Bindings via wrangler.toml.
    adapter: "@takazudo/zfb-adapter-cloudflare",
    // Pin the dev/preview port — the generated CLAUDE.md and the Tauri dev
    // wrappers assume 4321 (also the package default).
    port: 4321,

    // ── Site identity ─────────────────────────────────────────────────────
    siteName: "zudo-tauri-wisdom",
    siteDescription: "Takazudo's Tauri dev notes for me and AI agents",
    githubUrl: "https://github.com/Takazudo/zudo-tauri-wisdom",
    siteUrl: "https://zudo-tauri-wisdom.takazudomodular.com",
    metaTags: {
      description: true,
      keywords: "",
      ogImage: "/img/ogp.png",
      ogSiteName: true,
      twitterCard: "summary_large_image",
      twitterCreator: "@Takazudo",
    },
    // Site webfont — Noto Sans JP for JA + Latin body text. Emitted as real
    // <head> links (preconnect + async-loaded stylesheet). Never load the font
    // via global.css @import: Tailwind v4 bundling can push it past the first
    // style rule, making the browser silently drop it.
    head: {
      preconnect: [
        { href: "https://fonts.googleapis.com" },
        { href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
      ],
      stylesheets: [
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap",
          async: true,
        },
      ],
    },

    // ── Locales (bilingual EN default + JA) ───────────────────────────────
    locales: {
      ja: { label: "JA", dir: "src/content/docs-ja" },
    },

    // ── Features ──────────────────────────────────────────────────────────
    docMetainfo: true,
    llmsTxt: true,
    cjkFriendly: true,
    docHistory: true,
    bodyFootUtilArea: {
      docHistory: true,
      viewSourceLink: false,
    },
    sidebarResizer: true,
    sidebarToggle: true,
    imageEnlarge: true,
    claudeResources: {
      claudeDir: ".claude",
    },
    // Claude-resources pages are English-only (auto-generated, no JA mirror),
    // so their route prefixes are served unprefixed only.
    defaultLocaleOnlyPrefixes: [
      "/docs/claude/",
      "/docs/claude-md/",
      "/docs/claude-skills/",
      "/docs/claude-agents/",
      "/docs/claude-commands/",
    ],

    // ── Chrome: footer + header nav ───────────────────────────────────────
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://x.com/Takazudo" rel="nofollow noreferrer noopener" target="_blank">Takazudo</a>. Built with <a href="https://zudo-doc.takazudomodular.com/" rel="nofollow noreferrer noopener" target="_blank">zudo-doc</a>. Enjoy synth on <a href="https://takazudomodular.com/" rel="nofollow noreferrer noopener" target="_blank">Takazudo Modular</a>.`,
    },
    headerNav: [
      { label: "Overview", path: "/docs/getting-started", categoryMatch: "getting-started" },
      { label: "Architecture", path: "/docs/architecture", categoryMatch: "architecture" },
      { label: "Rust Backend", path: "/docs/rust-backend", categoryMatch: "rust-backend" },
      { label: "Frontend", path: "/docs/frontend", categoryMatch: "frontend" },
      { label: "Dev Server", path: "/docs/dev-server", categoryMatch: "dev-server" },
      { label: "Deployment", path: "/docs/deployment", categoryMatch: "deployment" },
      { label: "Mobile", path: "/docs/mobile", categoryMatch: "mobile" },
      { label: "Recipes", path: "/docs/recipes", categoryMatch: "recipes" },
      { label: "Claude", path: "/docs/claude", categoryMatch: "claude" },
    ],
    headerRightItems: [
      { type: "component", component: "github-link" },
      { type: "component", component: "theme-toggle" },
      { type: "component", component: "search" },
      { type: "component", component: "language-switcher" },
    ],
  }),
);
