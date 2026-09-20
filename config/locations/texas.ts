import { LocationData, StateData } from "@/types/location";

export const TEXAS_STATE_DATA: StateData = {
  stateSlug: "texas",
  stateName: "Texas",
  metaTitle: "Texas Local HVAC Service & AC Repair Connection | AirHeat Dispatch",
  metaDesc:
    "Connect with independent local HVAC contractors across Texas cities for 24/7 AC repair, furnace troubleshooting, and heating service. Fast Texas phone connection.",
  intro:
    "AirHeat Dispatch provides a free homeowner connection service across Texas. Whether your central air conditioning unit fails during extreme summer heatwaves in Houston, Dallas, or Austin, or your furnace stops working during a North Texas winter freeze, call our 24/7 hotline to connect with independent local HVAC service contractors.",
  climateOverview:
    "Texas experiences vast climatic extremes ranging from humid Gulf Coast heat in Houston and Corpus Christi to dry desert weather in El Paso, intense Central Texas summer sun in Austin and San Antonio, and severe winter cold fronts and ice storms in Dallas-Fort Worth and Lubbock. Independent local contractors understand regional Texas climate challenges and equipment strains.",
  majorCities: [
    { name: "Austin", slug: "austin", region: "Central Texas" },
    { name: "Houston", slug: "houston", region: "Gulf Coast" },
    { name: "Dallas", slug: "dallas", region: "North Texas" },
    { name: "San Antonio", slug: "san-antonio", region: "South Central" },
    { name: "Fort Worth", slug: "fort-worth", region: "North Texas" },
    { name: "El Paso", slug: "el-paso", region: "West Texas" },
    { name: "Arlington", slug: "arlington", region: "North Texas" },
    { name: "Corpus Christi", slug: "corpus-christi", region: "Coastal Bend" },
    { name: "Plano", slug: "plano", region: "North Texas" },
    { name: "Lubbock", slug: "lubbock", region: "Texas Panhandle" },
  ],
  faqs: [
    {
      question: "How do I connect with an HVAC contractor in Texas?",
      answer:
        "Call our 24/7 hotline at (555) 839-4328. AirHeat Dispatch is a free service that connects Texas homeowners with independent local HVAC contractors.",
    },
    {
      question: "Which Texas cities have HVAC coverage?",
      answer:
        "Independent contractors in our network serve major Texas metros including Austin, Houston, Dallas, San Antonio, Fort Worth, El Paso, Arlington, Corpus Christi, Plano, Lubbock, and surrounding communities.",
    },
    {
      question: "Are contractors in Texas licensed and insured?",
      answer:
        "It is the responsibility of the homeowner to verify that any hired contractor furnishes the required license and insurance mandated by the State of Texas.",
    },
  ],
};

