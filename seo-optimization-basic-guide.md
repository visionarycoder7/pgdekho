# SEO Optimization Guide — Always Do This for Every Website

A practical checklist to run on every site you ship, especially "vibe coded" ones that skip standard SEO hygiene.

## 1. Technical SEO (Foundation)

- [ ] **No `noindex` tags** left on live pages by mistake — check `<meta name="robots">` and HTTP headers
- [ ] **No broken links** — run a crawler (Screaming Frog, Ahrefs, or `sitemap-checker`) monthly
- [ ] **`robots.txt`** present and correctly configured (don't block CSS/JS by accident)
- [ ] **`sitemap.xml`** built, submitted to Search Console, and kept in sync with live pages
- [ ] **Canonical tags** on every page (`<link rel="canonical">`) to prevent duplicate-content issues
- [ ] **HTTPS enforced** site-wide, with HTTP → HTTPS redirects
- [ ] **Clean URL slugs** — lowercase, hyphen-separated, no query-string clutter, keyword-relevant
- [ ] **Fix redirect chains** — no more than one hop; audit 301s regularly
- [ ] **XML sitemap + HTML sitemap** for large sites (helps both crawlers and users)

## 2. On-Page SEO

- [ ] **Unique meta titles** per page (50–60 characters, primary keyword near the front)
- [ ] **Unique meta descriptions** per page (150–160 characters, includes a call to action)
- [ ] **Only one `<h1>` per page**, with a logical header hierarchy (`h1 → h2 → h3`, no skipping levels)
- [ ] **Alt text on all images** — descriptive, not keyword-stuffed
- [ ] **`og:image` and Open Graph tags** for social sharing previews
- [ ] **Schema markup / structured data** (Organization, Article, Product, FAQ, Breadcrumb — whichever fits)
- [ ] **Internal linking** — every important page reachable within 2–3 clicks, contextual anchor text
- [ ] **Keyword placement** — primary keyword in title, H1, first 100 words, and one subheading (naturally, not stuffed)

## 3. Performance & Core Web Vitals

- [ ] **Compress all images** (WebP/AVIF where possible, lazy-load below the fold)
- [ ] **Improve Core Web Vitals**:
  - LCP (Largest Contentful Paint) < 2.5s
  - INP (Interaction to Next Paint) < 200ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] **Minify CSS/JS**, defer non-critical scripts
- [ ] **Use a CDN** for static assets
- [ ] **Mobile responsiveness** — test on real devices, not just DevTools

## 4. Off-Page SEO

- [ ] **Backlink strategy** — guest posts, digital PR, resource-page outreach, HARO/journalist requests
- [ ] **Disavow toxic backlinks** periodically via Search Console
- [ ] **Local citations** (Google Business Profile, Bing Places) if the business is local
- [ ] **Social signals** — shareable content, consistent brand presence

## 5. Verification & Monitoring

- [ ] **Verify Google Search Console** and Bing Webmaster Tools
- [ ] **Set up Google Analytics 4** (or a privacy-friendly alternative)
- [ ] **Monitor crawl errors and index coverage** weekly after launch
- [ ] **Check `site:yourdomain.com`** in Google periodically to confirm indexing

---

## Extra Core Points (Often Missed)

- [ ] **Content quality over quantity** — E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) matters more than word count
- [ ] **Avoid duplicate/thin content** — merge or noindex low-value pages instead of leaving them live
- [ ] **404 page** that's helpful and on-brand, with links back to key pages
- [ ] **Favicon and `manifest.json`** for branding and PWA readiness
- [ ] **Hreflang tags** if targeting multiple languages/regions
- [ ] **Page load on 3G/slow connections** — test with throttling, not just fibre broadband
- [ ] **Structured URL taxonomy** — logical folder structure (`/blog/`, `/products/`, etc.) instead of flat, unrelated slugs
- [ ] **Regularly update old content** — refresh dates, stats, and links on evergreen pages
- [ ] **Avoid JS-only rendering for critical content** — ensure server-side rendering or pre-rendering so crawlers see the content without executing JS
- [ ] **Set up 301 redirects before removing/renaming any page** — never let old URLs 404 silently
- [ ] **Security headers** (CSP, X-Frame-Options, etc.) — trust signals also factor into rankings indirectly
- [ ] **Accessibility (a11y)** — semantic HTML, ARIA labels; improves both SEO and Core Web Vitals scoring indirectly

---

## 6. AI Search & GEO (Generative Engine Optimization)

In 2026, AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) answer a large share of searches without a click-through. Ranking on Google is no longer enough — your content also needs to be *citeable* by AI systems.

- [ ] **Allow AI crawlers in `robots.txt`** — don't accidentally block `GPTBot`, `PerplexityBot`, `Google-Extended`, `ClaudeBot`, `CCBot`
- [ ] **Lead with a direct answer** — first 1–2 sentences of a section should directly answer the implied question, so AI can lift and cite it cleanly
- [ ] **Use FAQ and HowTo schema** specifically — these get pulled into AI Overviews more often than generic schema
- [ ] **Write in natural, conversational language** — GEO favours semantic/contextual phrasing over exact-keyword stuffing
- [ ] **Back claims with original data or expert quotes** — AI systems weigh evidence and citations more than keyword density
- [ ] **Keep entity naming consistent** — same brand/product name and spelling everywhere so AI systems recognise you as one clear entity
- [ ] **Strengthen author/brand authority** — real author bylines, credentials, and a detailed "About" page (feeds E-E-A-T, which AI trust scoring also leans on)
- [ ] **Server-render or pre-render critical content** — JS-only rendering can leave AI crawlers (and some search bots) seeing a blank page
- [ ] **Add transcripts to video/audio content** — makes multimodal content readable and citeable by AI systems

## 7. Ongoing Maintenance (Don't Skip This)

- [ ] **Check log files** periodically to see which crawlers (Googlebot, Bingbot, AI bots) are actually visiting and how often
- [ ] **Track content decay** — pages losing rankings over time need refreshing, not just replacing with new posts
- [ ] **Map search intent to page type** — informational queries need articles/guides; transactional queries need product/landing pages, not blog posts

---

### Quick Pre-Launch Checklist (TL;DR)

1. `robots.txt` + `sitemap.xml` live and correct (including AI crawler access)
2. No stray `noindex` tags
3. Titles/descriptions unique on every page
4. One H1, clean header hierarchy
5. Images compressed + alt text
6. HTTPS + canonical tags
7. Search Console + Analytics verified
8. Mobile responsive, Core Web Vitals passing
9. Schema markup added (including FAQ/HowTo where relevant)
10. Internal links + backlink plan in place
11. Content leads with direct answers (GEO-ready)
12. Critical content server-rendered, not JS-only
