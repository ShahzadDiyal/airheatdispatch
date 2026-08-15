import { SITE_CONFIG, CORE_SERVICES, GENERAL_FAQS } from "@/config/site";

export async function GET() {
  const content = `# ${SITE_CONFIG.legalName} (${SITE_CONFIG.name})

> ${SITE_CONFIG.tagline}
> Primary Service Category: HVAC Service and Repair Contractor
> Primary Location: ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}
> Emergency Dispatch Phone: ${SITE_CONFIG.phone}
> Official Website: [AirHeat Dispatch](${SITE_CONFIG.domain})
> Credentials: ${SITE_CONFIG.licenseText}

## Core Services & Solutions

${CORE_SERVICES.map(
  (s) => `### [${s.name}](${SITE_CONFIG.domain}/services/${s.slug})
- **Service Name**: ${s.fullTitle}
- **Direct Answer**: ${s.directAnswer}
- **Pricing Model**: ${s.priceLabel}
- **Key Features**: ${s.features.join("; ")}
- **Full Guide Link**: [Read ${s.name} Guide](${SITE_CONFIG.domain}/services/${s.slug})
`
).join("\n")}

## Key Navigation Links
- [Home Page](${SITE_CONFIG.domain}/)
- [All HVAC Services Catalog](${SITE_CONFIG.domain}/services)
- [HVAC FAQs & Knowledge Base](${SITE_CONFIG.domain}/faqs)
- [Why Choose Us](${SITE_CONFIG.domain}/why-us)
- [About AirHeat Dispatch](${SITE_CONFIG.domain}/about)
- [Contact & 24/7 Dispatch Hotline](${SITE_CONFIG.domain}/contact)
- [Privacy Policy](${SITE_CONFIG.domain}/privacy-policy)
- [Terms of Service](${SITE_CONFIG.domain}/terms-of-service)
- [XML Sitemap](${SITE_CONFIG.domain}/sitemap.xml)

## Frequently Asked Questions
${GENERAL_FAQS.map((faq) => `### Q: ${faq.question}\n**A**: ${faq.answer}\n`).join("\n")}

## Service Areas Covered
${SITE_CONFIG.serviceAreas.map((area) => `- [${area} HVAC Service](${SITE_CONFIG.domain}/contact)`).join("\n")}

## Direct Contact Details
- **Emergency Hotline**: [Call ${SITE_CONFIG.phone}](tel:${SITE_CONFIG.phoneRaw})
- **Support Email**: ${SITE_CONFIG.email}
- **Hours**: 24 Hours a Day, 7 Days a Week, 365 Days a Year
- **Dispatch Headquarters**: ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
