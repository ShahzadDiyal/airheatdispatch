import {
  SITE_CONFIG,
  CORE_SERVICES,
  GENERAL_FAQS,
  TEXAS_STATE_DATA,
  TEXAS_CITIES_DATA,
  ALABAMA_STATE_DATA,
  ALABAMA_PRESET_CITIES_DATA,
} from "@/config/site";

export async function GET() {
  const content = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.tagline}
> Service Category: Free Homeowner HVAC Connection Service
> Featured State Regions: ${TEXAS_STATE_DATA.stateName} & ${ALABAMA_STATE_DATA.stateName} (Covering 10 Texas Metros and All 463 Alabama Cities)
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
- **Texas Statewide Link**: [${s.name} in Texas](${SITE_CONFIG.domain}/${s.slug}/texas)
- **Alabama Statewide Link**: [${s.name} in Alabama](${SITE_CONFIG.domain}/${s.slug}/alabama)
- **Birmingham AL Link**: [${s.name} in Birmingham AL](${SITE_CONFIG.domain}/${s.slug}/alabama/birmingham)
- **Huntsville AL Link**: [${s.name} in Huntsville AL](${SITE_CONFIG.domain}/${s.slug}/alabama/huntsville)
- **Montgomery AL Link**: [${s.name} in Montgomery AL](${SITE_CONFIG.domain}/${s.slug}/alabama/montgomery)
- **Mobile AL Link**: [${s.name} in Mobile AL](${SITE_CONFIG.domain}/${s.slug}/alabama/mobile)
`
).join("\n")}

## Key Navigation Links
- [Home Page](${SITE_CONFIG.domain}/)
- [All HVAC Services Directory](${SITE_CONFIG.domain}/services)
- [How It Works](${SITE_CONFIG.domain}/how-it-works)
- [Service Areas Directory](${SITE_CONFIG.domain}/service-areas)
- [Texas Statewide HVAC Hub](${SITE_CONFIG.domain}/hvac/texas)
- [Alabama Statewide HVAC Hub](${SITE_CONFIG.domain}/hvac/alabama)
- [Birmingham AL Local HVAC Hub](${SITE_CONFIG.domain}/hvac/alabama/birmingham)
- [Huntsville AL Local HVAC Hub](${SITE_CONFIG.domain}/hvac/alabama/huntsville)
- [Montgomery AL Local HVAC Hub](${SITE_CONFIG.domain}/hvac/alabama/montgomery)
- [Mobile AL Local HVAC Hub](${SITE_CONFIG.domain}/hvac/alabama/mobile)
- [Austin TX Local HVAC Hub](${SITE_CONFIG.domain}/hvac/texas/austin)
- [Houston TX Local HVAC Hub](${SITE_CONFIG.domain}/hvac/texas/houston)
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
