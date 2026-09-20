import { SITE_CONFIG, GENERAL_FAQS } from "@/lib/seo";
import { CORE_SERVICES } from "@/config/services";
import { ALL_STATES_DATA } from "@/config/states";
import { getAllPrebuiltCities } from "@/lib/locations";

export async function GET() {
  const activeStates = Object.values(ALL_STATES_DATA);
  const stateNamesStr = activeStates.map((s) => s.stateName).join(" & ");
  const prebuiltCities = getAllPrebuiltCities();

  const content = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.tagline}
> Service Category: Free Homeowner HVAC Connection Service
> Featured State Regions: ${stateNamesStr} (Dynamic local city hubs across all registered U.S. service regions)
> 24/7 Hotline Phone: ${SITE_CONFIG.phone}
> Official Website: [AirHeat Dispatch](${SITE_CONFIG.domain})

## Mandated Legal Disclaimer
> ${SITE_CONFIG.disclaimer}

## Core Service Categories

${CORE_SERVICES.map(
  (s) => `### [${s.name}](${SITE_CONFIG.domain}/${s.slug})
- **Service Name**: ${s.fullTitle}
- **Direct Answer**: ${s.directAnswer}
- **Key Features**: ${s.features.join("; ")}
- **Clean Service Link**: [Read ${s.name} Guide](${SITE_CONFIG.domain}/${s.slug})
${activeStates
  .map(
    (st) =>
      `- **${st.stateName} Statewide Link**: [${s.name} in ${st.stateName}](${SITE_CONFIG.domain}/${s.slug}/${st.stateSlug})`
  )
  .join("\n")}
`
).join("\n")}

## Key Navigation Links
- [Home Page](${SITE_CONFIG.domain}/)
- [All HVAC Services Directory](${SITE_CONFIG.domain}/services)
- [How It Works](${SITE_CONFIG.domain}/how-it-works)
- [Service Areas Directory](${SITE_CONFIG.domain}/service-areas)
${activeStates
  .map(
    (st) =>
      `- [${st.stateName} Statewide HVAC Hub](${SITE_CONFIG.domain}/hvac/${st.stateSlug})`
  )
  .join("\n")}
${prebuiltCities
  .slice(0, 15)
  .map(
    (c) =>
      `- [${c.cityName} ${c.stateSlug === "alabama" ? "AL" : "TX"} Local HVAC Hub](${SITE_CONFIG.domain}/hvac/${c.stateSlug}/${c.citySlug})`
  )
  .join("\n")}
- [HVAC FAQs & Knowledge Base](${SITE_CONFIG.domain}/faqs)
- [Why Use Our Service](${SITE_CONFIG.domain}/why-us)
- [About AirHeat Dispatch](${SITE_CONFIG.domain}/about)
- [Contact & 24/7 Hotline](${SITE_CONFIG.domain}/contact)
- [Privacy Policy](${SITE_CONFIG.domain}/privacy-policy)
- [Terms of Service](${SITE_CONFIG.domain}/terms-of-service)
- [XML Sitemap](${SITE_CONFIG.domain}/sitemap.xml)

## Frequently Asked Questions
${GENERAL_FAQS.map((faq) => `### Q: ${faq.question}\n**A**: ${faq.answer}\n`).join("\n")}

## Direct Contact Details
- **24/7 Hotline**: [Call ${SITE_CONFIG.phone}](tel:${SITE_CONFIG.phoneRaw})
- **Support Email**: ${SITE_CONFIG.email}
- **Hours**: 24 Hours a Day, 7 Days a Week, 365 Days a Year
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
