export interface LocationData {
  stateSlug: string;
  stateName: string;
  citySlug: string;
  cityName: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  climateContext: string;
  commonProblems: { title: string; desc: string }[];
  subAreas: string[];
  faqs: { question: string; answer: string }[];
}

export interface StateData {
  stateSlug: string;
  stateName: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  climateOverview: string;
  majorCities: { name: string; slug: string; region: string }[];
  faqs: { question: string; answer: string }[];
}

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
