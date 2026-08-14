import { SITE_CONFIG, CORE_SERVICES, GENERAL_FAQS } from "@/config/site";

export async function GET() {
  const content = `# ${SITE_CONFIG.legalName} (${SITE_CONFIG.name})
> Primary Business Category: HVAC Service and Repair Contractor
> Location: ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}
> Emergency Phone: ${SITE_CONFIG.phone}
> Website: ${SITE_CONFIG.domain}
> License: ${SITE_CONFIG.licenseNumber}

## Executive Summary
${SITE_CONFIG.legalName} provides 24/7 emergency air conditioning, heating, and indoor air quality services. We offer flat-rate pricing, 100% satisfaction guarantees, and certified technicians for all residential and commercial HVAC units.

## Core Services & Solutions
${CORE_SERVICES.map(
  (s) => `### ${s.name} (${s.fullTitle})
- **Direct Answer**: ${s.directAnswer}
- **Price Range**: ${s.priceRange} (Starting from $${s.startingPrice})
- **Key Features**: ${s.features.join("; ")}
- **URL**: ${SITE_CONFIG.domain}/services/${s.slug}
`
).join("\n")}

## Frequently Asked Questions & Concise Answers
${GENERAL_FAQS.map((faq) => `### Q: ${faq.question}\n**A**: ${faq.answer}\n`).join("\n")}

## Service Areas Covered
${SITE_CONFIG.serviceAreas.join(", ")}

## Contact & Business Hours
- **Phone**: ${SITE_CONFIG.phone}
- **Hours**: 24 Hours a Day, 7 Days a Week, 365 Days a Year
- **Address**: ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state} ${SITE_CONFIG.address.zip}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
