import { ALL_STATES_DATA, getAllPrebuiltCities } from "./locations";

export function getDynamicServiceAreas(): string[] {
  const areas: string[] = [];

  // Add state-level service coverage
  if (ALL_STATES_DATA) {
    Object.values(ALL_STATES_DATA).forEach((st) => {
      areas.push(`${st.stateName} Statewide`);
    });
  }

  // Add major prebuilt cities
  const prebuilt = getAllPrebuiltCities();
  if (prebuilt && prebuilt.length > 0) {
    prebuilt.forEach((c) => {
      const stateCode = c.stateSlug === "alabama" ? "AL" : c.stateSlug === "texas" ? "TX" : c.stateSlug.toUpperCase();
      areas.push(`${c.cityName}, ${stateCode}`);
    });
  }

  return areas;
}

export const SITE_CONFIG = {
  name: "AirHeat Dispatch",
  tagline: "Free Homeowner Connection Service for Independent HVAC Contractors",
  domain: "https://airheatdispatch.com",
  phone: "(555) 839-4328",
  phoneRaw: "5558394328",
  email: "support@airheatdispatch.com",
  openingHours: "Mo-Su 00:00-23:59", // 24/7 Hotline
  primaryKeyword: "Connect With Local HVAC Providers",
  disclaimer:
    "This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.",
  get serviceAreas() {
    return getDynamicServiceAreas();
  },
};

export const GENERAL_FAQS = [
  {
    question: "What is AirHeat Dispatch?",
    answer:
      "AirHeat Dispatch is a free homeowner connection service designed to help homeowners connect with independent local HVAC service contractors nationwide.",
  },
  {
    question: "Is AirHeat Dispatch an HVAC contractor?",
    answer:
      "No. AirHeat Dispatch is not an HVAC contractor, does not employ technicians or maintain service vehicles, and does not directly perform HVAC work.",
  },
  {
    question: "How much does it cost to use AirHeat Dispatch?",
    answer:
      "Our homeowner connection service is completely free to use. Homeowners pay their chosen independent contractor directly for any service or repair performed.",
  },
  {
    question: "What services can independent HVAC contractors help with?",
    answer:
      "Independent contractors can assist with AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC system installation, seasonal maintenance, heating repair, and heat pump repair.",
  },
  {
    question: "How do I connect with a local HVAC service provider?",
    answer:
      "Call our connection hotline at (555) 839-4328 anytime to speak with a representative and connect with an independent HVAC contractor serving your area.",
  },
];
