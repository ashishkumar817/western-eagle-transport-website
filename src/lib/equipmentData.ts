export interface EquipmentVariant {
  name: string;
  slug: string;
  capacity: string;
  description: string;
  applications: string[];
  specifications: string[];
}

export interface EquipmentData {
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  metaDescription: string;
  overview: {
    title: string;
    description: string;
    industries: string[];
    benefits: string[];
  };
  applications: {
    title: string;
    description: string;
    useCases: string[];
  };
  whyRent: string[];
  variants: EquipmentVariant[];
  image: string;
}

export const equipmentData: Record<string, EquipmentData> = {
  forklift: {
    name: "Forklift",
    slug: "forklift",
    heroTitle: "Forklift Rental in UAE",
    heroSubtitle: "Reliable Forklift Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent high-quality forklifts in UAE. Western Eagle offers electric, diesel & LPG forklifts with trained operators. Serving Dubai, Abu Dhabi, Sharjah.",
    overview: {
      title: "Overview",
      description: "Forklifts are essential material handling equipment designed to lift, move, and stack heavy loads efficiently. Our fleet includes electric, diesel, and LPG-powered forklifts suitable for warehouses, construction sites, manufacturing plants, and logistics centers across the UAE. Each forklift is meticulously maintained to ensure optimal performance, safety, and reliability for your operations. Whether you need to handle palletized goods, construction materials, or heavy machinery, our forklifts deliver the power and precision required for demanding industrial applications.",
      industries: ["Warehousing & Logistics", "Construction", "Manufacturing", "Retail & Distribution", "Oil & Gas", "Food & Beverage"],
      benefits: ["Enhanced productivity and efficiency", "Reduced manual labor and injury risks", "Flexible lifting capacities from 3 to 25 tons", "Indoor and outdoor operation capabilities", "Low emissions options available"]
    },
    applications: {
      title: "Applications",
      description: "Forklifts serve a wide range of applications across various industries in the UAE construction and logistics sectors.",
      useCases: [
        "Loading and unloading shipping containers and trucks",
        "Stacking and organizing inventory in warehouses",
        "Moving heavy construction materials on job sites",
        "Transporting goods within manufacturing facilities",
        "Handling palletized products in distribution centers",
        "Supporting infrastructure and road construction projects"
      ]
    },
    whyRent: [
      "Cost-effective solution without capital investment",
      "Access to latest forklift models and technology",
      "Maintenance and repairs included in rental",
      "Flexible rental terms from daily to long-term",
      "Quick availability and delivery across UAE",
      "Trained operators available on request",
      "24/7 technical support and breakdown assistance"
    ],
    variants: [
      { name: "3 Ton Forklift", slug: "3-ton", capacity: "3 Ton", description: "Compact 3-ton forklift ideal for light to medium warehouse operations and indoor material handling tasks.", applications: ["Indoor warehousing", "Retail stockrooms", "Light manufacturing"], specifications: ["Lifting capacity: 3,000 kg", "Lift height: 3-6 meters", "Compact design for narrow aisles"] },
      { name: "5 Ton Forklift", slug: "5-ton", capacity: "5 Ton", description: "Versatile 5-ton forklift suitable for medium-duty operations in warehouses and construction sites.", applications: ["Medium warehousing", "Construction sites", "Distribution centers"], specifications: ["Lifting capacity: 5,000 kg", "Lift height: 4-7 meters", "Diesel and electric options"] },
      { name: "7 Ton Forklift", slug: "7-ton", capacity: "7 Ton", description: "Heavy-duty 7-ton forklift designed for demanding industrial applications and heavier loads.", applications: ["Industrial facilities", "Heavy manufacturing", "Port operations"], specifications: ["Lifting capacity: 7,000 kg", "Lift height: 5-8 meters", "Enhanced stability system"] },
      { name: "10 Ton Forklift", slug: "10-ton", capacity: "10 Ton", description: "Powerful 10-ton forklift for heavy industrial use, container handling, and major construction projects.", applications: ["Container handling", "Heavy construction", "Steel industry"], specifications: ["Lifting capacity: 10,000 kg", "Lift height: 4-6 meters", "Reinforced mast and forks"] },
      { name: "15 Ton Forklift", slug: "15-ton", capacity: "15 Ton", description: "High-capacity 15-ton forklift for extra-heavy loads in ports, shipyards, and large industrial facilities.", applications: ["Port operations", "Shipyards", "Heavy industry"], specifications: ["Lifting capacity: 15,000 kg", "Lift height: 4-5 meters", "Heavy-duty chassis"] },
      { name: "25 Ton Forklift", slug: "25-ton", capacity: "25 Ton", description: "Maximum capacity 25-ton forklift for the most demanding heavy-lift applications and mega projects.", applications: ["Mega construction projects", "Industrial plants", "Oil & gas facilities"], specifications: ["Lifting capacity: 25,000 kg", "Specialized lifting attachments", "Maximum stability design"] }
    ],
    image: "/src/assets/equipment/forklift.jpg"
  },
  "wheel-loader": {
    name: "Wheel Loader",
    slug: "wheel-loader",
    heroTitle: "Wheel Loader Rental in UAE",
    heroSubtitle: "Powerful Wheel Loader Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent reliable wheel loaders in UAE. Western Eagle provides compact to large wheel loaders for construction, mining & material handling. Fast delivery.",
    overview: {
      title: "Overview",
      description: "Wheel loaders are versatile heavy equipment designed for loading, moving, and transporting materials across construction sites, quarries, and industrial facilities. Our wheel loader fleet features powerful engines, large bucket capacities, and excellent all-terrain mobility. These machines excel at moving large quantities of soil, gravel, sand, and construction debris efficiently. With articulated steering and robust construction, our wheel loaders provide the power and maneuverability needed for demanding UAE construction and infrastructure projects.",
      industries: ["Construction", "Mining & Quarrying", "Landscaping", "Infrastructure Development", "Waste Management", "Agriculture"],
      benefits: ["High bucket capacity for maximum productivity", "All-terrain mobility and excellent traction", "Powerful engines for heavy-duty operations", "Comfortable operator cabin with AC", "Low maintenance and reliable performance"]
    },
    applications: {
      title: "Applications",
      description: "Wheel loaders are essential for material handling and loading operations across UAE construction and industrial sectors.",
      useCases: [
        "Loading trucks with aggregate materials",
        "Moving and stockpiling construction materials",
        "Site preparation and land clearing",
        "Snow and debris removal operations",
        "Material handling in quarries and mines",
        "Supporting road construction projects"
      ]
    },
    whyRent: [
      "Avoid high purchase costs and depreciation",
      "Access to latest wheel loader technology",
      "Maintenance and servicing included",
      "Flexible rental periods as needed",
      "Rapid deployment across UAE locations",
      "Skilled operators available",
      "Comprehensive breakdown support"
    ],
    variants: [
      { name: "1 Cubic Meter Wheel Loader", slug: "1-cubic-meter", capacity: "1 Cubic Meter", description: "Compact 1 cubic meter wheel loader perfect for small construction sites and confined spaces.", applications: ["Small construction sites", "Urban projects", "Landscaping"], specifications: ["Bucket capacity: 1 m³", "Compact design", "Easy maneuverability"] },
      { name: "2 Cubic Meter Wheel Loader", slug: "2-cubic-meter", capacity: "2 Cubic Meter", description: "Medium capacity wheel loader for general construction and material handling tasks.", applications: ["General construction", "Material handling", "Road works"], specifications: ["Bucket capacity: 2 m³", "Medium frame", "Versatile attachments"] },
      { name: "3 Cubic Meter Wheel Loader", slug: "3-cubic-meter", capacity: "3 Cubic Meter", description: "Larger capacity wheel loader for heavy-duty loading and hauling operations.", applications: ["Heavy construction", "Quarries", "Infrastructure"], specifications: ["Bucket capacity: 3 m³", "High lifting capacity", "Powerful engine"] },
      { name: "5 Cubic Meter Wheel Loader", slug: "5-cubic-meter", capacity: "5 Cubic Meter", description: "High-capacity wheel loader for major construction and mining operations.", applications: ["Major projects", "Mining", "Large-scale loading"], specifications: ["Bucket capacity: 5 m³", "Maximum productivity", "Heavy-duty construction"] }
    ],
    image: "/src/assets/equipment/wheel-loader.jpg"
  },
  cranes: {
    name: "Crane",
    slug: "cranes",
    heroTitle: "Crane Rental in UAE",
    heroSubtitle: "Professional Crane Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent mobile cranes, tower cranes & all-terrain cranes in UAE. Western Eagle provides lifting solutions for construction & industrial projects.",
    overview: {
      title: "Overview",
      description: "Cranes are indispensable lifting equipment for construction, infrastructure, and industrial projects requiring precise heavy lifting capabilities. Our crane fleet includes mobile cranes, all-terrain cranes, and specialized lifting solutions ranging from 25 to 250 tons capacity. Each crane is equipped with advanced safety systems, GPS monitoring, and operated by certified professionals. We serve high-rise construction, bridge building, industrial plant installation, and heavy machinery handling across the UAE.",
      industries: ["High-rise Construction", "Infrastructure Development", "Industrial Plants", "Oil & Gas", "Power Generation", "Port Operations"],
      benefits: ["Wide range of lifting capacities", "Certified and experienced operators", "Latest safety technology and monitoring", "Long boom reach for high structures", "All-terrain mobility options"]
    },
    applications: {
      title: "Applications",
      description: "Cranes provide critical lifting solutions for the most demanding construction and industrial projects in the UAE.",
      useCases: [
        "High-rise building construction and steel erection",
        "Bridge and overpass construction",
        "Heavy machinery and equipment installation",
        "HVAC system placement on buildings",
        "Modular building and prefab assembly",
        "Wind turbine and solar panel installation"
      ]
    },
    whyRent: [
      "Significant cost savings vs purchasing",
      "Access to various crane capacities as needed",
      "Certified operators included with rental",
      "Full maintenance and safety compliance",
      "Flexible mobilization across UAE",
      "Insurance and liability coverage",
      "24/7 project support"
    ],
    variants: [
      { name: "25 Ton Crane", slug: "25-ton", capacity: "25 Ton", description: "Compact 25-ton crane ideal for smaller construction sites and general lifting tasks.", applications: ["Small construction", "Residential projects", "Light industrial"], specifications: ["Lifting capacity: 25 tons", "Boom length: up to 30m", "Quick setup time"] },
      { name: "50 Ton Crane", slug: "50-ton", capacity: "50 Ton", description: "Versatile 50-ton crane for medium construction and industrial lifting requirements.", applications: ["Commercial construction", "Industrial lifting", "Infrastructure"], specifications: ["Lifting capacity: 50 tons", "Boom length: up to 40m", "All-terrain capability"] },
      { name: "70 Ton Crane", slug: "70-ton", capacity: "70 Ton", description: "Heavy-duty 70-ton crane for substantial lifting operations and major projects.", applications: ["Major construction", "Heavy industrial", "Power plants"], specifications: ["Lifting capacity: 70 tons", "Boom length: up to 50m", "Enhanced stability"] },
      { name: "100 Ton Crane", slug: "100-ton", capacity: "100 Ton", description: "High-capacity 100-ton crane for heavy construction and industrial installations.", applications: ["High-rise construction", "Heavy machinery", "Bridge works"], specifications: ["Lifting capacity: 100 tons", "Boom length: up to 60m", "Maximum reach"] },
      { name: "150 Ton Crane", slug: "150-ton", capacity: "150 Ton", description: "Extra-heavy 150-ton crane for the most demanding lifting operations.", applications: ["Mega projects", "Oil & gas", "Power generation"], specifications: ["Lifting capacity: 150 tons", "Extended boom options", "Heavy-duty outriggers"] },
      { name: "250 Ton Crane", slug: "250-ton", capacity: "250 Ton", description: "Maximum capacity 250-ton crane for exceptional heavy-lift requirements.", applications: ["Exceptional heavy lifts", "Industrial plants", "Major infrastructure"], specifications: ["Lifting capacity: 250 tons", "Maximum stability design", "Specialized rigging"] }
    ],
    image: "/src/assets/equipment/crane.jpg"
  },
  manlifts: {
    name: "Manlift",
    slug: "manlifts",
    heroTitle: "Manlift Rental in UAE",
    heroSubtitle: "Safe Manlift Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent boom lifts, articulating lifts & manlifts in UAE. Western Eagle offers aerial work platforms for construction, maintenance & industrial work.",
    overview: {
      title: "Overview",
      description: "Manlifts, also known as boom lifts or aerial work platforms, provide safe elevated access for workers performing tasks at height. Our fleet includes articulating boom lifts, telescopic boom lifts, and spider lifts with working heights ranging from 12 to 50 meters. These machines are essential for building maintenance, electrical work, facade installation, and any task requiring safe access to elevated positions. All equipment features safety harness attachment points, emergency descent systems, and stable platforms.",
      industries: ["Construction", "Building Maintenance", "Electrical Works", "Telecommunications", "Film Production", "Event Management"],
      benefits: ["Safe working platforms with guardrails", "Excellent reach and maneuverability", "Indoor and outdoor models available", "Emergency descent systems", "Reduced setup time vs scaffolding"]
    },
    applications: {
      title: "Applications",
      description: "Manlifts provide flexible elevated access for a wide range of construction and maintenance applications.",
      useCases: [
        "Building facade installation and maintenance",
        "Electrical and HVAC system work",
        "Painting and coating at height",
        "Tree trimming and landscaping",
        "Signage and billboard installation",
        "Film and event production support"
      ]
    },
    whyRent: [
      "Cost-effective access to elevated work",
      "Various heights and reach options",
      "Full maintenance and safety checks",
      "Quick delivery and setup",
      "Operators available if needed",
      "Flexible rental terms",
      "Comprehensive training support"
    ],
    variants: [
      { name: "12m Boom Lift", slug: "12m", capacity: "12 Meters", description: "Compact 12-meter boom lift for indoor and light outdoor elevated access.", applications: ["Indoor maintenance", "Retail fit-outs", "Light construction"], specifications: ["Working height: 12m", "Compact design", "Electric options available"] },
      { name: "16m Boom Lift", slug: "16m", capacity: "16 Meters", description: "Versatile 16-meter boom lift for general construction and maintenance work.", applications: ["General construction", "Maintenance", "Installation work"], specifications: ["Working height: 16m", "Good outreach", "Articulating boom"] },
      { name: "20m Boom Lift", slug: "20m", capacity: "20 Meters", description: "Medium-height 20-meter boom lift for building maintenance and construction.", applications: ["Building maintenance", "Facade work", "Construction"], specifications: ["Working height: 20m", "Enhanced stability", "Diesel powered"] },
      { name: "26m Boom Lift", slug: "26m", capacity: "26 Meters", description: "Higher reach 26-meter boom lift for commercial building projects.", applications: ["Commercial buildings", "Industrial facilities", "Infrastructure"], specifications: ["Working height: 26m", "Extended outreach", "All-terrain capable"] },
      { name: "40m Boom Lift", slug: "40m", capacity: "40 Meters", description: "High-reach 40-meter boom lift for tall structures and major projects.", applications: ["High-rise buildings", "Major construction", "Wind turbines"], specifications: ["Working height: 40m", "Maximum outreach", "Heavy-duty platform"] },
      { name: "50m Boom Lift", slug: "50m", capacity: "50 Meters", description: "Maximum height 50-meter boom lift for the tallest structures and special projects.", applications: ["Exceptional heights", "Special projects", "Industrial stacks"], specifications: ["Working height: 50m", "Telescopic boom", "Maximum capacity platform"] }
    ],
    image: "/src/assets/equipment/boom-lift.jpg"
  },
  "scissor-lift": {
    name: "Scissor Lift",
    slug: "scissor-lift",
    heroTitle: "Scissor Lift Rental in UAE",
    heroSubtitle: "Versatile Scissor Lift Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent electric & diesel scissor lifts in UAE. Western Eagle offers indoor and rough terrain scissor lifts for construction & warehouse work.",
    overview: {
      title: "Overview",
      description: "Scissor lifts provide stable vertical elevation platforms for construction, maintenance, and warehouse operations. Our fleet includes electric scissor lifts for indoor use and rough terrain diesel scissor lifts for outdoor construction sites. These platforms offer larger work areas than boom lifts, making them ideal for tasks requiring multiple workers or extensive equipment at height. All scissor lifts feature safety guardrails, non-slip platforms, and emergency descent capabilities.",
      industries: ["Warehousing", "Construction", "Manufacturing", "Retail", "Maintenance", "Event Setup"],
      benefits: ["Large stable work platform", "Multiple worker capacity", "Indoor and outdoor options", "Easy operation and control", "Cost-effective elevation solution"]
    },
    applications: {
      title: "Applications",
      description: "Scissor lifts excel in applications requiring stable elevated platforms with generous work space.",
      useCases: [
        "Warehouse racking installation and maintenance",
        "Indoor construction and fit-out work",
        "Electrical and lighting installation",
        "HVAC duct installation and maintenance",
        "Ceiling and overhead work",
        "Event stage and display setup"
      ]
    },
    whyRent: [
      "Economical elevation solution",
      "Electric options for indoor use",
      "Rough terrain models available",
      "Minimal training required",
      "Quick setup and deployment",
      "Maintenance included",
      "Flexible rental periods"
    ],
    variants: [
      { name: "6m Scissor Lift", slug: "6m", capacity: "6 Meters", description: "Compact 6-meter electric scissor lift for indoor warehouse and retail work.", applications: ["Retail stockrooms", "Small warehouses", "Indoor maintenance"], specifications: ["Working height: 6m", "Electric powered", "Compact footprint"] },
      { name: "8m Scissor Lift", slug: "8m", capacity: "8 Meters", description: "Versatile 8-meter scissor lift for general indoor and light outdoor work.", applications: ["General warehousing", "Light construction", "Maintenance"], specifications: ["Working height: 8m", "Electric and diesel options", "Standard platform size"] },
      { name: "10m Scissor Lift", slug: "10m", capacity: "10 Meters", description: "Medium-height 10-meter scissor lift for construction and industrial use.", applications: ["Construction sites", "Industrial facilities", "Installation work"], specifications: ["Working height: 10m", "Enhanced platform size", "Rough terrain option"] },
      { name: "12m Scissor Lift", slug: "12m", capacity: "12 Meters", description: "Higher reach 12-meter scissor lift for substantial indoor projects.", applications: ["Large warehouses", "Industrial buildings", "Commercial fit-outs"], specifications: ["Working height: 12m", "Large platform", "Heavy-duty design"] },
      { name: "15m Scissor Lift", slug: "15m", capacity: "15 Meters", description: "High-reach 15-meter rough terrain scissor lift for outdoor construction.", applications: ["Outdoor construction", "Building facades", "Large projects"], specifications: ["Working height: 15m", "Diesel powered", "All-terrain tires"] }
    ],
    image: "/src/assets/equipment/scissor-lift.jpg"
  },
  generators: {
    name: "Generator",
    slug: "generators",
    heroTitle: "Generator Rental in UAE",
    heroSubtitle: "Reliable Generator Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent diesel generators in UAE from 20kVA to 1000kVA. Western Eagle provides power solutions for construction, events & emergency backup.",
    overview: {
      title: "Overview",
      description: "Generators provide essential backup and primary power solutions for construction sites, events, industrial facilities, and emergency situations. Our generator fleet ranges from compact 20kVA units to powerful 1000kVA industrial generators capable of powering entire construction sites or commercial facilities. All generators are fuel-efficient, low-noise, and regularly maintained to ensure reliable power delivery when you need it most. We provide complete power solutions including cabling, distribution boards, and fuel management.",
      industries: ["Construction", "Events & Entertainment", "Oil & Gas", "Manufacturing", "Healthcare", "Data Centers"],
      benefits: ["Reliable power supply guarantee", "Wide range of capacities available", "Low noise operation", "Fuel-efficient performance", "Complete power distribution solutions"]
    },
    applications: {
      title: "Applications",
      description: "Generators serve critical power needs across diverse applications and industries in the UAE.",
      useCases: [
        "Construction site power supply",
        "Outdoor events and exhibitions",
        "Emergency backup power",
        "Remote location power",
        "Industrial facility support",
        "Data center backup systems"
      ]
    },
    whyRent: [
      "No capital investment required",
      "Access to various power capacities",
      "Fuel-efficient latest models",
      "Maintenance and support included",
      "Quick deployment anywhere in UAE",
      "24/7 emergency support",
      "Flexible rental terms"
    ],
    variants: [
      { name: "20 kVA Generator", slug: "20-kva", capacity: "20 kVA", description: "Compact 20kVA generator for small sites, offices, and light equipment power.", applications: ["Small construction sites", "Office backup", "Small events"], specifications: ["Power output: 20 kVA", "Diesel powered", "Low noise operation"] },
      { name: "60 kVA Generator", slug: "60-kva", capacity: "60 kVA", description: "Medium capacity 60kVA generator for general construction and medium events.", applications: ["Medium sites", "Events", "Retail"], specifications: ["Power output: 60 kVA", "Fuel efficient", "Automatic transfer switch compatible"] },
      { name: "100 kVA Generator", slug: "100-kva", capacity: "100 kVA", description: "Versatile 100kVA generator for larger construction sites and commercial applications.", applications: ["Large construction", "Commercial facilities", "Industrial"], specifications: ["Power output: 100 kVA", "Heavy-duty construction", "Extended fuel tank"] },
      { name: "250 kVA Generator", slug: "250-kva", capacity: "250 kVA", description: "High-capacity 250kVA generator for major projects and large facilities.", applications: ["Major construction", "Large events", "Industrial plants"], specifications: ["Power output: 250 kVA", "Soundproof canopy", "Remote monitoring"] },
      { name: "500 kVA Generator", slug: "500-kva", capacity: "500 kVA", description: "Industrial 500kVA generator for heavy power requirements and large-scale operations.", applications: ["Heavy industry", "Large construction", "Data centers"], specifications: ["Power output: 500 kVA", "Industrial grade", "Parallel capability"] },
      { name: "1000 kVA Generator", slug: "1000-kva", capacity: "1000 kVA", description: "Maximum capacity 1000kVA generator for exceptional power demands.", applications: ["Mega projects", "Industrial complexes", "Critical facilities"], specifications: ["Power output: 1000 kVA", "Maximum reliability", "Full power management"] }
    ],
    image: "/src/assets/equipment/generator.jpg"
  },
  roller: {
    name: "Roller",
    slug: "roller",
    heroTitle: "Roller Rental in UAE",
    heroSubtitle: "Professional Road Roller Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent vibratory rollers, tandem rollers & compactors in UAE. Western Eagle provides road construction equipment for asphalt & soil compaction.",
    overview: {
      title: "Overview",
      description: "Road rollers and compactors are essential equipment for road construction, asphalt laying, and ground compaction projects. Our roller fleet includes vibratory rollers, tandem rollers, pneumatic rollers, and single drum compactors in various sizes. These machines deliver precise compaction for road surfaces, parking areas, and construction site preparation. All rollers feature variable frequency vibration, water spray systems, and comfortable operator cabins for efficient, quality compaction work.",
      industries: ["Road Construction", "Infrastructure", "Landscaping", "Airport Construction", "Industrial Flooring", "Civil Works"],
      benefits: ["Excellent compaction results", "Variable vibration frequency", "Water spray systems included", "Comfortable operator environment", "Fuel-efficient operation"]
    },
    applications: {
      title: "Applications",
      description: "Rollers provide critical compaction for road construction and ground preparation projects.",
      useCases: [
        "Asphalt road surface compaction",
        "Sub-base and base course compaction",
        "Parking lot and driveway construction",
        "Airport runway maintenance",
        "Industrial floor preparation",
        "Landscaping and site preparation"
      ]
    },
    whyRent: [
      "Cost-effective for project-based work",
      "Access to specialized compaction equipment",
      "Maintenance and support included",
      "Various sizes for different projects",
      "Quick availability across UAE",
      "Experienced operators available",
      "Flexible rental terms"
    ],
    variants: [
      { name: "3 Ton Vibratory Roller", slug: "3-ton", capacity: "3 Ton", description: "Compact 3-ton vibratory roller for small road works and confined areas.", applications: ["Small road repairs", "Driveways", "Landscaping"], specifications: ["Operating weight: 3 tons", "Single drum", "Compact design"] },
      { name: "5 Ton Vibratory Roller", slug: "5-ton", capacity: "5 Ton", description: "Versatile 5-ton roller for general road construction and maintenance.", applications: ["Road construction", "Parking lots", "General compaction"], specifications: ["Operating weight: 5 tons", "Vibratory compaction", "Water spray system"] },
      { name: "10 Ton Tandem Roller", slug: "10-ton", capacity: "10 Ton", description: "Heavy-duty 10-ton tandem roller for asphalt finishing and major road works.", applications: ["Asphalt finishing", "Major road works", "Highway construction"], specifications: ["Operating weight: 10 tons", "Tandem drum design", "Smooth finish capability"] },
      { name: "14 Ton Vibratory Roller", slug: "14-ton", capacity: "14 Ton", description: "Large 14-ton vibratory roller for heavy-duty compaction requirements.", applications: ["Heavy road construction", "Industrial areas", "Large-scale compaction"], specifications: ["Operating weight: 14 tons", "High centrifugal force", "Maximum compaction"] }
    ],
    image: "/src/assets/equipment/excavator.jpg"
  },
  "mini-excavator": {
    name: "Mini Excavator",
    slug: "mini-excavator",
    heroTitle: "Mini Excavator Rental in UAE",
    heroSubtitle: "Compact Mini Excavator Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent mini excavators in UAE from 1 to 8 tons. Western Eagle provides compact excavators for urban construction, landscaping & utility work.",
    overview: {
      title: "Overview",
      description: "Mini excavators are compact, versatile machines designed for excavation work in confined spaces, urban areas, and projects where larger equipment cannot access. Our mini excavator fleet ranges from 1-ton to 8-ton machines, featuring zero tail swing designs for work in tight spaces. These machines are perfect for trenching, landscaping, utility installation, and light demolition. Despite their compact size, they deliver impressive digging power and precision control.",
      industries: ["Urban Construction", "Landscaping", "Utility Installation", "Residential Construction", "Indoor Demolition", "Plumbing & Drainage"],
      benefits: ["Compact size for tight spaces", "Zero tail swing options", "Low ground pressure", "Easy transport", "Precise control for detailed work"]
    },
    applications: {
      title: "Applications",
      description: "Mini excavators excel in applications requiring precision excavation in confined or urban environments.",
      useCases: [
        "Utility trench digging",
        "Landscaping and garden work",
        "Swimming pool excavation",
        "Foundation digging for small structures",
        "Indoor demolition work",
        "Pipe and cable laying"
      ]
    },
    whyRent: [
      "Cost-effective for small projects",
      "Easy to transport on trailers",
      "Low site impact and damage",
      "Various sizes for different needs",
      "Quick availability",
      "Full maintenance included",
      "Operator training available"
    ],
    variants: [
      { name: "1 Ton Mini Excavator", slug: "1-ton", capacity: "1 Ton", description: "Ultra-compact 1-ton mini excavator for the tightest spaces and indoor work.", applications: ["Indoor excavation", "Gardens", "Narrow access"], specifications: ["Operating weight: 1 ton", "Ultra-compact", "Track width adjustable"] },
      { name: "2 Ton Mini Excavator", slug: "2-ton", capacity: "2 Ton", description: "Compact 2-ton excavator for residential and light commercial work.", applications: ["Residential projects", "Landscaping", "Utility work"], specifications: ["Operating weight: 2 tons", "Zero tail swing", "Rubber tracks"] },
      { name: "3 Ton Mini Excavator", slug: "3-ton", capacity: "3 Ton", description: "Versatile 3-ton excavator for general small-scale excavation projects.", applications: ["General excavation", "Trenching", "Pool digging"], specifications: ["Operating weight: 3 tons", "Extendable arm option", "Multiple attachments"] },
      { name: "5 Ton Mini Excavator", slug: "5-ton", capacity: "5 Ton", description: "Medium 5-ton excavator bridging compact and standard excavator capabilities.", applications: ["Medium projects", "Commercial sites", "Drainage work"], specifications: ["Operating weight: 5 tons", "Enclosed cab", "Enhanced digging force"] },
      { name: "8 Ton Mini Excavator", slug: "8-ton", capacity: "8 Ton", description: "Larger 8-ton compact excavator for substantial projects requiring more power.", applications: ["Larger excavation", "Commercial construction", "Infrastructure"], specifications: ["Operating weight: 8 tons", "Full cab", "Maximum mini excavator power"] }
    ],
    image: "/src/assets/equipment/excavator.jpg"
  },
  "jcb-backhoe-3cx": {
    name: "JCB Backhoe 3CX",
    slug: "jcb-backhoe-3cx",
    heroTitle: "JCB Backhoe 3CX Rental in UAE",
    heroSubtitle: "Versatile JCB 3CX Backhoe Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent JCB 3CX backhoe loaders in UAE. Western Eagle offers versatile backhoes for excavation, loading & construction tasks across UAE.",
    overview: {
      title: "Overview",
      description: "The JCB 3CX backhoe loader is the world's most versatile construction machine, combining a front loader and rear excavator in one unit. This dual-functionality makes it ideal for a wide range of construction tasks from digging and trenching to loading and material handling. Our JCB 3CX fleet features 4-wheel drive, extendable dippers, and multiple attachment options. These machines are workhorses on construction sites, offering excellent value through their versatility.",
      industries: ["Construction", "Road Works", "Utilities", "Landscaping", "Agriculture", "Municipal Works"],
      benefits: ["Dual-function: loader and excavator", "4-wheel drive capability", "Extendable dipper option", "Multiple attachment compatibility", "Excellent mobility and versatility"]
    },
    applications: {
      title: "Applications",
      description: "The JCB 3CX excels in applications requiring both loading and excavation capabilities.",
      useCases: [
        "Trenching for utilities and drainage",
        "Loading trucks with excavated material",
        "Site clearance and preparation",
        "Road construction and repair",
        "Foundation excavation",
        "Agricultural and farm work"
      ]
    },
    whyRent: [
      "Versatile machine replaces multiple units",
      "Cost-effective for mixed tasks",
      "Well-maintained JCB equipment",
      "Experienced operators available",
      "Quick deployment across UAE",
      "Full service support included",
      "Flexible rental options"
    ],
    variants: [
      { name: "JCB 3CX Standard", slug: "standard", capacity: "Standard", description: "Standard JCB 3CX backhoe loader for general construction and excavation work.", applications: ["General construction", "Excavation", "Loading"], specifications: ["Standard dipper", "4WD", "Multiple attachments"] },
      { name: "JCB 3CX Sitemaster", slug: "sitemaster", capacity: "Sitemaster", description: "Enhanced JCB 3CX Sitemaster with additional features for demanding projects.", applications: ["Demanding sites", "Heavy-duty work", "Professional use"], specifications: ["Enhanced specification", "Extended dipper", "Premium cab"] },
      { name: "JCB 3CX Eco", slug: "eco", capacity: "Eco", description: "Fuel-efficient JCB 3CX Eco model for environmentally conscious operations.", applications: ["Urban projects", "Fuel-sensitive sites", "Green construction"], specifications: ["Eco engine", "Reduced emissions", "Lower fuel consumption"] }
    ],
    image: "/src/assets/equipment/backhoe.jpg"
  },
  boomloader: {
    name: "Boomloader",
    slug: "boomloader",
    heroTitle: "Boomloader Rental in UAE",
    heroSubtitle: "Telehandler & Boomloader Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent telehandlers and boomloaders in UAE. Western Eagle offers telescopic handlers for construction, industrial & agricultural applications.",
    overview: {
      title: "Overview",
      description: "Boomloaders, also known as telehandlers, are versatile machines combining the capabilities of a forklift and crane with extended reach. Our telehandler fleet features telescopic booms that can reach heights and distances beyond traditional forklifts. These machines are essential for construction sites requiring material placement at height or across obstacles. With various attachments including forks, buckets, and lifting hooks, boomloaders adapt to numerous material handling tasks.",
      industries: ["Construction", "Agriculture", "Industrial", "Warehousing", "Oil & Gas", "Infrastructure"],
      benefits: ["Extended reach capability", "Height and forward reach combined", "Multiple attachment options", "All-terrain mobility", "High lifting capacity"]
    },
    applications: {
      title: "Applications",
      description: "Boomloaders provide flexible material handling with extended reach for diverse applications.",
      useCases: [
        "Placing materials at height on construction sites",
        "Loading and unloading across obstacles",
        "Stacking materials in yards and warehouses",
        "Agricultural loading and handling",
        "Industrial facility material movement",
        "Supporting roofing and cladding installation"
      ]
    },
    whyRent: [
      "Combines forklift and crane capabilities",
      "Cost-effective extended reach solution",
      "Various reach and capacity options",
      "Full maintenance included",
      "Operators available on request",
      "Quick deployment",
      "Flexible rental terms"
    ],
    variants: [
      { name: "7m Telehandler", slug: "7m", capacity: "7 Meters", description: "Compact 7-meter telehandler for smaller sites and moderate reach requirements.", applications: ["Small construction", "Warehousing", "Light industrial"], specifications: ["Lift height: 7m", "Compact design", "Versatile attachments"] },
      { name: "10m Telehandler", slug: "10m", capacity: "10 Meters", description: "Medium-reach 10-meter telehandler for general construction applications.", applications: ["General construction", "Material handling", "Industrial sites"], specifications: ["Lift height: 10m", "Good forward reach", "Multiple attachments"] },
      { name: "14m Telehandler", slug: "14m", capacity: "14 Meters", description: "Extended 14-meter telehandler for larger construction and industrial projects.", applications: ["Larger construction", "Industrial facilities", "Infrastructure"], specifications: ["Lift height: 14m", "Extended boom", "High capacity"] },
      { name: "17m Telehandler", slug: "17m", capacity: "17 Meters", description: "High-reach 17-meter telehandler for demanding projects requiring exceptional height.", applications: ["High-reach projects", "Major construction", "Specialized applications"], specifications: ["Lift height: 17m", "Maximum reach", "Heavy-duty design"] }
    ],
    image: "/src/assets/equipment/boom-lift.jpg"
  },
  "recovery-trucks-10-ton": {
    name: "Recovery Truck 10 Ton",
    slug: "recovery-trucks-10-ton",
    heroTitle: "Recovery Truck 10 Ton Rental in UAE",
    heroSubtitle: "Professional 10 Ton Recovery Truck Rental in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent 10 ton recovery trucks in UAE. Western Eagle provides vehicle recovery, towing & machinery transport services across UAE.",
    overview: {
      title: "Overview",
      description: "Our 10-ton recovery trucks provide professional vehicle recovery, towing, and machinery transport services across the UAE. Equipped with hydraulic systems, safety winches, and GPS tracking, these trucks handle everything from car breakdowns to heavy machinery transport. Each recovery truck is operated by experienced professionals trained in safe recovery techniques. We provide 24/7 emergency recovery services alongside scheduled transport operations.",
      industries: ["Fleet Management", "Construction", "Logistics", "Emergency Services", "Industrial", "Automotive"],
      benefits: ["10-ton lifting capacity", "Professional operators", "24/7 emergency availability", "GPS tracked fleet", "Safe recovery equipment"]
    },
    applications: {
      title: "Applications",
      description: "Recovery trucks serve essential transport and emergency recovery needs across the UAE.",
      useCases: [
        "Vehicle breakdown recovery",
        "Accident vehicle removal",
        "Heavy machinery transport",
        "Fleet vehicle relocation",
        "Construction equipment delivery",
        "Emergency response support"
      ]
    },
    whyRent: [
      "Professional recovery service",
      "24/7 emergency availability",
      "Experienced operators",
      "GPS tracking for visibility",
      "UAE-wide coverage",
      "Insurance compliant",
      "Competitive rates"
    ],
    variants: [
      { name: "Flatbed Recovery Truck", slug: "flatbed", capacity: "Flatbed", description: "Flatbed recovery truck for safe vehicle and machinery transport.", applications: ["Vehicle transport", "Machinery delivery", "Secure hauling"], specifications: ["Flatbed platform", "Hydraulic tilt", "Tie-down points"] },
      { name: "Wheel Lift Recovery Truck", slug: "wheel-lift", capacity: "Wheel Lift", description: "Wheel lift recovery truck for quick vehicle towing operations.", applications: ["Quick towing", "Breakdown recovery", "Vehicle relocation"], specifications: ["Wheel lift system", "Fast deployment", "Minimal damage risk"] },
      { name: "Boom Recovery Truck", slug: "boom", capacity: "Boom", description: "Boom recovery truck for difficult recovery situations.", applications: ["Difficult recoveries", "Ditched vehicles", "Off-road recovery"], specifications: ["Boom crane", "Winch system", "All-terrain capability"] }
    ],
    image: "/src/assets/equipment/bus.jpg"
  },
  compressors: {
    name: "Compressor",
    slug: "compressors",
    heroTitle: "Compressor Rental in UAE",
    heroSubtitle: "Industrial Compressor Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent air compressors in UAE from portable to industrial. Western Eagle provides pneumatic tool power for construction & industrial applications.",
    overview: {
      title: "Overview",
      description: "Air compressors are essential for powering pneumatic tools, sandblasting equipment, painting systems, and various industrial processes. Our compressor fleet includes portable towable units for construction sites and larger stationary compressors for industrial applications. All compressors deliver high CFM output, reliable performance, and energy-efficient operation. We provide complete compressed air solutions including hoses, fittings, and technical support.",
      industries: ["Construction", "Manufacturing", "Painting & Coating", "Sandblasting", "Oil & Gas", "Mining"],
      benefits: ["High CFM output", "Energy efficient operation", "Reliable performance", "Portable and stationary options", "Complete air system solutions"]
    },
    applications: {
      title: "Applications",
      description: "Compressors power essential pneumatic tools and processes across construction and industry.",
      useCases: [
        "Powering pneumatic construction tools",
        "Sandblasting and surface preparation",
        "Spray painting operations",
        "Industrial pneumatic systems",
        "Demolition tools",
        "Mining and quarry operations"
      ]
    },
    whyRent: [
      "Avoid high purchase costs",
      "Access to various capacities",
      "Maintenance included",
      "Fuel-efficient latest models",
      "Quick deployment",
      "Technical support",
      "Flexible rental periods"
    ],
    variants: [
      { name: "185 CFM Compressor", slug: "185-cfm", capacity: "185 CFM", description: "Compact 185 CFM compressor for light construction and single tool operation.", applications: ["Light construction", "Single tool operation", "Small projects"], specifications: ["Output: 185 CFM", "Portable towable", "Diesel powered"] },
      { name: "375 CFM Compressor", slug: "375-cfm", capacity: "375 CFM", description: "Medium capacity 375 CFM compressor for general construction applications.", applications: ["General construction", "Multiple tools", "Medium projects"], specifications: ["Output: 375 CFM", "Medium capacity", "Reliable operation"] },
      { name: "750 CFM Compressor", slug: "750-cfm", capacity: "750 CFM", description: "High-capacity 750 CFM compressor for heavy-duty industrial use.", applications: ["Heavy construction", "Industrial applications", "Large projects"], specifications: ["Output: 750 CFM", "High capacity", "Heavy-duty design"] },
      { name: "1000 CFM Compressor", slug: "1000-cfm", capacity: "1000 CFM", description: "Maximum capacity 1000 CFM compressor for major industrial operations.", applications: ["Major industrial", "Large-scale sandblasting", "Mining operations"], specifications: ["Output: 1000 CFM", "Maximum capacity", "Industrial grade"] }
    ],
    image: "/src/assets/equipment/generator.jpg"
  },
  "skid-steer-bobcat": {
    name: "Skid Steer Bobcat",
    slug: "skid-steer-bobcat",
    heroTitle: "Skid Steer Bobcat Rental in UAE",
    heroSubtitle: "Versatile Bobcat Skid Steer Rental in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent Bobcat skid steer loaders in UAE. Western Eagle offers wheeled and tracked skid steers for construction, landscaping & demolition work.",
    overview: {
      title: "Overview",
      description: "Bobcat skid steer loaders are compact, highly maneuverable machines perfect for construction, landscaping, and material handling in tight spaces. Our fleet includes wheeled and tracked skid steers in various sizes, compatible with dozens of attachments including buckets, augers, breakers, and graders. These machines excel where larger equipment cannot access, delivering impressive power in a compact package. Zero-turn capability makes them ideal for indoor and urban work.",
      industries: ["Construction", "Landscaping", "Demolition", "Agriculture", "Snow Removal", "Site Preparation"],
      benefits: ["Compact and highly maneuverable", "Zero-turn capability", "Versatile attachment options", "Wheeled and tracked options", "Powerful hydraulics"]
    },
    applications: {
      title: "Applications",
      description: "Skid steers adapt to numerous applications through their versatile attachment system.",
      useCases: [
        "Site clearing and preparation",
        "Material loading and handling",
        "Landscaping and grading",
        "Snow removal operations",
        "Light demolition work",
        "Trenching and excavation with attachments"
      ]
    },
    whyRent: [
      "Versatile machine for multiple tasks",
      "Compact size for tight spaces",
      "Various attachment options",
      "Easy to transport",
      "Quick availability",
      "Full maintenance included",
      "Operator training available"
    ],
    variants: [
      { name: "Small Frame Skid Steer", slug: "small-frame", capacity: "Small Frame", description: "Compact small frame skid steer for tight spaces and light-duty work.", applications: ["Tight spaces", "Light-duty work", "Indoor use"], specifications: ["Compact size", "Light weight", "Maneuverability"] },
      { name: "Medium Frame Skid Steer", slug: "medium-frame", capacity: "Medium Frame", description: "Versatile medium frame skid steer for general construction applications.", applications: ["General construction", "Landscaping", "Material handling"], specifications: ["Medium capacity", "Balanced design", "Multiple attachments"] },
      { name: "Large Frame Skid Steer", slug: "large-frame", capacity: "Large Frame", description: "Powerful large frame skid steer for heavy-duty construction work.", applications: ["Heavy-duty work", "Large projects", "Demolition"], specifications: ["High capacity", "Maximum power", "Heavy-duty attachments"] },
      { name: "Tracked Skid Steer", slug: "tracked", capacity: "Tracked", description: "Tracked skid steer for soft ground and challenging terrain conditions.", applications: ["Soft ground", "Challenging terrain", "Low ground pressure"], specifications: ["Rubber tracks", "Low ground pressure", "Enhanced traction"] }
    ],
    image: "/src/assets/equipment/skid-steer.jpg"
  },
  "passenger-bus": {
    name: "Passenger Bus",
    slug: "passenger-bus",
    heroTitle: "Passenger Bus Rental in UAE",
    heroSubtitle: "Comfortable Passenger Bus Rental in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent passenger buses in UAE from 25 to 50 seaters. Western Eagle provides staff transport, tours & corporate event transportation services.",
    overview: {
      title: "Overview",
      description: "Passenger buses provide comfortable, reliable transportation for staff, construction workers, and groups across the UAE. Our bus fleet includes various sizes from mini buses to large coaches, all equipped with air conditioning, comfortable seating, and safety features. Experienced drivers ensure safe, punctual transport for daily staff movements, site visits, corporate events, and special occasions. All buses are regularly maintained and comply with UAE transport regulations.",
      industries: ["Construction", "Corporate", "Tourism", "Events", "Education", "Healthcare"],
      benefits: ["Comfortable air-conditioned travel", "Experienced professional drivers", "Various seating capacities", "Safety compliance", "Reliable punctual service"]
    },
    applications: {
      title: "Applications",
      description: "Passenger buses serve essential group transportation needs across various sectors.",
      useCases: [
        "Daily staff and worker transport",
        "Construction site crew movement",
        "Corporate event transportation",
        "Airport transfers for groups",
        "Site visits and tours",
        "Special occasion transport"
      ]
    },
    whyRent: [
      "Cost-effective group transport",
      "Professional experienced drivers",
      "Various capacity options",
      "Comfortable AC vehicles",
      "Flexible scheduling",
      "UAE-wide coverage",
      "Reliable service"
    ],
    variants: [
      { name: "25 Seater Bus", slug: "25-seater", capacity: "25 Seats", description: "Compact 25-seater bus for small groups and limited parking situations.", applications: ["Small groups", "Site visits", "Short transfers"], specifications: ["25 passenger capacity", "AC equipped", "Compact design"] },
      { name: "35 Seater Bus", slug: "35-seater", capacity: "35 Seats", description: "Medium capacity 35-seater bus for general staff transport needs.", applications: ["Staff transport", "Medium groups", "Daily runs"], specifications: ["35 passenger capacity", "AC equipped", "Comfortable seating"] },
      { name: "50 Seater Bus", slug: "50-seater", capacity: "50 Seats", description: "Large 50-seater bus for major workforce transport and events.", applications: ["Large workforce", "Major events", "Long distance"], specifications: ["50 passenger capacity", "Full AC", "Maximum comfort"] },
      { name: "Luxury Coach", slug: "luxury-coach", capacity: "Luxury", description: "Premium luxury coach for corporate events and VIP transportation.", applications: ["Corporate events", "VIP transport", "Special occasions"], specifications: ["Premium seating", "Entertainment system", "Executive comfort"] }
    ],
    image: "/src/assets/equipment/bus.jpg"
  }
};

export const getEquipmentBySlug = (slug: string): EquipmentData | undefined => {
  return equipmentData[slug];
};

export const getVariantBySlug = (equipmentSlug: string, variantSlug: string): EquipmentVariant | undefined => {
  const equipment = equipmentData[equipmentSlug];
  if (!equipment) return undefined;
  return equipment.variants.find(v => v.slug === variantSlug);
};

export const getAllEquipmentSlugs = (): string[] => {
  return Object.keys(equipmentData);
};
