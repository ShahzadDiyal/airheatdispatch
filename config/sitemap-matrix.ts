import { SITE_CONFIG } from "./seo";
import { CORE_SERVICES } from "./services";
import { ALL_STATES_DATA, getStateCities } from "./locations";
import { ALABAMA_ALL_CITIES } from "../content/alabama";
import { ARIZONA_ALL_CITIES } from "../content/arizona";

export const CHUNK_LIMIT = 45000;

export function getStateCitiesForSitemap(stateSlug: string): { name: string; slug: string }[] {
  const normState = stateSlug.toLowerCase();
  if (normState === "texas") {
    return getStateCities("texas").map((c) => ({ name: c.cityName, slug: c.citySlug }));
  }
  if (normState === "alabama") {
    return ALABAMA_ALL_CITIES.map((c) => ({ name: c.name, slug: c.slug }));
  }
  if (normState === "arizona") {
    return ARIZONA_ALL_CITIES.map((c) => ({ name: c.name, slug: c.slug }));
  }
  const fallback = getStateCities(normState);
  return fallback.map((c) => ({ name: c.cityName, slug: c.citySlug }));
}

export function getMainSitemapUrls(): string[] {
  const domain = SITE_CONFIG.domain;
  const staticPaths = [
    "",
    "/services",
    "/how-it-works",
    "/service-areas",
    "/faqs",
    "/why-us",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const urls: string[] = staticPaths.map((path) => `${domain}${path}`);

  for (const service of CORE_SERVICES) {
    urls.push(`${domain}/${service.slug}`);
  }

  return Array.from(new Set(urls));
}

export function getStateSitemapUrls(stateSlug: string): string[] {
  const normState = stateSlug.toLowerCase();
  const domain = SITE_CONFIG.domain;
  const urls: string[] = [];

  // State hub URLs for all core services
  for (const service of CORE_SERVICES) {
    urls.push(`${domain}/${service.slug}/${normState}`);
  }

  // City service URLs for all cities in this state across all core services
  const cities = getStateCitiesForSitemap(normState);
  for (const service of CORE_SERVICES) {
    for (const city of cities) {
      urls.push(`${domain}/${service.slug}/${normState}/${city.slug}`);
    }
  }

  return Array.from(new Set(urls));
}

export function getSitemapIndexEntries(): { url: string }[] {
  const domain = SITE_CONFIG.domain;
  const entries: { url: string }[] = [];

  // Main sitemap entry
  entries.push({ url: `${domain}/sitemap-main.xml` });

  // State sitemaps entries
  const activeStates = Object.keys(ALL_STATES_DATA);

  for (const stateSlug of activeStates) {
    const stateUrls = getStateSitemapUrls(stateSlug);
    if (stateUrls.length <= CHUNK_LIMIT) {
      entries.push({ url: `${domain}/sitemap-${stateSlug}.xml` });
    } else {
      const totalChunks = Math.ceil(stateUrls.length / CHUNK_LIMIT);
      for (let i = 1; i <= totalChunks; i++) {
        entries.push({ url: `${domain}/sitemap-${stateSlug}-${i}.xml` });
      }
    }
  }

  return entries;
}

export function buildUrlSetXml(urls: string[]): string {
  const xmlUrls = urls
    .map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}

export function buildSitemapIndexXml(entries: { url: string }[]): string {
  const xmlSitemaps = entries
    .map((e) => `  <sitemap>\n    <loc>${e.url}</loc>\n  </sitemap>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlSitemaps}
</sitemapindex>`;
}
