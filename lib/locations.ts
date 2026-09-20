import { LocationData, StateData } from "@/types/location";
import { ALL_STATES_DATA, getStateData } from "@/config/states";
import { TEXAS_CITIES_DATA, TEXAS_ALL_CITIES } from "@/config/locations/texas";
import { ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES, getAlabamaLocationData } from "@/config/locations/alabama";
import { ARIZONA_PRESET_CITIES_DATA, ARIZONA_ALL_CITIES, getArizonaLocationData } from "@/config/locations/arizona";
import { ARKANSAS_PRESET_CITIES_DATA, ARKANSAS_ALL_CITIES, getArkansasLocationData } from "@/config/locations/arkansas";
import { ZIP_DATABASE } from "@/config/locations/zip-database";

export function getStateCities(stateSlug: string): LocationData[] {
  const normState = stateSlug.toLowerCase();
  if (normState === "texas") return TEXAS_CITIES_DATA;
  if (normState === "alabama") return ALABAMA_PRESET_CITIES_DATA;
  if (normState === "arizona") return ARIZONA_PRESET_CITIES_DATA;
  if (normState === "arkansas") return ARKANSAS_PRESET_CITIES_DATA;

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

export function getAllCitiesForState(stateSlug: string): { name: string; slug: string }[] {
  const normState = stateSlug.toLowerCase();

  const zipCities: { name: string; slug: string }[] = [];
  const seenSlugs = new Set<string>();

  for (const item of ZIP_DATABASE) {
    if (item.stateSlug === normState) {
      if (!seenSlugs.has(item.citySlug)) {
        seenSlugs.add(item.citySlug);
        zipCities.push({ name: item.city, slug: item.citySlug });
      }
    }
  }

  if (zipCities.length > 0) return zipCities;

  if (normState === "texas") return TEXAS_ALL_CITIES.map((c) => ({ name: c.name, slug: c.slug }));
  if (normState === "alabama") return ALABAMA_ALL_CITIES.map((c) => ({ name: c.name, slug: c.slug }));
  if (normState === "arizona") return ARIZONA_ALL_CITIES.map((c) => ({ name: c.name, slug: c.slug }));
  if (normState === "arkansas") return ARKANSAS_ALL_CITIES.map((c) => ({ name: c.name, slug: c.slug }));
  const fallback = getStateCities(normState);
  return fallback.map((c) => ({ name: c.cityName, slug: c.citySlug }));
}

export function getAllPrebuiltCities(): LocationData[] {
  const cities: LocationData[] = [];
  const activeStates = Object.keys(ALL_STATES_DATA);
  for (const stateSlug of activeStates) {
    cities.push(...getStateCities(stateSlug));
  }
  return cities;
}

export function getLocationData(stateSlug: string, citySlug: string): LocationData | undefined {
  const normState = stateSlug.toLowerCase();
  const normCity = citySlug.toLowerCase();

  if (normState === "texas") {
    const txMatch = TEXAS_CITIES_DATA.find((loc) => loc.citySlug === normCity);
    if (txMatch) return txMatch;
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

  if (normState === "arizona") {
    return getArizonaLocationData(normCity);
  }

  if (normState === "arkansas") {
    return getArkansasLocationData(normCity);
  }

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
