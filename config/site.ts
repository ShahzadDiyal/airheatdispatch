export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  fullTitle: string;
  directAnswer: string;
  heroHeadline: string;
  priceRange: string;
  startingPrice: number;
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
  priceRange: "$$",
  rating: {
    ratingValue: 4.9,
    reviewCount: 684,
  },
  openingHours: "Mo-Su 00:00-23:59", // 24/7 Service
  primaryKeyword: "HVAC Service and Repair",
  tagline: "Certified 24/7 Heating, Cooling & Air Conditioning Experts",
  licenseNumber: "TACLB98421E",
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
    priceRange: "$89 - $450+",
    startingPrice: 89,
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
        question: "How much does a standard AC diagnostic fee cost?",
        answer:
          "Our full AC diagnostic service is $89, which is waived 100% when you approve any recommended repair on the same visit.",
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
    priceRange: "$95 - $520+",
    startingPrice: 95,
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
        title: "4. Carbon Monoxide & CO Clearance",
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
    priceRange: "$79 - $149",
    startingPrice: 79,
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
    priceRange: "$120 - $550",
    startingPrice: 120,
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
        desc: "Speak immediately with a live technician manager—no automated answering machine.",
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
    priceRange: "$150 - $600",
    startingPrice: 150,
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
    question: "How much does typical HVAC repair cost?",
    answer:
      "Basic HVAC repairs range from $89 to $350 for minor electrical fixes (capacitors, relays, or thermostatic controls), while major repairs such as compressor replacement or coil repairs range from $450 to $1,200 depending on system age and refrigerant type.",
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
