import { StateData } from "@/types/location";
import { ALABAMA_STATE_DATA } from "./locations/alabama";
import { ALASKA_STATE_DATA } from "./locations/alaska";
import { ARIZONA_STATE_DATA } from "./locations/arizona";
import { ARKANSAS_STATE_DATA } from "./locations/arkansas";
import { CALIFORNIA_STATE_DATA } from "./locations/california";
import { COLORADO_STATE_DATA } from "./locations/colorado";
import { CONNECTICUT_STATE_DATA } from "./locations/connecticut";
import { DELAWARE_STATE_DATA } from "./locations/delaware";
import { FLORIDA_STATE_DATA } from "./locations/florida";
import { GEORGIA_STATE_DATA } from "./locations/georgia";
import { HAWAII_STATE_DATA } from "./locations/hawaii";
import { IDAHO_STATE_DATA } from "./locations/idaho";
import { ILLINOIS_STATE_DATA } from "./locations/illinois";
import { INDIANA_STATE_DATA } from "./locations/indiana";
import { IOWA_STATE_DATA } from "./locations/iowa";
import { KANSAS_STATE_DATA } from "./locations/kansas";
import { KENTUCKY_STATE_DATA } from "./locations/kentucky";
import { LOUISIANA_STATE_DATA } from "./locations/louisiana";
import { MAINE_STATE_DATA } from "./locations/maine";
import { MARYLAND_STATE_DATA } from "./locations/maryland";
import { MASSACHUSETTS_STATE_DATA } from "./locations/massachusetts";
import { MICHIGAN_STATE_DATA } from "./locations/michigan";
import { MINNESOTA_STATE_DATA } from "./locations/minnesota";
import { MISSISSIPPI_STATE_DATA } from "./locations/mississippi";
import { MISSOURI_STATE_DATA } from "./locations/missouri";
import { MONTANA_STATE_DATA } from "./locations/montana";
import { NEBRASKA_STATE_DATA } from "./locations/nebraska";
import { NEVADA_STATE_DATA } from "./locations/nevada";
import { NEW_HAMPSHIRE_STATE_DATA } from "./locations/new-hampshire";
import { NEW_JERSEY_STATE_DATA } from "./locations/new-jersey";
import { NEW_MEXICO_STATE_DATA } from "./locations/new-mexico";
import { NEW_YORK_STATE_DATA } from "./locations/new-york";
import { NORTH_CAROLINA_STATE_DATA } from "./locations/north-carolina";
import { NORTH_DAKOTA_STATE_DATA } from "./locations/north-dakota";
import { OHIO_STATE_DATA } from "./locations/ohio";
import { OKLAHOMA_STATE_DATA } from "./locations/oklahoma";
import { OREGON_STATE_DATA } from "./locations/oregon";
import { PENNSYLVANIA_STATE_DATA } from "./locations/pennsylvania";
import { RHODE_ISLAND_STATE_DATA } from "./locations/rhode-island";
import { SOUTH_CAROLINA_STATE_DATA } from "./locations/south-carolina";
import { SOUTH_DAKOTA_STATE_DATA } from "./locations/south-dakota";
import { TENNESSEE_STATE_DATA } from "./locations/tennessee";
import { TEXAS_STATE_DATA } from "./locations/texas";
import { UTAH_STATE_DATA } from "./locations/utah";
import { VERMONT_STATE_DATA } from "./locations/vermont";
import { VIRGINIA_STATE_DATA } from "./locations/virginia";
import { WASHINGTON_STATE_DATA } from "./locations/washington";
import { WEST_VIRGINIA_STATE_DATA } from "./locations/west-virginia";
import { WISCONSIN_STATE_DATA } from "./locations/wisconsin";
import { WYOMING_STATE_DATA } from "./locations/wyoming";

export const ALL_STATES_DATA: Record<string, StateData> = {
  "alabama": ALABAMA_STATE_DATA,
  "alaska": ALASKA_STATE_DATA,
  "arizona": ARIZONA_STATE_DATA,
  "arkansas": ARKANSAS_STATE_DATA,
  "california": CALIFORNIA_STATE_DATA,
  "colorado": COLORADO_STATE_DATA,
  "connecticut": CONNECTICUT_STATE_DATA,
  "delaware": DELAWARE_STATE_DATA,
  "florida": FLORIDA_STATE_DATA,
  "georgia": GEORGIA_STATE_DATA,
  "hawaii": HAWAII_STATE_DATA,
  "idaho": IDAHO_STATE_DATA,
  "illinois": ILLINOIS_STATE_DATA,
  "indiana": INDIANA_STATE_DATA,
  "iowa": IOWA_STATE_DATA,
  "kansas": KANSAS_STATE_DATA,
  "kentucky": KENTUCKY_STATE_DATA,
  "louisiana": LOUISIANA_STATE_DATA,
  "maine": MAINE_STATE_DATA,
  "maryland": MARYLAND_STATE_DATA,
  "massachusetts": MASSACHUSETTS_STATE_DATA,
  "michigan": MICHIGAN_STATE_DATA,
  "minnesota": MINNESOTA_STATE_DATA,
  "mississippi": MISSISSIPPI_STATE_DATA,
  "missouri": MISSOURI_STATE_DATA,
  "montana": MONTANA_STATE_DATA,
  "nebraska": NEBRASKA_STATE_DATA,
  "nevada": NEVADA_STATE_DATA,
  "new-hampshire": NEW_HAMPSHIRE_STATE_DATA,
  "new-jersey": NEW_JERSEY_STATE_DATA,
  "new-mexico": NEW_MEXICO_STATE_DATA,
  "new-york": NEW_YORK_STATE_DATA,
  "north-carolina": NORTH_CAROLINA_STATE_DATA,
  "north-dakota": NORTH_DAKOTA_STATE_DATA,
  "ohio": OHIO_STATE_DATA,
  "oklahoma": OKLAHOMA_STATE_DATA,
  "oregon": OREGON_STATE_DATA,
  "pennsylvania": PENNSYLVANIA_STATE_DATA,
  "rhode-island": RHODE_ISLAND_STATE_DATA,
  "south-carolina": SOUTH_CAROLINA_STATE_DATA,
  "south-dakota": SOUTH_DAKOTA_STATE_DATA,
  "tennessee": TENNESSEE_STATE_DATA,
  "texas": TEXAS_STATE_DATA,
  "utah": UTAH_STATE_DATA,
  "vermont": VERMONT_STATE_DATA,
  "virginia": VIRGINIA_STATE_DATA,
  "washington": WASHINGTON_STATE_DATA,
  "west-virginia": WEST_VIRGINIA_STATE_DATA,
  "wisconsin": WISCONSIN_STATE_DATA,
  "wyoming": WYOMING_STATE_DATA,
};

export function getStateData(stateSlug: string): StateData | undefined {
  return ALL_STATES_DATA[stateSlug.toLowerCase()];
}
