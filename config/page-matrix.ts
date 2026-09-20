import { CORE_SERVICES } from "./services";
import { TEXAS_CITIES_DATA } from "../content/texas";
import { ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES } from "../content/alabama";

export function getPrebuiltLocationParams() {
  const params: { service: string; state: string; city: string }[] = [];
  const prebuiltLocations = [...TEXAS_CITIES_DATA, ...ALABAMA_PRESET_CITIES_DATA];
  for (const service of CORE_SERVICES) {
    for (const location of prebuiltLocations) {
      params.push({
        service: service.slug,
        state: location.stateSlug,
        city: location.citySlug,
      });
    }
  }
  return params;
}

export function getAllPrebuiltCities() {
  return [...TEXAS_CITIES_DATA, ...ALABAMA_PRESET_CITIES_DATA];
}

export function getAllAlabamaCities() {
  return ALABAMA_ALL_CITIES;
}
