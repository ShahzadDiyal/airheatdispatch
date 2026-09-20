export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  fullTitle: string;
  directAnswer: string;
  heroHeadline: string;
  features: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

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

export const SITE_CONFIG = {
  name: "AirHeat Dispatch",
  tagline: "Free Homeowner Connection Service for Independent HVAC Contractors",
  domain: "https://airheatdispatch.com",
  phone: "(555) 839-4328",
  phoneRaw: "5558394328",
  email: "support@airheatdispatch.com",
  openingHours: "Mo-Su 00:00-23:59", // 24/7 Hotline
  primaryKeyword: "Connect With Local HVAC Providers",
  disclaimer:
    "This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.",
  serviceAreas: [
    "Austin, TX",
    "Houston, TX",
    "Dallas, TX",
    "San Antonio, TX",
    "Fort Worth, TX",
    "El Paso, TX",
    "Arlington, TX",
    "Corpus Christi, TX",
    "Plano, TX",
    "Lubbock, TX",
  ],
};

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

export const CORE_SERVICES: ServiceItem[] = [
  {
    slug: "hvac",
    name: "HVAC Repair & Service",
    shortDesc:
      "Connect with independent local HVAC specialists for complete heating, cooling, airflow, and system diagnostics.",
    fullTitle: "HVAC Repair & Heating Cooling Service Connection",
    heroHeadline:
      "Connect With Independent Local HVAC Contractors for Complete Heating & Cooling Help",
    directAnswer:
      "AirHeat Dispatch is a free homeowner service that connects you with independent local HVAC contractors. Local contractors diagnose electrical issues, airflow restrictions, thermostat faults, and refrigerant imbalances across residential heating and cooling systems.",
    features: [
      "Connect with independent local HVAC contractors",
      "24/7 phone assistance for urgent heating & cooling outages",
      "Servicing central air, furnaces, and heat pumps",
      "Coverage across local residential communities",
    ],
    processSteps: [
      {
        title: "1. Call the Connection Line",
        desc: "Call (555) 839-4328 to speak with a customer care representative ready to match you with a local HVAC provider.",
      },
      {
        title: "2. Speak With an Independent Contractor",
        desc: "Connect directly with an independent local HVAC contractor servicing your immediate area.",
      },
      {
        title: "3. Schedule Diagnostics & Inspection",
        desc: "Discuss your system symptoms directly with the contractor and arrange a convenient home visit.",
      },
      {
        title: "4. Receive Service & Upfront Details",
        desc: "The independent contractor evaluates your equipment, explains needed repairs, and performs the work.",
      },
    ],
    faqs: [
      {
        question: "Is AirHeat Dispatch an HVAC contractor?",
        answer:
          "No. AirHeat Dispatch is a free homeowner connection service. We help match homeowners with independent local HVAC service contractors.",
      },
      {
        question: "How do I request HVAC service through AirHeat Dispatch?",
        answer:
          "Simply call our connection line at (555) 839-4328 to be connected with an independent HVAC service provider in your area.",
      },
    ],
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortDesc:
      "Connect with independent air conditioning contractors for compressor issues, freon leaks, frozen coils, and cooling failures.",
    fullTitle: "Air Conditioning Repair Service Connection",
    heroHeadline:
      "Need Fast AC Repair? Connect With Independent Local Air Conditioning Providers",
    directAnswer:
      "AC repair services connect homeowners with local providers who resolve warm air blowing, frozen evaporator coils, noisy fan motors, clogged drain lines, and blown capacitors. Prompt repair restores comfort during high summer temperatures.",
    features: [
      "Connect with local air conditioning repair providers",
      "Independent contractors for central AC units and heat pumps",
      "24/7 hotline for emergency cooling breakdowns",
      "Assistance with capacitor, fan motor, and refrigerant issues",
    ],
    processSteps: [
      {
        title: "1. Call for AC Help",
        desc: "Call (555) 839-4328 to request assistance connecting with a local air conditioning contractor.",
      },
      {
        title: "2. Describe Cooling Symptoms",
        desc: "Explain whether your system is blowing warm air, making strange noises, or failing to turn on.",
      },
      {
        title: "3. Connect With Local Provider",
        desc: "Speak with an independent local technician who services your zip code.",
      },
      {
        title: "4. Get System Diagnosed",
        desc: "The hired contractor inspects your unit and provides repair solutions directly to you.",
      },
    ],
    faqs: [
      {
        question: "Why is my AC blowing warm air?",
        answer:
          "Common causes include dirty air filters, faulty outdoor compressor capacitors, refrigerant leaks, or improper thermostat settings. A qualified local contractor can test and resolve these issues.",
      },
      {
        question: "How quickly can I connect with an AC repair provider?",
        answer:
          "Call our 24/7 connection hotline at (555) 839-4328 to be matched with an independent contractor available in your area.",
      },
    ],
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    shortDesc:
      "Connect with local heating contractors for gas or electric furnace troubleshooting, igniter replacement, and flame sensor service.",
    fullTitle: "Furnace Repair & Heating Service Connection",
    heroHeadline:
      "Connect With Local Heating Providers for Fast Furnace Repair",
    directAnswer:
      "Furnace repair service connects homeowners with independent technicians who inspect igniters, gas valves, flame sensors, draft inductors, and limit switches to restore safe heating during cold weather.",
    features: [
      "Connect with independent furnace repair specialists",
      "Gas and electric furnace diagnostic assistance",
      "24/7 connection line during winter freezes",
      "Safety checks for heating equipment",
    ],
    processSteps: [
      {
        title: "1. Call Heating Hotline",
        desc: "Contact (555) 839-4328 to connect with an independent heating repair provider in your local area.",
      },
      {
        title: "2. Identify Heating Issues",
        desc: "Share whether your furnace is blowing cold air, short-cycling, or failing to ignite.",
      },
      {
        title: "3. Schedule Home Inspection",
        desc: "Arrange a visit with an independent local contractor to inspect your heating system.",
      },
      {
        title: "4. Restore Heating Safety",
        desc: "The independent technician performs necessary component repairs or ignition adjustments.",
      },
    ],
    faqs: [
      {
        question: "Why is my furnace blowing cold air?",
        answer:
          "Cold air from a furnace can stem from a dirty air filter, tripped high-limit switch, failed igniter, or safety lockout. An independent heating provider can inspect and fix the root cause.",
      },
      {
        question: "Are furnace contractors independent?",
        answer:
          "Yes. AirHeat Dispatch connects homeowners with independent service contractors who operate separately from this website.",
      },
    ],
  },
  {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    shortDesc:
      "Connect with heating service providers for burner sanitation, blower assembly cleaning, and flue inspection.",
    fullTitle: "Furnace Cleaning & Maintenance Connection",
    heroHeadline:
      "Connect With Local Providers for Thorough Furnace Cleaning & Inspection",
    directAnswer:
      "Furnace cleaning removes soot, dust, and debris from burners, flame sensors, and blower wheels. Regular cleaning improves combustion efficiency, prevents safety lockouts, and maintains indoor air safety.",
    features: [
      "Connect with local furnace maintenance contractors",
      "Burner and blower assembly cleaning assistance",
      "Flue and venting inspection coordination",
      "Helps improve heating efficiency and safety",
    ],
    processSteps: [
      {
        title: "1. Call Connection Desk",
        desc: "Dial (555) 839-4328 to request local furnace cleaning service connection.",
      },
      {
        title: "2. Match With Local Contractor",
        desc: "We connect you with an independent heating specialist serving your neighborhood.",
      },
      {
        title: "3. Schedule Seasonal Cleaning",
        desc: "Set up a suitable time for the contractor to inspect and clean your heating system.",
      },
      {
        title: "4. Enjoy Efficient Heating",
        desc: "Your chosen contractor cleans key furnace components for reliable winter operation.",
      },
    ],
    faqs: [
      {
        question: "How often should a furnace be cleaned?",
        answer:
          "It is recommended to have your furnace inspected and cleaned once a year before the winter heating season begins.",
      },
      {
        question: "What does furnace cleaning include?",
        answer:
          "Independent contractors typically clean burner nozzles, flame sensors, blower compartments, and check flue vents for unobstructed exhaust.",
      },
    ],
  },
  {
    slug: "furnace-replacement",
    name: "Furnace Replacement",
    shortDesc:
      "Connect with independent HVAC providers for furnace evaluation, high-efficiency equipment selection, and installation.",
    fullTitle: "Furnace Replacement & Installation Connection",
    heroHeadline:
      "Upgrading Your Heating? Connect With Local Furnace Replacement Specialists",
    directAnswer:
      "Furnace replacement connects homeowners with independent local contractors to evaluate aging, inefficient heating systems and install modern, high-AFUE gas or electric furnaces tailored to the home's heating requirements.",
    features: [
      "Connect with local furnace replacement contractors",
      "Guidance on high-efficiency AFUE rated heating units",
      "Options for gas and electric furnace upgrades",
      "Independent contractors handle sizing and installation",
    ],
    processSteps: [
      {
        title: "1. Call for Furnace Upgrade",
        desc: "Call (555) 839-4328 to connect with independent local HVAC installation contractors.",
      },
      {
        title: "2. Schedule In-Home Assessment",
        desc: "An independent contractor visits your home to measure heating requirements and assess existing ductwork.",
      },
      {
        title: "3. Review Equipment Options",
        desc: "Discuss furnace models, efficiency ratings, and installation details directly with your chosen contractor.",
      },
      {
        title: "4. Professional Installation",
        desc: "The hired independent contractor installs the new furnace and verifies safe operation.",
      },
    ],
    faqs: [
      {
        question: "When should I consider replacing my furnace?",
        answer:
          "Consider replacement if your furnace is over 15 years old, requires frequent costly repairs, or causes high heating bills due to low efficiency.",
      },
      {
        question: "Does AirHeat Dispatch perform furnace installations?",
        answer:
          "No. AirHeat Dispatch connects homeowners with independent service contractors who perform all evaluation and installation work.",
      },
    ],
  },
  {
    slug: "hvac-installation",
    name: "HVAC Installation",
    shortDesc:
      "Connect with independent contractors for complete heating and cooling system installations and full unit replacements.",
    fullTitle: "HVAC System Installation Service Connection",
    heroHeadline:
      "Connect With Local HVAC Providers for New System Installation",
    directAnswer:
      "HVAC installation service connects homeowners with independent contractors who perform heat load calculations, select matching condenser and air handler units, and install complete heating and air conditioning systems.",
    features: [
      "Connect with local HVAC installation contractors",
      "Assistance for central AC, furnace, and heat pump installations",
      "Independent contractors perform Manual J load calculations",
      "Serving residential property owners nationwide",
    ],
    processSteps: [
      {
        title: "1. Request Installation Assistance",
        desc: "Call (555) 839-4328 to connect with local independent HVAC installation specialists.",
      },
      {
        title: "2. Consultation & Site Survey",
        desc: "An independent provider assesses your square footage, ductwork, and cooling/heating demands.",
      },
      {
        title: "3. Select HVAC System",
        desc: "Choose appropriate SEER2 and AFUE rated equipment with recommendations from your contractor.",
      },
      {
        title: "4. System Setup & Testing",
        desc: "The independent contractor completes installation and verifies system airflow and temperature performance.",
      },
    ],
    faqs: [
      {
        question: "How long does a new HVAC system installation take?",
        answer:
          "Most residential HVAC system installations take between 1 to 2 days depending on system complexity and duct modifications.",
      },
      {
        question: "How do I choose the right size HVAC system?",
        answer:
          "Independent contractors perform heat load calculations taking into account your home's square footage, insulation, and window placement.",
      },
    ],
  },
  {
    slug: "hvac-maintenance",
    name: "HVAC Maintenance",
    shortDesc:
      "Connect with local providers for seasonal tune-ups, coil cleaning, filter replacements, and system performance checks.",
    fullTitle: "HVAC Seasonal Maintenance & Tune-Up Connection",
    heroHeadline:
      "Keep Your System Running Smoothly — Connect With Local HVAC Maintenance Providers",
    directAnswer:
      "HVAC maintenance connects homeowners with independent contractors for bi-annual system tune-ups including coil inspections, condensate drain line flushing, electrical checkups, and airflow balancing to prevent sudden breakdowns.",
    features: [
      "Connect with independent local HVAC maintenance providers",
      "Bi-annual spring cooling & fall heating tune-up coordination",
      "Helps improve energy efficiency and unit longevity",
      "Coverage for central air, heat pumps, and furnaces",
    ],
    processSteps: [
      {
        title: "1. Call for Maintenance",
        desc: "Call (555) 839-4328 to schedule an HVAC maintenance tune-up with an independent provider.",
      },
      {
        title: "2. Local Match",
        desc: "We route your request to an independent contractor servicing your zip code.",
      },
      {
        title: "3. Comprehensive Tune-Up Visit",
        desc: "The independent contractor checks electrical connections, refrigerant levels, and cleans key components.",
      },
      {
        title: "4. Maintain System Efficiency",
        desc: "Regular tune-ups help protect your system against sudden seasonal outages.",
      },
    ],
    faqs: [
      {
        question: "How often should HVAC maintenance be performed?",
        answer:
          "HVAC systems should be serviced twice annually: once in the spring for cooling and once in the fall for heating.",
      },
      {
        question: "What are the benefits of regular HVAC tune-ups?",
        answer:
          "Regular maintenance helps lower monthly utility bills, prevents unexpected breakdowns, and extends equipment operational lifespan.",
      },
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    shortDesc:
      "Connect with local contractors for heat pumps, electric heat strips, gas heating systems, and thermostat issues.",
    fullTitle: "Heating System Repair Service Connection",
    heroHeadline:
      "Cold Weather Comfort Troubles? Connect With Independent Heating Repair Providers",
    directAnswer:
      "Heating repair connects homeowners with local specialists who diagnose heating failures, faulty sequencers, blower motor outages, and thermostat control issues across electric and gas heating units.",
    features: [
      "Connect with independent local heating repair providers",
      "Servicing electric heat, gas heating, and heat pumps",
      "24/7 hotline for emergency cold weather assistance",
      "Local service availability in your neighborhood",
    ],
    processSteps: [
      {
        title: "1. Call Heating Connection Line",
        desc: "Call (555) 839-4328 to speak with a customer assistant ready to match you with a heating contractor.",
      },
      {
        title: "2. Connect With Independent Contractor",
        desc: "Speak directly with a qualified heating technician in your area.",
      },
      {
        title: "3. On-Site System Inspection",
        desc: "The independent contractor checks heating coils, gas valves, and electrical relays.",
      },
      {
        title: "4. Restore Warm Air Flow",
        desc: "The contractor resolves component failures so your home stays warm.",
      },
    ],
    faqs: [
      {
        question: "What should I do if my heat stops working unexpectedly?",
        answer:
          "First check your thermostat setpoint and air filter. If heat is still not coming on, call (555) 839-4328 to connect with an independent heating repair provider.",
      },
      {
        question: "Can independent contractors repair heat pumps and furnaces?",
        answer:
          "Yes. Independent contractors in our network handle both heat pump heating cycles and gas/electric furnaces.",
      },
    ],
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair",
    shortDesc:
      "Connect with local specialists for heat pump reversing valve troubleshooting, defrost control service, and refrigerant care.",
    fullTitle: "Heat Pump Repair Service Connection",
    heroHeadline:
      "Heat Pump Malfunctioning? Connect With Independent Heat Pump Specialists",
    directAnswer:
      "Heat pump repair connects homeowners with independent contractors who troubleshoot reversing valves, defrost circuit boards, outdoor fan motors, and inverter compressors to restore dual heating and cooling performance.",
    features: [
      "Connect with independent heat pump repair specialists",
      "Troubleshooting for heating and cooling mode switching",
      "Defrost control board and reversing valve assistance",
      "Serving residential homeowners nationwide",
    ],
    processSteps: [
      {
        title: "1. Call Heat Pump Line",
        desc: "Contact (555) 839-4328 to connect with independent local heat pump contractors.",
      },
      {
        title: "2. Describe Heat Pump Issue",
        desc: "Specify if your unit is iced over, stuck in cooling mode, or failing to heat.",
      },
      {
        title: "3. Independent Technician Visit",
        desc: "An independent contractor visits your property to perform diagnostic testing.",
      },
      {
        title: "4. Complete Repair & Mode Test",
        desc: "The contractor repairs damaged relays or valves and verifies mode switching.",
      },
    ],
    faqs: [
      {
        question: "Why is my heat pump stuck in cooling mode during winter?",
        answer:
          "A heat pump stuck in cooling mode often points to a faulty reversing valve solenoid, defrost control board issue, or thermostat wiring signal glitch.",
      },
      {
        question: "Is it normal for a heat pump outdoor unit to frost up?",
        answer:
          "Light frost during cold humid weather is normal, and the defrost cycle should periodically clear it. Excessive ice buildup requires inspection by a heating provider.",
      },
    ],
  },
];

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
          "Independent contractors in the Austin area provide AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC installation, HVAC maintenance, heating repair, and heat pump repair.",
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
      "Connect with independent local HVAC contractors in Houston, TX for emergency AC repair, high-humidity moisture management, and heating service.",
    intro:
      "AirHeat Dispatch connects Houston, Texas homeowners with independent local HVAC service providers. From severe summer humidity along the Gulf Coast to sudden winter temperature drops, local contractors help keep your home comfortable year-round.",
    climateContext:
      "Houston experiences extreme humidity and long, oppressive summer heat loads. High ambient humidity forces air conditioners to run extended cycles, accelerating electrical component wear, evaporator coil corrosion, and condensate drain line overflow.",
    commonProblems: [
      {
        title: "Heavy Condensate Line Algae & Overflows",
        desc: "Houston's high humidity causes rapid biological growth in condensate drain lines, leading to water leakage around air handlers.",
      },
      {
        title: "Compressor Overheating & Failure",
        desc: "Non-stop summer cooling demands put extreme mechanical stress on scroll and reciprocating compressors.",
      },
      {
        title: "High Indoor Humidity & Mold Risk",
        desc: "Short-cycling AC units fail to dehumidify indoor air properly, resulting in clammy indoor air and duct moisture risks.",
      },
      {
        title: "Corrosion on Outdoor Condenser Fins",
        desc: "Coastal moisture and industrial atmosphere in the Greater Houston area speed up aluminum fin oxidation and tube leaks.",
      },
    ],
    subAreas: [
      "The Woodlands",
      "Sugar Land",
      "Katy",
      "Pearland",
      "League City",
      "Pasadena",
      "Spring",
      "Cypress",
      "Baytown",
    ],
    faqs: [
      {
        question: "How do I connect with an AC repair contractor in Houston?",
        answer:
          "Call (555) 839-4328 anytime to connect with an independent local HVAC contractor servicing your Houston neighborhood.",
      },
      {
        question: "Why is high humidity an issue for Houston AC units?",
        answer:
          "Air conditioners in Houston must remove massive amounts of moisture from the air. Proper sizing and drain maintenance are critical to prevent freeze-ups and drain line clogs.",
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
      "Connect with independent local HVAC contractors in Dallas, TX for 24/7 AC repair, furnace troubleshooting, and seasonal HVAC maintenance.",
    intro:
      "AirHeat Dispatch assists Dallas, Texas homeowners in connecting with independent local HVAC contractors. Whether dealing with triple-digit North Texas summer heat waves or severe winter ice storms, call our hotline for fast local phone matching.",
    climateContext:
      "Dallas features sharp climate swings—summer temperatures frequently climb past 105°F while winter cold fronts drop below freezing. Severe spring hailstorms also frequently damage outdoor condenser coil fins.",
    commonProblems: [
      {
        title: "Extreme Outdoor Capacitor Burnout",
        desc: "Prolonged summer heat over 100°F destabilizes dual-run capacitors, preventing the compressor and fan motor from starting.",
      },
      {
        title: "Hail Damage to Outdoor Condenser Coils",
        desc: "North Texas spring severe storms mash aluminum coil fins, choking airflow and raising system head pressure.",
      },
      {
        title: "Winter Furnace Ignition Failures",
        desc: "Gas furnaces sitting idle all summer often experience dirty flame sensors or blocked draft inductors during cold winter snaps.",
      },
      {
        title: "Attic Air Handler Heat Stress",
        desc: "Attic temperatures in Dallas homes can top 140°F, increasing blower motor thermal stress and duct leakage.",
      },
    ],
    subAreas: [
      "Plano",
      "Irving",
      "Frisco",
      "McKinney",
      "Garland",
      "Richardson",
      "Carrollton",
      "Allen",
      "Lewisville",
    ],
    faqs: [
      {
        question: "How quickly can I reach an HVAC provider in Dallas, TX?",
        answer:
          "Call (555) 839-4328 to connect immediately with independent local HVAC service contractors serving Dallas and the DFW Metroplex.",
      },
      {
        question: "Can contractors repair hail-damaged AC coils in Dallas?",
        answer:
          "Yes. Independent contractors can comb damaged coil fins or recommend coil replacements if airflow is severely restricted.",
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
      "Connect with independent local HVAC contractors in San Antonio, TX for 24/7 air conditioning repair, heat pump service, and furnace inspection.",
    intro:
      "AirHeat Dispatch helps San Antonio, Texas homeowners connect with independent local HVAC contractors. From long, humid South-Central Texas summers to chilly winter nights, local providers assist with all heating and cooling needs.",
    climateContext:
      "San Antonio experiences long summer seasons stretching from May through October with high heat and humidity. High mineral content in local water supplies can also create scale buildup around condensate pans and drain lines.",
    commonProblems: [
      {
        title: "AC Fan Motor & Capacitor Strain",
        desc: "Extended cooling seasons strain outdoor fan motors and contactor relays, causing systems to fail during peak heat hours.",
      },
      {
        title: "Algae & Mineral Drain Pan Clogs",
        desc: "Continuous condensate runoff leads to heavy sludge buildup, causing ceiling leaks when indoor units overflow.",
      },
      {
        title: "Heat Pump Mode Reversing Solenoid Failures",
        desc: "Heat pumps switching between summer cooling and fall heating can experience stuck reversing valves.",
      },
      {
        title: "Dust & Pollen Air Filter Clogging",
        desc: "Oak pollen and dust in San Antonio rapidly clog air filters, reducing system airflow and freezing coils.",
      },
    ],
    subAreas: [
      "New Braunfels",
      "Schertz",
      "Boerne",
      "Alamo Heights",
      "Helotes",
      "Converse",
      "Universal City",
    ],
    faqs: [
      {
        question: "How do I request HVAC help in San Antonio, TX?",
        answer:
          "Call (555) 839-4328 to connect with an independent local HVAC contractor servicing San Antonio and surrounding Bexar County communities.",
      },
      {
        question: "What HVAC services are covered in San Antonio?",
        answer:
          "Independent contractors assist with AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC installation, maintenance, heating repair, and heat pump repair.",
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
      "Connect with independent local HVAC contractors in Fort Worth, TX for 24/7 AC repair, furnace troubleshooting, and heating service.",
    intro:
      "AirHeat Dispatch connects Fort Worth, Texas homeowners with independent local HVAC contractors. Whether you live in Tarrant County or surrounding North Texas areas, call our connection desk for prompt contractor matching.",
    climateContext:
      "Fort Worth features severe weather conditions including intense summer heat waves, high wind dust exposure, and icy winter cold fronts. Reliable HVAC operation requires attentive seasonal equipment care.",
    commonProblems: [
      {
        title: "Compressor Contactor Pitting & Electrical Trips",
        desc: "High voltage cycling during hot summer afternoons burns electrical contactor points, causing breaker trips.",
      },
      {
        title: "Refrigerant Line Leakage",
        desc: "Vibration and thermal expansion over long cooling seasons can create micro-leaks in copper line sets.",
      },
      {
        title: "Furnace Flame Sensor Oxidation",
        desc: "Gas furnaces in Fort Worth homes often fail to ignite due to carbon buildup on safety flame sensors.",
      },
      {
        title: "Restricted Airflow & Dirty Blower Wheels",
        desc: "Accumulated dust on blower fans reduces overall CFM output, leading to uneven temperature distribution.",
      },
    ],
    subAreas: [
      "Arlington",
      "North Richland Hills",
      "Euless",
      "Grapevine",
      "Mansfield",
      "Southlake",
      "Keller",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Fort Worth?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC service contractors serving Fort Worth and Tarrant County.",
      },
      {
        question: "Are contractors in Fort Worth independent?",
        answer:
          "Yes. AirHeat Dispatch is a free service connecting homeowners with independent local service contractors.",
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
      "Connect with independent local HVAC contractors in El Paso, TX for central AC repair, heat pump service, and heating system conversion.",
    intro:
      "AirHeat Dispatch helps El Paso, Texas homeowners connect with independent local HVAC contractors. Serving the Trans-Pecos desert region, local contractors assist with central air conditioning, heat pumps, and furnace equipment.",
    climateContext:
      "El Paso's high desert climate produces dry heat exceeding 100°F during summer months alongside blowing sand and severe seasonal dust storms that clog outdoor condenser fins quickly.",
    commonProblems: [
      {
        title: "Desert Dust & Sand Coil Blockage",
        desc: "High winds coat outdoor condenser coils in dust, restricting heat rejection and causing high pressure shutoffs.",
      },
      {
        title: "Low Refrigerant Pressure Leaks",
        desc: "Dry desert thermal expansion degrades line set fittings, requiring halogen leak detection and refrigerant recharges.",
      },
      {
        title: "Evaporator Coil Freeze-Ups",
        desc: "Dust-clogged filters combine with hot dry ambient air to freeze indoor cooling coils rapidly.",
      },
      {
        title: "Heat Pump & Gas Furnace Winter Outages",
        desc: "Cold desert winter nights demand responsive heating repairs when igniters or heat sequencers fail.",
      },
    ],
    subAreas: [
      "Horizon City",
      "Socorro",
      "Canutillo",
      "Anthony",
      "Fort Bliss",
    ],
    faqs: [
      {
        question: "How do I connect with an AC contractor in El Paso, TX?",
        answer:
          "Call (555) 839-4328 to be connected with independent local HVAC contractors serving El Paso and surrounding West Texas zip codes.",
      },
      {
        question: "Why does desert dust affect El Paso AC units?",
        answer:
          "Blowing sand blankets outdoor coils, insulating them and forcing the compressor to run hotter and draw higher electrical current.",
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
      "Connect with independent local HVAC contractors in Arlington, TX for 24/7 AC repair, furnace service, and HVAC maintenance.",
    intro:
      "AirHeat Dispatch connects Arlington, Texas homeowners with independent local HVAC service providers. Located in the heart of the DFW Metroplex, local contractors help resolve heat and cold weather equipment issues fast.",
    climateContext:
      "Arlington experiences hot, humid summers and cold winter cold snaps. High seasonal run hours demand reliable electrical capacitors, clean coils, and leak-free refrigerant lines.",
    commonProblems: [
      {
        title: "Capacitor & Contactor Failures",
        desc: "Heavy summer run hours burn out dual run capacitors and magnetic contactor points in outdoor units.",
      },
      {
        title: "Condensate Overflow Leaks",
        desc: "High indoor moisture removal creates drain line blockages that flood emergency drain pans.",
      },
      {
        title: "Blower Motor Capacitor Trips",
        desc: "Air handler blower motors overheat when filters are left unchanged during peak summer cooling.",
      },
      {
        title: "Furnace Ignition Failures",
        desc: "Gas furnace flame sensors or draft inductor motors fail when winter cold fronts arrive.",
      },
    ],
    subAreas: [
      "Grand Prairie",
      "Mansfield",
      "Kennedale",
      "Pantego",
      "Dalworthington Gardens",
    ],
    faqs: [
      {
        question: "How do I connect with an HVAC contractor in Arlington, TX?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC contractors serving Arlington and Tarrant County.",
      },
      {
        question: "What services are available in Arlington?",
        answer:
          "Independent contractors offer AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC installation, maintenance, heating repair, and heat pump repair.",
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
      "Connect with independent local HVAC contractors in Corpus Christi, TX for coastal AC repair, coil corrosion treatment, and heating service.",
    intro:
      "AirHeat Dispatch connects Corpus Christi, Texas homeowners with independent local HVAC contractors. Coastal Gulf Coast weather presents unique challenges for residential air conditioning equipment.",
    climateContext:
      "Corpus Christi features intense humid heat alongside corrosive salt air off Corpus Christi Bay and the Gulf of Mexico, accelerating copper line set oxidation and outdoor fin breakdown.",
    commonProblems: [
      {
        title: "Salt Air Condenser Coil Corrosion",
        desc: "Salty air oxidizes aluminum fins and copper tubing, causing micro-refrigerant leaks and reduced heat rejection.",
      },
      {
        title: "Extreme Humidity Drain Line Clogging",
        desc: "Non-stop moisture condensation creates heavy algae growth in drain lines, causing overflow indoor leaks.",
      },
      {
        title: "Continuous Compressor Wear",
        desc: "Long cooling seasons from April through November strain scroll compressors and outdoor fan bearings.",
      },
      {
        title: "Thermostat & Humidity Control Glitches",
        desc: "High indoor humidity causes thermostat sensor misreadings and room comfort complaints.",
      },
    ],
    subAreas: [
      "Portland",
      "Robstown",
      "Ingleside",
      "Port Aransas",
      "Kingsville",
    ],
    faqs: [
      {
        question: "How do I connect with an AC repair contractor in Corpus Christi?",
        answer:
          "Call (555) 839-4328 to connect with independent local HVAC contractors serving Corpus Christi and the Coastal Bend.",
      },
      {
        question: "How does coastal salt air affect Corpus Christi AC units?",
        answer:
          "Salt air accelerates corrosion on aluminum fins and copper tubing. Regular maintenance and coil washing help protect coastal equipment.",
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
      "Connect with independent local HVAC contractors in Plano, TX for 24/7 AC repair, furnace replacement, and seasonal tune-ups.",
    intro:
      "AirHeat Dispatch assists Plano, Texas homeowners in connecting with independent local HVAC service contractors. Serving Collin County homeowners with fast 24/7 local phone matching.",
    climateContext:
      "Plano homes frequently feature large multi-zone heating and cooling systems. Hot North Texas summers and extreme winter temperature drops require precise equipment sizing and airflow balancing.",
    commonProblems: [
      {
        title: "Multi-Zone Damper & Relay Failures",
        desc: "Motorized zone dampers and control boards malfunction, causing uneven cooling between downstairs and upstairs rooms.",
      },
      {
        title: "Attic Air Handler Overheating",
        desc: "High attic temperatures in Plano homes cause thermal overload shutoffs in blower fan motors.",
      },
      {
        title: "Outdoor Unit Run Capacitor Failure",
        desc: "High ambient summer temps cause run capacitors to swell and pop, preventing outdoor units from cooling.",
      },
      {
        title: "Furnace Sequencer & Heat Strip Outages",
        desc: "Electric and gas furnaces require pre-season flame sensor cleaning and relay checks before cold snaps hit.",
      },
    ],
    subAreas: [
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

import { ALABAMA_STATE_DATA, ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES, getAlabamaLocationData } from "./alabama";

export { ALABAMA_STATE_DATA, ALABAMA_PRESET_CITIES_DATA, ALABAMA_ALL_CITIES, getAlabamaLocationData };

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


export const GENERAL_FAQS = [
  {
    question: "What is AirHeat Dispatch?",
    answer:
      "AirHeat Dispatch is a free homeowner connection service designed to help homeowners connect with independent local HVAC service contractors nationwide.",
  },
  {
    question: "Is AirHeat Dispatch an HVAC contractor?",
    answer:
      "No. AirHeat Dispatch is not an HVAC contractor, does not employ technicians or maintain service vehicles, and does not directly perform HVAC work.",
  },
  {
    question: "How much does it cost to use AirHeat Dispatch?",
    answer:
      "Our homeowner connection service is completely free to use. Homeowners pay their chosen independent contractor directly for any service or repair performed.",
  },
  {
    question: "What services can independent HVAC contractors help with?",
    answer:
      "Independent contractors can assist with AC repair, furnace repair, furnace cleaning, furnace replacement, HVAC system installation, seasonal maintenance, heating repair, and heat pump repair.",
  },
  {
    question: "How do I connect with a local HVAC service provider?",
    answer:
      "Call our connection hotline at (555) 839-4328 anytime to speak with a representative and connect with an independent HVAC contractor serving your area.",
  },
];