export const TEXAS_CITIES_DATA: LocationData[] = [
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "austin",
    cityName: "Austin",
    metaTitle: "Austin TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Austin, TX for 24/7 AC repair, furnace troubleshooting, and heating service. Fast local phone connection.",
    intro:
      "AirHeat Dispatch helps Austin, Texas homeowners connect with independent local HVAC contractors. Whether your air conditioner shuts down during a scorching Central Texas summer heatwave or your heating system fails during a sudden winter freeze, call our connection hotline for prompt assistance.",
    climateContext:
      "Austin features intense summer temperatures exceeding 100°F alongside high humidity, putting immense stress on air conditioning compressors, capacitors, and drain lines. Winter cold snaps also require reliable heating systems. Local independent contractors understand Central Texas climate demands.",
    commonProblems: [
      {
        title: "AC Capacitor & Motor Failures in High Heat",
        desc: "Austin's prolonged summer heat causes electrical run capacitors and outdoor fan motors to overheat and fail, leading to warm air blowing indoors.",
      },
      {
        title: "Clogged Condensate Drain Lines",
        desc: "High outdoor humidity produces gallons of condensation daily, leading to algae buildup and clogged drain lines that trigger AC safety shutoff switches.",
      },
      {
        title: "Frozen Evaporator Coils",
        desc: "Restricted airflow from dirty filters combined with low refrigerant levels can freeze indoor evaporator coils during peak cooling months.",
      },
      {
        title: "Furnace Ignition & Heat Strip Lockouts",
        desc: "During sudden Austin winter freezes, unserviced gas furnace flame sensors or electric heat strip sequencers can lock out, leaving homes without heat.",
      },
    ],
    subAreas: [
      "Downtown Austin",
      "North Austin",
      "South Austin",
      "East Austin",
      "Westlake",
      "Round Rock",
      "Cedar Park",
      "Pflugerville",
      "Georgetown",
      "Lakeway",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Austin, TX?",
        answer:
          "Simply call (555) 839-4328. AirHeat Dispatch is a free service connecting Austin homeowners with independent local HVAC contractors.",
      },
      {
        question: "What HVAC services are available for Austin homeowners?",
        answer:
          "Independent contractors can assist with AC repair, furnace troubleshooting, seasonal tune-ups, system replacements, and heat pump service.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "houston",
    cityName: "Houston",
    metaTitle: "Houston TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Houston, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service. Fast phone hotline.",
    intro:
      "AirHeat Dispatch connects Houston, Texas homeowners with independent local HVAC service contractors. Serving the Greater Houston area with reliable heating and cooling phone connection.",
    climateContext:
      "Houston is known for oppressive Gulf Coast summer humidity, extreme heat waves, and intense rainstorms. High humidity forces air conditioning systems to run constantly to extract moisture.",
    commonProblems: [
      {
        title: "Extreme Humidity & Drain Line Backups",
        desc: "Houston's muggy climate causes condensate drain pans to fill rapidly, leading to mold buildup and water overflow safety shutoffs.",
      },
      {
        title: "Compressor Thermal Overload",
        desc: "Continuous operation during 95°F+ heat waves causes compressors to overheat and shut down.",
      },
      {
        title: "Refrigerant Line Leaks",
        desc: "Vibration and coil corrosion can cause micro-leaks in copper refrigerant lines, reducing cooling efficiency.",
      },
      {
        title: "Blower Motor Capacitor Failures",
        desc: "High indoor fan usage during long cooling seasons wears out blower motor capacitors and relays.",
      },
    ],
    subAreas: [
      "The Woodlands",
      "Sugar Land",
      "Katy",
      "Pearland",
      "Pasadena",
      "Spring",
      "Cypress",
      "Clear Lake",
      "Humble",
      "Conroe",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Houston, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Houston and surrounding communities.",
      },
      {
        question: "Why does my Houston home feel humid even when the AC is running?",
        answer:
          "If your AC unit is oversized or running short cycles, it may cool the air quickly without running long enough to pull humidity out of the air. Independent contractors can evaluate system sizing and fan speeds.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "dallas",
    cityName: "Dallas",
    metaTitle: "Dallas TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Dallas, TX for 24/7 AC repair, furnace troubleshooting, and heating assistance. Call now.",
    intro:
      "AirHeat Dispatch connects Dallas, Texas homeowners with independent local HVAC contractors. Whether dealing with North Texas summer heat or unexpected winter freezes, call our hotline for connection.",
    climateContext:
      "Dallas experiences wide temperature swings, from 100°F+ summer days to sub-freezing winter ice storms. Dual-demand heating and air conditioning systems require year-round reliability.",
    commonProblems: [
      {
        title: "Outdoor Unit Capacitor & Contactor Wear",
        desc: "Dallas heat causes contactor points to pit and run capacitors to swell, keeping the outdoor fan from starting.",
      },
      {
        title: "Winter Gas Furnace Flame Sensor Faults",
        desc: "Dust buildup on flame sensors prevents burners from igniting during North Texas cold snaps.",
      },
      {
        title: "Ductwork Insulation Leaks",
        desc: "Extreme attic heat in summer degrades duct insulation, causing thermal energy loss and reduced vent airflow.",
      },
      {
        title: "Thermostat Communication Errors",
        desc: "Power surges during spring severe weather can disrupt digital thermostat control boards.",
      },
    ],
    subAreas: [
      "Uptown Dallas",
      "Highland Park",
      "North Dallas",
      "Lake Highlands",
      "Oak Cliff",
      "Richardson",
      "Garland",
      "Mesquite",
      "Irving",
      "Carrollton",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Dallas, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC contractors serving Dallas and the DFW Metroplex.",
      },
      {
        question: "How often should I change my AC filter in Dallas?",
        answer:
          "During peak summer cooling months in Dallas, replace standard 1-inch filters every 30 days to protect indoor coils from freezing.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "san-antonio",
    cityName: "San Antonio",
    metaTitle: "San Antonio TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in San Antonio, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects San Antonio, Texas homeowners with independent local HVAC contractors. Serving Bexar County and South Central Texas with prompt phone referral matching.",
    climateContext:
      "San Antonio experiences long, dry summer heat waves paired with high humidity spells and mild winters with occasional hard freezes. Air conditioners run heavily from April through October.",
    commonProblems: [
      {
        title: "Dust & Debris Condenser Coil Clogging",
        desc: "South Texas wind and pollen build up on outdoor condenser coils, restricting heat transfer and causing high head pressure.",
      },
      {
        title: "Capacitor Failure During Heat Waves",
        desc: "Prolonged high ambient heat overloads dual-run capacitors, leaving AC units blowing warm air.",
      },
      {
        title: "Condensate Drain Line Sludge",
        desc: "Biological growth in drain pans causes water to back up, triggering ceiling leaks or safety switch shutoffs.",
      },
      {
        title: "Heat Pump Reversing Valve Faults",
        desc: "Mild winter usage relies on heat pumps, where sticking reversing valves can prevent proper mode switching.",
      },
    ],
    subAreas: [
      "Alamo Heights",
      "Stone Oak",
      "Medical Center",
      "Helotes",
      "Converse",
      "Universal City",
      "Schertz",
      "Boerne",
      "Cibolo",
      "Leon Valley",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in San Antonio, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving San Antonio and Bexar County.",
      },
      {
        question: "Can independent contractors service heat pumps in San Antonio?",
        answer:
          "Yes. Independent contractors in our network troubleshoot and repair central AC units, heat pumps, and dual-fuel systems.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "fort-worth",
    cityName: "Fort Worth",
    metaTitle: "Fort Worth TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Fort Worth, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects Fort Worth, Texas homeowners with independent local HVAC service contractors. Serving Tarrant County with reliable 24/7 phone referral matching.",
    climateContext:
      "Fort Worth features intense summer heat, frequent severe thunderstorms, and icy winter cold fronts. HVAC systems must handle heavy cooling and rapid heating transitions.",
    commonProblems: [
      {
        title: "Storm-Related Electrical Voltage Surges",
        desc: "Lightning storms in North Texas produce power spikes that damage compressor contactors and circuit boards.",
      },
      {
        title: "High Heat Motor Bearing Failure",
        desc: "Continuous summer cooling strains outdoor fan motors, leading to noisy operation or frozen bearings.",
      },
      {
        title: "Gas Furnace Igniter Cracking",
        desc: "Sub-freezing winter cold snaps force furnace igniters to cycle rapidly, leading to ceramic cracking.",
      },
      {
        title: "Air Filter Resistance & Coil Freezing",
        desc: "Restricted airflow from dirty filters causes indoor evaporator coils to freeze into a solid block of ice.",
      },
    ],
    subAreas: [
      "Cultural District",
      "TCU Area",
      "Northwest Fort Worth",
      "Keller",
      "Southlake",
      "Grapevine",
      "Burleson",
      "Mansfield",
      "Haltom City",
      "Saginaw",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Fort Worth, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Fort Worth and Tarrant County.",
      },
      {
        question: "What causes an AC compressor to stop running in Fort Worth?",
        answer:
          "A non-running compressor is commonly caused by a blown run capacitor, tripped high-pressure safety switch, or damaged contactor relay.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "el-paso",
    cityName: "El Paso",
    metaTitle: "El Paso TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in El Paso, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects El Paso, Texas homeowners with independent local HVAC service contractors across El Paso County and West Texas.",
    climateContext:
      "El Paso features dry desert heat with summer temperatures consistently over 100°F, high dust levels, and cold desert winter nights.",
    commonProblems: [
      {
        title: "Desert Dust & Dirt Coil Clogging",
        desc: "Blowing West Texas dust coats outdoor condenser fins, causing high head pressure and system shutdowns.",
      },
      {
        title: "Extreme Thermal Capacitor Stress",
        desc: "Arid summer heat overburdens outdoor run capacitors, preventing the compressor from starting.",
      },
      {
        title: "Blower Motor Dust Resistance",
        desc: "Airborne dust restricts indoor air intake filters, straining blower fan motors.",
      },
      {
        title: "Gas Furnace Ignition Lockouts",
        desc: "Desert winter night drops cause unserviced gas furnace igniters or flame sensors to fail.",
      },
    ],
    subAreas: [
      "West El Paso",
      "East El Paso",
      "Northeast El Paso",
      "Central El Paso",
      "Horizon City",
      "Socorro",
      "Canutillo",
      "San Elizario",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in El Paso, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving El Paso and West Texas.",
      },
      {
        question: "Why is outdoor coil cleaning important in El Paso?",
        answer:
          "Desert dust quickly clogs coil fins. Cleaning restores heat dissipation, lowers head pressure, and reduces electricity consumption.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "arlington",
    cityName: "Arlington",
    metaTitle: "Arlington TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Arlington, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects Arlington, Texas homeowners with independent local HVAC service contractors located between Dallas and Fort Worth.",
    climateContext:
      "Arlington experiences stifling summer heat waves, high humidity, and severe winter cold snaps requiring reliable heating and air conditioning.",
    commonProblems: [
      {
        title: "AC Run Capacitor & Contactor Burnouts",
        desc: "High summer temperatures cause capacitors to fail and contactor relay points to pit.",
      },
      {
        title: "Condensate Line Drain Blockages",
        desc: "High humidity produces heavy condensation, creating algae sludge in primary drain pans.",
      },
      {
        title: "Frozen Evaporator Coils",
        desc: "Restricted airflow from dirty filters combined with low refrigerant freezes indoor coils.",
      },
      {
        title: "Furnace Igniter & Flame Sensor Faults",
        desc: "Winter cold fronts trip gas furnace igniters or dirty flame sensors.",
      },
    ],
    subAreas: [
      "North Arlington",
      "South Arlington",
      "Pantego",
      "Dalworthington Gardens",
      "Mansfield",
      "Grand Prairie",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Arlington, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Arlington, TX.",
      },
      {
        question: "What is included in a summer AC diagnostic visit?",
        answer:
          "Independent contractors check refrigerant levels, test capacitors, measure amperage draw, clean condensate lines, and inspect airflow.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "corpus-christi",
    cityName: "Corpus Christi",
    metaTitle: "Corpus Christi TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Corpus Christi, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects Corpus Christi, Texas homeowners with independent local HVAC contractors along the Coastal Bend region.",
    climateContext:
      "Corpus Christi features high coastal humidity, salt-laden sea air, and extreme summer sun, causing rapid oxidation of outdoor HVAC components.",
    commonProblems: [
      {
        title: "Salt Air Coated Coil Corrosion",
        desc: "Coastal salt spray corrodes aluminum condenser fins and copper joints, leading to refrigerant leaks.",
      },
      {
        title: "Severe Biological Drain Line Clogs",
        desc: "Constant high humidity promotes mold growth in condensate pans, triggering safety overflow shutoffs.",
      },
      {
        title: "Electrical Disconnect Box Moisture Intrusions",
        desc: "Coastal tropical humidity causes electrical moisture buildup in outdoor disconnect switches.",
      },
      {
        title: "Heat Pump Reversing Valve Wear",
        desc: "Coastal climate reliance on heat pumps causes reversing valve solenoids to stick.",
      },
    ],
    subAreas: [
      "Padre Island",
      "Flour Bluff",
      "Calallen",
      "Portland",
      "Aransas Pass",
      "Port Aransas",
      "Ingleside",
      "Robstown",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Corpus Christi, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Corpus Christi and the Coastal Bend.",
      },
      {
        question: "How does salt air affect AC units in Corpus Christi?",
        answer:
          "Salt air accelerates metal corrosion. Independent contractors can apply protective coil coatings and perform regular freshwater coil rinses.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "plano",
    cityName: "Plano",
    metaTitle: "Plano TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Plano, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects Plano, Texas homeowners with independent local HVAC service contractors across Collin County and North Texas.",
    climateContext:
      "Plano features modern multi-story residential homes experiencing severe summer heat waves, high humidity, and winter cold snaps.",
    commonProblems: [
      {
        title: "Multi-Zone System Damper Actuator Failures",
        desc: "Zoned HVAC systems in larger homes experience motorized damper actuator failure, causing unequal room cooling.",
      },
      {
        title: "Secondary Drain Pan Overflow in Attics",
        desc: "Attic-mounted air handlers freeze or clog, filling secondary drain pans and threatening ceiling drywall.",
      },
      {
        title: "High Ambient Heat Capacitor Burnouts",
        desc: "Summer heat waves overstrain outdoor run capacitors, stopping cooling operation.",
      },
      {
        title: "Gas Furnace Ignition Lockouts",
        desc: "Winter cold fronts trip flame sensors or ignition control boards in high-efficiency furnaces.",
      },
    ],
    subAreas: [
      "West Plano",
      "East Plano",
      "Frisco",
      "Allen",
      "McKinney",
      "Richardson",
      "The Colony",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Plano, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Plano and Collin County.",
      },
      {
        question: "Can independent contractors handle multi-zone HVAC systems in Plano?",
        answer:
          "Yes. Independent contractors in our network service multi-zone central air conditioning units, zoning dampers, and heat pumps.",
      },
    ],
  },
  {
    stateSlug: "texas",
    stateName: "Texas",
    citySlug: "lubbock",
    cityName: "Lubbock",
    metaTitle: "Lubbock TX HVAC Service & AC Repair Connection | AirHeat Dispatch",
    metaDesc:
      "Connect with independent local HVAC contractors in Lubbock, TX for 24/7 AC repair, furnace troubleshooting, and heat pump service.",
    intro:
      "AirHeat Dispatch connects Lubbock, Texas homeowners with independent local HVAC service contractors. Serving the Texas South Plains with reliable heating and air conditioning phone connection.",
    climateContext:
      "Lubbock experiences drastic seasonal weather changes—hot summer days over 100°F combined with severe panhandle winter cold fronts, sub-freezing blizzards, and heavy blowing agricultural dust.",
    commonProblems: [
      {
        title: "Blowing Dust & Soil Coil Occlusion",
        desc: "South Plains high winds push dirt into outdoor condenser fins, causing high head pressure and system shutdowns.",
      },
      {
        title: "Freezing Winter Gas Furnace Lockouts",
        desc: "Sub-zero panhandle wind chills force furnaces to run continuously, exposing dirty flame sensors and worn igniters.",
      },
      {
        title: "Heat Pump Defrost Board Ice Buildup",
        desc: "Freezing winter dampness coats heat pumps in ice when defrost control sensors or reversing valves fail.",
      },
      {
        title: "Blower Motor & Filter Resistance",
        desc: "High airborne particulate levels quickly clog intake filters, causing indoor coils to freeze.",
      },
    ],
    subAreas: [
      "Wolfforth",
      "Shallowater",
      "Slaton",
      "Levelland",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Lubbock, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Lubbock and the South Plains.",
      },
      {
        question: "Why is winter heating service critical in Lubbock?",
        answer:
          "Panhandle winter cold fronts bring freezing temperatures. Pre-winter furnace and heat pump inspections ensure safe, continuous heating.",
      },
    ],
  },
];

// Master List of Incorporated Cities and Towns in Texas
export const TEXAS_ALL_CITIES: { name: string; slug: string; region: string }[] = [
  {
    "name": "Abilene",
    "slug": "abilene",
    "region": "West Texas"
  },
  {
    "name": "Addison",
    "slug": "addison",
    "region": "DFW Metro"
  },
  {
    "name": "Alamo",
    "slug": "alamo",
    "region": "South Texas"
  },
  {
    "name": "Alamo Heights",
    "slug": "alamo-heights",
    "region": "Central Texas"
  },
  {
    "name": "Alba",
    "slug": "alba",
    "region": "East Texas"
  },
  {
    "name": "Albany",
    "slug": "albany",
    "region": "West Texas"
  },
  {
    "name": "Aledo",
    "slug": "aledo",
    "region": "DFW Metro"
  },
  {
    "name": "Alice",
    "slug": "alice",
    "region": "South Texas"
  },
  {
    "name": "Allen",
    "slug": "allen",
    "region": "DFW Metro"
  },
  {
    "name": "Alma",
    "slug": "alma",
    "region": "DFW Metro"
  },
  {
    "name": "Alpine",
    "slug": "alpine",
    "region": "West Texas"
  },
  {
    "name": "Alto",
    "slug": "alto",
    "region": "East Texas"
  },
  {
    "name": "Alton",
    "slug": "alton",
    "region": "South Texas"
  },
  {
    "name": "Alvarado",
    "slug": "alvarado",
    "region": "DFW Metro"
  },
  {
    "name": "Alvin",
    "slug": "alvin",
    "region": "Gulf Coast"
  },
  {
    "name": "Alvord",
    "slug": "alvord",
    "region": "DFW Metro"
  },
  {
    "name": "Amarillo",
    "slug": "amarillo",
    "region": "Texas Panhandle"
  },
  {
    "name": "Amherst",
    "slug": "amherst",
    "region": "High Plains"
  },
  {
    "name": "Anahuac",
    "slug": "anahuac",
    "region": "Gulf Coast"
  },
  {
    "name": "Anson",
    "slug": "anson",
    "region": "West Texas"
  },
  {
    "name": "Anthony",
    "slug": "anthony",
    "region": "West Texas"
  },
  {
    "name": "Anton",
    "slug": "anton",
    "region": "High Plains"
  },
  {
    "name": "Aquilla",
    "slug": "aquilla",
    "region": "Central Texas"
  },
  {
    "name": "Aransas Pass",
    "slug": "aransas-pass",
    "region": "Coastal Bend"
  },
  {
    "name": "Archer City",
    "slug": "archer-city",
    "region": "North Texas"
  },
  {
    "name": "Arcola",
    "slug": "arcola",
    "region": "Gulf Coast"
  },
  {
    "name": "Argyle",
    "slug": "argyle",
    "region": "DFW Metro"
  },
  {
    "name": "Arlington",
    "slug": "arlington",
    "region": "DFW Metro"
  },
  {
    "name": "Arp",
    "slug": "arp",
    "region": "East Texas"
  },
  {
    "name": "Asherton",
    "slug": "asherton",
    "region": "South Texas"
  },
  {
    "name": "Aspermont",
    "slug": "aspermont",
    "region": "West Texas"
  },
  {
    "name": "Athens",
    "slug": "athens",
    "region": "East Texas"
  },
  {
    "name": "Atlanta",
    "slug": "atlanta",
    "region": "East Texas"
  },
  {
    "name": "Aubrey",
    "slug": "aubrey",
    "region": "DFW Metro"
  },
  {
    "name": "Austin",
    "slug": "austin",
    "region": "Central Texas"
  },
  {
    "name": "Azle",
    "slug": "azle",
    "region": "DFW Metro"
  },
  {
    "name": "Baird",
    "slug": "baird",
    "region": "West Texas"
  },
  {
    "name": "Balch Springs",
    "slug": "balch-springs",
    "region": "DFW Metro"
  },
  {
    "name": "Balcones Heights",
    "slug": "balcones-heights",
    "region": "Central Texas"
  },
  {
    "name": "Ballinger",
    "slug": "ballinger",
    "region": "West Texas"
  },
  {
    "name": "Bangs",
    "slug": "bangs",
    "region": "West Texas"
  },
  {
    "name": "Bardwell",
    "slug": "bardwell",
    "region": "DFW Metro"
  },
  {
    "name": "Barry",
    "slug": "barry",
    "region": "DFW Metro"
  },
  {
    "name": "Barstow",
    "slug": "barstow",
    "region": "Permian Basin"
  },
  {
    "name": "Bartlett",
    "slug": "bartlett",
    "region": "Central Texas"
  },
  {
    "name": "Bastrop",
    "slug": "bastrop",
    "region": "Central Texas"
  },
  {
    "name": "Bay City",
    "slug": "bay-city",
    "region": "Gulf Coast"
  },
  {
    "name": "Baytown",
    "slug": "baytown",
    "region": "Gulf Coast"
  },
  {
    "name": "Bayview",
    "slug": "bayview",
    "region": "South Texas"
  },
  {
    "name": "Beach City",
    "slug": "beach-city",
    "region": "Gulf Coast"
  },
  {
    "name": "Beasley",
    "slug": "beasley",
    "region": "Gulf Coast"
  },
  {
    "name": "Beaumont",
    "slug": "beaumont",
    "region": "Golden Triangle"
  },
  {
    "name": "Beckville",
    "slug": "beckville",
    "region": "East Texas"
  },
  {
    "name": "Bedford",
    "slug": "bedford",
    "region": "DFW Metro"
  },
  {
    "name": "Bee Cave",
    "slug": "bee-cave",
    "region": "Central Texas"
  },
  {
    "name": "Beeville",
    "slug": "beeville",
    "region": "South Texas"
  },
  {
    "name": "Bellaire",
    "slug": "bellaire",
    "region": "Gulf Coast"
  },
  {
    "name": "Bellevue",
    "slug": "bellevue",
    "region": "North Texas"
  },
  {
    "name": "Bellmead",
    "slug": "bellmead",
    "region": "Central Texas"
  },
  {
    "name": "Bells",
    "slug": "bells",
    "region": "North Texas"
  },
  {
    "name": "Bellville",
    "slug": "bellville",
    "region": "Southeast Texas"
  },
  {
    "name": "Belton",
    "slug": "belton",
    "region": "Central Texas"
  },
  {
    "name": "Benavides",
    "slug": "benavides",
    "region": "South Texas"
  },
  {
    "name": "Benbrook",
    "slug": "benbrook",
    "region": "DFW Metro"
  },
  {
    "name": "Benjamin",
    "slug": "benjamin",
    "region": "West Texas"
  },
  {
    "name": "Berryville",
    "slug": "berryville",
    "region": "East Texas"
  },
  {
    "name": "Bertram",
    "slug": "bertram",
    "region": "Central Texas"
  },
  {
    "name": "Beverly Hills",
    "slug": "beverly-hills",
    "region": "Central Texas"
  },
  {
    "name": "Big Lake",
    "slug": "big-lake",
    "region": "Permian Basin"
  },
  {
    "name": "Big Sandy",
    "slug": "big-sandy",
    "region": "East Texas"
  },
  {
    "name": "Big Spring",
    "slug": "big-spring",
    "region": "West Texas"
  },
  {
    "name": "Bishop",
    "slug": "bishop",
    "region": "Coastal Bend"
  },
  {
    "name": "Blackwell",
    "slug": "blackwell",
    "region": "West Texas"
  },
  {
    "name": "Blanco",
    "slug": "blanco",
    "region": "Hill Country"
  },
  {
    "name": "Blanket",
    "slug": "blanket",
    "region": "Central Texas"
  },
  {
    "name": "Bloomburg",
    "slug": "bloomburg",
    "region": "East Texas"
  },
  {
    "name": "Blooming Grove",
    "slug": "blooming-grove",
    "region": "DFW Metro"
  },
  {
    "name": "Blossom",
    "slug": "blossom",
    "region": "East Texas"
  },
  {
    "name": "Blue Mound",
    "slug": "blue-mound",
    "region": "DFW Metro"
  },
  {
    "name": "Blue Ridge",
    "slug": "blue-ridge",
    "region": "DFW Metro"
  },
  {
    "name": "Boerne",
    "slug": "boerne",
    "region": "Hill Country"
  },
  {
    "name": "Bogata",
    "slug": "bogata",
    "region": "East Texas"
  },
  {
    "name": "Bonham",
    "slug": "bonham",
    "region": "North Texas"
  },
  {
    "name": "Booker",
    "slug": "booker",
    "region": "Texas Panhandle"
  },
  {
    "name": "Borger",
    "slug": "borger",
    "region": "Texas Panhandle"
  },
  {
    "name": "Bovina",
    "slug": "bovina",
    "region": "High Plains"
  },
  {
    "name": "Bowie",
    "slug": "bowie",
    "region": "North Texas"
  },
  {
    "name": "Boyd",
    "slug": "boyd",
    "region": "DFW Metro"
  },
  {
    "name": "Brackettville",
    "slug": "brackettville",
    "region": "South Texas"
  },
  {
    "name": "Brady",
    "slug": "brady",
    "region": "Central Texas"
  },
  {
    "name": "Brazoria",
    "slug": "brazoria",
    "region": "Gulf Coast"
  },
  {
    "name": "Breckenridge",
    "slug": "breckenridge",
    "region": "West Texas"
  },
  {
    "name": "Bremond",
    "slug": "bremond",
    "region": "Central Texas"
  },
  {
    "name": "Brenham",
    "slug": "brenham",
    "region": "Southeast Texas"
  },
  {
    "name": "Briarcliff",
    "slug": "briarcliff",
    "region": "Central Texas"
  },
  {
    "name": "Bridge City",
    "slug": "bridge-city",
    "region": "Golden Triangle"
  },
  {
    "name": "Bridgeport",
    "slug": "bridgeport",
    "region": "DFW Metro"
  },
  {
    "name": "Bronte",
    "slug": "bronte",
    "region": "West Texas"
  },
  {
    "name": "Brookshire",
    "slug": "brookshire",
    "region": "Gulf Coast"
  },
  {
    "name": "Brookside Village",
    "slug": "brookside-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Brownfield",
    "slug": "brownfield",
    "region": "High Plains"
  },
  {
    "name": "Brownsboro",
    "slug": "brownsboro",
    "region": "East Texas"
  },
  {
    "name": "Brownsville",
    "slug": "brownsville",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Brownwood",
    "slug": "brownwood",
    "region": "Central Texas"
  },
  {
    "name": "Bruceville-Eddy",
    "slug": "bruceville-eddy",
    "region": "Central Texas"
  },
  {
    "name": "Bryan",
    "slug": "bryan",
    "region": "Brazos Valley"
  },
  {
    "name": "Bryson",
    "slug": "bryson",
    "region": "North Texas"
  },
  {
    "name": "Buda",
    "slug": "buda",
    "region": "Central Texas"
  },
  {
    "name": "Buffalo",
    "slug": "buffalo",
    "region": "East Texas"
  },
  {
    "name": "Buffalo Gap",
    "slug": "buffalo-gap",
    "region": "West Texas"
  },
  {
    "name": "Bullard",
    "slug": "bullard",
    "region": "East Texas"
  },
  {
    "name": "Bulverde",
    "slug": "bulverde",
    "region": "Hill Country"
  },
  {
    "name": "Bunker Hill Village",
    "slug": "bunker-hill-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Burkburnett",
    "slug": "burkburnett",
    "region": "North Texas"
  },
  {
    "name": "Burleson",
    "slug": "burleson",
    "region": "DFW Metro"
  },
  {
    "name": "Burnet",
    "slug": "burnet",
    "region": "Hill Country"
  },
  {
    "name": "Byers",
    "slug": "byers",
    "region": "North Texas"
  },
  {
    "name": "Bynum",
    "slug": "bynum",
    "region": "Central Texas"
  },
  {
    "name": "Cactus",
    "slug": "cactus",
    "region": "Texas Panhandle"
  },
  {
    "name": "Caddo Mills",
    "slug": "caddo-mills",
    "region": "DFW Metro"
  },
  {
    "name": "Caldwell",
    "slug": "caldwell",
    "region": "Brazos Valley"
  },
  {
    "name": "Callisburg",
    "slug": "callisburg",
    "region": "North Texas"
  },
  {
    "name": "Calvert",
    "slug": "calvert",
    "region": "Central Texas"
  },
  {
    "name": "Cameron",
    "slug": "cameron",
    "region": "Central Texas"
  },
  {
    "name": "Camp Wood",
    "slug": "camp-wood",
    "region": "Hill Country"
  },
  {
    "name": "Campbell",
    "slug": "campbell",
    "region": "East Texas"
  },
  {
    "name": "Canadian",
    "slug": "canadian",
    "region": "Texas Panhandle"
  },
  {
    "name": "Canutillo",
    "slug": "canutillo",
    "region": "West Texas"
  },
  {
    "name": "Canyon",
    "slug": "canyon",
    "region": "Texas Panhandle"
  },
  {
    "name": "Canton",
    "slug": "canton",
    "region": "East Texas"
  },
  {
    "name": "Carrizo Springs",
    "slug": "carrizo-springs",
    "region": "South Texas"
  },
  {
    "name": "Carrollton",
    "slug": "carrollton",
    "region": "DFW Metro"
  },
  {
    "name": "Carthage",
    "slug": "carthage",
    "region": "East Texas"
  },
  {
    "name": "Castle Hills",
    "slug": "castle-hills",
    "region": "Central Texas"
  },
  {
    "name": "Castroville",
    "slug": "castroville",
    "region": "South Texas"
  },
  {
    "name": "Cedar Hill",
    "slug": "cedar-hill",
    "region": "DFW Metro"
  },
  {
    "name": "Cedar Park",
    "slug": "cedar-park",
    "region": "Central Texas"
  },
  {
    "name": "Celeste",
    "slug": "celeste",
    "region": "DFW Metro"
  },
  {
    "name": "Celina",
    "slug": "celina",
    "region": "DFW Metro"
  },
  {
    "name": "Centerville",
    "slug": "centerville",
    "region": "East Texas"
  },
  {
    "name": "Chandler",
    "slug": "chandler",
    "region": "East Texas"
  },
  {
    "name": "Channelview",
    "slug": "channelview",
    "region": "Gulf Coast"
  },
  {
    "name": "Channing",
    "slug": "channing",
    "region": "Texas Panhandle"
  },
  {
    "name": "Charlotte",
    "slug": "charlotte",
    "region": "South Texas"
  },
  {
    "name": "Chester",
    "slug": "chester",
    "region": "East Texas"
  },
  {
    "name": "Chico",
    "slug": "chico",
    "region": "DFW Metro"
  },
  {
    "name": "Childress",
    "slug": "childress",
    "region": "Texas Panhandle"
  },
  {
    "name": "Chillicothe",
    "slug": "chillicothe",
    "region": "North Texas"
  },
  {
    "name": "China",
    "slug": "china",
    "region": "Golden Triangle"
  },
  {
    "name": "China Grove",
    "slug": "china-grove",
    "region": "Central Texas"
  },
  {
    "name": "Chireno",
    "slug": "chireno",
    "region": "East Texas"
  },
  {
    "name": "Christine",
    "slug": "christine",
    "region": "South Texas"
  },
  {
    "name": "Cibolo",
    "slug": "cibolo",
    "region": "Central Texas"
  },
  {
    "name": "Cisco",
    "slug": "cisco",
    "region": "West Texas"
  },
  {
    "name": "Clarendon",
    "slug": "clarendon",
    "region": "Texas Panhandle"
  },
  {
    "name": "Clarksville",
    "slug": "clarksville",
    "region": "East Texas"
  },
  {
    "name": "Claude",
    "slug": "claude",
    "region": "Texas Panhandle"
  },
  {
    "name": "Clear Lake Shores",
    "slug": "clear-lake-shores",
    "region": "Gulf Coast"
  },
  {
    "name": "Cleburne",
    "slug": "cleburne",
    "region": "DFW Metro"
  },
  {
    "name": "Cleveland",
    "slug": "cleveland",
    "region": "East Texas"
  },
  {
    "name": "Clifton",
    "slug": "clifton",
    "region": "Central Texas"
  },
  {
    "name": "Clint",
    "slug": "clint",
    "region": "West Texas"
  },
  {
    "name": "Clute",
    "slug": "clute",
    "region": "Gulf Coast"
  },
  {
    "name": "Clyde",
    "slug": "clyde",
    "region": "West Texas"
  },
  {
    "name": "Coahoma",
    "slug": "coahoma",
    "region": "West Texas"
  },
  {
    "name": "Cockrell Hill",
    "slug": "cockrell-hill",
    "region": "DFW Metro"
  },
  {
    "name": "Coldspring",
    "slug": "coldspring",
    "region": "East Texas"
  },
  {
    "name": "Coleman",
    "slug": "coleman",
    "region": "West Texas"
  },
  {
    "name": "College Station",
    "slug": "college-station",
    "region": "Brazos Valley"
  },
  {
    "name": "Colleyville",
    "slug": "colleyville",
    "region": "DFW Metro"
  },
  {
    "name": "Collinsville",
    "slug": "collinsville",
    "region": "North Texas"
  },
  {
    "name": "Colmesneil",
    "slug": "colmesneil",
    "region": "East Texas"
  },
  {
    "name": "Colorado City",
    "slug": "colorado-city",
    "region": "West Texas"
  },
  {
    "name": "Columbus",
    "slug": "columbus",
    "region": "Southeast Texas"
  },
  {
    "name": "Comanche",
    "slug": "comanche",
    "region": "Central Texas"
  },
  {
    "name": "Combes",
    "slug": "combes",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Combine",
    "slug": "combine",
    "region": "DFW Metro"
  },
  {
    "name": "Commerce",
    "slug": "commerce",
    "region": "DFW Metro"
  },
  {
    "name": "Como",
    "slug": "como",
    "region": "East Texas"
  },
  {
    "name": "Conroe",
    "slug": "conroe",
    "region": "Gulf Coast"
  },
  {
    "name": "Converse",
    "slug": "converse",
    "region": "Central Texas"
  },
  {
    "name": "Coolidge",
    "slug": "coolidge",
    "region": "Central Texas"
  },
  {
    "name": "Cooper",
    "slug": "cooper",
    "region": "East Texas"
  },
  {
    "name": "Coppell",
    "slug": "coppell",
    "region": "DFW Metro"
  },
  {
    "name": "Copper Canyon",
    "slug": "copper-canyon",
    "region": "DFW Metro"
  },
  {
    "name": "Copperas Cove",
    "slug": "copperas-cove",
    "region": "Central Texas"
  },
  {
    "name": "Corinth",
    "slug": "corinth",
    "region": "DFW Metro"
  },
  {
    "name": "Corpus Christi",
    "slug": "corpus-christi",
    "region": "Coastal Bend"
  },
  {
    "name": "Corrigan",
    "slug": "corrigan",
    "region": "East Texas"
  },
  {
    "name": "Corsicana",
    "slug": "corsicana",
    "region": "DFW Metro"
  },
  {
    "name": "Cotulla",
    "slug": "cotulla",
    "region": "South Texas"
  },
  {
    "name": "Crandall",
    "slug": "crandall",
    "region": "DFW Metro"
  },
  {
    "name": "Crane",
    "slug": "crane",
    "region": "Permian Basin"
  },
  {
    "name": "Crawford",
    "slug": "crawford",
    "region": "Central Texas"
  },
  {
    "name": "Creedmoor",
    "slug": "creedmoor",
    "region": "Central Texas"
  },
  {
    "name": "Crockett",
    "slug": "crockett",
    "region": "East Texas"
  },
  {
    "name": "Crosbyton",
    "slug": "crosbyton",
    "region": "High Plains"
  },
  {
    "name": "Cross Plains",
    "slug": "cross-plains",
    "region": "West Texas"
  },
  {
    "name": "Cross Roads",
    "slug": "cross-roads",
    "region": "DFW Metro"
  },
  {
    "name": "Crowell",
    "slug": "crowell",
    "region": "North Texas"
  },
  {
    "name": "Crowley",
    "slug": "crowley",
    "region": "DFW Metro"
  },
  {
    "name": "Crystal City",
    "slug": "crystal-city",
    "region": "South Texas"
  },
  {
    "name": "Cuero",
    "slug": "cuero",
    "region": "South Texas"
  },
  {
    "name": "Cumby",
    "slug": "cumby",
    "region": "East Texas"
  },
  {
    "name": "Cushing",
    "slug": "cushing",
    "region": "East Texas"
  },
  {
    "name": "Cut and Shoot",
    "slug": "cut-and-shoot",
    "region": "Gulf Coast"
  },
  {
    "name": "Daingerfield",
    "slug": "daingerfield",
    "region": "East Texas"
  },
  {
    "name": "Daisetta",
    "slug": "daisetta",
    "region": "East Texas"
  },
  {
    "name": "Dalhart",
    "slug": "dalhart",
    "region": "Texas Panhandle"
  },
  {
    "name": "Dallas",
    "slug": "dallas",
    "region": "DFW Metro"
  },
  {
    "name": "Danbury",
    "slug": "danbury",
    "region": "Gulf Coast"
  },
  {
    "name": "Dawson",
    "slug": "dawson",
    "region": "DFW Metro"
  },
  {
    "name": "Dayton",
    "slug": "dayton",
    "region": "Gulf Coast"
  },
  {
    "name": "De Kalb",
    "slug": "de-kalb",
    "region": "East Texas"
  },
  {
    "name": "De Leon",
    "slug": "de-leon",
    "region": "Central Texas"
  },
  {
    "name": "DeSoto",
    "slug": "desoto",
    "region": "DFW Metro"
  },
  {
    "name": "Decatur",
    "slug": "decatur",
    "region": "DFW Metro"
  },
  {
    "name": "Deer Park",
    "slug": "deer-park",
    "region": "Gulf Coast"
  },
  {
    "name": "Del Rio",
    "slug": "del-rio",
    "region": "South Texas"
  },
  {
    "name": "Denison",
    "slug": "denison",
    "region": "North Texas"
  },
  {
    "name": "Denton",
    "slug": "denton",
    "region": "DFW Metro"
  },
  {
    "name": "Denver City",
    "slug": "denver-city",
    "region": "High Plains"
  },
  {
    "name": "Deport",
    "slug": "deport",
    "region": "East Texas"
  },
  {
    "name": "Detroit",
    "slug": "detroit",
    "region": "East Texas"
  },
  {
    "name": "Devine",
    "slug": "devine",
    "region": "South Texas"
  },
  {
    "name": "Diboll",
    "slug": "diboll",
    "region": "East Texas"
  },
  {
    "name": "Dickens",
    "slug": "dickens",
    "region": "High Plains"
  },
  {
    "name": "Dilley",
    "slug": "dilley",
    "region": "South Texas"
  },
  {
    "name": "Dimmitt",
    "slug": "dimmitt",
    "region": "High Plains"
  },
  {
    "name": "Dodd City",
    "slug": "dodd-city",
    "region": "North Texas"
  },
  {
    "name": "Dodson",
    "slug": "dodson",
    "region": "Texas Panhandle"
  },
  {
    "name": "Donna",
    "slug": "donna",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Double Oak",
    "slug": "double-oak",
    "region": "DFW Metro"
  },
  {
    "name": "Dripping Springs",
    "slug": "dripping-springs",
    "region": "Hill Country"
  },
  {
    "name": "Driscoll",
    "slug": "driscoll",
    "region": "Coastal Bend"
  },
  {
    "name": "Dublin",
    "slug": "dublin",
    "region": "Central Texas"
  },
  {
    "name": "Dumas",
    "slug": "dumas",
    "region": "Texas Panhandle"
  },
  {
    "name": "Duncanville",
    "slug": "duncanville",
    "region": "DFW Metro"
  },
  {
    "name": "Eagle Lake",
    "slug": "eagle-lake",
    "region": "Southeast Texas"
  },
  {
    "name": "Eagle Pass",
    "slug": "eagle-pass",
    "region": "South Texas"
  },
  {
    "name": "Early",
    "slug": "early",
    "region": "Central Texas"
  },
  {
    "name": "Earth",
    "slug": "earth",
    "region": "High Plains"
  },
  {
    "name": "East Bernard",
    "slug": "east-bernard",
    "region": "Gulf Coast"
  },
  {
    "name": "Eastland",
    "slug": "eastland",
    "region": "West Texas"
  },
  {
    "name": "Easton",
    "slug": "easton",
    "region": "East Texas"
  },
  {
    "name": "Edcouch",
    "slug": "edcouch",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Eden",
    "slug": "eden",
    "region": "West Texas"
  },
  {
    "name": "Edgecliff Village",
    "slug": "edgecliff-village",
    "region": "DFW Metro"
  },
  {
    "name": "Edgewood",
    "slug": "edgewood",
    "region": "East Texas"
  },
  {
    "name": "Edinburg",
    "slug": "edinburg",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Edna",
    "slug": "edna",
    "region": "Gulf Coast"
  },
  {
    "name": "Edom",
    "slug": "edom",
    "region": "East Texas"
  },
  {
    "name": "El Campo",
    "slug": "el-campo",
    "region": "Gulf Coast"
  },
  {
    "name": "El Cenizo",
    "slug": "el-cenizo",
    "region": "South Texas"
  },
  {
    "name": "El Lago",
    "slug": "el-lago",
    "region": "Gulf Coast"
  },
  {
    "name": "El Paso",
    "slug": "el-paso",
    "region": "West Texas"
  },
  {
    "name": "Eldorado",
    "slug": "eldorado",
    "region": "West Texas"
  },
  {
    "name": "Electra",
    "slug": "electra",
    "region": "North Texas"
  },
  {
    "name": "Elgin",
    "slug": "elgin",
    "region": "Central Texas"
  },
  {
    "name": "Elkhart",
    "slug": "elkhart",
    "region": "East Texas"
  },
  {
    "name": "Elmendorf",
    "slug": "elmendorf",
    "region": "Central Texas"
  },
  {
    "name": "Elsa",
    "slug": "elsa",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Emory",
    "slug": "emory",
    "region": "East Texas"
  },
  {
    "name": "Encinal",
    "slug": "encinal",
    "region": "South Texas"
  },
  {
    "name": "Ennis",
    "slug": "ennis",
    "region": "DFW Metro"
  },
  {
    "name": "Euless",
    "slug": "euless",
    "region": "DFW Metro"
  },
  {
    "name": "Eustace",
    "slug": "eustace",
    "region": "East Texas"
  },
  {
    "name": "Evant",
    "slug": "evant",
    "region": "Central Texas"
  },
  {
    "name": "Everman",
    "slug": "everman",
    "region": "DFW Metro"
  },
  {
    "name": "Fair Oaks Ranch",
    "slug": "fair-oaks-ranch",
    "region": "Hill Country"
  },
  {
    "name": "Fairfield",
    "slug": "fairfield",
    "region": "East Texas"
  },
  {
    "name": "Falfurrias",
    "slug": "falfurrias",
    "region": "South Texas"
  },
  {
    "name": "Falls City",
    "slug": "falls-city",
    "region": "South Texas"
  },
  {
    "name": "Farmers Branch",
    "slug": "farmers-branch",
    "region": "DFW Metro"
  },
  {
    "name": "Farmersville",
    "slug": "farmersville",
    "region": "DFW Metro"
  },
  {
    "name": "Farwell",
    "slug": "farwell",
    "region": "High Plains"
  },
  {
    "name": "Fate",
    "slug": "fate",
    "region": "DFW Metro"
  },
  {
    "name": "Fayetteville",
    "slug": "fayetteville",
    "region": "Southeast Texas"
  },
  {
    "name": "Ferris",
    "slug": "ferris",
    "region": "DFW Metro"
  },
  {
    "name": "Flatonia",
    "slug": "flatonia",
    "region": "Central Texas"
  },
  {
    "name": "Florence",
    "slug": "florence",
    "region": "Central Texas"
  },
  {
    "name": "Floresville",
    "slug": "floresville",
    "region": "South Texas"
  },
  {
    "name": "Flower Mound",
    "slug": "flower-mound",
    "region": "DFW Metro"
  },
  {
    "name": "Floydada",
    "slug": "floydada",
    "region": "High Plains"
  },
  {
    "name": "Follett",
    "slug": "follett",
    "region": "Texas Panhandle"
  },
  {
    "name": "Forest Hill",
    "slug": "forest-hill",
    "region": "DFW Metro"
  },
  {
    "name": "Forney",
    "slug": "forney",
    "region": "DFW Metro"
  },
  {
    "name": "Fort Stockton",
    "slug": "fort-stockton",
    "region": "West Texas"
  },
  {
    "name": "Fort Worth",
    "slug": "fort-worth",
    "region": "DFW Metro"
  },
  {
    "name": "Franklin",
    "slug": "franklin",
    "region": "Brazos Valley"
  },
  {
    "name": "Frankston",
    "slug": "frankston",
    "region": "East Texas"
  },
  {
    "name": "Fredericksburg",
    "slug": "fredericksburg",
    "region": "Hill Country"
  },
  {
    "name": "Freeport",
    "slug": "freeport",
    "region": "Gulf Coast"
  },
  {
    "name": "Freer",
    "slug": "freer",
    "region": "South Texas"
  },
  {
    "name": "Friona",
    "slug": "friona",
    "region": "High Plains"
  },
  {
    "name": "Frisco",
    "slug": "frisco",
    "region": "DFW Metro"
  },
  {
    "name": "Fritch",
    "slug": "fritch",
    "region": "Texas Panhandle"
  },
  {
    "name": "Frost",
    "slug": "frost",
    "region": "DFW Metro"
  },
  {
    "name": "Fruitvale",
    "slug": "fruitvale",
    "region": "East Texas"
  },
  {
    "name": "Fulshear",
    "slug": "fulshear",
    "region": "Gulf Coast"
  },
  {
    "name": "Fulton",
    "slug": "fulton",
    "region": "Coastal Bend"
  },
  {
    "name": "Gainesville",
    "slug": "gainesville",
    "region": "North Texas"
  },
  {
    "name": "Galena Park",
    "slug": "galena-park",
    "region": "Gulf Coast"
  },
  {
    "name": "Galveston",
    "slug": "galveston",
    "region": "Gulf Coast"
  },
  {
    "name": "Ganado",
    "slug": "ganado",
    "region": "Gulf Coast"
  },
  {
    "name": "Garland",
    "slug": "garland",
    "region": "DFW Metro"
  },
  {
    "name": "Garrett",
    "slug": "garrett",
    "region": "DFW Metro"
  },
  {
    "name": "Garrison",
    "slug": "garrison",
    "region": "East Texas"
  },
  {
    "name": "Gatesville",
    "slug": "gatesville",
    "region": "Central Texas"
  },
  {
    "name": "George West",
    "slug": "george-west",
    "region": "South Texas"
  },
  {
    "name": "Georgetown",
    "slug": "georgetown",
    "region": "Central Texas"
  },
  {
    "name": "Giddings",
    "slug": "giddings",
    "region": "Central Texas"
  },
  {
    "name": "Gilmer",
    "slug": "gilmer",
    "region": "East Texas"
  },
  {
    "name": "Gladewater",
    "slug": "gladewater",
    "region": "East Texas"
  },
  {
    "name": "Glen Rose",
    "slug": "glen-rose",
    "region": "Central Texas"
  },
  {
    "name": "Glenn Heights",
    "slug": "glenn-heights",
    "region": "DFW Metro"
  },
  {
    "name": "Godley",
    "slug": "godley",
    "region": "DFW Metro"
  },
  {
    "name": "Goldsmith",
    "slug": "goldsmith",
    "region": "Permian Basin"
  },
  {
    "name": "Goldthwaite",
    "slug": "goldthwaite",
    "region": "Central Texas"
  },
  {
    "name": "Goliad",
    "slug": "goliad",
    "region": "South Texas"
  },
  {
    "name": "Gonzales",
    "slug": "gonzales",
    "region": "South Texas"
  },
  {
    "name": "Goodrich",
    "slug": "goodrich",
    "region": "East Texas"
  },
  {
    "name": "Gordon",
    "slug": "gordon",
    "region": "West Texas"
  },
  {
    "name": "Goree",
    "slug": "goree",
    "region": "North Texas"
  },
  {
    "name": "Gorman",
    "slug": "gorman",
    "region": "Central Texas"
  },
  {
    "name": "Graford",
    "slug": "graford",
    "region": "North Texas"
  },
  {
    "name": "Graham",
    "slug": "graham",
    "region": "North Texas"
  },
  {
    "name": "Granbury",
    "slug": "granbury",
    "region": "DFW Metro"
  },
  {
    "name": "Grand Prairie",
    "slug": "grand-prairie",
    "region": "DFW Metro"
  },
  {
    "name": "Grand Saline",
    "slug": "grand-saline",
    "region": "East Texas"
  },
  {
    "name": "Grandfalls",
    "slug": "grandfalls",
    "region": "Permian Basin"
  },
  {
    "name": "Grandview",
    "slug": "grandview",
    "region": "DFW Metro"
  },
  {
    "name": "Granger",
    "slug": "granger",
    "region": "Central Texas"
  },
  {
    "name": "Granite Shoals",
    "slug": "granite-shoals",
    "region": "Hill Country"
  },
  {
    "name": "Grapeland",
    "slug": "grapeland",
    "region": "East Texas"
  },
  {
    "name": "Grapevine",
    "slug": "grapevine",
    "region": "DFW Metro"
  },
  {
    "name": "Greenville",
    "slug": "greenville",
    "region": "DFW Metro"
  },
  {
    "name": "Gregory",
    "slug": "gregory",
    "region": "Coastal Bend"
  },
  {
    "name": "Grey Forest",
    "slug": "grey-forest",
    "region": "Central Texas"
  },
  {
    "name": "Groesbeck",
    "slug": "groesbeck",
    "region": "Central Texas"
  },
  {
    "name": "Groom",
    "slug": "groom",
    "region": "Texas Panhandle"
  },
  {
    "name": "Groves",
    "slug": "groves",
    "region": "Golden Triangle"
  },
  {
    "name": "Groveton",
    "slug": "groveton",
    "region": "East Texas"
  },
  {
    "name": "Gruver",
    "slug": "gruver",
    "region": "Texas Panhandle"
  },
  {
    "name": "Gun Barrel City",
    "slug": "gun-barrel-city",
    "region": "East Texas"
  },
  {
    "name": "Gunter",
    "slug": "gunter",
    "region": "North Texas"
  },
  {
    "name": "Hale Center",
    "slug": "hale-center",
    "region": "High Plains"
  },
  {
    "name": "Hallettsville",
    "slug": "hallettsville",
    "region": "South Texas"
  },
  {
    "name": "Hallsville",
    "slug": "hallsville",
    "region": "East Texas"
  },
  {
    "name": "Haltom City",
    "slug": "haltom-city",
    "region": "DFW Metro"
  },
  {
    "name": "Hamilton",
    "slug": "hamilton",
    "region": "Central Texas"
  },
  {
    "name": "Hamlin",
    "slug": "hamlin",
    "region": "West Texas"
  },
  {
    "name": "Happy",
    "slug": "happy",
    "region": "Texas Panhandle"
  },
  {
    "name": "Hardin",
    "slug": "hardin",
    "region": "East Texas"
  },
  {
    "name": "Harker Heights",
    "slug": "harker-heights",
    "region": "Central Texas"
  },
  {
    "name": "Harlingen",
    "slug": "harlingen",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Hart",
    "slug": "hart",
    "region": "High Plains"
  },
  {
    "name": "Haskell",
    "slug": "haskell",
    "region": "West Texas"
  },
  {
    "name": "Haslet",
    "slug": "haslet",
    "region": "DFW Metro"
  },
  {
    "name": "Hawkins",
    "slug": "hawkins",
    "region": "East Texas"
  },
  {
    "name": "Hawley",
    "slug": "hawley",
    "region": "West Texas"
  },
  {
    "name": "Hearne",
    "slug": "hearne",
    "region": "Brazos Valley"
  },
  {
    "name": "Heath",
    "slug": "heath",
    "region": "DFW Metro"
  },
  {
    "name": "Hedley",
    "slug": "hedley",
    "region": "Texas Panhandle"
  },
  {
    "name": "Hedwig Village",
    "slug": "hedwig-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Helotes",
    "slug": "helotes",
    "region": "Central Texas"
  },
  {
    "name": "Hemphill",
    "slug": "hemphill",
    "region": "East Texas"
  },
  {
    "name": "Hempstead",
    "slug": "hempstead",
    "region": "Gulf Coast"
  },
  {
    "name": "Henderson",
    "slug": "henderson",
    "region": "East Texas"
  },
  {
    "name": "Henrietta",
    "slug": "henrietta",
    "region": "North Texas"
  },
  {
    "name": "Hereford",
    "slug": "hereford",
    "region": "Texas Panhandle"
  },
  {
    "name": "Hewitt",
    "slug": "hewitt",
    "region": "Central Texas"
  },
  {
    "name": "Hickory Creek",
    "slug": "hickory-creek",
    "region": "DFW Metro"
  },
  {
    "name": "Hico",
    "slug": "hico",
    "region": "Central Texas"
  },
  {
    "name": "Hidalgo",
    "slug": "hidalgo",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Higgins",
    "slug": "higgins",
    "region": "Texas Panhandle"
  },
  {
    "name": "Highland Park",
    "slug": "highland-park",
    "region": "DFW Metro"
  },
  {
    "name": "Highland Village",
    "slug": "highland-village",
    "region": "DFW Metro"
  },
  {
    "name": "Hill Country Village",
    "slug": "hill-country-village",
    "region": "Central Texas"
  },
  {
    "name": "Hillsboro",
    "slug": "hillsboro",
    "region": "Central Texas"
  },
  {
    "name": "Hitchcock",
    "slug": "hitchcock",
    "region": "Gulf Coast"
  },
  {
    "name": "Holliday",
    "slug": "holliday",
    "region": "North Texas"
  },
  {
    "name": "Hondo",
    "slug": "hondo",
    "region": "South Texas"
  },
  {
    "name": "Honey Grove",
    "slug": "honey-grove",
    "region": "North Texas"
  },
  {
    "name": "Hooks",
    "slug": "hooks",
    "region": "East Texas"
  },
  {
    "name": "Horizon City",
    "slug": "horizon-city",
    "region": "West Texas"
  },
  {
    "name": "Horseshoe Bay",
    "slug": "horseshoe-bay",
    "region": "Hill Country"
  },
  {
    "name": "Houston",
    "slug": "houston",
    "region": "Gulf Coast"
  },
  {
    "name": "Howe",
    "slug": "howe",
    "region": "North Texas"
  },
  {
    "name": "Hubbard",
    "slug": "hubbard",
    "region": "Central Texas"
  },
  {
    "name": "Hudson",
    "slug": "hudson",
    "region": "East Texas"
  },
  {
    "name": "Hughes Springs",
    "slug": "hughes-springs",
    "region": "East Texas"
  },
  {
    "name": "Humble",
    "slug": "humble",
    "region": "Gulf Coast"
  },
  {
    "name": "Hunters Creek Village",
    "slug": "hunters-creek-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Huntington",
    "slug": "huntington",
    "region": "East Texas"
  },
  {
    "name": "Huntsville",
    "slug": "huntsville",
    "region": "East Texas"
  },
  {
    "name": "Hurst",
    "slug": "hurst",
    "region": "DFW Metro"
  },
  {
    "name": "Hutchins",
    "slug": "hutchins",
    "region": "DFW Metro"
  },
  {
    "name": "Hutto",
    "slug": "hutto",
    "region": "Central Texas"
  },
  {
    "name": "Huxley",
    "slug": "huxley",
    "region": "East Texas"
  },
  {
    "name": "Idalou",
    "slug": "idalou",
    "region": "High Plains"
  },
  {
    "name": "Industrial",
    "slug": "industrial",
    "region": "Gulf Coast"
  },
  {
    "name": "Industry",
    "slug": "industry",
    "region": "Southeast Texas"
  },
  {
    "name": "Ingleside",
    "slug": "ingleside",
    "region": "Coastal Bend"
  },
  {
    "name": "Ingram",
    "slug": "ingram",
    "region": "Hill Country"
  },
  {
    "name": "Iowa Park",
    "slug": "iowa-park",
    "region": "North Texas"
  },
  {
    "name": "Iraan",
    "slug": "iraan",
    "region": "Permian Basin"
  },
  {
    "name": "Iredell",
    "slug": "iredell",
    "region": "Central Texas"
  },
  {
    "name": "Irving",
    "slug": "irving",
    "region": "DFW Metro"
  },
  {
    "name": "Italy",
    "slug": "italy",
    "region": "DFW Metro"
  },
  {
    "name": "Itasca",
    "slug": "itasca",
    "region": "DFW Metro"
  },
  {
    "name": "Jacinto City",
    "slug": "jacinto-city",
    "region": "Gulf Coast"
  },
  {
    "name": "Jacksboro",
    "slug": "jacksboro",
    "region": "North Texas"
  },
  {
    "name": "Jacksonville",
    "slug": "jacksonville",
    "region": "East Texas"
  },
  {
    "name": "Jamaica Beach",
    "slug": "jamaica-beach",
    "region": "Gulf Coast"
  },
  {
    "name": "Jarrell",
    "slug": "jarrell",
    "region": "Central Texas"
  },
  {
    "name": "Jasper",
    "slug": "jasper",
    "region": "East Texas"
  },
  {
    "name": "Jayton",
    "slug": "jayton",
    "region": "High Plains"
  },
  {
    "name": "Jefferson",
    "slug": "jefferson",
    "region": "East Texas"
  },
  {
    "name": "Jersey Village",
    "slug": "jersey-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Jewett",
    "slug": "jewett",
    "region": "East Texas"
  },
  {
    "name": "Joaquin",
    "slug": "joaquin",
    "region": "East Texas"
  },
  {
    "name": "Johnson City",
    "slug": "johnson-city",
    "region": "Hill Country"
  },
  {
    "name": "Joliet",
    "slug": "joliet",
    "region": "Central Texas"
  },
  {
    "name": "Jonestown",
    "slug": "jonestown",
    "region": "Central Texas"
  },
  {
    "name": "Josephine",
    "slug": "josephine",
    "region": "DFW Metro"
  },
  {
    "name": "Joshua",
    "slug": "joshua",
    "region": "DFW Metro"
  },
  {
    "name": "Jourdanton",
    "slug": "jourdanton",
    "region": "South Texas"
  },
  {
    "name": "Junction",
    "slug": "junction",
    "region": "Hill Country"
  },
  {
    "name": "Justin",
    "slug": "justin",
    "region": "DFW Metro"
  },
  {
    "name": "Karnes City",
    "slug": "karnes-city",
    "region": "South Texas"
  },
  {
    "name": "Katy",
    "slug": "katy",
    "region": "Gulf Coast"
  },
  {
    "name": "Kaufman",
    "slug": "kaufman",
    "region": "DFW Metro"
  },
  {
    "name": "Keene",
    "slug": "keene",
    "region": "DFW Metro"
  },
  {
    "name": "Keller",
    "slug": "keller",
    "region": "DFW Metro"
  },
  {
    "name": "Kemah",
    "slug": "kemah",
    "region": "Gulf Coast"
  },
  {
    "name": "Kemp",
    "slug": "kemp",
    "region": "East Texas"
  },
  {
    "name": "Kenedy",
    "slug": "kenedy",
    "region": "South Texas"
  },
  {
    "name": "Kennard",
    "slug": "kennard",
    "region": "East Texas"
  },
  {
    "name": "Kennedale",
    "slug": "kennedale",
    "region": "DFW Metro"
  },
  {
    "name": "Kerens",
    "slug": "kerens",
    "region": "DFW Metro"
  },
  {
    "name": "Kerrville",
    "slug": "kerrville",
    "region": "Hill Country"
  },
  {
    "name": "Kilgore",
    "slug": "kilgore",
    "region": "East Texas"
  },
  {
    "name": "Killeen",
    "slug": "killeen",
    "region": "Central Texas"
  },
  {
    "name": "Kingsville",
    "slug": "kingsville",
    "region": "Coastal Bend"
  },
  {
    "name": "Kirby",
    "slug": "kirby",
    "region": "Central Texas"
  },
  {
    "name": "Kirbyville",
    "slug": "kirbyville",
    "region": "East Texas"
  },
  {
    "name": "Kountze",
    "slug": "kountze",
    "region": "East Texas"
  },
  {
    "name": "Krum",
    "slug": "krum",
    "region": "DFW Metro"
  },
  {
    "name": "Kyle",
    "slug": "kyle",
    "region": "Central Texas"
  },
  {
    "name": "La Feria",
    "slug": "la-feria",
    "region": "Rio Grande Valley"
  },
  {
    "name": "La Grange",
    "slug": "la-grange",
    "region": "Southeast Texas"
  },
  {
    "name": "La Grulla",
    "slug": "la-grulla",
    "region": "Rio Grande Valley"
  },
  {
    "name": "La Joya",
    "slug": "la-joya",
    "region": "Rio Grande Valley"
  },
  {
    "name": "La Marque",
    "slug": "la-marque",
    "region": "Gulf Coast"
  },
  {
    "name": "La Porte",
    "slug": "la-porte",
    "region": "Gulf Coast"
  },
  {
    "name": "La Villa",
    "slug": "la-villa",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Lacy Lakeview",
    "slug": "lacy-lakeview",
    "region": "Central Texas"
  },
  {
    "name": "Ladonia",
    "slug": "ladonia",
    "region": "North Texas"
  },
  {
    "name": "Lago Vista",
    "slug": "lago-vista",
    "region": "Central Texas"
  },
  {
    "name": "Laguna Vista",
    "slug": "laguna-vista",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Lake City",
    "slug": "lake-city",
    "region": "Coastal Bend"
  },
  {
    "name": "Lake Dallas",
    "slug": "lake-dallas",
    "region": "DFW Metro"
  },
  {
    "name": "Lake Jackson",
    "slug": "lake-jackson",
    "region": "Gulf Coast"
  },
  {
    "name": "Lake Worth",
    "slug": "lake-worth",
    "region": "DFW Metro"
  },
  {
    "name": "Lakeway",
    "slug": "lakeway",
    "region": "Central Texas"
  },
  {
    "name": "Lampasas",
    "slug": "lampasas",
    "region": "Central Texas"
  },
  {
    "name": "Lancaster",
    "slug": "lancaster",
    "region": "DFW Metro"
  },
  {
    "name": "Laredo",
    "slug": "laredo",
    "region": "South Texas"
  },
  {
    "name": "Latexo",
    "slug": "latexo",
    "region": "East Texas"
  },
  {
    "name": "Lavon",
    "slug": "lavon",
    "region": "DFW Metro"
  },
  {
    "name": "Lawn",
    "slug": "lawn",
    "region": "West Texas"
  },
  {
    "name": "League City",
    "slug": "league-city",
    "region": "Gulf Coast"
  },
  {
    "name": "Leander",
    "slug": "leander",
    "region": "Central Texas"
  },
  {
    "name": "Lefors",
    "slug": "lefors",
    "region": "Texas Panhandle"
  },
  {
    "name": "Leona",
    "slug": "leona",
    "region": "East Texas"
  },
  {
    "name": "Leonard",
    "slug": "leonard",
    "region": "North Texas"
  },
  {
    "name": "Leon Valley",
    "slug": "leon-valley",
    "region": "Central Texas"
  },
  {
    "name": "Levelland",
    "slug": "levelland",
    "region": "High Plains"
  },
  {
    "name": "Lewisville",
    "slug": "lewisville",
    "region": "DFW Metro"
  },
  {
    "name": "Lexington",
    "slug": "lexington",
    "region": "Central Texas"
  },
  {
    "name": "Liberty",
    "slug": "liberty",
    "region": "Gulf Coast"
  },
  {
    "name": "Liberty Hill",
    "slug": "liberty-hill",
    "region": "Central Texas"
  },
  {
    "name": "Lindale",
    "slug": "lindale",
    "region": "East Texas"
  },
  {
    "name": "Linden",
    "slug": "linden",
    "region": "East Texas"
  },
  {
    "name": "Lindsay",
    "slug": "lindsay",
    "region": "North Texas"
  },
  {
    "name": "Lipan",
    "slug": "lipan",
    "region": "DFW Metro"
  },
  {
    "name": "Little Elm",
    "slug": "little-elm",
    "region": "DFW Metro"
  },
  {
    "name": "Littlefield",
    "slug": "littlefield",
    "region": "High Plains"
  },
  {
    "name": "Live Oak",
    "slug": "live-oak",
    "region": "Central Texas"
  },
  {
    "name": "Liverpool",
    "slug": "liverpool",
    "region": "Gulf Coast"
  },
  {
    "name": "Livingston",
    "slug": "livingston",
    "region": "East Texas"
  },
  {
    "name": "Llano",
    "slug": "llano",
    "region": "Hill Country"
  },
  {
    "name": "Lockhart",
    "slug": "lockhart",
    "region": "Central Texas"
  },
  {
    "name": "Lockney",
    "slug": "lockney",
    "region": "High Plains"
  },
  {
    "name": "Lometa",
    "slug": "lometa",
    "region": "Central Texas"
  },
  {
    "name": "Lone Oak",
    "slug": "lone-oak",
    "region": "East Texas"
  },
  {
    "name": "Lone Star",
    "slug": "lone-star",
    "region": "East Texas"
  },
  {
    "name": "Longview",
    "slug": "longview",
    "region": "East Texas"
  },
  {
    "name": "Loraine",
    "slug": "loraine",
    "region": "West Texas"
  },
  {
    "name": "Lorena",
    "slug": "lorena",
    "region": "Central Texas"
  },
  {
    "name": "Lorenzo",
    "slug": "lorenzo",
    "region": "High Plains"
  },
  {
    "name": "Los Fresnos",
    "slug": "los-fresnos",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Los Indios",
    "slug": "los-indios",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Lott",
    "slug": "lott",
    "region": "Central Texas"
  },
  {
    "name": "Lovelady",
    "slug": "lovelady",
    "region": "East Texas"
  },
  {
    "name": "Lubbock",
    "slug": "lubbock",
    "region": "High Plains"
  },
  {
    "name": "Lucas",
    "slug": "lucas",
    "region": "DFW Metro"
  },
  {
    "name": "Lueders",
    "slug": "lueders",
    "region": "West Texas"
  },
  {
    "name": "Lufkin",
    "slug": "lufkin",
    "region": "East Texas"
  },
  {
    "name": "Luling",
    "slug": "luling",
    "region": "Central Texas"
  },
  {
    "name": "Lumberton",
    "slug": "lumberton",
    "region": "Golden Triangle"
  },
  {
    "name": "Lyford",
    "slug": "lyford",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Lytle",
    "slug": "lytle",
    "region": "South Texas"
  },
  {
    "name": "Mabank",
    "slug": "mabank",
    "region": "East Texas"
  },
  {
    "name": "Madisonville",
    "slug": "madisonville",
    "region": "East Texas"
  },
  {
    "name": "Magnolia",
    "slug": "magnolia",
    "region": "Gulf Coast"
  },
  {
    "name": "Malakoff",
    "slug": "malakoff",
    "region": "East Texas"
  },
  {
    "name": "Manor",
    "slug": "manor",
    "region": "Central Texas"
  },
  {
    "name": "Mansfield",
    "slug": "mansfield",
    "region": "DFW Metro"
  },
  {
    "name": "Manvel",
    "slug": "manvel",
    "region": "Gulf Coast"
  },
  {
    "name": "Marble Falls",
    "slug": "marble-falls",
    "region": "Hill Country"
  },
  {
    "name": "Marfa",
    "slug": "marfa",
    "region": "West Texas"
  },
  {
    "name": "Marion",
    "slug": "marion",
    "region": "Central Texas"
  },
  {
    "name": "Marlin",
    "slug": "marlin",
    "region": "Central Texas"
  },
  {
    "name": "Marshall",
    "slug": "marshall",
    "region": "East Texas"
  },
  {
    "name": "Mart",
    "slug": "mart",
    "region": "Central Texas"
  },
  {
    "name": "Martindale",
    "slug": "martindale",
    "region": "Central Texas"
  },
  {
    "name": "Mason",
    "slug": "mason",
    "region": "Hill Country"
  },
  {
    "name": "Matador",
    "slug": "matador",
    "region": "High Plains"
  },
  {
    "name": "Mathis",
    "slug": "mathis",
    "region": "Coastal Bend"
  },
  {
    "name": "Maud",
    "slug": "maud",
    "region": "East Texas"
  },
  {
    "name": "Maypearl",
    "slug": "maypearl",
    "region": "DFW Metro"
  },
  {
    "name": "McAllen",
    "slug": "mcallen",
    "region": "Rio Grande Valley"
  },
  {
    "name": "McCamey",
    "slug": "mccamey",
    "region": "Permian Basin"
  },
  {
    "name": "McGregor",
    "slug": "mcgregor",
    "region": "Central Texas"
  },
  {
    "name": "McKinney",
    "slug": "mckinney",
    "region": "DFW Metro"
  },
  {
    "name": "McLean",
    "slug": "mclean",
    "region": "Texas Panhandle"
  },
  {
    "name": "Meadow",
    "slug": "meadow",
    "region": "High Plains"
  },
  {
    "name": "Meadows Place",
    "slug": "meadows-place",
    "region": "Gulf Coast"
  },
  {
    "name": "Megargel",
    "slug": "megargel",
    "region": "North Texas"
  },
  {
    "name": "Melissa",
    "slug": "melissa",
    "region": "DFW Metro"
  },
  {
    "name": "Memphis",
    "slug": "memphis",
    "region": "Texas Panhandle"
  },
  {
    "name": "Menard",
    "slug": "menard",
    "region": "West Texas"
  },
  {
    "name": "Mercedes",
    "slug": "mercedes",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Meridian",
    "slug": "meridian",
    "region": "Central Texas"
  },
  {
    "name": "Merkel",
    "slug": "merkel",
    "region": "West Texas"
  },
  {
    "name": "Mertzon",
    "slug": "mertzon",
    "region": "West Texas"
  },
  {
    "name": "Mesquite",
    "slug": "mesquite",
    "region": "DFW Metro"
  },
  {
    "name": "Mexia",
    "slug": "mexia",
    "region": "Central Texas"
  },
  {
    "name": "Miami",
    "slug": "miami",
    "region": "Texas Panhandle"
  },
  {
    "name": "Midland",
    "slug": "midland",
    "region": "Permian Basin"
  },
  {
    "name": "Midlothian",
    "slug": "midlothian",
    "region": "DFW Metro"
  },
  {
    "name": "Midway",
    "slug": "midway",
    "region": "East Texas"
  },
  {
    "name": "Milano",
    "slug": "milano",
    "region": "Central Texas"
  },
  {
    "name": "Miles",
    "slug": "miles",
    "region": "West Texas"
  },
  {
    "name": "Milford",
    "slug": "milford",
    "region": "DFW Metro"
  },
  {
    "name": "Miller's Cove",
    "slug": "millers-cove",
    "region": "East Texas"
  },
  {
    "name": "Millsap",
    "slug": "millsap",
    "region": "DFW Metro"
  },
  {
    "name": "Mineola",
    "slug": "mineola",
    "region": "East Texas"
  },
  {
    "name": "Mineral Wells",
    "slug": "mineral-wells",
    "region": "DFW Metro"
  },
  {
    "name": "Mingus",
    "slug": "mingus",
    "region": "West Texas"
  },
  {
    "name": "Mission",
    "slug": "mission",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Missouri City",
    "slug": "missouri-city",
    "region": "Gulf Coast"
  },
  {
    "name": "Monahans",
    "slug": "monahans",
    "region": "Permian Basin"
  },
  {
    "name": "Mont Belvieu",
    "slug": "mont-belvieu",
    "region": "Gulf Coast"
  },
  {
    "name": "Montgomery",
    "slug": "montgomery",
    "region": "Gulf Coast"
  },
  {
    "name": "Moody",
    "slug": "moody",
    "region": "Central Texas"
  },
  {
    "name": "Moran",
    "slug": "moran",
    "region": "West Texas"
  },
  {
    "name": "Morgan",
    "slug": "morgan",
    "region": "Central Texas"
  },
  {
    "name": "Morgan's Point",
    "slug": "morgans-point",
    "region": "Gulf Coast"
  },
  {
    "name": "Morton",
    "slug": "morton",
    "region": "High Plains"
  },
  {
    "name": "Moulton",
    "slug": "moulton",
    "region": "South Texas"
  },
  {
    "name": "Mount Enterprise",
    "slug": "mount-enterprise",
    "region": "East Texas"
  },
  {
    "name": "Mount Pleasant",
    "slug": "mount-pleasant",
    "region": "East Texas"
  },
  {
    "name": "Mount Vernon",
    "slug": "mount-vernon",
    "region": "East Texas"
  },
  {
    "name": "Muenster",
    "slug": "muenster",
    "region": "North Texas"
  },
  {
    "name": "Muleshoe",
    "slug": "muleshoe",
    "region": "High Plains"
  },
  {
    "name": "Munday",
    "slug": "munday",
    "region": "West Texas"
  },
  {
    "name": "Murphy",
    "slug": "murphy",
    "region": "DFW Metro"
  },
  {
    "name": "Mustang Ridge",
    "slug": "mustang-ridge",
    "region": "Central Texas"
  },
  {
    "name": "Nacogdoches",
    "slug": "nacogdoches",
    "region": "East Texas"
  },
  {
    "name": "Naples",
    "slug": "naples",
    "region": "East Texas"
  },
  {
    "name": "Nash",
    "slug": "nash",
    "region": "East Texas"
  },
  {
    "name": "Nassau Bay",
    "slug": "nassau-bay",
    "region": "Gulf Coast"
  },
  {
    "name": "Natalia",
    "slug": "natalia",
    "region": "South Texas"
  },
  {
    "name": "Navasota",
    "slug": "navasota",
    "region": "Brazos Valley"
  },
  {
    "name": "Nazareth",
    "slug": "nazareth",
    "region": "High Plains"
  },
  {
    "name": "Nederland",
    "slug": "nederland",
    "region": "Golden Triangle"
  },
  {
    "name": "Needville",
    "slug": "needville",
    "region": "Gulf Coast"
  },
  {
    "name": "New Boston",
    "slug": "new-boston",
    "region": "East Texas"
  },
  {
    "name": "New Braunfels",
    "slug": "new-braunfels",
    "region": "Hill Country"
  },
  {
    "name": "New London",
    "slug": "new-london",
    "region": "East Texas"
  },
  {
    "name": "New Summerfield",
    "slug": "new-summerfield",
    "region": "East Texas"
  },
  {
    "name": "New Waverly",
    "slug": "new-waverly",
    "region": "East Texas"
  },
  {
    "name": "Newark",
    "slug": "newark",
    "region": "DFW Metro"
  },
  {
    "name": "Newcastle",
    "slug": "newcastle",
    "region": "North Texas"
  },
  {
    "name": "Newton",
    "slug": "newton",
    "region": "East Texas"
  },
  {
    "name": "Niederwald",
    "slug": "niederwald",
    "region": "Central Texas"
  },
  {
    "name": "Nixon",
    "slug": "nixon",
    "region": "South Texas"
  },
  {
    "name": "Nocona",
    "slug": "nocona",
    "region": "North Texas"
  },
  {
    "name": "Nolanville",
    "slug": "nolanville",
    "region": "Central Texas"
  },
  {
    "name": "Nordheim",
    "slug": "nordheim",
    "region": "South Texas"
  },
  {
    "name": "Normangee",
    "slug": "normangee",
    "region": "Brazos Valley"
  },
  {
    "name": "North Richland Hills",
    "slug": "north-richland-hills",
    "region": "DFW Metro"
  },
  {
    "name": "Northlake",
    "slug": "northlake",
    "region": "DFW Metro"
  },
  {
    "name": "Oak Ridge North",
    "slug": "oak-ridge-north",
    "region": "Gulf Coast"
  },
  {
    "name": "Oakwood",
    "slug": "oakwood",
    "region": "East Texas"
  },
  {
    "name": "Odem",
    "slug": "odem",
    "region": "Coastal Bend"
  },
  {
    "name": "Odessa",
    "slug": "odessa",
    "region": "Permian Basin"
  },
  {
    "name": "O'Donnell",
    "slug": "odonnell",
    "region": "High Plains"
  },
  {
    "name": "Oglesby",
    "slug": "oglesby",
    "region": "Central Texas"
  },
  {
    "name": "Olney",
    "slug": "olney",
    "region": "North Texas"
  },
  {
    "name": "Olton",
    "slug": "olton",
    "region": "High Plains"
  },
  {
    "name": "Omaha",
    "slug": "omaha",
    "region": "East Texas"
  },
  {
    "name": "Onalaska",
    "slug": "onalaska",
    "region": "East Texas"
  },
  {
    "name": "Orange",
    "slug": "orange",
    "region": "Golden Triangle"
  },
  {
    "name": "Orange Grove",
    "slug": "orange-grove",
    "region": "Coastal Bend"
  },
  {
    "name": "Orchard",
    "slug": "orchard",
    "region": "Gulf Coast"
  },
  {
    "name": "Ore City",
    "slug": "ore-city",
    "region": "East Texas"
  },
  {
    "name": "Overton",
    "slug": "overton",
    "region": "East Texas"
  },
  {
    "name": "Ovilla",
    "slug": "ovilla",
    "region": "DFW Metro"
  },
  {
    "name": "Oyster Creek",
    "slug": "oyster-creek",
    "region": "Gulf Coast"
  },
  {
    "name": "Ozona",
    "slug": "ozona",
    "region": "West Texas"
  },
  {
    "name": "Paducah",
    "slug": "paducah",
    "region": "High Plains"
  },
  {
    "name": "Paint Rock",
    "slug": "paint-rock",
    "region": "West Texas"
  },
  {
    "name": "Palacios",
    "slug": "palacios",
    "region": "Gulf Coast"
  },
  {
    "name": "Palestine",
    "slug": "palestine",
    "region": "East Texas"
  },
  {
    "name": "Palmer",
    "slug": "palmer",
    "region": "DFW Metro"
  },
  {
    "name": "Palmhurst",
    "slug": "palmhurst",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Palmview",
    "slug": "palmview",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Palm Valley",
    "slug": "palm-valley",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Pampa",
    "slug": "pampa",
    "region": "Texas Panhandle"
  },
  {
    "name": "Panhandle",
    "slug": "panhandle",
    "region": "Texas Panhandle"
  },
  {
    "name": "Panorama Village",
    "slug": "panorama-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Paradise",
    "slug": "paradise",
    "region": "DFW Metro"
  },
  {
    "name": "Paris",
    "slug": "paris",
    "region": "East Texas"
  },
  {
    "name": "Parker",
    "slug": "parker",
    "region": "DFW Metro"
  },
  {
    "name": "Pasadena",
    "slug": "pasadena",
    "region": "Gulf Coast"
  },
  {
    "name": "Pattison",
    "slug": "pattison",
    "region": "Gulf Coast"
  },
  {
    "name": "Pearland",
    "slug": "pearland",
    "region": "Gulf Coast"
  },
  {
    "name": "Pearsall",
    "slug": "pearsall",
    "region": "South Texas"
  },
  {
    "name": "Pecos",
    "slug": "pecos",
    "region": "Permian Basin"
  },
  {
    "name": "Penitas",
    "slug": "penitas",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Perryton",
    "slug": "perryton",
    "region": "Texas Panhandle"
  },
  {
    "name": "Petersburg",
    "slug": "petersburg",
    "region": "High Plains"
  },
  {
    "name": "Petrolia",
    "slug": "petrolia",
    "region": "North Texas"
  },
  {
    "name": "Pflugerville",
    "slug": "pflugerville",
    "region": "Central Texas"
  },
  {
    "name": "Pharr",
    "slug": "pharr",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Pilot Point",
    "slug": "pilot-point",
    "region": "DFW Metro"
  },
  {
    "name": "Pinehurst",
    "slug": "pinehurst",
    "region": "Golden Triangle"
  },
  {
    "name": "Pineland",
    "slug": "pineland",
    "region": "East Texas"
  },
  {
    "name": "Plainview",
    "slug": "plainview",
    "region": "High Plains"
  },
  {
    "name": "Plano",
    "slug": "plano",
    "region": "DFW Metro"
  },
  {
    "name": "Pleasanton",
    "slug": "pleasanton",
    "region": "South Texas"
  },
  {
    "name": "Point",
    "slug": "point",
    "region": "East Texas"
  },
  {
    "name": "Point Comfort",
    "slug": "point-comfort",
    "region": "Gulf Coast"
  },
  {
    "name": "Ponder",
    "slug": "ponder",
    "region": "DFW Metro"
  },
  {
    "name": "Port Aransas",
    "slug": "port-aransas",
    "region": "Coastal Bend"
  },
  {
    "name": "Port Arthur",
    "slug": "port-arthur",
    "region": "Golden Triangle"
  },
  {
    "name": "Port Isabel",
    "slug": "port-isabel",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Port Lavaca",
    "slug": "port-lavaca",
    "region": "Gulf Coast"
  },
  {
    "name": "Port Neches",
    "slug": "port-neches",
    "region": "Golden Triangle"
  },
  {
    "name": "Porter",
    "slug": "porter",
    "region": "Gulf Coast"
  },
  {
    "name": "Post",
    "slug": "post",
    "region": "High Plains"
  },
  {
    "name": "Poteet",
    "slug": "poteet",
    "region": "South Texas"
  },
  {
    "name": "Poth",
    "slug": "poth",
    "region": "South Texas"
  },
  {
    "name": "Pottsboro",
    "slug": "pottsboro",
    "region": "North Texas"
  },
  {
    "name": "Prairie View",
    "slug": "prairie-view",
    "region": "Gulf Coast"
  },
  {
    "name": "Premont",
    "slug": "premont",
    "region": "South Texas"
  },
  {
    "name": "Presidio",
    "slug": "presidio",
    "region": "West Texas"
  },
  {
    "name": "Princeton",
    "slug": "princeton",
    "region": "DFW Metro"
  },
  {
    "name": "Progreso",
    "slug": "progreso",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Prosper",
    "slug": "prosper",
    "region": "DFW Metro"
  },
  {
    "name": "Quanah",
    "slug": "quanah",
    "region": "High Plains"
  },
  {
    "name": "Queen City",
    "slug": "queen-city",
    "region": "East Texas"
  },
  {
    "name": "Quinlan",
    "slug": "quinlan",
    "region": "DFW Metro"
  },
  {
    "name": "Quitman",
    "slug": "quitman",
    "region": "East Texas"
  },
  {
    "name": "Ralls",
    "slug": "ralls",
    "region": "High Plains"
  },
  {
    "name": "Rancho Viejo",
    "slug": "rancho-viejo",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Ranger",
    "slug": "ranger",
    "region": "West Texas"
  },
  {
    "name": "Rankin",
    "slug": "rankin",
    "region": "Permian Basin"
  },
  {
    "name": "Ransom Canyon",
    "slug": "ransom-canyon",
    "region": "High Plains"
  },
  {
    "name": "Raymondville",
    "slug": "raymondville",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Red Oak",
    "slug": "red-oak",
    "region": "DFW Metro"
  },
  {
    "name": "Refugio",
    "region": "Coastal Bend",
    "slug": "refugio"
  },
  {
    "name": "Reno",
    "slug": "reno",
    "region": "DFW Metro"
  },
  {
    "name": "Rhome",
    "slug": "rhome",
    "region": "DFW Metro"
  },
  {
    "name": "Rice",
    "slug": "rice",
    "region": "DFW Metro"
  },
  {
    "name": "Richardson",
    "slug": "richardson",
    "region": "DFW Metro"
  },
  {
    "name": "Richland",
    "slug": "richland",
    "region": "DFW Metro"
  },
  {
    "name": "Richland Hills",
    "slug": "richland-hills",
    "region": "DFW Metro"
  },
  {
    "name": "Richmond",
    "slug": "richmond",
    "region": "Gulf Coast"
  },
  {
    "name": "Riesel",
    "slug": "riesel",
    "region": "Central Texas"
  },
  {
    "name": "Rio Grande City",
    "slug": "rio-grande-city",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Rio Hondo",
    "slug": "rio-hondo",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Rio Vista",
    "slug": "rio-vista",
    "region": "DFW Metro"
  },
  {
    "name": "Rising Star",
    "slug": "rising-star",
    "region": "West Texas"
  },
  {
    "name": "River Oaks",
    "slug": "river-oaks",
    "region": "DFW Metro"
  },
  {
    "name": "Riverside",
    "slug": "riverside",
    "region": "East Texas"
  },
  {
    "name": "Roanoke",
    "slug": "roanoke",
    "region": "DFW Metro"
  },
  {
    "name": "Roaring Springs",
    "slug": "roaring-springs",
    "region": "High Plains"
  },
  {
    "name": "Robert Lee",
    "slug": "robert-lee",
    "region": "West Texas"
  },
  {
    "name": "Robinson",
    "slug": "robinson",
    "region": "Central Texas"
  },
  {
    "name": "Robstown",
    "slug": "robstown",
    "region": "Coastal Bend"
  },
  {
    "name": "Roby",
    "slug": "roby",
    "region": "West Texas"
  },
  {
    "name": "Rochester",
    "slug": "rochester",
    "region": "West Texas"
  },
  {
    "name": "Rockdale",
    "slug": "rockdale",
    "region": "Central Texas"
  },
  {
    "name": "Rockport",
    "slug": "rockport",
    "region": "Coastal Bend"
  },
  {
    "name": "Rocksprings",
    "slug": "rocksprings",
    "region": "Hill Country"
  },
  {
    "name": "Rockwall",
    "slug": "rockwall",
    "region": "DFW Metro"
  },
  {
    "name": "Rogers",
    "slug": "rogers",
    "region": "Central Texas"
  },
  {
    "name": "Rollingwood",
    "slug": "rollingwood",
    "region": "Central Texas"
  },
  {
    "name": "Roma",
    "slug": "roma",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Roman Forest",
    "slug": "roman-forest",
    "region": "Gulf Coast"
  },
  {
    "name": "Ropesville",
    "slug": "ropesville",
    "region": "High Plains"
  },
  {
    "name": "Roscoe",
    "slug": "roscoe",
    "region": "West Texas"
  },
  {
    "name": "Rosebud",
    "slug": "rosebud",
    "region": "Central Texas"
  },
  {
    "name": "Rosenberg",
    "slug": "rosenberg",
    "region": "Gulf Coast"
  },
  {
    "name": "Rotan",
    "slug": "rotan",
    "region": "West Texas"
  },
  {
    "name": "Round Mountain",
    "slug": "round-mountain",
    "region": "Hill Country"
  },
  {
    "name": "Round Rock",
    "slug": "round-rock",
    "region": "Central Texas"
  },
  {
    "name": "Round Top",
    "slug": "round-top",
    "region": "Southeast Texas"
  },
  {
    "name": "Rowlett",
    "slug": "rowlett",
    "region": "DFW Metro"
  },
  {
    "name": "Roxton",
    "slug": "roxton",
    "region": "East Texas"
  },
  {
    "name": "Royse City",
    "slug": "royse-city",
    "region": "DFW Metro"
  },
  {
    "name": "Rule",
    "slug": "rule",
    "region": "West Texas"
  },
  {
    "name": "Runaway Bay",
    "slug": "runaway-bay",
    "region": "DFW Metro"
  },
  {
    "name": "Runge",
    "slug": "runge",
    "region": "South Texas"
  },
  {
    "name": "Rusk",
    "slug": "rusk",
    "region": "East Texas"
  },
  {
    "name": "Sabinal",
    "slug": "sabinal",
    "region": "South Texas"
  },
  {
    "name": "Sachse",
    "slug": "sachse",
    "region": "DFW Metro"
  },
  {
    "name": "Saint Hedwig",
    "slug": "saint-hedwig",
    "region": "Central Texas"
  },
  {
    "name": "Saint Jo",
    "slug": "saint-jo",
    "region": "North Texas"
  },
  {
    "name": "Salado",
    "slug": "salado",
    "region": "Central Texas"
  },
  {
    "name": "San Angelo",
    "slug": "san-angelo",
    "region": "West Texas"
  },
  {
    "name": "San Antonio",
    "slug": "san-antonio",
    "region": "Central Texas"
  },
  {
    "name": "San Augustine",
    "slug": "san-augustine",
    "region": "East Texas"
  },
  {
    "name": "San Benito",
    "slug": "san-benito",
    "region": "Rio Grande Valley"
  },
  {
    "name": "San Diego",
    "slug": "san-diego",
    "region": "South Texas"
  },
  {
    "name": "San Elizario",
    "slug": "san-elizario",
    "region": "West Texas"
  },
  {
    "name": "San Felipe",
    "slug": "san-felipe",
    "region": "Gulf Coast"
  },
  {
    "name": "San Juan",
    "slug": "san-juan",
    "region": "Rio Grande Valley"
  },
  {
    "name": "San Marcos",
    "slug": "san-marcos",
    "region": "Central Texas"
  },
  {
    "name": "San Perlita",
    "slug": "san-perlita",
    "region": "Rio Grande Valley"
  },
  {
    "name": "San Saba",
    "slug": "san-saba",
    "region": "Central Texas"
  },
  {
    "name": "Sanger",
    "slug": "sanger",
    "region": "DFW Metro"
  },
  {
    "name": "Santa Anna",
    "slug": "santa-anna",
    "region": "Central Texas"
  },
  {
    "name": "Santa Fe",
    "slug": "santa-fe",
    "region": "Gulf Coast"
  },
  {
    "name": "Santa Rosa",
    "slug": "santa-rosa",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Savoy",
    "slug": "savoy",
    "region": "North Texas"
  },
  {
    "name": "Schertz",
    "slug": "schertz",
    "region": "Central Texas"
  },
  {
    "name": "Schulenburg",
    "slug": "schulenburg",
    "region": "Southeast Texas"
  },
  {
    "name": "Scottsville",
    "slug": "scottsville",
    "region": "East Texas"
  },
  {
    "name": "Seabrook",
    "slug": "seabrook",
    "region": "Gulf Coast"
  },
  {
    "name": "Seadrift",
    "slug": "seadrift",
    "region": "Gulf Coast"
  },
  {
    "name": "Seagoville",
    "slug": "seagoville",
    "region": "DFW Metro"
  },
  {
    "name": "Seagraves",
    "slug": "seagraves",
    "region": "High Plains"
  },
  {
    "name": "Sealy",
    "slug": "sealy",
    "region": "Gulf Coast"
  },
  {
    "name": "Seguin",
    "slug": "seguin",
    "region": "Central Texas"
  },
  {
    "name": "Selma",
    "slug": "selma",
    "region": "Central Texas"
  },
  {
    "name": "Seminole",
    "slug": "seminole",
    "region": "High Plains"
  },
  {
    "name": "Seven Points",
    "slug": "seven-points",
    "region": "East Texas"
  },
  {
    "name": "Seymour",
    "slug": "seymour",
    "region": "North Texas"
  },
  {
    "name": "Shady Shores",
    "slug": "shady-shores",
    "region": "DFW Metro"
  },
  {
    "name": "Shallowater",
    "slug": "shallowater",
    "region": "High Plains"
  },
  {
    "name": "Shamrock",
    "slug": "shamrock",
    "region": "Texas Panhandle"
  },
  {
    "name": "Shavano Park",
    "slug": "shavano-park",
    "region": "Central Texas"
  },
  {
    "name": "Shenandoah",
    "slug": "shenandoah",
    "region": "Gulf Coast"
  },
  {
    "name": "Shepherd",
    "slug": "shepherd",
    "region": "East Texas"
  },
  {
    "name": "Sherman",
    "slug": "sherman",
    "region": "North Texas"
  },
  {
    "name": "Shiner",
    "slug": "shiner",
    "region": "South Texas"
  },
  {
    "name": "Shoreacres",
    "slug": "shoreacres",
    "region": "Gulf Coast"
  },
  {
    "name": "Sierra Blanca",
    "slug": "sierra-blanca",
    "region": "West Texas"
  },
  {
    "name": "Silsbee",
    "slug": "silsbee",
    "region": "Golden Triangle"
  },
  {
    "name": "Silverton",
    "slug": "silverton",
    "region": "Texas Panhandle"
  },
  {
    "name": "Simonton",
    "slug": "simonton",
    "region": "Gulf Coast"
  },
  {
    "name": "Sinton",
    "slug": "sinton",
    "region": "Coastal Bend"
  },
  {
    "name": "Skellytown",
    "slug": "skellytown",
    "region": "Texas Panhandle"
  },
  {
    "name": "Slaton",
    "slug": "slaton",
    "region": "High Plains"
  },
  {
    "name": "Smiley",
    "slug": "smiley",
    "region": "South Texas"
  },
  {
    "name": "Smithville",
    "slug": "smithville",
    "region": "Central Texas"
  },
  {
    "name": "Smyers",
    "slug": "smyers",
    "region": "High Plains"
  },
  {
    "name": "Snook",
    "slug": "snook",
    "region": "Brazos Valley"
  },
  {
    "name": "Snyder",
    "slug": "snyder",
    "region": "West Texas"
  },
  {
    "name": "Socorro",
    "slug": "socorro",
    "region": "West Texas"
  },
  {
    "name": "Somerset",
    "slug": "somerset",
    "region": "Central Texas"
  },
  {
    "name": "Somerville",
    "slug": "somerville",
    "region": "Brazos Valley"
  },
  {
    "name": "Sonora",
    "slug": "sonora",
    "region": "West Texas"
  },
  {
    "name": "Sour Lake",
    "slug": "sour-lake",
    "region": "Golden Triangle"
  },
  {
    "name": "South Houston",
    "slug": "south-houston",
    "region": "Gulf Coast"
  },
  {
    "name": "South Padre Island",
    "slug": "south-padre-island",
    "region": "Rio Grande Valley"
  },
  {
    "name": "South Side Place",
    "slug": "south-side-place",
    "region": "Gulf Coast"
  },
  {
    "name": "Southlake",
    "slug": "southlake",
    "region": "DFW Metro"
  },
  {
    "name": "Southmayd",
    "slug": "southmayd",
    "region": "North Texas"
  },
  {
    "name": "Spearman",
    "slug": "spearman",
    "region": "Texas Panhandle"
  },
  {
    "name": "Splendora",
    "slug": "splendora",
    "region": "Gulf Coast"
  },
  {
    "name": "Spring",
    "slug": "spring",
    "region": "Gulf Coast"
  },
  {
    "name": "Spring Branch",
    "slug": "spring-branch",
    "region": "Hill Country"
  },
  {
    "name": "Spring Valley Village",
    "slug": "spring-valley-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Springtown",
    "slug": "springtown",
    "region": "DFW Metro"
  },
  {
    "name": "Spur",
    "slug": "spur",
    "region": "High Plains"
  },
  {
    "name": "Stafford",
    "slug": "stafford",
    "region": "Gulf Coast"
  },
  {
    "name": "Stagecoach",
    "slug": "stagecoach",
    "region": "Gulf Coast"
  },
  {
    "name": "Stamford",
    "slug": "stamford",
    "region": "West Texas"
  },
  {
    "name": "Stanton",
    "slug": "stanton",
    "region": "Permian Basin"
  },
  {
    "name": "Stephenville",
    "slug": "stephenville",
    "region": "Central Texas"
  },
  {
    "name": "Sterling City",
    "slug": "sterling-city",
    "region": "West Texas"
  },
  {
    "name": "Stinnett",
    "slug": "stinnett",
    "region": "Texas Panhandle"
  },
  {
    "name": "Stockdale",
    "slug": "stockdale",
    "region": "South Texas"
  },
  {
    "name": "Stratford",
    "slug": "stratford",
    "region": "Texas Panhandle"
  },
  {
    "name": "Strawn",
    "slug": "strawn",
    "region": "West Texas"
  },
  {
    "name": "Streetman",
    "slug": "streetman",
    "region": "East Texas"
  },
  {
    "name": "Sudan",
    "slug": "sudan",
    "region": "High Plains"
  },
  {
    "name": "Sugar Land",
    "slug": "sugar-land",
    "region": "Gulf Coast"
  },
  {
    "name": "Sullivan City",
    "slug": "sullivan-city",
    "region": "Rio Grande Valley"
  },
  {
    "name": "Sulphur Springs",
    "slug": "sulphur-springs",
    "region": "East Texas"
  },
  {
    "name": "Sundown",
    "slug": "sundown",
    "region": "High Plains"
  },
  {
    "name": "Sunnyvale",
    "slug": "sunnyvale",
    "region": "DFW Metro"
  },
  {
    "name": "Sunray",
    "slug": "sunray",
    "region": "Texas Panhandle"
  },
  {
    "name": "Sunrise Beach Village",
    "slug": "sunrise-beach-village",
    "region": "Hill Country"
  },
  {
    "name": "Sunset Valley",
    "slug": "sunset-valley",
    "region": "Central Texas"
  },
  {
    "name": "Sweeny",
    "slug": "sweeny",
    "region": "Gulf Coast"
  },
  {
    "name": "Sweetwater",
    "slug": "sweetwater",
    "region": "West Texas"
  },
  {
    "name": "Taft",
    "slug": "taft",
    "region": "Coastal Bend"
  },
  {
    "name": "Tahoka",
    "slug": "tahoka",
    "region": "High Plains"
  },
  {
    "name": "Talco",
    "slug": "talco",
    "region": "East Texas"
  },
  {
    "name": "Talty",
    "slug": "talty",
    "region": "DFW Metro"
  },
  {
    "name": "Tatum",
    "slug": "tatum",
    "region": "East Texas"
  },
  {
    "name": "Taylor",
    "slug": "taylor",
    "region": "Central Texas"
  },
  {
    "name": "Taylor Lake Village",
    "slug": "taylor-lake-village",
    "region": "Gulf Coast"
  },
  {
    "name": "Teague",
    "slug": "teague",
    "region": "East Texas"
  },
  {
    "name": "Temple",
    "slug": "temple",
    "region": "Central Texas"
  },
  {
    "name": "Tenaha",
    "slug": "tenaha",
    "region": "East Texas"
  },
  {
    "name": "Terrell",
    "slug": "terrell",
    "region": "DFW Metro"
  },
  {
    "name": "Terrell Hills",
    "slug": "terrell-hills",
    "region": "Central Texas"
  },
  {
    "name": "Texarkana",
    "slug": "texarkana",
    "region": "East Texas"
  },
  {
    "name": "Texas City",
    "slug": "texas-city",
    "region": "Gulf Coast"
  },
  {
    "name": "Texline",
    "slug": "texline",
    "region": "Texas Panhandle"
  },
  {
    "name": "The Colony",
    "slug": "the-colony",
    "region": "DFW Metro"
  },
  {
    "name": "The Woodlands",
    "slug": "the-woodlands",
    "region": "Gulf Coast"
  },
  {
    "name": "Thorndale",
    "slug": "thorndale",
    "region": "Central Texas"
  },
  {
    "name": "Thornton",
    "slug": "thornton",
    "region": "Central Texas"
  },
  {
    "name": "Thrall",
    "slug": "thrall",
    "region": "Central Texas"
  },
  {
    "name": "Three Rivers",
    "slug": "three-rivers",
    "region": "South Texas"
  },
  {
    "name": "Throckmorton",
    "slug": "throckmorton",
    "region": "North Texas"
  },
  {
    "name": "Tiki Island",
    "slug": "tiki-island",
    "region": "Gulf Coast"
  },
  {
    "name": "Timpson",
    "slug": "timpson",
    "region": "East Texas"
  },
  {
    "name": "Tioga",
    "slug": "tioga",
    "region": "North Texas"
  },
  {
    "name": "Tolar",
    "slug": "tolar",
    "region": "DFW Metro"
  },
  {
    "name": "Tom Bean",
    "slug": "tom-bean",
    "region": "North Texas"
  },
  {
    "name": "Tomball",
    "slug": "tomball",
    "region": "Gulf Coast"
  },
  {
    "name": "Tool",
    "slug": "tool",
    "region": "East Texas"
  },
  {
    "name": "Toyah",
    "slug": "toyah",
    "region": "Permian Basin"
  },
  {
    "name": "Trent",
    "slug": "trent",
    "region": "West Texas"
  },
  {
    "name": "Trenton",
    "slug": "trenton",
    "region": "North Texas"
  },
  {
    "name": "Trinidad",
    "slug": "trinidad",
    "region": "East Texas"
  },
  {
    "name": "Trinity",
    "slug": "trinity",
    "region": "East Texas"
  },
  {
    "name": "Troup",
    "slug": "troup",
    "region": "East Texas"
  },
  {
    "name": "Troy",
    "slug": "troy",
    "region": "Central Texas"
  },
  {
    "name": "Tulia",
    "slug": "tulia",
    "region": "Texas Panhandle"
  },
  {
    "name": "Turkey",
    "slug": "turkey",
    "region": "Texas Panhandle"
  },
  {
    "name": "Tuscola",
    "slug": "tuscola",
    "region": "West Texas"
  },
  {
    "name": "Tye",
    "slug": "tye",
    "region": "West Texas"
  },
  {
    "name": "Tyler",
    "slug": "tyler",
    "region": "East Texas"
  },
  {
    "name": "Uhland",
    "slug": "uhland",
    "region": "Central Texas"
  },
  {
    "name": "Uncertain",
    "slug": "uncertain",
    "region": "East Texas"
  },
  {
    "name": "Union Grove",
    "slug": "union-grove",
    "region": "East Texas"
  },
  {
    "name": "Universal City",
    "slug": "universal-city",
    "region": "Central Texas"
  },
  {
    "name": "University Park",
    "slug": "university-park",
    "region": "DFW Metro"
  },
  {
    "name": "Uvalde",
    "slug": "uvalde",
    "region": "South Texas"
  },
  {
    "name": "Valley Mills",
    "slug": "valley-mills",
    "region": "Central Texas"
  },
  {
    "name": "Valley View",
    "slug": "valley-view",
    "region": "North Texas"
  },
  {
    "name": "Van",
    "slug": "van",
    "region": "East Texas"
  },
  {
    "name": "Van Alstyne",
    "slug": "van-alstyne",
    "region": "North Texas"
  },
  {
    "name": "Vega",
    "slug": "vega",
    "region": "Texas Panhandle"
  },
  {
    "name": "Vernon",
    "slug": "vernon",
    "region": "North Texas"
  },
  {
    "name": "Victoria",
    "slug": "victoria",
    "region": "Gulf Coast"
  },
  {
    "name": "Vidor",
    "slug": "vidor",
    "region": "Golden Triangle"
  },
  {
    "name": "Vinton",
    "slug": "vinton",
    "region": "West Texas"
  },
  {
    "name": "Waco",
    "slug": "waco",
    "region": "Central Texas"
  },
  {
    "name": "Waelder",
    "slug": "waelder",
    "region": "South Texas"
  },
  {
    "name": "Wake Village",
    "slug": "wake-village",
    "region": "East Texas"
  },
  {
    "name": "Waller",
    "slug": "waller",
    "region": "Gulf Coast"
  },
  {
    "name": "Wallis",
    "slug": "wallis",
    "region": "Gulf Coast"
  },
  {
    "name": "Walnut Springs",
    "slug": "walnut-springs",
    "region": "Central Texas"
  },
  {
    "name": "Waskom",
    "slug": "waskom",
    "region": "East Texas"
  },
  {
    "name": "Watauga",
    "slug": "watauga",
    "region": "DFW Metro"
  },
  {
    "name": "Waxahachie",
    "slug": "waxahachie",
    "region": "DFW Metro"
  },
  {
    "name": "Weatherford",
    "slug": "weatherford",
    "region": "DFW Metro"
  },
  {
    "name": "Webster",
    "slug": "webster",
    "region": "Gulf Coast"
  },
  {
    "name": "Weimar",
    "slug": "weimar",
    "region": "Southeast Texas"
  },
  {
    "name": "Weinert",
    "slug": "weinert",
    "region": "West Texas"
  },
  {
    "name": "Weir",
    "slug": "weir",
    "region": "Central Texas"
  },
  {
    "name": "Wellington",
    "slug": "wellington",
    "region": "Texas Panhandle"
  },
  {
    "name": "Wellman",
    "slug": "wellman",
    "region": "High Plains"
  },
  {
    "name": "Wells",
    "slug": "wells",
    "region": "East Texas"
  },
  {
    "name": "Weslaco",
    "slug": "weslaco",
    "region": "Rio Grande Valley"
  },
  {
    "name": "West",
    "slug": "west",
    "region": "Central Texas"
  },
  {
    "name": "West Columbia",
    "slug": "west-columbia",
    "region": "Gulf Coast"
  },
  {
    "name": "West Lake Hills",
    "slug": "west-lake-hills",
    "region": "Central Texas"
  },
  {
    "name": "West University Place",
    "slug": "west-university-place",
    "region": "Gulf Coast"
  },
  {
    "name": "Westbrook",
    "slug": "westbrook",
    "region": "West Texas"
  },
  {
    "name": "Westlake",
    "slug": "westlake",
    "region": "DFW Metro"
  },
  {
    "name": "Westworth Village",
    "slug": "westworth-village",
    "region": "DFW Metro"
  },
  {
    "name": "Wharton",
    "slug": "wharton",
    "region": "Gulf Coast"
  },
  {
    "name": "Wheeler",
    "slug": "wheeler",
    "region": "Texas Panhandle"
  },
  {
    "name": "White Deer",
    "slug": "white-deer",
    "region": "Texas Panhandle"
  },
  {
    "name": "White Oak",
    "slug": "white-oak",
    "region": "East Texas"
  },
  {
    "name": "White Settlement",
    "slug": "white-settlement",
    "region": "DFW Metro"
  },
  {
    "name": "Whitehouse",
    "slug": "whitehouse",
    "region": "East Texas"
  },
  {
    "name": "Whitesboro",
    "slug": "whitesboro",
    "region": "North Texas"
  },
  {
    "name": "Whitewright",
    "slug": "whitewright",
    "region": "North Texas"
  },
  {
    "name": "Whitney",
    "slug": "whitney",
    "region": "Central Texas"
  },
  {
    "name": "Wichita Falls",
    "slug": "wichita-falls",
    "region": "North Texas"
  },
  {
    "name": "Wickett",
    "slug": "wickett",
    "region": "Permian Basin"
  },
  {
    "name": "Willis",
    "slug": "willis",
    "region": "Gulf Coast"
  },
  {
    "name": "Willow Park",
    "slug": "willow-park",
    "region": "DFW Metro"
  },
  {
    "name": "Wills Point",
    "slug": "wills-point",
    "region": "East Texas"
  },
  {
    "name": "Wilmer",
    "slug": "wilmer",
    "region": "DFW Metro"
  },
  {
    "name": "Wilson",
    "slug": "wilson",
    "region": "High Plains"
  },
  {
    "name": "Wimberley",
    "slug": "wimberley",
    "region": "Hill Country"
  },
  {
    "name": "Windcrest",
    "slug": "windcrest",
    "region": "Central Texas"
  },
  {
    "name": "Windthorst",
    "slug": "windthorst",
    "region": "North Texas"
  },
  {
    "name": "Winfield",
    "slug": "winfield",
    "region": "East Texas"
  },
  {
    "name": "Wink",
    "slug": "wink",
    "region": "Permian Basin"
  },
  {
    "name": "Winnsboro",
    "slug": "winnsboro",
    "region": "East Texas"
  },
  {
    "name": "Winona",
    "slug": "winona",
    "region": "East Texas"
  },
  {
    "name": "Winters",
    "slug": "winters",
    "region": "West Texas"
  },
  {
    "name": "Wixon Valley",
    "slug": "wixon-valley",
    "region": "Brazos Valley"
  },
  {
    "name": "Wolfe City",
    "slug": "wolfe-city",
    "region": "North Texas"
  },
  {
    "name": "Wolfforth",
    "slug": "wolfforth",
    "region": "High Plains"
  },
  {
    "name": "Woodbranch",
    "slug": "woodbranch",
    "region": "Gulf Coast"
  },
  {
    "name": "Woodcreek",
    "slug": "woodcreek",
    "region": "Hill Country"
  },
  {
    "name": "Woodloch",
    "slug": "woodloch",
    "region": "Gulf Coast"
  },
  {
    "name": "Woodsboro",
    "slug": "woodsboro",
    "region": "Coastal Bend"
  },
  {
    "name": "Woodville",
    "slug": "woodville",
    "region": "East Texas"
  },
  {
    "name": "Woodway",
    "slug": "woodway",
    "region": "Central Texas"
  },
  {
    "name": "Wortham",
    "slug": "wortham",
    "region": "East Texas"
  },
  {
    "name": "Wylie",
    "slug": "wylie",
    "region": "DFW Metro"
  },
  {
    "name": "Yantis",
    "slug": "yantis",
    "region": "East Texas"
  },
  {
    "name": "Yoakum",
    "slug": "yoakum",
    "region": "South Texas"
  },
  {
    "name": "Yorktown",
    "slug": "yorktown",
    "region": "South Texas"
  },
  {
    "name": "Zapata",
    "slug": "zapata",
    "region": "South Texas"
  },
  {
    "name": "Zavalla",
    "slug": "zavalla",
    "region": "East Texas"
  }
];
