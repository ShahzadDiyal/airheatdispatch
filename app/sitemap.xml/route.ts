import { getSitemapIndexEntries, buildSitemapIndexXml } from "@/lib/sitemap";

export async function GET() {
  const entries = getSitemapIndexEntries();
  const xml = buildSitemapIndexXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
