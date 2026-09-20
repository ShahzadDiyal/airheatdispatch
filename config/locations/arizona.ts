import { LocationData, StateData } from "@/types/location";

export const ARIZONA_STATE_DATA: StateData = {
  stateSlug: "arizona",
  stateName: "Arizona",
  metaTitle: "Arizona Local HVAC Service & AC Repair Connection | AirHeat Dispatch",
  metaDesc:
    "Connect with independent local HVAC contractors across all 91 Arizona cities for 24/7 AC repair, furnace troubleshooting, and heating service. Fast Arizona phone hotline.",
  intro:
    "AirHeat Dispatch provides a free homeowner connection service across all 91 incorporated cities and towns in Arizona. Whether your central air conditioning unit shuts down during extreme 115°F+ Sonoran Desert summer heatwaves in Phoenix, Mesa, or Tucson, or your heating system fails during a high-country winter freeze in Flagstaff or Prescott, call our 24/7 hotline to connect with independent local HVAC contractors.",
  climateOverview:
    "Arizona features extreme climate contrasts—ranging from oppressive summer heat, low humidity, and monsoon haboob sandstorms across the Valley of the Sun (Phoenix, Mesa, Chandler, Scottsdale) and Yuma, to freezing winter snowstorms and high-altitude mountain cold fronts in Flagstaff, Prescott, and Sedona. Independent local contractors understand regional Arizona climate stresses and equipment demands.",
  majorCities: [
    { name: "Phoenix", slug: "phoenix", region: "Valley of the Sun" },
    { name: "Tucson", slug: "tucson", region: "Southern Arizona" },
    { name: "Mesa", slug: "mesa", region: "East Valley" },
    { name: "Chandler", slug: "chandler", region: "East Valley" },
    { name: "Scottsdale", slug: "scottsdale", region: "East Valley" },
    { name: "Glendale", slug: "glendale", region: "West Valley" },
    { name: "Gilbert", slug: "gilbert", region: "East Valley" },
    { name: "Tempe", slug: "tempe", region: "East Valley" },
    { name: "Peoria", slug: "peoria", region: "West Valley" },
    { name: "Surprise", slug: "surprise", region: "West Valley" },
    { name: "Flagstaff", slug: "flagstaff", region: "Northern Arizona" },
    { name: "Yuma", slug: "yuma", region: "Southwestern Arizona" },
  ],
  faqs: [
    {
      question: "How do I connect with an HVAC contractor in Arizona?",
      answer:
        "Call our 24/7 connection line at (555) 839-4328. AirHeat Dispatch is a free service that matches Arizona homeowners with independent local HVAC contractors.",
    },
    {
      question: "Which Arizona cities have HVAC coverage?",
      answer:
        "Independent contractors in our network serve all 91 incorporated cities and towns in Arizona including Phoenix, Tucson, Mesa, Chandler, Scottsdale, Glendale, Gilbert, Tempe, Peoria, Surprise, Flagstaff, Yuma, and surrounding communities.",
    },
    {
      question: "Are contractors in Arizona licensed and insured?",
      answer:
        "It is the responsibility of the homeowner to verify that any hired contractor furnishes the required license and insurance mandated by the Arizona Registrar of Contractors (ROC).",
    },
  ],
};

export interface ArizonaCityRef {
  name: string;
  slug: string;
  region: string;
  county: string;
}

