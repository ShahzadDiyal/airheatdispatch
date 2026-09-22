import { LocationProblem, LocationFaq } from "@/types/location";

export function generateGenericClimateContext(cityName: string, stateName: string): string {
  return `${cityName} features ${stateName}'s humid subtropical climate, marked by long, hot, stifling summer heatwaves exceeding 90°F with high relative humidity, alongside sudden winter cold snaps. High humidity places severe operational stress on air conditioning compressors, evaporator coils, and condensate drain systems.`;
}

export function generateGenericProblems(cityName: string): LocationProblem[] {
  return [
    {
      title: `High Humidity & AC Capacitor Strain in ${cityName}`,
      desc: `High ambient summer humidity and prolonged heatwaves in ${cityName} cause electrical run capacitors and fan motors to overheat, resulting in warm air blowing from vents.`,
    },
    {
      title: "Clogged Condensate Drain Lines & Overflow",
      desc: "Heavy indoor dehumidification produces excessive condensation, leading to algae buildup in drain lines that triggers emergency AC safety shutoff switches.",
    },
    {
      title: "Heat Pump Defrost Cycle & Reversing Valve Faults",
      desc: "Damp winter cold snaps cause ice accumulation on outdoor heat pump coils when defrost control boards or reversing valves fail.",
    },
    {
      title: "Evaporator Coil Frosting & Airflow Restrictions",
      desc: "Restricted airflow from dust-clogged intake air filters combined with low refrigerant levels freezes indoor evaporator coils.",
    },
  ];
}

export function generateGenericFaqs(cityName: string, stateName: string): LocationFaq[] {
  return [
    {
      question: `How do I connect with an HVAC contractor in ${cityName}, ${stateName}?`,
      answer: `Call (202) 931-4151 to connect with independent local HVAC service contractors serving ${cityName} and surrounding ${stateName} communities.`,
    },
    {
      question: `What heating and cooling services are available in ${cityName}?`,
      answer: `Independent contractors in our referral network assist ${cityName} homeowners with AC repair, furnace troubleshooting, heat pump service, emergency HVAC dispatch, and seasonal maintenance.`,
    },
    {
      question: `Are HVAC contractors in ${cityName}, ${stateName} licensed and insured?`,
      answer: `It is the responsibility of the homeowner to verify that any hired contractor furnishes the necessary state licensing and insurance required in ${stateName}.`,
    },
  ];
}
