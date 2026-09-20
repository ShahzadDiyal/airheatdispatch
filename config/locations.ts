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

export function getStateCities(stateSlug: string): LocationData[] {
  const normState = stateSlug.toLowerCase();
  if (normState === "texas") return TEXAS_CITIES_DATA;
  if (normState === "alabama") return ALABAMA_PRESET_CITIES_DATA;

  // Fallback dynamic generator for any registered state's major cities
  const state = ALL_STATES_DATA[normState];
  if (!state) return [];
  return state.majorCities.map((mc) => ({
    stateSlug: normState,
    stateName: state.stateName,
    citySlug: mc.slug,
    cityName: mc.name,
    metaTitle: `${mc.name} ${state.stateName} HVAC Service & AC Repair Connection | AirHeat Dispatch`,
    metaDesc: `Connect with independent local HVAC contractors in ${mc.name}, ${state.stateName} for 24/7 AC repair and heating service.`,
    intro: `AirHeat Dispatch connects ${mc.name}, ${state.stateName} homeowners with independent local HVAC contractors.`,
    climateContext: `${mc.name} experiences ${state.stateName} climate conditions requiring dependable HVAC performance.`,
    commonProblems: [
      { title: "Peak Season Equipment Stress", desc: "Extreme temperatures test capacitors, compressors, and electrical relays." },
      { title: "Airflow Restrictions & Filter Clogs", desc: "Airborne dust restricts system CFM and freezes indoor evaporator coils." },
      { title: "Condensate Drain Line Blockages", desc: "High humidity produces heavy condensation runoff leading to overflow risks." },
      { title: "Heating Ignition & Sensor Issues", desc: "Winter temperature drops require reliable furnace and heat pump operation." },
    ],
    subAreas: [`Greater ${mc.name}`, `${mc.name} Metro Region`],
    faqs: [
      { question: `How do I connect with an HVAC provider in ${mc.name}?`, answer: `Call (555) 839-4328 to connect with independent local HVAC contractors serving ${mc.name}.` },
    ],
  }));
}

export function getAllPrebuiltCities(): LocationData[] {
  const cities: LocationData[] = [];
  const activeStates = Object.keys(ALL_STATES_DATA);
  for (const stateSlug of activeStates) {
    cities.push(...getStateCities(stateSlug));
  }
  return cities;
}

// Multi-state location data lookup supporting Texas and all 463 cities in Alabama (and extensible for any state)
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

  // Generic dynamic fallback for any other registered state
  const stateData = getStateData(normState);
  if (!stateData) return undefined;

  const cityName = normCity
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    stateSlug: normState,
    stateName: stateData.stateName,
    citySlug: normCity,
    cityName: cityName,
    metaTitle: `${cityName} ${stateData.stateName} HVAC Service & AC Repair Connection | AirHeat Dispatch`,
    metaDesc: `Connect with independent local HVAC contractors in ${cityName}, ${stateData.stateName} for 24/7 AC repair and heating service.`,
    intro: `AirHeat Dispatch connects ${cityName}, ${stateData.stateName} homeowners with independent local HVAC service contractors.`,
    climateContext: `${cityName} experiences ${stateData.stateName} climate conditions requiring dependable HVAC performance.`,
    commonProblems: [
      { title: "Peak Season System Strain", desc: "Weather extremes put heavy mechanical load on compressors and fan motors." },
      { title: "Condensate Drain Line Clogs", desc: "Humidity causes algae accumulation in condensate lines." },
      { title: "Heating Ignition & Flame Sensor Outages", desc: "Winter cold fronts require reliable gas or electric heating ignition." },
      { title: "Filter & Coil Airflow Restriction", desc: "Dust buildup reduces airflow efficiency and risks evaporator icing." },
    ],
    subAreas: [`Greater ${cityName}`, `${cityName} Metro Area`],
    faqs: [
      { question: `How do I connect with an HVAC provider in ${cityName}?`, answer: `Call (555) 839-4328 to connect with independent local HVAC contractors serving ${cityName}.` },
    ],
  };
}
