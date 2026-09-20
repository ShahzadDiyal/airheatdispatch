import { CORE_SERVICES } from "./services";
import { ALL_STATES_DATA, getStateCities, getAllPrebuiltCities } from "./locations";
import { ALABAMA_ALL_CITIES } from "../content/alabama";

export { getAllPrebuiltCities };

export function getPrebuiltLocationParams() {
  const params: { service: string; state: string; city: string }[] = [];
  const activeStates = Object.keys(ALL_STATES_DATA);

  for (const service of CORE_SERVICES) {
    for (const stateSlug of activeStates) {
      const cities = getStateCities(stateSlug);
      for (const cityData of cities) {
        params.push({
          service: service.slug,
          state: stateSlug,
          city: cityData.citySlug,
        });
      }
    }
  }
  return params;
}

export function getAllAlabamaCities() {
  return ALABAMA_ALL_CITIES;
}
