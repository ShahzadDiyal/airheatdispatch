import { NextResponse } from "next/server";
import { searchLocations } from "@/lib/locations";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim() || "";
    const results = searchLocations(query);
    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ results: [] });
  }
}
