export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  fullTitle: string;
  directAnswer: string;
  heroHeadline: string;
  priceLabel: string;
  features: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SITE_CONFIG = {
  name: "AirHeat Dispatch",
  legalName: "AirHeat Dispatch HVAC & Thermal Solutions LLC",
  domain: "https://airheatdispatch.com",
  phone: "(555) 839-4328",
  phoneRaw: "5558394328",
  email: "support@airheatdispatch.com",
  address: {
    street: "100 Climate Tech Way, Suite 400",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "US",
  },
  geo: {
    latitude: 30.2672,
    longitude: -97.7431,
  },
  priceRange: "Upfront Flat-Rate Quote",
  rating: {
    ratingValue: 4.9,
    reviewCount: 684,
  },
  openingHours: "Mo-Su 00:00-23:59", // 24/7 Service
  primaryKeyword: "HVAC Service and Repair",
  tagline: "Certified 24/7 Heating, Cooling & Air Conditioning Experts",
  licenseText: "State Licensed & Insured",
  serviceAreas: [
    "Downtown Austin",
    "North Austin",
    "South Austin",
    "Round Rock",
    "Cedar Park",
    "Pflugerville",
    "Georgetown",
    "Lakeway",
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    slug: "ac-repair",
    name: "Emergency AC Repair & Diagnostics",
    shortDesc: "Rapid 24/7 air conditioning repair, freon leak fixes, compressor restoration, and diagnostic troubleshooting.",
    fullTitle: "Fast & Certified AC Repair & Diagnostic Services",
    heroHeadline: "Immediate Air Conditioning Repair with Guaranteed Cold Air Restoration",
    directAnswer:
      "Professional AC repair restores cooling performance by diagnosing refrigerant leaks, electrical capacitor failures, frozen coils, or compressor breakdowns. Emergency AC repair offers same-day dispatch to prevent system overheat and maintain indoor temperature efficiency.",
    priceLabel: "Upfront Free Quote",
    features: [
      "24/7 Same-Day Emergency Response",
      "Comprehensive 21-Point Refrigerant & Coil Inspection",
      "Upfront Flat-Rate Pricing with Zero Hidden Fees",
      "Factory-Certified Technicians for All Major HVAC Brands",
      "100% Cold Air & Comfort Guarantee",
    ],
    processSteps: [
      {
        title: "1. Rapid Thermal & Electrical Diagnostics",
        desc: "Our EPA-certified technician checks electrical draw, refrigerant pressure, airflow restriction, and thermostat accuracy.",
      },
      {
        title: "2. Upfront Flat-Rate Estimate",
        desc: "You receive a clear, itemized repair quote before any work begins—no unexpected surcharges.",
      },
      {
        title: "3. Precision Component Repair",
        desc: "We replace blown capacitors, repair freon leaks, clear clogged condensate drain lines, or swap faulty fan motors.",
      },
      {
        title: "4. Airflow & System Performance Test",
        desc: "We verify subcooling/superheat temperatures and static pressure to ensure maximum SEER2 operating efficiency.",
      },
    ],
    faqs: [
      {
        question: "How fast can a technician arrive for an emergency AC repair?",
        answer:
          "We offer 24/7 emergency dispatch with average arrival times within 60 minutes across our primary service territory.",
      },
      {
        question: "What are the common signs my AC unit needs urgent repair?",
        answer:
          "Warning signs include blowing warm air, loud squealing or clanking noises, frequent cycling, water leaking around the indoor handler, or sudden spike in electric bills.",
      },
      {
        question: "How do I request a free quote for AC diagnostics?",
        answer:
          "Simply call our 24/7 dispatch desk at (555) 839-4328 or click Request Free Quote to lock in instant technician scheduling.",
      },
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating & Furnace Repair Services",
    shortDesc: "Complete furnace troubleshooting, heat pump repairs, igniter replacement, and heat exchanger safety checks.",
    fullTitle: "Expert Furnace & Heat Pump Repair Services",
    heroHeadline: "Reliable Heating Repair to Keep Your Home Warm and Safe",
    directAnswer:
      "Heating and furnace repair resolves ignition failure, cracked heat exchangers, malfunctioning thermostats, and pilot light issues in gas, electric, and heat pump systems. Certified technicians ensure safe combustion and energy-efficient heating performance.",
    priceLabel: "Upfront Flat-Rate Quote",
    features: [
      "Gas & Electric Furnace Emergency Diagnostics",
      "Heat Pump Inverter & Defrost Board Repair",
      "Carbon Monoxide & Heat Exchanger Safety Testing",
      "OEM Replacement Parts for Carrier, Trane, Lennox & Rheem",
      "1-Year Labor Warranty on All Repairs",
    ],
    processSteps: [
      {
        title: "1. Safety & Ignition Inspection",
        desc: "We test flame sensors, gas control valves, draft inductors, and limit switches for proper safety operation.",
      },
      {
        title: "2. Combustion & Airflow Testing",
        desc: "We inspect furnace burners and measure static pressure to prevent heat exchanger thermal stress.",
      },
      {
        title: "3. Certified Part Replacement",
        desc: "Defective hot surface igniters, blower motors, or transformers are replaced with original manufacturer parts.",
      },
      {
        title: "4. Carbon Monoxide Clearance",
        desc: "We run full CO detector diagnostics to guarantee 100% safe heating output before leaving.",
      },
    ],
    faqs: [
      {
        question: "Why is my furnace blowing cold air?",
        answer:
          "Common causes include a tripped high-limit switch, dirty air filter restricting airflow, faulty igniter, or a safety shutoff due to gas valve pressure anomalies.",
      },
      {
        question: "Is it safe to run a furnace if it smells like burning?",
        answer:
          "A dusty smell during the first seasonal turn-on is normal. However, a persistent burning metal or plastic smell requires immediate furnace shutdown and professional inspection.",
      },
    ],
  },
  {
    slug: "hvac-maintenance",
    name: "Seasonal HVAC Maintenance & Tune-Up",
    shortDesc: "Comprehensive bi-annual tune-ups, coil cleaning, filter replacement, and system efficiency optimization.",
    fullTitle: "Proactive Seasonal HVAC Tune-Up & Maintenance",
    heroHeadline: "Prevent Costly Breakdowns & Reduce Energy Bills up to 30%",
    directAnswer:
      "Seasonal HVAC maintenance is a comprehensive 26-point system tune-up that includes coil cleaning, duct pressure testing, electrical calibration, and filter replacement. Regular maintenance extends equipment lifespan by 5-10 years and maintains peak SEER rating performance.",
    priceLabel: "Custom Maintenance Estimate",
    features: [
      "26-Point Precision Tune-Up & Cleaning",
      "Evaporator & Condenser Coil Sanitation",
      "Blower Motor Lubrication & Amp Draw Calibration",
      "Thermostat Recalibration & Airflow Balance",
      "Free Priority Scheduling & Membership Discounts",
    ],
    processSteps: [
      {
        title: "1. Visual & Electrical Audit",
        desc: "Inspecting wiring tightness, contactors, capacitors, and circuit breaker ratings.",
      },
      {
        title: "2. Coil & Condensate Line Flush",
        desc: "Clearing biological buildup, algae, and dust from coils and drain pans to prevent water overflow.",
      },
      {
        title: "3. Airflow & Filter Replacement",
        desc: "Installing high-MERV air filters and balancing supply/return vent dampers.",
      },
      {
        title: "4. SEER Performance Optimization",
        desc: "Fine-tuning refrigerant charge to manufacturer factory specs for maximum energy savings.",
      },
    ],
    faqs: [
      {
        question: "How often should an HVAC system be serviced?",
        answer:
          "HVAC systems should be serviced twice per year: once in spring for air conditioning and once in fall for heating system optimization.",
      },
      {
        question: "What does an HVAC seasonal tune-up include?",
        answer:
          "A seasonal tune-up includes refrigerant check, electrical connection tightening, blower assembly cleaning, condensate drain flushing, safety switch testing, and thermostat calibration.",
      },
    ],
  },
  {
    slug: "emergency-service",
    name: "24/7 Emergency HVAC Repair",
    shortDesc: "Immediate 24-hour emergency response for extreme hot or cold weather HVAC outages.",
    fullTitle: "24/7 Emergency Heating & Air Conditioning Repair",
    heroHeadline: "Extreme Weather HVAC Outage? We're On Call 24 Hours a Day, 365 Days a Year",
    directAnswer:
      "24/7 emergency HVAC repair provides immediate, on-demand dispatch for catastrophic heating or air conditioning failures during severe weather extremes. Emergency technicians arrive fully stocked to restore climate control instantly.",
    priceLabel: "Immediate Quote Required",
    features: [
      "Guaranteed On-Site Arrival within 60 Minutes",
      "Fully Stocked Mobile Dispatch Units",
      "No Additional Midnight or Holiday Surprises",
      "Certified Diagnostics for Commercial & Residential",
      "Immediate Cold / Hot Air Recovery Guarantee",
    ],
    processSteps: [
      {
        title: "1. 24/7 Direct Line Call Intake",
        desc: "Speak immediately with a live technician manager at (555) 839-4328—no automated answering machine.",
      },
      {
        title: "2. Priority Mobile Dispatch",
        desc: "Our fully equipped service truck routes straight to your home or office location.",
      },
      {
        title: "3. On-Site System Stabilization",
        desc: "We diagnose critical power failure, refrigerant burst, or compressor lockdown immediately.",
      },
      {
        title: "4. Rapid Repair Completion",
        desc: "Parts are swapped on the spot from our heavy inventory of universal motors, relays, and valves.",
      },
    ],
    faqs: [
      {
        question: "What qualifies as an HVAC emergency?",
        answer:
          "An HVAC emergency includes total system failure during freezing winter temps (<35°F) or extreme summer heat (>95°F), electrical burning smells, refrigerant leaks, or flooding condensate drain pans.",
      },
      {
        question: "Do you charge extra fees for weekend or holiday emergency service?",
        answer:
          "We offer transparent, flat-rate emergency pricing upfront so you know the exact cost before work begins without surprise fees.",
      },
    ],
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality & Duct Services",
    shortDesc: "Duct cleaning, UV air purifier installation, HEPA filtration, and humidity control systems.",
    fullTitle: "Indoor Air Quality (IAQ) & Air Duct Sanitization",
    heroHeadline: "Breathe Cleaner, Healthier Air with Pro Duct Cleaning & UV Purification",
    directAnswer:
      "Indoor air quality (IAQ) services eliminate allergens, dust mites, mold spores, and airborne pathogens using HEPA duct vacuuming, UV-C light purifiers, whole-home dehumidifiers, and MERV-13 air filtration systems.",
    priceLabel: "Request Free IAQ Quote",
    features: [
      "Negative-Pressure Rotobrush Duct Cleaning",
      "Whole-Home UV-C Bacterial Light Installation",
      "Whole-House Dehumidifier Integration",
      "Allergen & Mold Spore Air Quality Audit",
      "Duct Sealing & Leakage Repair (Aeroseal)",
    ],
    processSteps: [
      {
        title: "1. Video Duct Inspection",
        desc: "We insert high-definition cameras into your ductwork to detect dust buildup, mold colonies, or air leaks.",
      },
      {
        title: "2. HEPA Negative Pressure Vacuuming",
        desc: "High-powered vacuum suction removes contaminants from every supply and return vent line.",
      },
      {
        title: "3. Eco-Friendly Sanitization Spray",
        desc: "Non-toxic antimicrobial mist sanitizes duct interiors, preventing mold and bacteria growth.",
      },
      {
        title: "4. IAQ Purifier & Filter Installation",
        desc: "Integrating UV-C purification lights or high-MERV filter racks directly into your central air handler.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my ductwork needs cleaning?",
        answer:
          "Signs include visible dust blowing from vents, persistent unexplained allergies, musty odors when the system starts, or recent home renovation work.",
      },
      {
        question: "Can UV air purifiers kill viruses in central HVAC systems?",
        answer:
          "Yes, medical-grade UV-C lamps installed in the supply duct sanitize airborne pathogens, viruses, bacteria, and mold spores as air circulates through the unit.",
      },
    ],
  },
  {
    slug: "heat-pump-service",
    name: "Heat Pump Diagnostics & Inverter Service",
    shortDesc: "Expert heat pump repair, reversing valve replacement, and energy-efficient inverter tuning.",
    fullTitle: "Heat Pump Diagnostics & Inverter System Service",
    heroHeadline: "Year-Round Dual Heating & Cooling Solutions for Maximum SEER2 Efficiency",
    directAnswer:
      "Heat pump service restores dual-mode heating and cooling performance by repairing reversing valves, defrost control boards, variable-speed inverter compressors, and auxiliary heating elements. Certified technicians ensure optimal thermal balance in summer and winter.",
    priceLabel: "Request Free Quote",
    features: [
      "Reversing Valve & Defrost Control Troubleshooting",
      "Variable-Speed Inverter Compressor Calibration",
      "Auxiliary Heat Strip & Thermostat Relay Repair",
      "Subcooling & Superheat Refrigerant Diagnostics",
      "Dual-Fuel Hybrid Heat System Optimization",
    ],
    processSteps: [
      {
        title: "1. Mode Switching & Reversing Valve Audit",
        desc: "Testing solenoid voltage and directional refrigerant flow between cooling and heating modes.",
      },
      {
        title: "2. Defrost Board & Sensor Testing",
        desc: "Verifying outdoor coil sensors to prevent ice accumulation during freezing damp weather.",
      },
      {
        title: "3. Inverter Drive Board Calibration",
        desc: "Checking DC voltage output and variable compressor frequency ramps for maximum efficiency.",
      },
      {
        title: "4. System Thermal Balance Test",
        desc: "Measuring Delta T temperature differential across supply and return ducts.",
      },
    ],
    faqs: [
      {
        question: "Why is my heat pump stuck in cooling mode during winter?",
        answer:
          "A heat pump stuck in cooling mode usually indicates a broken reversing valve solenoid, faulty defrost control board, or incorrect thermostat wiring signals.",
      },
      {
        question: "Is a heat pump more energy-efficient than a standard AC and furnace?",
        answer:
          "Yes, modern inverter heat pumps can reach up to 24 SEER2 efficiency by transferring heat rather than burning fuel, cutting heating costs by up to 50%.",
      },
    ],
  },
  {
    slug: "ductless-mini-split",
    name: "Ductless Mini-Split Installation & Repair",
    shortDesc: "Single and multi-zone ductless mini-split troubleshooting, refrigerant recharge, and deep coil wash.",
    fullTitle: "Ductless Mini-Split Repair & Multi-Zone Installation",
    heroHeadline: "Targeted Zoned Comfort for Additions, Sunrooms, and Whole Homes",
    directAnswer:
      "Ductless mini-split service addresses zone cooling failures, condensate drain leaks, communication wire faults, and dirty blower wheels. Specialized technicians repair inverter circuit boards and perform deep hydro-washing on indoor wall cassettes.",
    priceLabel: "Request Free Quote",
    features: [
      "Indoor Wall Cassette Hydro-Clean & Sanitation",
      "Multi-Zone Branch Provider Valve Diagnostics",
      "R-410A / R-32 Precision Refrigerant Servicing",
      "Wireless Remote & Smart WiFi Controller Pairing",
      "Ultra-Quiet 19+ SEER2 Efficiency Tuning",
    ],
    processSteps: [
      {
        title: "1. Diagnostic Error Code Scan",
        desc: "Reading factory LED flash codes from the main inverter outdoor control board.",
      },
      {
        title: "2. Indoor Blower Wheel Hydro-Clean",
        desc: "Washing mold spores and dust accumulation off the cylindrical blower fan wheel.",
      },
      {
        title: "3. Flare Fitting & Flare Leak Inspection",
        desc: "Checking copper line set flare connections with electronic halogen leak detectors.",
      },
      {
        title: "4. Zone Airflow & Temp Verification",
        desc: "Testing individual room temperature setpoints and louvre swing actuators.",
      },
    ],
    faqs: [
      {
        question: "Why is my mini-split dripping water inside the wall?",
        answer:
          "Water dripping from an indoor mini-split cassette is usually caused by a clogged condensate drain tube, improper wall unit tilt, or frozen evaporator coils due to low refrigerant.",
      },
      {
        question: "How long does a ductless mini-split system last?",
        answer:
          "With annual maintenance and coil sanitization, high-efficiency ductless mini-splits typically last 15 to 20 years.",
      },
    ],
  },
  {
    slug: "commercial-hvac",
    name: "Commercial Rooftop HVAC & Refrigeration",
    shortDesc: "Rooftop unit (RTU) maintenance, commercial packaged unit repair, and economizer tuning.",
    fullTitle: "Commercial Rooftop Unit (RTU) & Packaged HVAC Services",
    heroHeadline: "Heavy-Duty Climate Control for Office Buildings, Retail, & Industrial Facilities",
    directAnswer:
      "Commercial HVAC service provides preventative maintenance and emergency repair for rooftop packaged units (RTUs), chillers, commercial economizers, and makeup air units. Experienced commercial technicians prevent facility downtime and maintain strict indoor air standards.",
    priceLabel: "Request Commercial Estimate",
    features: [
      "Packaged Rooftop Unit (RTU) Repair & Replacement",
      "Commercial Belt Drive & Sheave Alignment",
      "Economizer Damper & Enthalpy Controller Tuning",
      "3-Phase Electrical Motor & Contactor Servicing",
      "24/7 Priority Commercial Dispatch Service",
    ],
    processSteps: [
      {
        title: "1. 3-Phase Electrical & Phase Monitor Inspection",
        desc: "Testing phase balance, voltage drops, and magnetic starter contactors under full load.",
      },
      {
        title: "2. Economizer & Outdoor Air Damper Test",
        desc: "Calibrating enthalpy sensors to ensure energy-saving free-cooling cycles when outdoor weather permits.",
      },
      {
        title: "3. Commercial Belt & Blower Servicing",
        desc: "Inspecting V-belts for cracking, adjusting tension, and greasing pillow block bearings.",
      },
      {
        title: "4. Facility Air Balancing & Pressure Audit",
        desc: "Checking building static pressure to prevent doors from slamming or outdoor humidity intrusion.",
      },
    ],
    faqs: [
      {
        question: "What is an economizer on a commercial HVAC unit?",
        answer:
          "An economizer is a mechanical vent system that brings in cool outdoor air to cool the building naturally when ambient conditions are right, dramatically cutting compressor energy consumption.",
      },
      {
        question: "Do you offer commercial maintenance agreements?",
        answer:
          "Yes, we customize quarterly commercial HVAC maintenance programs designed to prevent unexpected downtime and extend RTU lifespan.",
      },
    ],
  },
  {
    slug: "thermostat-smart-controls",
    name: "Smart Thermostat Installation & Repair",
    shortDesc: "Nest, Ecobee, and Honeywell smart thermostat setup, C-wire installation, and sensor calibration.",
    fullTitle: "Smart Thermostat Installation & HVAC Control Diagnostics",
    heroHeadline: "Take Complete Control of Your Home Climate with Precision Smart Controls",
    directAnswer:
      "Smart thermostat services involve installing C-wire power adapters, calibrating digital temperature sensors, configuring multi-stage heat/cool relays, and troubleshooting WiFi connectivity issues on Nest, Ecobee, Honeywell, and communicating HVAC controls.",
    priceLabel: "Request Quote",
    features: [
      "Nest, Ecobee & Honeywell Pro Installation",
      "Common Wire (C-Wire) Adapter Wiring & Upgrades",
      "Multi-Stage (Y1/Y2, W1/W2) Relay Configuration",
      "Remote Room Sensor Placement & Airflow Pairing",
      "WiFi Mobile App Setup & Schedule Optimization",
    ],
    processSteps: [
      {
        title: "1. Voltage & Control Board Compatibility Check",
        desc: "Testing 24VAC transformer power and low-voltage control terminal wiring at the air handler.",
      },
      {
        title: "2. Precision Wire Stripping & Mounting",
        desc: "Installing wall anchors, level mounting plates, and connecting R, C, Y, W, G control leads.",
      },
      {
        title: "3. Equipment Profile Configuration",
        desc: "Programming system type (Heat Pump vs Gas Furnace) and cycle rate parameters into the thermostat software.",
      },
      {
        title: "4. Mobile Pairing & User Training",
        desc: "Connecting the device to your home WiFi and showing you how to manage smart schedules from your smartphone.",
      },
    ],
    faqs: [
      {
        question: "Why is my new smart thermostat turning off and on rapidly?",
        answer:
          "Rapid short-cycling is often caused by a missing C-wire (common ground), wrong equipment configuration settings, or a tripped furnace safety limit switch.",
      },
      {
        question: "Can a smart thermostat really lower electric bills?",
        answer:
          "Yes, ENERGY STAR certified smart thermostats reduce heating and cooling costs by 10% to 15% by automatically adjusting setback temperatures when you are away.",
      },
    ],
  },
  {
    slug: "coil-cleaning-sanitization",
    name: "Evaporator & Condenser Coil Sanitation",
    shortDesc: "Deep chemical coil cleaning, mold removal, aluminum fin straightening, and drain pan flush.",
    fullTitle: "Deep Evaporator & Condenser Coil Sanitization",
    heroHeadline: "Restore Icy Cold Air & System Efficiency with Pro Coil Cleaning",
    directAnswer:
      "Coil cleaning and sanitization removes heavy dust buildup, organic slime, mold colonies, and oxidation from indoor evaporator coils and outdoor condenser fins using alkaline foaming cleansers, pressurized rinses, and antimicrobial sprays.",
    priceLabel: "Request Free Quote",
    features: [
      "Alkaline Foaming Chemical Coil Wash",
      "Antimicrobial Mold & Algae Treatment",
      "Condensate Drain Pan & Trap Flush",
      "Bent Aluminum Fin Comb Straightening",
      "Restores Thermal Heat Transfer Efficiency",
    ],
    processSteps: [
      {
        title: "1. Coil Access & Inspection",
        desc: "Removing access panels and inspecting coil fin density for dirt occlusion and mold growth.",
      },
      {
        title: "2. Heavy Foaming Chemical Wash",
        desc: "Applying self-foaming non-acid coil cleaner that penetrates deep between aluminum fins to push dirt outward.",
      },
      {
        title: "3. Pressurized Rinse & Fin Combing",
        desc: "Rinsing debris clean and using precision fin combs to straighten bent aluminum fins for maximum airflow.",
      },
      {
        title: "4. Biological Sanitizer Application",
        desc: "Spraying EPA-registered sanitizer on coils and condensate pans to prevent mold recurrence for up to 6 months.",
      },
    ],
    faqs: [
      {
        question: "Why is coil cleaning necessary for an AC unit?",
        answer:
          "Dirty coils act as thermal insulation, preventing heat transfer. Just a 1/16th inch layer of dirt on an evaporator coil can reduce cooling capacity by 20% and cause the system to freeze up.",
      },
      {
        question: "What is 'Dirty Sock Syndrome' in HVAC units?",
        answer:
          "Dirty Sock Syndrome refers to a foul, moldy odor emitted from vents when heat pump or AC coils accumulate bacteria and mold. Professional coil sanitization completely eliminates this smell.",
      },
    ],
  },
  {
    slug: "furnace-safety-inspection",
    name: "Emergency Gas Line & Furnace Safety Check",
    shortDesc: "Combustion safety testing, carbon monoxide clearance, heat exchanger crack detection, and gas valve check.",
    fullTitle: "Comprehensive Furnace Combustion & Gas Safety Inspection",
    heroHeadline: "Protect Your Family with Certified Gas & Heat Exchanger Safety Testing",
    directAnswer:
      "Emergency furnace safety inspections test gas lines for methane leaks, inspect heat exchangers for microscopic cracks using optical borescopes, measure carbon monoxide (CO) ppm output, and verify draft inductor flue safety shutoffs.",
    priceLabel: "Request Free Quote",
    features: [
      "Methane & Natural Gas Line Electronic Leak Search",
      "Optical Borescope Heat Exchanger Inspection",
      "Carbon Monoxide (CO) Flue Gas Analyzer Audit",
      "Flame Sensor & Flame Rollout Switch Diagnostics",
      "Complete Safety Compliance & Clearance Report",
    ],
    processSteps: [
      {
        title: "1. Methane & Gas Valve Sniffer Test",
        desc: "Using calibrated electronic gas detectors to scan all pipe joints, flex lines, and gas control valves.",
      },
      {
        title: "2. Borescope Exchanger Inspection",
        desc: "Inserting high-resolution cameras into combustion chambers to inspect metal walls for cracks or rust perforation.",
      },
      {
        title: "3. Flue Draft & CO Analyzer Test",
        desc: "Measuring combustion gases in the vent pipe to confirm proper air-to-fuel ratios and zero dangerous CO spillover.",
      },
      {
        title: "4. Safety Switch Operation Test",
        desc: "Tripping limit switches, flame rollout sensors, and pressure switches to ensure automatic gas shutoff works.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my furnace has a cracked heat exchanger?",
        answer:
          "Symptoms include soot buildup inside the furnace cabinet, strange fluttering flames when the blower turns on, persistent headache or nausea (CO exposure), or a tripped rollout safety switch.",
      },
      {
        question: "Is carbon monoxide testing included in a furnace safety check?",
        answer:
          "Yes, we perform ambient and flue gas carbon monoxide analyzer testing on every single furnace service visit to guarantee safety.",
      },
    ],
  },
];

export const GENERAL_FAQS = [
  {
    question: "What is included in professional HVAC Service and Repair?",
    answer:
      "Professional HVAC service and repair includes system diagnostics, refrigerant pressure checks, electrical connection tightening, blower motor testing, coil cleaning, heat exchanger safety testing, thermostat calibration, and replacing worn parts like capacitors, igniters, or contactors.",
  },
  {
    question: "How do I choose a reliable local HVAC contractor?",
    answer:
      "Select an HVAC contractor that is state-licensed, insured, EPA-certified, offers upfront flat-rate pricing, provides 24/7 emergency service, and holds verified 5-star customer ratings with strong warranties on parts and labor.",
  },
  {
    question: "How do I get a free quote for HVAC repair?",
    answer:
      "You can request a free upfront quote by calling our 24/7 hotline at (555) 839-4328 or submitting your service request online. We provide clear, itemized flat-rate quotes before any work begins.",
  },
  {
    question: "What are the early signs that my HVAC system is failing?",
    answer:
      "Common indicators include unusual noises (grinding, squealing, buzzing), erratic temperature swings, warm air blowing in cooling mode, high indoor humidity levels, water pooling near the air handler, and unexplained spikes in monthly utility bills.",
  },
  {
    question: "Should I repair or replace my aging HVAC system?",
    answer:
      "Follow the 5,000 rule: Multiply the age of your system by the repair cost. If the total exceeds $5,000, or if your system is over 12-15 years old with low SEER ratings, replacing it with a high-efficiency unit is generally more cost-effective.",
  },
];
