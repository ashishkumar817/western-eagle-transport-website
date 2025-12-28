export interface EquipmentVariant {
  name: string;
  slug: string;
  capacity: string;
  description: string;
  applications: string[];
  specifications: string[];
}

export interface RelatedEquipment {
  name: string;
  slug: string;
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
  whyChoose: {
    intro: string;
    costEffective: string;
    latestModels: string;
    noMaintenance: string;
    flexibility: string;
  };
  variants: EquipmentVariant[];
  relatedEquipment?: RelatedEquipment[];
  image: string;
}

export const equipmentData: Record<string, EquipmentData> = {
  forklift: {
    name: "Forklift",
    slug: "forklift",
    heroTitle: "Forklift Rental in UAE",
    heroSubtitle: "Reliable Forklift Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent high-quality forklifts in UAE. Western Eagle offers 3 to 25 ton forklifts with trained operators. Serving Dubai, Abu Dhabi, Sharjah.",
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
    whyChoose: {
      intro: "Abu Dhabi and Dubai are global hubs for logistics and construction. Whether you're managing a bustling warehouse or a construction site, forklift rental ensures you have the right material handling equipment to move goods efficiently and safely.",
      costEffective: "Purchasing a forklift can be a significant investment, especially for businesses with seasonal or short-term needs. By opting for forklift rental in Abu Dhabi or Dubai, companies avoid the high initial purchase cost, ongoing maintenance expenses, and storage fees. Renting allows businesses to pay only for what they need when they need it, helping optimize budgets and maximize operational revenue.",
      latestModels: "The forklift rental industry in UAE offers access to a wide range of modern forklifts from leading manufacturers like Toyota, Caterpillar, and Hyster. These are equipped with advanced technology including ergonomic controls, safety features, and fuel-efficient engines. Businesses that rent can use state-of-the-art equipment without worrying about maintenance or technological obsolescence.",
      noMaintenance: "When renting forklifts, all maintenance and repairs are handled by Western Eagle. This eliminates downtime and ensures your team always works with well-maintained, operational machinery. Our forklift rental services include immediate technical support so any issues are resolved quickly, keeping your operations running smoothly.",
      flexibility: "Forklift rental in Abu Dhabi offers flexibility, allowing businesses to scale the number of units based on project demand. Whether it's a large warehouse project requiring multiple units or a temporary construction site, our rental service provides the flexibility to adjust equipment count as required without long-term commitments."
    },
    variants: [
      { name: "3 Ton Forklift for Rent", slug: "3-ton", capacity: "3 Ton", description: "Our 3-ton forklift rental is ideal for warehouses, industrial yards, and construction sites across Abu Dhabi, Dubai and the UAE. Our 3-ton forklifts are engineered to lift, transport, and stack heavy loads with ease. Suitable for both indoor and outdoor operations, they ensure high maneuverability, safety and fuel efficiency. Rent our 3-ton forklifts on a daily, weekly or monthly basis with 24/7 support. We offer fast delivery across Musaffah, Abu Dhabi, Dubai and other Emirates.", applications: ["Indoor warehousing", "Retail stockrooms", "Light manufacturing"], specifications: ["Lifting capacity: 3,000 kg", "Lift height: 3-6 meters", "Compact design for narrow aisles"] },
      { name: "5 Ton Forklift for Rent", slug: "5-ton", capacity: "5 Ton", description: "Versatile 5-ton forklift suitable for medium-duty operations in warehouses and construction sites. Perfect for handling heavier pallets and construction materials with ease.", applications: ["Medium warehousing", "Construction sites", "Distribution centers"], specifications: ["Lifting capacity: 5,000 kg", "Lift height: 4-7 meters", "Diesel and electric options"] },
      { name: "7 Ton Forklift for Rent", slug: "7-ton", capacity: "7 Ton", description: "Heavy-duty 7-ton forklift designed for demanding industrial applications and heavier loads. Ideal for steel yards, container handling, and major construction projects.", applications: ["Industrial facilities", "Heavy manufacturing", "Port operations"], specifications: ["Lifting capacity: 7,000 kg", "Lift height: 5-8 meters", "Enhanced stability system"] },
      { name: "10 Ton Forklift for Rent", slug: "10-ton", capacity: "10 Ton", description: "Powerful 10-ton forklift for heavy industrial use, container handling, and major construction projects. Built for the most demanding lifting requirements.", applications: ["Container handling", "Heavy construction", "Steel industry"], specifications: ["Lifting capacity: 10,000 kg", "Lift height: 4-6 meters", "Reinforced mast and forks"] },
      { name: "15 Ton Forklift for Rent", slug: "15-ton", capacity: "15 Ton", description: "High-capacity 15-ton forklift for extra-heavy loads in ports, shipyards, and large industrial facilities. Maximum power for maximum productivity.", applications: ["Port operations", "Shipyards", "Heavy industry"], specifications: ["Lifting capacity: 15,000 kg", "Lift height: 4-5 meters", "Heavy-duty chassis"] },
      { name: "25 Ton Forklift for Rent", slug: "25-ton", capacity: "25 Ton", description: "Maximum capacity 25-ton forklift for the most demanding heavy-lift applications and mega projects. The ultimate solution for exceptional lifting needs.", applications: ["Mega construction projects", "Industrial plants", "Oil & gas facilities"], specifications: ["Lifting capacity: 25,000 kg", "Specialized lifting attachments", "Maximum stability design"] }
    ],
    image: "/src/assets/equipment/forklift.webp"
  },
  crane: {
    name: "Crane",
    slug: "crane",
    heroTitle: "Crane Rental in UAE",
    heroSubtitle: "Professional Crane Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent mobile cranes from 20 to 200 ton capacity in UAE. Western Eagle provides lifting solutions for construction & industrial projects.",
    overview: {
      title: "Overview",
      description: "Cranes are indispensable lifting equipment for construction, infrastructure, and industrial projects requiring precise heavy lifting capabilities. Our crane fleet includes mobile cranes, all-terrain cranes, and specialized lifting solutions ranging from 20 to 200 tons capacity. Each crane is equipped with advanced safety systems, GPS monitoring, and operated by certified professionals. We serve high-rise construction, bridge building, industrial plant installation, and heavy machinery handling across the UAE.",
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
    whyChoose: {
      intro: "The UAE's booming construction and infrastructure sector demands precision heavy lifting solutions. Whether constructing high-rise towers in Dubai or industrial facilities in Abu Dhabi, crane rental ensures you have the lifting capacity to handle complex projects safely and efficiently.",
      costEffective: "Owning a crane requires substantial capital investment plus ongoing costs for maintenance, storage, and certified operators. Crane rental in Abu Dhabi and Dubai eliminates these burdens. You pay only for the lifting capacity you need, when you need it, making large-scale lifting operations financially viable for projects of any size.",
      latestModels: "Our crane fleet features the latest mobile cranes and all-terrain cranes from leading manufacturers, equipped with advanced load monitoring systems, GPS tracking, and modern safety features. Renting gives you access to cutting-edge lifting technology and precision controls without the burden of ownership.",
      noMaintenance: "Every crane rental from Western Eagle includes full maintenance, safety certifications, and compliance documentation. Our maintenance team ensures all cranes meet rigorous safety standards, with certified operators who understand load dynamics and site-specific requirements for safe lifting operations.",
      flexibility: "Construction projects often have varying lifting requirements throughout their lifecycle. Crane rental provides the flexibility to bring in 25-ton cranes for early work and scale up to 200-ton capacity for major lifts, then release equipment when no longer needed - optimizing your project budget at every phase."
    },
    variants: [
      { name: "20 Ton Crane for Rent", slug: "20-ton", capacity: "20 Ton", description: "Compact 20-ton crane ideal for smaller construction sites and general lifting tasks. Perfect for residential and light commercial projects.", applications: ["Small construction", "Residential projects", "Light industrial"], specifications: ["Lifting capacity: 20 tons", "Boom length: up to 25m", "Quick setup time"] },
      { name: "25 Ton Crane for Rent", slug: "25-ton", capacity: "25 Ton", description: "Versatile 25-ton crane for medium construction and industrial lifting requirements. Excellent balance of capacity and mobility.", applications: ["Medium construction", "Industrial lifting", "Infrastructure"], specifications: ["Lifting capacity: 25 tons", "Boom length: up to 30m", "All-terrain capability"] },
      { name: "50 Ton Crane for Rent", slug: "50-ton", capacity: "50 Ton", description: "Heavy-duty 50-ton crane for substantial lifting operations and commercial construction projects.", applications: ["Commercial construction", "Heavy industrial", "Power plants"], specifications: ["Lifting capacity: 50 tons", "Boom length: up to 40m", "Enhanced stability"] },
      { name: "75 Ton Crane for Rent", slug: "75-ton", capacity: "75 Ton", description: "Professional 75-ton crane for demanding lifting operations requiring greater capacity.", applications: ["Large construction", "Industrial installations", "Bridge works"], specifications: ["Lifting capacity: 75 tons", "Boom length: up to 50m", "Advanced outriggers"] },
      { name: "100 Ton Crane for Rent", slug: "100-ton", capacity: "100 Ton", description: "High-capacity 100-ton crane for heavy construction and industrial installations. Major project capability.", applications: ["High-rise construction", "Heavy machinery", "Bridge works"], specifications: ["Lifting capacity: 100 tons", "Boom length: up to 60m", "Maximum reach"] },
      { name: "150 Ton Crane for Rent", slug: "150-ton", capacity: "150 Ton", description: "Extra-heavy 150-ton crane for the most demanding lifting operations in oil & gas and mega projects.", applications: ["Mega projects", "Oil & gas", "Power generation"], specifications: ["Lifting capacity: 150 tons", "Extended boom options", "Heavy-duty outriggers"] },
      { name: "200 Ton Crane for Rent", slug: "200-ton", capacity: "200 Ton", description: "Maximum capacity 200-ton crane for exceptional heavy-lift requirements and specialized industrial applications.", applications: ["Exceptional heavy lifts", "Industrial plants", "Major infrastructure"], specifications: ["Lifting capacity: 200 tons", "Maximum stability design", "Specialized rigging"] }
    ],
    image: "/src/assets/equipment/crane.webp"
  },
  excavator: {
    name: "Excavator",
    slug: "excavator",
    heroTitle: "Excavator Rental in UAE",
    heroSubtitle: "Mini Excavator Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent mini excavators from 2 to 5 tons in UAE. Western Eagle provides compact excavators for urban construction, landscaping & utility work.",
    overview: {
      title: "Overview",
      description: "Mini excavators are compact, versatile machines designed for excavation work in confined spaces, urban areas, and projects where larger equipment cannot access. Our mini excavator fleet ranges from 2-ton to 5-ton machines, featuring zero tail swing designs for work in tight spaces. These machines are perfect for trenching, landscaping, utility installation, and light demolition. Despite their compact size, they deliver impressive digging power and precision control.",
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
    whyChoose: {
      intro: "Urban construction in Dubai and Abu Dhabi often requires excavation in confined spaces where standard excavators cannot operate. Mini excavator rental provides the compact power needed for residential projects, utility installations, and landscaping work throughout the UAE.",
      costEffective: "For landscaping contractors, plumbers, and small construction projects, purchasing a mini excavator may not be economically justified. Mini excavator rental offers access to precision digging power without the purchase cost, allowing you to take on excavation work profitably while maintaining competitive pricing for your clients.",
      latestModels: "Our mini excavator fleet features zero tail swing designs and rubber tracks that protect finished surfaces. Advanced hydraulic systems deliver smooth, precise control for detailed work near existing structures, utilities, and landscaping. Modern enclosed cabs provide operator comfort for extended work sessions.",
      noMaintenance: "Mini excavators require regular maintenance to ensure reliable operation of complex hydraulic systems. When you rent from Western Eagle, all servicing is handled by our technicians. You receive a job-ready machine with tracked maintenance history and responsive support if any issues arise on site.",
      flexibility: "Project requirements can change quickly in urban construction. Mini excavator rental allows you to access 2-ton machines for tight residential work, or scale up to 5-ton units for commercial sites. Rent by the day, week, or month based on your project timeline with no long-term commitment."
    },
    variants: [
      { name: "2 Ton Mini Excavator for Rent", slug: "2-ton", capacity: "2 Ton", description: "Compact 2-ton mini excavator perfect for residential and light commercial work. Ideal for landscaping, utility trenching, and tight access excavation in Dubai, Abu Dhabi, and across the UAE.", applications: ["Residential projects", "Landscaping", "Utility work"], specifications: ["Operating weight: 2 tons", "Zero tail swing", "Rubber tracks"] },
      { name: "3 Ton Mini Excavator for Rent", slug: "3-ton", capacity: "3 Ton", description: "Versatile 3-ton mini excavator for general small-scale excavation projects. Perfect for pool digging, foundation work, and drainage installations.", applications: ["General excavation", "Trenching", "Pool digging"], specifications: ["Operating weight: 3 tons", "Extendable arm option", "Multiple attachments"] },
      { name: "5 Ton Mini Excavator for Rent", slug: "5-ton", capacity: "5 Ton", description: "Medium 5-ton excavator bridging compact and standard excavator capabilities. Enhanced digging force for commercial and infrastructure projects.", applications: ["Medium projects", "Commercial sites", "Drainage work"], specifications: ["Operating weight: 5 tons", "Enclosed cab", "Enhanced digging force"] }
    ],
    image: "/src/assets/equipment/excavator.webp"
  },
  "wheel-loader": {
    name: "Wheel Loader",
    slug: "wheel-loader",
    heroTitle: "Wheel Loader for Rent in UAE",
    heroSubtitle: "Premium CAT Wheel Loader Rental Services with Fast Delivery Across Dubai, Abu Dhabi, Sharjah & All Emirates",
    metaDescription: "Rent CAT 950 & 966 wheel loaders in UAE. Western Eagle Transport offers reliable wheel loader rental with operators for construction, quarries & infrastructure. 24/7 support.",
    overview: {
      title: "Overview",
      description: "A wheel loader is a heavy construction machine engineered for loading, transporting, and stockpiling materials such as soil, gravel, sand, aggregate, and debris. Distinguished by their articulated steering, large front-mounted bucket, and robust rubber tires, wheel loaders offer exceptional mobility and versatility across construction sites, quarries, warehouses, and industrial facilities. At Western Eagle Transport, we provide top-tier CAT wheel loaders including the industry-renowned 950 and 966 models, each delivering outstanding fuel efficiency, powerful hydraulic systems, and operator comfort that maximizes productivity on demanding UAE projects.",
      industries: ["Construction & Civil Engineering", "Mining & Quarry Operations", "Landscaping & Land Development", "Infrastructure & Road Works", "Waste Management & Recycling", "Agriculture & Farming"],
      benefits: ["High bucket capacity for maximum loading efficiency", "Excellent all-terrain mobility and traction control", "Powerful CAT engines delivering superior torque", "Air-conditioned operator cabin for comfort", "Fuel-efficient operation reducing project costs", "Quick attachment changes for versatility"]
    },
    applications: {
      title: "Applications",
      description: "Wheel loaders are indispensable for material handling, site preparation, and loading operations across diverse industries in the UAE's dynamic construction and infrastructure sectors.",
      useCases: [
        "Loading dump trucks with aggregate, sand, and gravel",
        "Stockpiling and managing construction materials on site",
        "Site clearance, leveling, and land preparation",
        "Moving bulk materials in quarries and mining operations",
        "Loading and unloading at ports and logistics centers",
        "Road construction base preparation and asphalt handling",
        "Snow and debris removal for emergency response",
        "Agricultural material handling and farm operations"
      ]
    },
    whyRent: [
      "Eliminate high upfront purchase and depreciation costs",
      "Access latest CAT technology without ownership burden",
      "All maintenance, repairs, and servicing included",
      "Flexible daily, weekly, and monthly rental terms",
      "Rapid equipment deployment across all UAE Emirates",
      "Experienced certified operators available on request",
      "24/7 breakdown support and technical assistance"
    ],
    whyChoose: {
      intro: "The UAE's construction boom demands reliable, high-performance loading equipment. From major infrastructure developments in Dubai to industrial projects in Abu Dhabi's Musaffah industrial zone, wheel loader rental from Western Eagle Transport provides the heavy-duty loading capability your operations require without the financial burden of equipment ownership.",
      costEffective: "Purchasing a CAT wheel loader represents a substantial capital investment of hundreds of thousands of dirhams, plus ongoing costs for maintenance, storage, insurance, and eventual depreciation. By choosing wheel loader rental in the UAE, construction companies, contractors, and project managers can access premium loading equipment on a pay-as-you-use basis. This preserves capital for core business operations while ensuring you always have the right equipment capacity for each project phase.",
      latestModels: "Our wheel loader fleet features the CAT 950 and CAT 966 models—industry benchmarks for reliability and productivity. These machines incorporate Caterpillar's latest technology including advanced hydraulic systems for smooth operation, fuel-efficient engines that reduce running costs, and spacious air-conditioned cabs with excellent visibility. When you rent from Western Eagle, you get access to well-maintained, modern equipment that maximizes operator productivity and minimizes fuel consumption.",
      noMaintenance: "Wheel loaders operate in harsh conditions that demand regular maintenance of engines, transmissions, hydraulic systems, and undercarriage components. When you rent from Western Eagle Transport, all maintenance, servicing, and repairs are our responsibility. Our skilled technicians ensure each machine is delivered in peak operating condition, and our 24/7 support hotline guarantees rapid response if any issues arise during your rental period.",
      flexibility: "Project requirements fluctuate throughout construction phases. Wheel loader rental provides the flexibility to scale equipment up or down based on actual needs. Start with a CAT 950 for general material handling, then upgrade to the more powerful 966 for heavy aggregate loading during peak periods. When the project phase ends, simply return the equipment—no long-term commitments, no storage costs, no resale hassles."
    },
    variants: [
      { name: "950 CAT Wheel Loader for Rent", slug: "950", capacity: "950 Model", description: "The CAT 950 wheel loader delivers exceptional productivity for medium to large-scale construction and loading operations across the UAE. Renowned for its reliability, fuel efficiency, and comfortable operator environment, the 950 is the workhorse of choice for contractors, quarry operators, and logistics facilities. Features include a high-capacity bucket, advanced load-sensing hydraulics, and Caterpillar's proven powertrain technology.", applications: ["General construction sites", "Material handling yards", "Road works and infrastructure", "Aggregate loading operations"], specifications: ["Model: Caterpillar 950", "Operating weight: 17-18 tons", "Bucket capacity: 2.5-3.5 m³", "Engine: Cat C7.1 ACERT™", "Fuel efficient design"] },
      { name: "966 CAT Wheel Loader for Rent", slug: "966", capacity: "966 Model", description: "The CAT 966 wheel loader represents the pinnacle of heavy-duty loading capability for demanding construction, quarry, and mining applications in the UAE. Delivering superior power, larger bucket capacity, and enhanced durability, the 966 handles the toughest loading challenges with ease. Ideal for large-scale earthmoving, aggregate operations, and high-volume material handling where productivity is paramount.", applications: ["Heavy construction projects", "Quarry and mining operations", "Large-scale aggregate loading", "Port and logistics centers"], specifications: ["Model: Caterpillar 966", "Operating weight: 23-25 tons", "Bucket capacity: 4.0-6.0 m³", "Engine: Cat C9.3 ACERT™", "Maximum productivity design"] }
    ],
    relatedEquipment: [
      { name: "Excavator for Rent", slug: "excavator" },
      { name: "Backhoe Loader for Rent", slug: "backhoe-loader" },
      { name: "Skid Steer Loader for Rent", slug: "skid-steer" }
    ],
    image: "/src/assets/equipment/wheel-loader.webp"
  },
  "backhoe-loader": {
    name: "JCB Backhoe Loader",
    slug: "backhoe-loader",
    heroTitle: "JCB Backhoe 3CX for Rent in UAE",
    heroSubtitle: "Versatile JCB 3CX Backhoe Loader Rental with Expert Support Across Dubai, Abu Dhabi, Sharjah & All Emirates",
    metaDescription: "Rent JCB 3CX backhoe loaders in UAE. Western Eagle Transport provides versatile backhoe rental for excavation, loading, trenching & construction across Dubai, Abu Dhabi.",
    overview: {
      title: "Overview",
      description: "The JCB 3CX backhoe loader is the world's most iconic and versatile construction machine, ingeniously combining a front-end loader with a rear-mounted excavator in a single, highly maneuverable unit. This dual-functionality makes the 3CX an indispensable workhorse on construction sites where space is limited and multiple tasks need to be performed efficiently. The rear excavator arm handles digging, trenching, and demolition work, while the front loader bucket manages material loading, grading, and site clearance. At Western Eagle Transport, we maintain a premium fleet of JCB 3CX backhoe loaders equipped with 4-wheel drive, extendable dippers, and multiple attachment options to handle virtually any construction challenge.",
      industries: ["Construction & Building Sites", "Road & Highway Works", "Utility Installation Projects", "Landscaping & Site Development", "Agricultural Operations", "Municipal & Government Works"],
      benefits: ["Two machines in one: loader and excavator combined", "Exceptional 4-wheel drive mobility on any terrain", "Extendable dipper for increased reach", "Compatible with multiple attachments", "Compact footprint for tight job sites", "Lower operating costs than separate machines"]
    },
    applications: {
      title: "Applications",
      description: "The JCB 3CX backhoe loader excels in applications requiring both excavation precision and material handling capability, making it the contractor's first choice for mixed-task construction sites.",
      useCases: [
        "Trenching for water, sewer, and utility lines",
        "Loading excavated material onto trucks",
        "Foundation excavation for buildings and structures",
        "Site clearance, grading, and land preparation",
        "Road construction, repair, and maintenance",
        "Demolition and debris removal operations",
        "Agricultural digging and farm construction",
        "Emergency response and municipal works"
      ]
    },
    whyRent: [
      "Replace two machines with one versatile unit",
      "Significantly reduce equipment and operator costs",
      "Premium JCB equipment fully maintained",
      "Experienced operators available on request",
      "Fast deployment to any location in UAE",
      "Complete service and breakdown support",
      "Flexible daily, weekly, monthly rental options"
    ],
    whyChoose: {
      intro: "Contractors and construction companies across Dubai, Abu Dhabi, and the UAE trust the JCB backhoe loader for its unmatched versatility. Whether you're digging trenches, loading trucks, clearing sites, or performing precision excavation work, the 3CX delivers two machines' capability in one compact package—saving you money, time, and site logistics headaches.",
      costEffective: "Renting separate excavator and loader equipment doubles your rental costs, transport fees, and operator requirements. The JCB 3CX backhoe loader rental from Western Eagle Transport eliminates this redundancy. One machine, one operator, one rental fee—yet you get full excavation and loading capability. For contractors bidding on mixed-task projects, this cost efficiency translates directly into competitive pricing and improved profit margins.",
      latestModels: "Our JCB 3CX fleet features the latest generation backhoe loaders with powerful Stage V engines, smooth EcoMAX technology, and the precise controls that have made JCB the global leader in backhoe design. Extended dipper options provide exceptional reach, while modern ROPS/FOPS cabs offer operator protection and all-day comfort with excellent visibility from every angle.",
      noMaintenance: "Backhoe loaders are complex machines with hydraulic, mechanical, and electrical systems that require expert maintenance. When you rent from Western Eagle Transport, our certified technicians handle all servicing using genuine JCB parts. You receive a reliable, job-ready machine with our 24/7 support guarantee—any issues are addressed rapidly to minimize your project downtime.",
      flexibility: "Construction phases demand different equipment configurations. JCB backhoe rental gives you the flexibility to tackle trenching one day and material loading the next with the same machine. Scale your equipment count up or down based on project phases, return equipment when the job is done, and avoid the long-term commitment of equipment ownership."
    },
    variants: [
      { name: "JCB 3CX Backhoe Loader for Rent", slug: "3cx", capacity: "3CX Model", description: "The JCB 3CX is the world's most popular and trusted backhoe loader, delivering exceptional versatility for construction, excavation, and material handling tasks across the UAE. Features include 4-wheel drive capability, extendable dipper option, multiple attachment compatibility, and the renowned JCB build quality that ensures reliability on demanding job sites.", applications: ["General construction sites", "Trenching and excavation", "Material loading and handling", "Road works and utilities"], specifications: ["Model: JCB 3CX", "4WD capability as standard", "Extendable dipper available", "Multiple attachment options", "Stage V compliant engine"] }
    ],
    relatedEquipment: [
      { name: "Wheel Loader for Rent", slug: "wheel-loader" },
      { name: "Mini Excavator for Rent", slug: "excavator" },
      { name: "Skid Steer Loader for Rent", slug: "skid-steer" }
    ],
    image: "/src/assets/equipment/backhoe.webp"
  },
  "boom-loader": {
    name: "Boom Loader",
    slug: "boom-loader",
    heroTitle: "Boom Loader Rental in UAE",
    heroSubtitle: "Telehandler & Boom Loader Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent 14m and 17m telehandlers and boom loaders in UAE. Western Eagle offers telescopic handlers for construction & industrial applications.",
    overview: {
      title: "Overview",
      description: "Boom loaders, also known as telehandlers, are versatile machines combining the capabilities of a forklift and crane with extended reach. Our telehandler fleet features telescopic booms that can reach heights and distances beyond traditional forklifts. These machines are essential for construction sites requiring material placement at height or across obstacles. With various attachments including forks, buckets, and lifting hooks, boom loaders adapt to numerous material handling tasks.",
      industries: ["Construction", "Agriculture", "Industrial", "Warehousing", "Oil & Gas", "Infrastructure"],
      benefits: ["Extended reach capability", "Height and forward reach combined", "Multiple attachment options", "All-terrain mobility", "High lifting capacity"]
    },
    applications: {
      title: "Applications",
      description: "Boom loaders provide flexible material handling with extended reach for diverse applications.",
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
    whyChoose: {
      intro: "Modern construction in Dubai and Abu Dhabi frequently requires placing materials at heights and distances beyond standard forklift capabilities. Boom loader rental provides the extended reach and lifting power to efficiently handle materials on multi-story construction sites and industrial facilities.",
      costEffective: "Telehandlers combine forklift and crane capabilities in one machine, reducing the need for multiple equipment rentals. Boom loader rental in the UAE eliminates the significant capital outlay of purchasing while providing access to extended reach capability exactly when your project demands it.",
      latestModels: "Our boom loader fleet features modern telehandlers with telescopic booms reaching 14 to 17 meters. These machines offer advanced hydraulic systems for smooth, precise material placement, comfortable cabs with excellent visibility, and multiple attachment options including forks, buckets, and lifting hooks.",
      noMaintenance: "Boom loaders have complex telescopic and hydraulic systems requiring specialized maintenance expertise. Western Eagle ensures all telehandlers receive comprehensive servicing, delivering reliable machines ready for demanding work. Our technical support minimizes downtime if any issues arise during your rental period.",
      flexibility: "Construction phases have varying reach requirements. Boom loader rental allows you to access 14-meter units for standard multi-story work and upgrade to 17-meter telehandlers for high-reach requirements, adjusting equipment to your project's specific material placement challenges."
    },
    variants: [
      { name: "14m Boom Loader for Rent", slug: "14m", capacity: "14 Meters", description: "Extended 14-meter boom loader/telehandler for construction projects requiring height and reach. Perfect for multi-story construction and industrial material handling.", applications: ["Construction", "Industrial facilities", "Infrastructure"], specifications: ["Lift height: 14m", "Extended boom", "High capacity"] },
      { name: "17m Boom Loader for Rent", slug: "17m", capacity: "17 Meters", description: "High-reach 17-meter boom loader for demanding projects requiring exceptional height. Maximum reach for the most challenging material placement tasks.", applications: ["High-reach projects", "Major construction", "Specialized applications"], specifications: ["Lift height: 17m", "Maximum reach", "Heavy-duty design"] }
    ],
    image: "/src/assets/equipment/telehandler.webp"
  },
  roller: {
    name: "Roller",
    slug: "roller",
    heroTitle: "Roller Rental in UAE",
    heroSubtitle: "Professional Road Roller Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent single drum rollers and vibratory compactors in UAE. Western Eagle provides road construction equipment for asphalt & soil compaction.",
    overview: {
      title: "Overview",
      description: "Road rollers and compactors are essential equipment for road construction, asphalt laying, and ground compaction projects. Our roller fleet includes vibratory rollers, tandem rollers, and single drum compactors in various sizes. These machines deliver precise compaction for road surfaces, parking areas, and construction site preparation. All rollers feature variable frequency vibration, water spray systems, and comfortable operator cabins for efficient, quality compaction work.",
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
    whyChoose: {
      intro: "Road construction and infrastructure development across the UAE demands professional compaction equipment. Roller rental provides access to vibratory compactors essential for achieving specification-compliant asphalt and sub-base compaction on roads, parking areas, and construction sites.",
      costEffective: "Road rollers are specialized equipment typically needed only during specific construction phases. Roller rental eliminates the capital investment of purchasing compaction equipment, allowing road contractors to access professional compactors for project-specific needs without long-term ownership costs.",
      latestModels: "Our roller fleet features modern vibratory compactors with variable frequency vibration, efficient water spray systems, and comfortable operator stations. These machines deliver consistent, high-quality compaction results essential for durable road surfaces and stable foundations.",
      noMaintenance: "Road rollers require regular maintenance of vibration systems, engine components, and water spray equipment. Western Eagle handles all servicing, ensuring you receive well-maintained compactors ready for demanding work. Our support team responds quickly to any equipment issues on your project site.",
      flexibility: "Different projects require different compaction approaches. Roller rental provides access to single drum rollers for asphalt work and various compaction equipment options, allowing you to match equipment to your specific road construction or site preparation requirements."
    },
    variants: [
      { name: "Single Drum Roller for Rent", slug: "single-drum", capacity: "Single Drum", description: "Professional single drum vibratory roller for road construction and compaction work. Ideal for asphalt and sub-base compaction across construction projects in the UAE.", applications: ["Road construction", "Asphalt compaction", "General compaction"], specifications: ["Single drum design", "Vibratory compaction", "Water spray system"] }
    ],
    image: "/src/assets/equipment/roller.webp"
  },
  manlift: {
    name: "Manlift",
    slug: "manlift",
    heroTitle: "Manlift Rental in UAE",
    heroSubtitle: "Safe Manlift Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent diesel articulated and telescopic manlifts in UAE. Western Eagle offers aerial work platforms for construction, maintenance & industrial work.",
    overview: {
      title: "Overview",
      description: "Manlifts, also known as boom lifts or aerial work platforms, provide safe elevated access for workers performing tasks at height. Our fleet includes articulating boom lifts and telescopic boom lifts with various working heights. These machines are essential for building maintenance, electrical work, facade installation, and any task requiring safe access to elevated positions. All equipment features safety harness attachment points, emergency descent systems, and stable platforms.",
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
    whyChoose: {
      intro: "Construction, maintenance, and industrial work across Dubai and Abu Dhabi frequently requires safe access to elevated positions. Manlift rental provides boom lifts and aerial work platforms that deliver workers safely to height with the flexibility to navigate around obstacles.",
      costEffective: "Aerial work platforms represent significant investment and require regular safety certifications. Manlift rental in the UAE eliminates purchase costs while providing access to certified, well-maintained boom lifts that meet all safety requirements for elevated work at construction sites and facilities.",
      latestModels: "Our manlift fleet includes articulating boom lifts for navigating obstacles and telescopic boom lifts for maximum height reach. Modern diesel-powered units feature stable platforms, safety harness attachment points, emergency descent systems, and comfortable controls for all-day elevated work.",
      noMaintenance: "Boom lifts require rigorous safety inspections and maintenance of hydraulic systems, platforms, and safety features. Western Eagle ensures every manlift meets stringent safety standards before delivery. Our support team provides responsive assistance to keep your elevated work operations running safely.",
      flexibility: "Elevated work requirements vary significantly across projects and phases. Manlift rental allows access to articulating boom lifts for complex access situations and telescopic manlifts for straight-up height requirements, matching equipment to your specific elevated access needs."
    },
    variants: [
      { name: "Diesel E450AJ Articulated Manlift", slug: "e450aj", capacity: "E450AJ", description: "Diesel-powered E450AJ articulated manlift offering excellent outreach and maneuverability. Perfect for construction and maintenance tasks requiring flexible positioning at height.", applications: ["Construction", "Maintenance", "Installation work"], specifications: ["Articulating boom", "Diesel powered", "All-terrain capable"] },
      { name: "Diesel 600S Telescopic Manlift", slug: "600s", capacity: "600S", description: "Diesel 600S telescopic manlift providing exceptional straight-up height for demanding applications. Ideal for high-reach construction and industrial projects.", applications: ["High-reach projects", "Industrial facilities", "Construction"], specifications: ["Telescopic boom", "Maximum height", "Diesel powered"] },
      { name: "Diesel 660AJ Articulated Manlift", slug: "660aj", capacity: "660AJ", description: "Diesel 660AJ articulated boom lift with superior reach and articulation. Designed for complex access requirements on major construction sites.", applications: ["Major construction", "Complex access", "Industrial maintenance"], specifications: ["Articulating boom", "Extended outreach", "Heavy-duty platform"] },
      { name: "Diesel E800AJ Articulated Manlift", slug: "e800aj", capacity: "E800AJ", description: "Diesel E800AJ high-capacity articulated manlift for exceptional height and reach. Perfect for tall structures and challenging access situations.", applications: ["Tall structures", "Exceptional heights", "Industrial stacks"], specifications: ["High-reach articulating boom", "Maximum platform capacity", "All-terrain tires"] },
      { name: "Diesel E860AJ Telescopic Manlift", slug: "e860aj", capacity: "E860AJ", description: "Diesel E860AJ telescopic manlift offering maximum working height for the most demanding aerial work applications.", applications: ["Maximum height projects", "Special applications", "Industrial facilities"], specifications: ["Telescopic boom", "Maximum working height", "Heavy-duty construction"] }
    ],
    image: "/src/assets/equipment/manlift.webp"
  },
  "scissor-lift": {
    name: "Scissor Lift",
    slug: "scissor-lift",
    heroTitle: "Scissor Lift Rental in UAE",
    heroSubtitle: "Versatile Scissor Lift Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent electric & diesel scissor lifts in UAE from 6m to 22m. Western Eagle offers indoor and rough terrain scissor lifts for construction & warehouse work.",
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
    whyChoose: {
      intro: "Indoor construction, warehouse operations, and maintenance work across the UAE frequently require stable elevated platforms. Scissor lift rental provides large, secure work platforms that accommodate multiple workers and equipment for efficient elevated work in warehouses, factories, and construction sites.",
      costEffective: "Scissor lifts are the most economical access solution for vertical elevation needs. Scissor lift rental in Dubai and Abu Dhabi provides access to quality platforms without capital investment, making elevated work financially viable for projects ranging from warehouse fit-outs to building maintenance.",
      latestModels: "Our scissor lift fleet includes electric models for zero-emission indoor use and diesel-powered rough terrain units for outdoor construction. Heights range from standard to 22 meters, all featuring large platforms with guardrails, non-slip surfaces, and intuitive controls for safe, productive elevated work.",
      noMaintenance: "Scissor lifts require regular maintenance of hydraulic systems, electrical components, and safety features. Western Eagle handles all servicing and safety certifications, ensuring every scissor lift meets operational and safety standards. You receive ready-to-work equipment with responsive support throughout your rental.",
      flexibility: "Different environments require different scissor lift solutions. Rental allows access to electric scissor lifts for quiet indoor work and diesel rough terrain models for outdoor sites, with heights from 6 to 22 meters to match your specific elevated platform requirements."
    },
    variants: [
      { name: "Electric Scissor Lift for Rent", slug: "electric", capacity: "Electric", description: "Electric scissor lift ideal for indoor warehouse and construction work. Zero emissions, quiet operation, perfect for enclosed spaces and retail environments.", applications: ["Indoor maintenance", "Retail fit-outs", "Warehouse work"], specifications: ["Electric powered", "Zero emissions", "Quiet operation"] },
      { name: "Electric Scissor Lift 16m for Rent", slug: "16m", capacity: "16 Meters", description: "Electric 16-meter scissor lift for medium-height indoor and light outdoor applications. Perfect for installation work and building maintenance.", applications: ["Medium height work", "Installation", "Maintenance"], specifications: ["Working height: 16m", "Electric powered", "Large platform"] },
      { name: "Electric Scissor Lift 22m for Rent", slug: "22m", capacity: "22 Meters", description: "High-reach 22-meter electric scissor lift for demanding indoor projects requiring maximum height with stable platform.", applications: ["High indoor work", "Large warehouses", "Industrial buildings"], specifications: ["Working height: 22m", "Electric powered", "Maximum indoor reach"] },
      { name: "Diesel Scissor Lift for Rent", slug: "diesel", capacity: "Diesel", description: "Diesel-powered rough terrain scissor lift for outdoor construction sites. All-terrain capability with powerful engine for demanding conditions.", applications: ["Outdoor construction", "Rough terrain", "Building facades"], specifications: ["Diesel powered", "All-terrain tires", "Rough terrain capable"] }
    ],
    image: "/src/assets/equipment/scissor-lift.webp"
  },
  generator: {
    name: "Generator",
    slug: "generator",
    heroTitle: "Generator Rental in UAE",
    heroSubtitle: "Reliable Generator Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent diesel generators in UAE for construction, events & emergency backup. Western Eagle provides power solutions across Dubai, Abu Dhabi & Sharjah.",
    overview: {
      title: "Overview",
      description: "Generators provide essential backup and primary power solutions for construction sites, events, industrial facilities, and emergency situations. Our generator fleet offers reliable power delivery when you need it most. All generators are fuel-efficient, low-noise, and regularly maintained to ensure dependable performance. We provide complete power solutions including cabling, distribution boards, and fuel management.",
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
    whyChoose: {
      intro: "Reliable power is essential for construction sites, outdoor events, and facilities across the UAE. Generator rental provides dependable temporary and backup power solutions, ensuring your operations continue uninterrupted whether powering a remote construction site or backing up critical facilities.",
      costEffective: "Generator ownership involves significant capital investment plus ongoing fuel management, maintenance, and storage costs. Generator rental in Abu Dhabi and Dubai eliminates these burdens, providing power capacity matched to your requirements without the complications of ownership.",
      latestModels: "Our generator fleet features modern diesel generators with fuel-efficient engines, low-noise enclosures, and reliable performance. These units are regularly serviced and tested to ensure dependable power delivery for construction sites, events, and critical backup applications across the UAE.",
      noMaintenance: "Generators require regular maintenance, load testing, and fuel system care to ensure reliable operation when needed. Western Eagle handles all servicing and delivers generators tested and ready for immediate use. Our 24/7 support ensures rapid response to any power issues.",
      flexibility: "Power requirements vary by project phase, event size, and facility needs. Generator rental provides access to various capacities from portable units to large industrial generators, allowing you to scale power supply to match actual requirements without excess capacity costs."
    },
    variants: [
      { name: "Generator for Rent", slug: "standard", capacity: "Various", description: "Professional diesel generators available for construction sites, events, and backup power applications. Various capacities available to match your specific power requirements across the UAE.", applications: ["Construction sites", "Events", "Backup power"], specifications: ["Various kVA options", "Diesel powered", "Low noise operation"] }
    ],
    image: "/src/assets/equipment/generator.webp"
  },
  "skid-steer": {
    name: "Skid Steer Loader",
    slug: "skid-steer",
    heroTitle: "Skid Steer Loader Rental in UAE",
    heroSubtitle: "Versatile Bobcat Skid Steer Rental in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent Bobcat skid steer loaders in UAE. Western Eagle offers wheeled and tracked skid steers for construction, landscaping & demolition work.",
    overview: {
      title: "Overview",
      description: "Bobcat skid steer loaders are compact, highly maneuverable machines perfect for construction, landscaping, and material handling in tight spaces. Our fleet includes wheeled and tracked skid steers, compatible with dozens of attachments including buckets, augers, breakers, and graders. These machines excel where larger equipment cannot access, delivering impressive power in a compact package. Zero-turn capability makes them ideal for indoor and urban work.",
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
    whyChoose: {
      intro: "Compact construction, landscaping, and site preparation work across Dubai and Abu Dhabi demands versatile, maneuverable equipment. Skid steer rental provides powerful, zero-turn machines that excel in tight spaces where larger equipment cannot operate efficiently.",
      costEffective: "Bobcat skid steers can perform the work of multiple machines through attachment versatility. Skid steer rental eliminates the purchase cost while providing access to compact power for landscaping, demolition, grading, and material handling tasks that would otherwise require larger, more expensive equipment.",
      latestModels: "Our skid steer fleet features Bobcat loaders with powerful hydraulics, zero-turn maneuverability, and compatibility with numerous attachments including buckets, augers, breakers, and graders. Modern enclosed cabs protect operators while delivering the power and control needed for demanding work.",
      noMaintenance: "Skid steers work hard in challenging conditions and require regular hydraulic system and attachment maintenance. Western Eagle handles all servicing, ensuring you receive machines in peak operating condition. Our support team responds quickly to keep your compact equipment working productively.",
      flexibility: "Different tasks require different attachments and capabilities. Skid steer rental provides access to versatile Bobcat loaders that can switch between tasks simply by changing attachments, giving you the flexibility to handle varied site work without multiple specialized machines."
    },
    variants: [
      { name: "Skid Steer Bobcat for Rent", slug: "bobcat", capacity: "Bobcat", description: "Versatile Bobcat skid steer loader for construction, landscaping, and material handling applications. Zero-turn maneuverability with multiple attachment compatibility.", applications: ["General construction", "Landscaping", "Material handling"], specifications: ["Zero-turn capable", "Multiple attachments", "Compact design"] }
    ],
    image: "/src/assets/equipment/skid-steer.webp"
  },
  "recovery-truck": {
    name: "Recovery Truck",
    slug: "recovery-truck",
    heroTitle: "Recovery Truck Rental in UAE",
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
    whyChoose: {
      intro: "Vehicle breakdowns, accident recovery, and heavy machinery transport across the UAE require professional recovery capabilities. Recovery truck rental provides 10-ton recovery vehicles operated by experienced professionals for safe, efficient vehicle recovery and equipment transport services.",
      costEffective: "Maintaining dedicated recovery trucks involves significant fleet costs and requires specialized operators. Recovery truck services from Western Eagle provide professional vehicle recovery and machinery transport without the overhead of fleet ownership, available when you need them across the UAE.",
      latestModels: "Our recovery trucks feature modern 10-ton lifting capacity, hydraulic recovery systems, safety winches, and GPS tracking for real-time visibility. Each truck is fully equipped for professional vehicle recovery and heavy machinery transport operations across all UAE roads and construction sites.",
      noMaintenance: "Recovery trucks require specialized maintenance of hydraulic systems, winches, and transport equipment. Western Eagle ensures every recovery vehicle is professionally maintained and operated by trained recovery specialists who understand safe recovery techniques for all vehicle and machinery types.",
      flexibility: "Transport and recovery needs are unpredictable. Our 24/7 recovery truck availability ensures emergency breakdown response when needed, while scheduled services handle planned machinery transport and fleet vehicle relocation requirements across Dubai, Abu Dhabi, and throughout the UAE."
    },
    variants: [
      { name: "10 Ton Recovery Truck for Rent", slug: "10-ton", capacity: "10 Ton", description: "Professional 10-ton recovery truck for vehicle recovery and machinery transport. Equipped with hydraulic systems, winches, and operated by experienced recovery professionals.", applications: ["Vehicle recovery", "Machinery transport", "Emergency towing"], specifications: ["10-ton capacity", "Hydraulic systems", "GPS tracked"] }
    ],
    image: "/src/assets/equipment/recovery-truck.webp"
  },
  compressor: {
    name: "Compressor",
    slug: "compressor",
    heroTitle: "Compressor Rental in UAE",
    heroSubtitle: "Industrial Air Compressor Rental Services in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent air compressors in UAE for construction & industrial applications. Western Eagle provides pneumatic tool power across Dubai, Abu Dhabi & Sharjah.",
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
    whyChoose: {
      intro: "Construction, sandblasting, painting, and industrial operations across Dubai and Abu Dhabi require reliable compressed air power. Compressor rental provides portable air compressor units that power pneumatic tools and equipment essential for efficient construction and industrial operations.",
      costEffective: "Industrial air compressors require significant capital investment and specialized maintenance. Compressor rental in the UAE provides access to high CFM output when needed without ownership costs, allowing contractors to power pneumatic operations profitably on projects of any scale.",
      latestModels: "Our compressor fleet features portable diesel-powered air compressors delivering high CFM output for demanding applications. Modern units offer fuel-efficient operation, reliable performance, and the capacity to power multiple pneumatic tools simultaneously on construction and industrial sites.",
      noMaintenance: "Air compressors require regular maintenance of engines, air systems, and filtration to ensure clean, reliable compressed air delivery. Western Eagle handles all servicing, delivering compressors in peak operating condition with complete air system support including hoses and fittings.",
      flexibility: "Different applications require different air capacity. Compressor rental provides access to various CFM outputs matched to your specific pneumatic power requirements, whether powering construction tools, sandblasting operations, or spray painting systems across UAE project sites."
    },
    variants: [
      { name: "Air Compressor for Rent", slug: "air-compressor", capacity: "Various CFM", description: "Professional air compressors available for construction and industrial applications. Various CFM capacities to power pneumatic tools, sandblasting, and spray painting operations.", applications: ["Construction", "Industrial applications", "Surface preparation"], specifications: ["Various CFM options", "Diesel powered", "Portable towable"] }
    ],
    image: "/src/assets/equipment/compressor.webp"
  },
  "passenger-bus": {
    name: "Passenger Bus",
    slug: "passenger-bus",
    heroTitle: "Passenger Bus Rental in UAE",
    heroSubtitle: "Comfortable Passenger Bus Rental in Dubai, Abu Dhabi & Sharjah",
    metaDescription: "Rent passenger buses in UAE from 14 to 66 seaters. Western Eagle provides staff transport & corporate event transportation services.",
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
    whyChoose: {
      intro: "Construction sites, corporate facilities, and events across Dubai and Abu Dhabi require reliable group transportation. Passenger bus rental provides comfortable, air-conditioned buses with professional drivers for staff transport, site visits, and group movement throughout the UAE.",
      costEffective: "Operating a bus fleet requires significant investment in vehicles, drivers, insurance, and maintenance. Passenger bus rental eliminates these overheads while providing reliable group transport exactly when needed, whether for daily staff movements or special corporate events.",
      latestModels: "Our passenger bus fleet ranges from compact 14-seater mini buses to large 66-seater coaches, all featuring comfortable air-conditioned seating, modern safety features, and well-maintained interiors. Every bus meets UAE transport regulations and safety standards for passenger comfort and security.",
      noMaintenance: "Passenger buses require regular mechanical servicing, safety inspections, and interior maintenance. Western Eagle handles all vehicle maintenance and provides experienced, licensed drivers who ensure safe, punctual transport services for your staff and group transportation needs.",
      flexibility: "Transport requirements vary from small group site visits to large workforce movements. Bus rental provides access to 14-seater mini buses for intimate groups, 34-seater coaches for medium requirements, and 66-seater buses for major workforce transport, matching capacity to your specific needs."
    },
    variants: [
      { name: "14 Seater Passenger Bus for Rent", slug: "14-seater", capacity: "14 Seats", description: "Compact 14-seater passenger bus perfect for small groups, site visits, and short transfers. Air-conditioned comfort with professional driver.", applications: ["Small groups", "Site visits", "Short transfers"], specifications: ["14 passenger capacity", "AC equipped", "Compact design"] },
      { name: "34 Seater Passenger Bus for Rent", slug: "34-seater", capacity: "34 Seats", description: "Medium capacity 34-seater bus for general staff transport and corporate needs. Comfortable seating with air conditioning for daily routes.", applications: ["Staff transport", "Medium groups", "Daily runs"], specifications: ["34 passenger capacity", "AC equipped", "Comfortable seating"] },
      { name: "66 Seater Passenger Bus for Rent", slug: "66-seater", capacity: "66 Seats", description: "Large 66-seater bus for major workforce transport, events, and long-distance travel. Maximum capacity with full comfort features.", applications: ["Large workforce", "Major events", "Long distance"], specifications: ["66 passenger capacity", "Full AC", "Maximum comfort"] }
    ],
    image: "/src/assets/equipment/bus.webp"
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
