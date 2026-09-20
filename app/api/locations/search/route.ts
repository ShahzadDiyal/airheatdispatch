import { NextResponse } from "next/server";
import { ZIP_DATABASE, ZipLocationItem } from "@/config/locations/zip-database";
import { ALL_STATES_DATA } from "@/config/states";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() || "";

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const q = query.toLowerCase();
  const isNumeric = /^\d+$/.test(q);

  const matchedResults: ZipLocationItem[] = [];
  const seenKeys = new Set<string>();

  if (isNumeric) {
    // Numeric ZIP search
    for (const item of ZIP_DATABASE) {
      if (item.zip.startsWith(q) || item.zip.includes(q)) {
        const key = `${item.zip}-${item.stateSlug}-${item.citySlug}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          matchedResults.push(item);
        }
      }
      if (matchedResults.length >= 10) break;
    }
  } else {
    // City or State text search
    // 1. Exact city name prefix matches
    for (const item of ZIP_DATABASE) {
      if (item.city.toLowerCase().startsWith(q)) {
        const key = `${item.stateSlug}-${item.citySlug}`;
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          matchedResults.push(item);
        }
      }
      if (matchedResults.length >= 8) break;
    }

    // 2. Contains city or state name matches
    if (matchedResults.length < 8) {
      for (const item of ZIP_DATABASE) {
        if (
          item.city.toLowerCase().includes(q) ||
          item.stateName.toLowerCase().includes(q) ||
          item.state.toLowerCase() === q
        ) {
          const key = `${item.stateSlug}-${item.citySlug}`;
          if (!seenKeys.has(key)) {
            seenKeys.add(key);
            matchedResults.push(item);
          }
        }
        if (matchedResults.length >= 10) break;
      }
    }

    // 3. Fallback to major cities from ALL_STATES_DATA if match count is low
    if (matchedResults.length < 5) {
      for (const st of Object.values(ALL_STATES_DATA)) {
        if (st.stateName.toLowerCase().includes(q) || st.stateSlug.includes(q)) {
          for (const city of st.majorCities) {
            const key = `${st.stateSlug}-${city.slug}`;
            if (!seenKeys.has(key)) {
              seenKeys.add(key);
              matchedResults.push({
                zip: "",
                city: city.name,
                state: st.stateSlug.toUpperCase().slice(0, 2),
                stateName: st.stateName,
                stateSlug: st.stateSlug,
                citySlug: city.slug,
              });
            }
            if (matchedResults.length >= 10) break;
          }
        }
        if (matchedResults.length >= 10) break;
      }
    }
  }

  return NextResponse.json({ results: matchedResults.slice(0, 10) });
}
