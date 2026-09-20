import {
  getMainSitemapUrls,
  getStateSitemapUrls,
  buildUrlSetXml,
  CHUNK_LIMIT,
} from "@/lib/sitemap";
import { ALL_STATES_DATA } from "@/config/states";

interface RouteProps {
  params: Promise<{ name: string }>;
}

export async function GET(request: Request, { params }: RouteProps) {
  const { name } = await params;

  if (!name || !name.endsWith(".xml")) {
    return new Response("Not Found", { status: 404 });
  }

  const cleanName = name.slice(0, -4); // remove '.xml'

  // Handle sitemap-main
  if (cleanName === "sitemap-main") {
    const urls = getMainSitemapUrls();
    const xml = buildUrlSetXml(urls);
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  }

  // Handle sitemap-[state] or sitemap-[state]-[chunk]
  if (cleanName.startsWith("sitemap-")) {
    const rawKey = cleanName.slice(8); // remove 'sitemap-'
    const chunkMatch = rawKey.match(/^(.+)-(\d+)$/);

    let stateSlug = rawKey.toLowerCase();
    let chunk = 1;

    if (chunkMatch) {
      stateSlug = chunkMatch[1].toLowerCase();
      chunk = parseInt(chunkMatch[2], 10);
    }

    if (!ALL_STATES_DATA[stateSlug]) {
      return new Response("Not Found", { status: 404 });
    }

    const allStateUrls = getStateSitemapUrls(stateSlug);
    const startIndex = (chunk - 1) * CHUNK_LIMIT;
    const endIndex = chunk * CHUNK_LIMIT;
    const chunkUrls = allStateUrls.slice(startIndex, endIndex);

    if (chunkUrls.length === 0) {
      return new Response("Not Found", { status: 404 });
    }

    const xml = buildUrlSetXml(chunkUrls);
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  }

  return new Response("Not Found", { status: 404 });
}