// All 91 incorporated cities and towns in Arizona
export const ARIZONA_ALL_CITIES: ArizonaCityRef[] = [
  { name: "Apache Junction", slug: "apache-junction", region: "East Valley", county: "Maricopa / Pinal" },
  { name: "Avondale", slug: "avondale", region: "West Valley", county: "Maricopa" },
  { name: "Benson", slug: "benson", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Bisbee", slug: "bisbee", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Buckeye", slug: "buckeye", region: "West Valley", county: "Maricopa" },
  { name: "Bullhead City", slug: "bullhead-city", region: "Colorado River Region", county: "Mohave" },
  { name: "Camp Verde", slug: "camp-verde", region: "Verde Valley", county: "Yavapai" },
  { name: "Carefree", slug: "carefree", region: "North Valley", county: "Maricopa" },
  { name: "Casa Grande", slug: "casa-grande", region: "Pinal County", county: "Pinal" },
  { name: "Cave Creek", slug: "cave-creek", region: "North Valley", county: "Maricopa" },
  { name: "Chandler", slug: "chandler", region: "East Valley", county: "Maricopa" },
  { name: "Chino Valley", slug: "chino-valley", region: "Central Highlands", county: "Yavapai" },
  { name: "Clarkdale", slug: "clarkdale", region: "Verde Valley", county: "Yavapai" },
  { name: "Clifton", slug: "clifton", region: "Eastern Arizona", county: "Greenlee" },
  { name: "Colorado City", slug: "colorado-city", region: "Arizona Strip", county: "Mohave" },
  { name: "Coolidge", slug: "coolidge", region: "Pinal County", county: "Pinal" },
  { name: "Cottonwood", slug: "cottonwood", region: "Verde Valley", county: "Yavapai" },
  { name: "Dewey-Humboldt", slug: "dewey-humboldt", region: "Central Highlands", county: "Yavapai" },
  { name: "Douglas", slug: "douglas", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Duncan", slug: "duncan", region: "Eastern Arizona", county: "Greenlee" },
  { name: "Eagar", slug: "eagar", region: "White Mountains", county: "Apache" },
  { name: "El Mirage", slug: "el-mirage", region: "West Valley", county: "Maricopa" },
  { name: "Eloy", slug: "eloy", region: "Pinal County", county: "Pinal" },
  { name: "Flagstaff", slug: "flagstaff", region: "Northern Arizona", county: "Coconino" },
  { name: "Florence", slug: "florence", region: "Pinal County", county: "Pinal" },
  { name: "Fountain Hills", slug: "fountain-hills", region: "East Valley", county: "Maricopa" },
  { name: "Fredonia", slug: "fredonia", region: "Arizona Strip", county: "Coconino" },
  { name: "Gila Bend", slug: "gila-bend", region: "Southwestern Maricopa", county: "Maricopa" },
  { name: "Gilbert", slug: "gilbert", region: "East Valley", county: "Maricopa" },
  { name: "Glendale", slug: "glendale", region: "West Valley", county: "Maricopa" },
  { name: "Globe", slug: "globe", region: "Central Arizona", county: "Gila" },
  { name: "Goodyear", slug: "goodyear", region: "West Valley", county: "Maricopa" },
  { name: "Guadalupe", slug: "guadalupe", region: "East Valley", county: "Maricopa" },
  { name: "Hayden", slug: "hayden", region: "Central Arizona", county: "Gila" },
  { name: "Holbrook", slug: "holbrook", region: "Northeastern Arizona", county: "Navajo" },
  { name: "Huachuca City", slug: "huachuca-city", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Jerome", slug: "jerome", region: "Verde Valley", county: "Yavapai" },
  { name: "Kearny", slug: "kearny", region: "Copper Basin", county: "Pinal" },
  { name: "Kingman", slug: "kingman", region: "Northwestern Arizona", county: "Mohave" },
  { name: "Lake Havasu City", slug: "lake-havasu-city", region: "Colorado River Region", county: "Mohave" },
  { name: "Litchfield Park", slug: "litchfield-park", region: "West Valley", county: "Maricopa" },
  { name: "Mammoth", slug: "mammoth", region: "San Pedro Valley", county: "Pinal" },
  { name: "Marana", slug: "marana", region: "Tucson Metro Area", county: "Pima" },
  { name: "Maricopa", slug: "maricopa", region: "Pinal County", county: "Pinal" },
  { name: "Mesa", slug: "mesa", region: "East Valley", county: "Maricopa" },
  { name: "Miami", slug: "miami", region: "Central Arizona", county: "Gila" },
  { name: "Nogales", slug: "nogales", region: "Southern Arizona Border", county: "Santa Cruz" },
  { name: "Oro Valley", slug: "oro-valley", region: "Tucson Metro Area", county: "Pima" },
  { name: "Page", slug: "page", region: "Northern Arizona", county: "Coconino" },
  { name: "Paradise Valley", slug: "paradise-valley", region: "East Valley", county: "Maricopa" },
  { name: "Parker", slug: "parker", region: "Colorado River Region", county: "La Paz" },
  { name: "Patagonia", slug: "patagonia", region: "Southern Arizona", county: "Santa Cruz" },
  { name: "Payson", slug: "payson", region: "Mogollon Rim", county: "Gila" },
  { name: "Peoria", slug: "peoria", region: "West Valley", county: "Maricopa" },
  { name: "Phoenix", slug: "phoenix", region: "Valley of the Sun", county: "Maricopa" },
  { name: "Pima", slug: "pima", region: "Gila Valley", county: "Graham" },
  { name: "Pinetop-Lakeside", slug: "pinetop-lakeside", region: "White Mountains", county: "Navajo" },
  { name: "Prescott", slug: "prescott", region: "Central Highlands", county: "Yavapai" },
  { name: "Prescott Valley", slug: "prescott-valley", region: "Central Highlands", county: "Yavapai" },
  { name: "Quartzsite", slug: "quartzsite", region: "Western Arizona Desert", county: "La Paz" },
  { name: "Queen Creek", slug: "queen-creek", region: "East Valley", county: "Maricopa / Pinal" },
  { name: "Safford", slug: "safford", region: "Gila Valley", county: "Graham" },
  { name: "Sahuarita", slug: "sahuarita", region: "Tucson Metro Area", county: "Pima" },
  { name: "San Luis", slug: "san-luis", region: "Southwestern Border", county: "Yuma" },
  { name: "Scottsdale", slug: "scottsdale", region: "East Valley", county: "Maricopa" },
  { name: "Sedona", slug: "sedona", region: "Red Rock Country", county: "Coconino / Yavapai" },
  { name: "Show Low", slug: "show-low", region: "White Mountains", county: "Navajo" },
  { name: "Sierra Vista", slug: "sierra-vista", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Snowflake", slug: "snowflake", region: "White Mountains", county: "Navajo" },
  { name: "Somerton", slug: "somerton", region: "Southwestern Arizona", county: "Yuma" },
  { name: "South Tucson", slug: "south-tucson", region: "Tucson Metro Area", county: "Pima" },
  { name: "Springerville", slug: "springerville", region: "White Mountains", county: "Apache" },
  { name: "St. Johns", slug: "st-johns", region: "Northeastern Arizona", county: "Apache" },
  { name: "Star Valley", slug: "star-valley", region: "Mogollon Rim", county: "Gila" },
  { name: "Superior", slug: "superior", region: "Copper Triangle", county: "Pinal" },
  { name: "Surprise", slug: "surprise", region: "West Valley", county: "Maricopa" },
  { name: "Taylor", slug: "taylor", region: "White Mountains", county: "Navajo" },
  { name: "Tempe", slug: "tempe", region: "East Valley", county: "Maricopa" },
  { name: "Thatcher", slug: "thatcher", region: "Gila Valley", county: "Graham" },
  { name: "Tolleson", slug: "tolleson", region: "West Valley", county: "Maricopa" },
  { name: "Tombstone", slug: "tombstone", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Tucson", slug: "tucson", region: "Southern Arizona", county: "Pima" },
  { name: "Tusayan", slug: "tusayan", region: "Grand Canyon Region", county: "Coconino" },
  { name: "Wellton", slug: "wellton", region: "Southwestern Arizona", county: "Yuma" },
  { name: "Wickenburg", slug: "wickenburg", region: "Outlying Maricopa", county: "Maricopa / Yavapai" },
  { name: "Willcox", slug: "willcox", region: "Southeastern Arizona", county: "Cochise" },
  { name: "Williams", slug: "williams", region: "Northern Arizona Highlands", county: "Coconino" },
  { name: "Winkelman", slug: "winkelman", region: "Copper Basin", county: "Gila" },
  { name: "Winslow", slug: "winslow", region: "Northeastern Arizona", county: "Navajo" },
  { name: "Youngtown", slug: "youngtown", region: "West Valley", county: "Maricopa" },
  { name: "Yuma", slug: "yuma", region: "Southwestern Arizona", county: "Yuma" },
];

// Dynamic generator for all 91 Arizona cities
export function getArizonaLocationData(citySlug: string): LocationData | undefined {
  const normCity = citySlug.toLowerCase();
  const found = ARIZONA_ALL_CITIES.find((c) => c.slug === normCity);
  if (!found) return undefined;

  const cityName = found.name;
  const region = found.region;
  const county = found.county;
  
  const highAltitudeCities = [
    "flagstaff", "prescott", "prescott-valley", "sedona", "show-low",
    "pinetop-lakeside", "williams", "eagar", "springerville", "payson",
    "chino-valley", "clarkdale", "cottonwood", "dewey-humboldt", "jerome",
    "star-valley", "taylor", "snowflake", "holbrook", "winslow", "st-johns",
    "fredonia", "colorado-city", "tusayan"
  ];
  const isHighAltitude = highAltitudeCities.includes(normCity);

  const riverDesertCities = [
    "lake-havasu-city", "bullhead-city", "kingman", "yuma", "parker",
    "quartzsite", "san-luis", "somerton", "wellton", "gila-bend"
  ];
  const isRiverDesert = riverDesertCities.includes(normCity);

  let climateContext = "";
  let problem1Title = "";
  let problem1Desc = "";
  let problem2Title = "";
  let problem2Desc = "";

  if (isHighAltitude) {
    climateContext = `${cityName} is located in ${region} (${county} County) at high elevation, where winter temperatures frequently drop below freezing with seasonal snowfall alongside mild summer cooling needs. Reliable heating systems are essential.`;
    problem1Title = "Winter Gas Furnace Igniter & Flame Sensor Lockouts";
    problem1Desc = `Freezing cold snaps in ${cityName} force heating units to operate continuously, exposing cracked igniters or dirty flame sensors that trigger safety shutoffs.`;
    problem2Title = "Heat Pump Defrost Board Heavy Ice Accumulation";
    problem2Desc = `Freezing mountain snowstorms coat outdoor heat pump coils in ice when defrost control sensors or reversing valves fail in ${cityName}.`;
  } else if (isRiverDesert) {
    climateContext = `${cityName} is located in ${region} (${county} County), experiencing severe Colorado River valley heatwaves regularly exceeding 115°F to 120°F, extreme UV radiation, and heavy windblown river sand.`;
    problem1Title = "Extreme Heat Wave Compressor Contactor Pitting & Relays";
    problem1Desc = `Non-stop cooling cycles in 115°F+ heat in ${cityName} burn magnetic contactor points and swell dual-run capacitors, causing compressors to stop turning.`;
    problem2Title = "River Sand & Desert Dust Condenser Fin Occlusion";
    problem2Desc = `High winds along the desert corridors push heavy sand into outdoor AC coils in ${cityName}, choking airflow and causing high pressure head trips.`;
  } else {
    climateContext = `${cityName} is located in ${region} (${county} County), experiencing severe Sonoran Desert summer heat waves with temperatures exceeding 105°F to 115°F, intense sun exposure, and seasonal monsoon haboob sandstorms.`;
    problem1Title = "Extreme Heat Run Capacitor & Contactor Failures";
    problem1Desc = `Prolonged summer heat waves in ${cityName} destabilize dual-run capacitors and burn contactor points, causing central AC units to blow warm air.`;
    problem2Title = "Haboob Sandstorm Condenser Coil Blockage";
    problem2Desc = `Blowing desert sand and monsoon dust coat outdoor condenser fins in ${cityName}, choking airflow and triggering high pressure safety shutoffs.`;
  }

  return {
    stateSlug: "arizona",
    stateName: "Arizona",
    citySlug: normCity,
    cityName: cityName,
    metaTitle: `${cityName} AZ HVAC Service & AC Repair Connection | AirHeat Dispatch`,
    metaDesc: `Connect with independent local HVAC contractors in ${cityName}, AZ for 24/7 AC repair, furnace troubleshooting, and heat pump service. Fast phone connection hotline.`,
    intro: `AirHeat Dispatch connects ${cityName}, Arizona homeowners with independent local HVAC contractors for emergency heating and air conditioning connection across ${county} County and surrounding ${region} communities.`,
    climateContext: climateContext,
    commonProblems: [
      { title: problem1Title, desc: problem1Desc },
      { title: problem2Title, desc: problem2Desc },
      {
        title: "Monsoon Humidity Drain Line Backups",
        desc: `High outdoor humidity spikes during Arizona monsoon season produce rapid condensation runoff, creating algae blockages in ${cityName} drain pans.`,
      },
      {
        title: "Air Filter Dust Resistance & Evaporator Icing",
        desc: `Airborne desert dust rapidly clogs 1-inch air intake filters in ${cityName}, restricting CFM airflow and freezing indoor evaporator coils.`,
      },
    ],
    subAreas: [`Greater ${cityName}`, `${cityName} Metro Area`, `${county} County Region`, `${region}`],
    faqs: [
      {
        question: `How do I connect with an HVAC contractor in ${cityName}, AZ?`,
        answer: `Call (555) 839-4328 to connect with independent local HVAC service contractors serving ${cityName} and ${county} County.`,
      },
      {
        question: `What HVAC services are available for ${cityName} homeowners?`,
        answer: `Independent contractors in the ${cityName} area provide AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC installation, seasonal maintenance, heating repair, and heat pump repair.`,
      },
    ],
  };
}

// Generate complete LocationData array for ALL 91 Arizona cities
export const ARIZONA_ALL_CITIES_DATA: LocationData[] = ARIZONA_ALL_CITIES.map(
  (c) => getArizonaLocationData(c.slug)!
);

// ARIZONA_PRESET_CITIES_DATA contains all 91 Arizona cities so all 91 are prebuilt and displayed
export const ARIZONA_PRESET_CITIES_DATA: LocationData[] = ARIZONA_ALL_CITIES_DATA;
