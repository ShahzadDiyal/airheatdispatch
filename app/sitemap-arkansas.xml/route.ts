import { getStateSitemapUrls, buildUrlSetXml } from "@/lib/sitemap";

export async function GET() {
  const urls = getStateSitemapUrls("arkansas");
  const xml = buildUrlSetXml(urls);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
