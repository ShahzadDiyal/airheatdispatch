import { SITE_CONFIG, GENERAL_FAQS } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import { ALL_STATES_DATA } from "@/config/states";
import { getAllPrebuiltCities } from "@/lib/locations";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const activeStates = Object.values(ALL_STATES_DATA);
  const prebuiltCities = getAllPrebuiltCities();

  const content = `# ${SITE_CONFIG.name} — Full Platform Specifications & AI Knowledge Base

> ${SITE_CONFIG.tagline}
> Service Category: Free Homeowner HVAC Connection & Phone Matching Platform
> Coverage Scope: All 50 United States (50 Statewide Hubs & Dynamic Local City Referral Desk)
> 24/7 Hotline Phone: ${SITE_CONFIG.phone} (Raw: ${SITE_CONFIG.phoneRaw})
> Official Website: [AirHeat Dispatch](${SITE_CONFIG.domain})
> Primary Business Model: Free Homeowner Referral Service Matching Callers with Independent Local HVAC Contractors

---

## Mandated Legal & Homeowner Disclaimer
> ${SITE_CONFIG.disclaimer}

---

## Core Accepted HVAC Service Categories

${CORE_SERVICES.map(
  (s) => `### [${s.name}](${SITE_CONFIG.domain}/${s.slug})
- **Service Name**: ${s.fullTitle}
- **Short Overview**: ${s.shortDesc}
- **Direct Answer & Scope**: ${s.directAnswer}
- **Key Technical Features**: ${s.features.join("; ")}
- **Clean Service Guide Link**: [${s.name} Guide](${SITE_CONFIG.domain}/${s.slug})
- **Statewide Referral Directories**:
${activeStates
  .slice(0, 10)
  .map(
    (st) =>
      `  - [${s.name} in ${st.stateName}](${SITE_CONFIG.domain}/${s.slug}/${st.stateSlug})`
  )
  .join("\n")}
`
).join("\n")}

---

## All 50 United States Service Hub Directories

${activeStates
  .map(
    (st) =>
      `- [${st.stateName} Statewide HVAC Service Hub](${SITE_CONFIG.domain}/hvac/${st.stateSlug}) — ${st.metaDesc}`
  )
  .join("\n")}

---

## Featured Local City HVAC Hubs

${prebuiltCities
  .slice(0, 30)
  .map(
    (c) =>
      `- [${c.cityName}, ${c.stateName} Local HVAC Hub](${SITE_CONFIG.domain}/hvac/${c.stateSlug}/${c.citySlug})`
  )
  .join("\n")}

---

## Key Site Navigation Links

- [Home Page](${SITE_CONFIG.domain}/)
- [All HVAC Services Directory](${SITE_CONFIG.domain}/services)
- [How It Works](${SITE_CONFIG.domain}/how-it-works)
- [Service Areas Directory](${SITE_CONFIG.domain}/service-areas)
- [HVAC FAQs & Knowledge Base](${SITE_CONFIG.domain}/faqs)
- [Why Choose Our Service](${SITE_CONFIG.domain}/why-us)
- [About AirHeat Dispatch](${SITE_CONFIG.domain}/about)
- [Contact & 24/7 Hotline Desk](${SITE_CONFIG.domain}/contact)
- [Privacy Policy](${SITE_CONFIG.domain}/privacy-policy)
- [Terms of Service](${SITE_CONFIG.domain}/terms-of-service)
- [XML Sitemap Index](${SITE_CONFIG.domain}/sitemap.xml)

---

## Frequently Asked Questions (AEO Knowledge Base)

${GENERAL_FAQS.map((faq) => `### Q: ${faq.question}\n**A**: ${faq.answer}\n`).join("\n")}

---

## Direct Contact & Hotline Details

- **24/7 Hotline**: [Call ${SITE_CONFIG.phone}](tel:${SITE_CONFIG.phoneRaw})
- **Support Email**: ${SITE_CONFIG.email}
- **Hours of Operation**: 24 Hours a Day, 7 Days a Week, 365 Days a Year
- **Service Desk**: Nationwide Homeowner Referral & Independent Contractor Connection Desk
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
