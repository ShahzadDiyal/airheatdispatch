import { CoreService } from "@/types/service";

export type ServiceItem = CoreService & {
  fullTitle?: string;
  directAnswer?: string;
  heroHeadline?: string;
  processSteps?: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
};

export const CORE_SERVICES: CoreService[] = [
  {
    slug: "hvac",
    name: "HVAC Repair & Service",
    shortDesc:
      "Connect with independent local HVAC specialists for complete heating, cooling, airflow, and system diagnostics.",
    fullTitle: "HVAC Repair & Heating Cooling Service Connection",
    heroHeadline:
      "HVAC System Malfunctioning? Connect With Independent Local Providers Today",
    directAnswer:
      "AirHeat Dispatch helps homeowners connect with independent local HVAC contractors for heating and cooling assistance. When your central HVAC unit experiences airflow restriction, thermostat miscommunication, electrical capacitor failure, or refrigerant imbalance, call (202) 931-4151 to connect with local service providers.",
    features: [
      "Free 24/7 hotline connection service for homeowners",
      "Matches callers with independent local HVAC contractors",
      "Assistance for central AC, gas furnaces, and heat pumps",
      "Residential repair, diagnostics, and seasonal maintenance",
    ],
    processSteps: [
      {
        title: "1. Call Connection Hotline",
        desc: "Dial (202) 931-4151 to connect with an independent local HVAC contractor.",
      },
      {
        title: "2. Describe System Symptoms",
        desc: "Explain whether your system is blowing warm air, making noises, or failing to start.",
      },
      {
        title: "3. Connect With Independent Contractor",
        desc: "Our connection system routes your call to an independent HVAC provider in your area.",
      },
      {
        title: "4. Professional Inspection & Repair",
        desc: "The independent contractor diagnoses system issues and provides an estimate directly.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my HVAC system needs professional inspection?",
        answer:
          "Common indicators include unequal cooling/heating, unusual grinding sounds, elevated utility bills, weak vent airflow, or frequent cycling.",
      },
      {
        question: "What should I check before calling an HVAC provider?",
        answer:
          "Verify that your thermostat has fresh batteries and is set to the correct mode, check if your air filter is clogged, and confirm your main breaker panel hasn't tripped.",
      },
    ],
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortDesc:
      "Fast phone connection for central air conditioner repairs, capacitor replacements, and refrigerant leak checks.",
    fullTitle: "Central Air Conditioner Repair Service Connection",
    heroHeadline:
      "Air Conditioner Not Cooling? Connect With Independent Local AC Repair Contractors",
    directAnswer:
      "Air conditioner repair connection matches homeowners experiencing cooling failures, blown capacitors, frozen evaporator coils, or condensate drain line clogs with independent local AC repair contractors available 24/7.",
    features: [
      "24/7 phone hotline connection for AC emergencies",
      "Independent contractors for central AC unit repairs",
      "Help for capacitor failures, fan motor issues, and clogged drains",
      "Serving homeowners across Texas and nationwide regions",
    ],
    processSteps: [
      {
        title: "1. Call AC Connection Line",
        desc: "Contact (202) 931-4151 to speak with a representative for local provider connection.",
      },
      {
        title: "2. Provide Location & AC Issue",
        desc: "Share your zip code and details about your cooling breakdown.",
      },
      {
        title: "3. Independent Technician Scheduling",
        desc: "Connect directly with an independent local technician serving your area.",
      },
      {
        title: "4. System Diagnostics & Repair",
        desc: "Your chosen contractor inspects the outdoor condenser, indoor coil, and electrical controls.",
      },
    ],
    faqs: [
      {
        question: "Why is my AC blowing warm air?",
        answer:
          "Blowing warm air is frequently caused by a failed run capacitor, dirty condenser coils, low refrigerant levels, or a tripped outdoor breaker.",
      },
      {
        question: "Why is my air conditioner freezing up?",
        answer:
          "Ice accumulation on indoor evaporator coils usually results from restricted airflow caused by a dirty air filter or low refrigerant charge.",
      },
    ],
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    shortDesc:
      "Connect with local contractors for gas and electric furnace troubleshooting, igniter replacement, and flame sensor cleaning.",
    fullTitle: "Furnace Repair & Heating Diagnostics Connection",
    heroHeadline:
      "Heating System Out? Connect With Independent Local Furnace Repair Contractors",
    directAnswer:
      "Furnace repair service connects homeowners facing sudden heating outages, cracked hot surface igniters, dirty flame sensors, or limit switch trips with independent local heating technicians.",
    features: [
      "Connect with independent heating repair contractors",
      "Gas and electric furnace diagnostic assistance",
      "Igniter replacement, flame sensor cleaning, and blower repair",
      "24/7 emergency phone connection hotline",
    ],
    processSteps: [
      {
        title: "1. Call Heating Line",
        desc: "Dial (202) 931-4151 to connect with an independent heating contractor.",
      },
      {
        title: "2. State Furnace Symptoms",
        desc: "Describe whether your furnace is blowing cold air, short cycling, or failing to ignite.",
      },
      {
        title: "3. Independent Provider Connection",
        desc: "Connect directly with a local independent heating specialist.",
      },
      {
        title: "4. Safe System Inspection & Repair",
        desc: "The contractor inspects gas valves, igniters, flame sensors, and safety switches.",
      },
    ],
    faqs: [
      {
        question: "Why is my furnace blowing cold air?",
        answer:
          "Cold air from a furnace often stems from a dirty flame sensor, a faulty hot surface igniter, a clogged air filter causing overheating, or a pilot light outage.",
      },
      {
        question: "Is furnace repair dangerous to DIY?",
        answer:
          "Yes. Gas furnaces involve high-voltage electricity, natural gas or propane pressure, and carbon monoxide risks. Professional inspection by a licensed contractor is strongly advised.",
      },
    ],
  },
  {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    shortDesc:
      "Seasonal burner cleaning, blower motor dust removal, and heat exchanger maintenance connection.",
    fullTitle: "Furnace Cleaning & Maintenance Connection",
    heroHeadline:
      "Prepare Your Heating System: Connect With Local Furnace Cleaning Technicians",
    directAnswer:
      "Furnace cleaning connection assists homeowners seeking pre-winter maintenance, burner cleaning, blower wheel debris removal, and heat exchanger safety inspections by connecting them with independent local HVAC contractors.",
    features: [
      "Connect with local independent contractors for seasonal tune-ups",
      "Burner assembly cleaning and flame sensor polishing",
      "Blower motor housing dust and lint removal",
      "Proactive maintenance to support heating efficiency",
    ],
    processSteps: [
      {
        title: "1. Call Maintenance Line",
        desc: "Contact (202) 931-4151 to request local furnace cleaning provider connection.",
      },
      {
        title: "2. Specify Heating Type",
        desc: "Indicate whether you have a natural gas, propane, or electric furnace system.",
      },
      {
        title: "3. Independent Contractor Match",
        desc: "Speak with an independent local service contractor in your zip code.",
      },
      {
        title: "4. Complete Tune-Up Service",
        desc: "The contractor cleans internal components and verifies safe combustion.",
      },
    ],
    faqs: [
      {
        question: "How often should a furnace be cleaned?",
        answer:
          "Annual cleaning before the autumn/winter heating season is recommended to remove dust, verify flame sensor operation, and ensure safe operation.",
      },
      {
        question: "What does furnace cleaning include?",
        answer:
          "Typical maintenance involves cleaning burner tubes, polishing the flame sensor, inspecting the heat exchanger, checking electrical connections, and testing draft pressure.",
      },
    ],
  },
  {
    slug: "furnace-replacement",
    name: "Furnace Replacement",
    shortDesc:
      "Connect with independent contractors to evaluate old heating units and receive high-efficiency furnace installation estimates.",
    fullTitle: "Furnace Replacement & Heating Upgrade Connection",
    heroHeadline:
      "Aging Heating System? Connect With Independent Local Furnace Installation Contractors",
    directAnswer:
      "Furnace replacement connection helps homeowners whose heating systems are old, cracked, or beyond repair connect with independent local HVAC contractors to evaluate system options and schedule professional replacement.",
    features: [
      "Connect with independent local replacement contractors",
      "Guidance on high-efficiency gas and electric furnaces",
      "System sizing evaluations for optimal comfort",
      "Free hotline matching for residential homeowners",
    ],
    processSteps: [
      {
        title: "1. Call Replacement Line",
        desc: "Call (202) 931-4151 to connect with independent local installation contractors.",
      },
      {
        title: "2. Discuss System Goals",
        desc: "Explain the age of your current furnace and efficiency preferences.",
      },
      {
        title: "3. Home Assessment Visit",
        desc: "An independent contractor visits your home to calculate heating loads.",
      },
      {
        title: "4. Professional Installation",
        desc: "Your chosen contractor removes old equipment and installs the new system.",
      },
    ],
    faqs: [
      {
        question: "When should a furnace be replaced instead of repaired?",
        answer:
          "Replacement is generally considered when a furnace is over 15 years old, requires frequent costly repairs, has a cracked heat exchanger, or causes high utility bills.",
      },
      {
        question: "How long does a new furnace installation take?",
        answer:
          "Most standard residential furnace replacements take between 4 to 8 hours depending on duct adjustments and gas line configuration.",
      },
    ],
  },
  {
    slug: "hvac-installation",
    name: "HVAC System Installation",
    shortDesc:
      "Connect with local contractors for complete heating and air conditioning system replacements and new home installations.",
    fullTitle: "HVAC System Installation & Replacement Connection",
    heroHeadline:
      "Upgrading Your Comfort? Connect With Independent Local HVAC Installation Specialists",
    directAnswer:
      "HVAC installation connection links homeowners upgrading aging heating and cooling equipment with independent local HVAC contractors who perform Manual J load calculations, duct inspections, and full system installations.",
    features: [
      "Connect with independent local installation specialists",
      "Matched for central AC, furnace, and heat pump combos",
      "High-efficiency SEER2 heating and cooling equipment",
      "Serving residential properties nationwide",
    ],
    processSteps: [
      {
        title: "1. Contact Installation Line",
        desc: "Dial (202) 931-4151 to connect with independent local HVAC contractors.",
      },
      {
        title: "2. Schedule Home Consultation",
        desc: "An independent contractor visits your property to measure square footage.",
      },
      {
        title: "3. Review Equipment Options",
        desc: "Choose from various SEER2 efficiency tiers and system configurations.",
      },
      {
        title: "4. System Commissioning",
        desc: "The contractor installs, charges, and tests your new HVAC system.",
      },
    ],
    faqs: [
      {
        question: "What SEER2 rating should I look for in a new AC?",
        answer:
          "In Southern climates like Texas, a minimum SEER2 rating of 14.3 is required by federal standards, while higher 16-20+ SEER2 systems offer greater monthly energy savings.",
      },
      {
        question: "Why is proper HVAC sizing important?",
        answer:
          "An oversized system will short cycle and fail to dehumidify, while an undersized system will run continuously without reaching the thermostat setpoint.",
      },
    ],
  },
  {
    slug: "hvac-maintenance",
    name: "Seasonal HVAC Maintenance",
    shortDesc:
      "Spring AC tune-ups and fall heating checkups connection to keep systems running efficiently.",
    fullTitle: "Seasonal HVAC Maintenance & Tune-Up Connection",
    heroHeadline:
      "Protect Your Investment: Connect With Independent Local HVAC Maintenance Providers",
    directAnswer:
      "HVAC maintenance connection matches homeowners with independent local contractors for comprehensive spring cooling tune-ups and fall heating inspections to catch minor component wear before major breakdowns occur.",
    features: [
      "Connect with independent contractors for bi-annual checkups",
      "Condenser coil cleaning and refrigerant level checks",
      "Electrical capacitor, contactor, and wiring inspections",
      "Blower wheel cleaning and thermostat calibration",
    ],
    processSteps: [
      {
        title: "1. Call Maintenance Line",
        desc: "Call (202) 931-4151 to request local HVAC maintenance provider connection.",
      },
      {
        title: "2. Request Spring/Fall Tune-Up",
        desc: "Indicate whether you need pre-summer cooling or pre-winter heating service.",
      },
      {
        title: "3. Independent Contractor Match",
        desc: "Connect directly with an independent local HVAC contractor.",
      },
      {
        title: "4. Multi-Point System Inspection",
        desc: "The contractor performs a complete tune-up and reports component health.",
      },
    ],
    faqs: [
      {
        question: "What are the benefits of regular HVAC maintenance?",
        answer:
          "Routine maintenance helps prevent sudden mid-season breakdowns, maintains operational energy efficiency, extends equipment lifespan, and satisfies manufacturer warranty terms.",
      },
      {
        question: "When is the best time for HVAC tune-ups?",
        answer:
          "Spring is ideal for inspecting air conditioners before summer heat, and autumn is recommended for checking heating systems before cold weather arrives.",
      },
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    shortDesc:
      "Connect with local contractors for emergency heating outages, heat pump repair, and furnace ignition troubleshooting.",
    fullTitle: "Heating Repair & Emergency Diagnostics Connection",
    heroHeadline:
      "Cold Air Indoors? Connect With Independent Local Heating Repair Technicians",
    directAnswer:
      "Heating repair connection assists homeowners dealing with cold indoor temperatures by connecting them with independent local heating contractors skilled in gas furnaces, electric air handlers, and heat pump systems.",
    features: [
      "24/7 hotline connection for unexpected heating outages",
      "Independent contractors for furnaces, heat pumps, and boilers",
      "Diagnostics for thermostat issues, circuit boards, and igniters",
      "Serving homeowners across Texas and nationwide regions",
    ],
    processSteps: [
      {
        title: "1. Call Heating Line",
        desc: "Contact (202) 931-4151 to connect with an independent local heating contractor.",
      },
      {
        title: "2. Describe Heating Symptoms",
        desc: "Explain if your system is blowing cold air, cycling constantly, or uncommunicative.",
      },
      {
        title: "3. Independent Technician Visit",
        desc: "An independent contractor inspects electrical, gas, and airflow components.",
      },
      {
        title: "4. System Repair & Testing",
        desc: "The contractor completes necessary repairs and verifies warm air delivery.",
      },
    ],
    faqs: [
      {
        question: "What causes a heating system to stop working suddenly?",
        answer:
          "Common causes include a tripped circuit breaker, a blown transformer fuse, a failed ignition control board, a dirty flame sensor, or a clogged air filter triggering thermal safety switches.",
      },
      {
        question: "How fast can I connect with a heating contractor?",
        answer:
          "Our phone hotline is available 24/7, 365 days a year to connect callers with independent local contractors serving their zip code.",
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
        desc: "Contact (202) 931-4151 to connect with independent local heat pump contractors.",
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
