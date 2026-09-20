import { getMainSitemapUrls, buildUrlSetXml } from "@/lib/sitemap";

export async function GET() {
  const urls = getMainSitemapUrls();
  const xml = buildUrlSetXml(urls);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
