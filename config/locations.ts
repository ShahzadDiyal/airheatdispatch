import { LocationData, StateData, TEXAS_STATE_DATA, TEXAS_CITIES_DATA } from "../content/texas";
import { ALABAMA_STATE_DATA, ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES, getAlabamaLocationData } from "../content/alabama";

export type { LocationData, StateData };
export { TEXAS_STATE_DATA, TEXAS_CITIES_DATA, ALABAMA_STATE_DATA, ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES, getAlabamaLocationData };

export const ALL_STATES_DATA: Record<string, StateData> = {
  texas: TEXAS_STATE_DATA,
  alabama: ALABAMA_STATE_DATA,
};

export function getStateData(stateSlug: string): StateData | undefined {
  return ALL_STATES_DATA[stateSlug.toLowerCase()];
}

// Multi-state location data lookup supporting Texas and all 463 cities in Alabama
export function getLocationData(stateSlug: string, citySlug: string): LocationData | undefined {
  const normState = stateSlug.toLowerCase();
  const normCity = citySlug.toLowerCase();

  if (normState === "texas") {
    const txMatch = TEXAS_CITIES_DATA.find((loc) => loc.citySlug === normCity);
    if (txMatch) return txMatch;
    // Fallback for any Texas city
    const cityName = normCity
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      stateSlug: "texas",
      stateName: "Texas",
      citySlug: normCity,
      cityName: cityName,
      metaTitle: `${cityName} TX HVAC Service & AC Repair Connection | AirHeat Dispatch`,
      metaDesc: `Connect with independent local HVAC contractors in ${cityName}, TX for 24/7 AC repair, furnace troubleshooting, and heating service.`,
      intro: `AirHeat Dispatch connects ${cityName}, Texas homeowners with independent local HVAC service contractors for emergency heating and air conditioning connection.`,
      climateContext: `${cityName} experiences Texas climate extremes—intense summer heatwaves alongside sudden winter cold fronts requiring continuous HVAC reliability.`,
      commonProblems: [
        { title: "Summer Heatwave Capacitor Failure", desc: "High ambient heat causes run capacitors and compressor switches to overload." },
        { title: "Condensate Drain Line Clogging", desc: "Heavy humidity creates excessive condensation leading to drain line blockages." },
        { title: "Winter Furnace Ignition Faults", desc: "Sudden cold snaps cause flame sensors and igniters to fail." },
        { title: "Coil Freezing & Airflow Obstruction", desc: "Dirty filters and low refrigerant freeze indoor evaporator coils." },
      ],
      subAreas: [`Greater ${cityName}`, `${cityName} Metro Area`],
      faqs: [
        { question: `How do I connect with an HVAC contractor in ${cityName}, TX?`, answer: `Call (555) 839-4328 to connect with independent local contractors serving ${cityName}.` }
      ],
    };
  }

  if (normState === "alabama") {
    return getAlabamaLocationData(normCity);
  }

  return undefined;
}
