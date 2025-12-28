import { 
  Wrench, Users, Shield, Clock, Truck, Settings, HardHat, 
  Cog, Factory, Building2, Droplets, Package, Hammer, 
  CheckCircle, Award, Target, Zap, HeartHandshake, ThumbsUp
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceLayoutType = 
  | "zigzag" 
  | "timeline" 
  | "cards-grid" 
  | "comparison" 
  | "icon-heavy" 
  | "split-hero"
  | "fullwidth-sections"
  | "minimalist"
  | "industrial";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RelatedService {
  name: string;
  slug: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  layoutType: ServiceLayoutType;
  icon: LucideIcon;
  overview: {
    title: string;
    content: string[];
    highlights?: string[];
  };
  benefits: ServiceBenefit[];
  process: ServiceProcess[];
  industries: string[];
  whyChooseUs: {
    title: string;
    points: string[];
  };
  faqs: ServiceFAQ[];
  relatedServices: RelatedService[];
}

export const servicesData: Record<string, ServiceData> = {
  "leasing-machineries-equipments": {
    slug: "leasing-machineries-equipments",
    name: "Leasing of Machineries & Equipments",
    shortDescription: "Flexible leasing options for all types of heavy machinery and construction equipment.",
    heroTitle: "Leasing of Machineries & Equipment in UAE",
    heroSubtitle: "Access world-class heavy machinery without the burden of ownership. Our flexible leasing solutions help businesses across Dubai, Abu Dhabi, and Sharjah optimize costs while maintaining operational excellence.",
    metaTitle: "Machinery & Equipment Leasing in UAE | Western Eagle Transport",
    metaDescription: "Lease heavy machinery and construction equipment in Dubai, Abu Dhabi & Sharjah. Flexible terms, no capital investment, maintenance included. Get a quote today!",
    metaKeywords: "equipment leasing UAE, machinery rental Dubai, heavy equipment lease Abu Dhabi, construction equipment rental Sharjah",
    layoutType: "zigzag",
    icon: Settings,
    overview: {
      title: "What is Equipment Leasing?",
      content: [
        "Equipment leasing is a smart financial solution that allows your business to access the latest heavy machinery and construction equipment without the substantial capital investment of purchasing. At Western Eagle Transport Company, we provide comprehensive leasing programs tailored to the unique demands of projects across the UAE.",
        "Our leasing model eliminates depreciation concerns, reduces maintenance burdens, and provides the flexibility to scale your equipment fleet based on project requirements. Whether you need a single excavator for a short-term project or an entire fleet of construction machinery for a large infrastructure development, our leasing solutions adapt to your needs.",
        "With over two decades of experience in the UAE construction and industrial sectors, we understand the critical importance of having reliable equipment when and where you need it. Our fleet includes the latest models from leading manufacturers, ensuring optimal performance and fuel efficiency on every job site."
      ],
      highlights: [
        "Zero capital investment required",
        "Latest equipment models available",
        "Flexible lease terms from 1 month to 5 years",
        "Full maintenance and support included"
      ]
    },
    benefits: [
      { title: "Preserve Capital", description: "Keep your working capital for core business activities instead of tying it up in equipment purchases.", icon: Shield },
      { title: "Tax Advantages", description: "Lease payments are often fully deductible as operating expenses, providing significant tax benefits.", icon: CheckCircle },
      { title: "Latest Technology", description: "Access the newest equipment models with improved fuel efficiency and productivity features.", icon: Zap },
      { title: "Maintenance Included", description: "Our comprehensive maintenance programs ensure your equipment stays operational with minimal downtime.", icon: Wrench },
      { title: "Flexible Terms", description: "Customize lease duration, payment schedules, and equipment specifications to match your project timeline.", icon: Clock },
      { title: "UAE-Wide Coverage", description: "Seamless delivery and support across Dubai, Abu Dhabi, Sharjah, and all Emirates.", icon: Truck }
    ],
    process: [
      { step: 1, title: "Consultation", description: "Discuss your project requirements, timeline, and equipment needs with our specialists." },
      { step: 2, title: "Custom Quote", description: "Receive a tailored leasing proposal with transparent pricing and flexible terms." },
      { step: 3, title: "Agreement", description: "Review and finalize the lease agreement with our straightforward documentation process." },
      { step: 4, title: "Delivery", description: "Equipment delivered to your site, inspected, and ready for immediate operation." },
      { step: 5, title: "Ongoing Support", description: "Continuous maintenance, technical support, and replacement services throughout your lease." }
    ],
    industries: ["Construction", "Oil & Gas", "Infrastructure Development", "Industrial Manufacturing", "Logistics & Warehousing", "Marine & Port Operations"],
    whyChooseUs: {
      title: "Why Lease from Western Eagle?",
      points: [
        "20+ years of equipment leasing experience in UAE",
        "Fleet of 500+ well-maintained machines",
        "24/7 breakdown support across all Emirates",
        "Competitive rates with no hidden charges",
        "Insurance and documentation handled by us",
        "Option to purchase at lease end"
      ]
    },
    faqs: [
      { question: "What types of equipment can I lease from Western Eagle?", answer: "We offer leasing for excavators, wheel loaders, cranes, forklifts, manlifts, generators, compressors, and a complete range of construction and industrial equipment." },
      { question: "Is maintenance included in the lease?", answer: "Yes, all our standard leases include preventive maintenance, routine servicing, and emergency breakdown support at no additional cost." },
      { question: "What is the minimum lease duration?", answer: "Our minimum lease term is one month, with discounted rates for longer commitments of 6 months or more." },
      { question: "Do you provide equipment operators with leased machinery?", answer: "Yes, we offer trained and certified operators as an optional add-on service with any equipment lease." },
      { question: "Can I lease equipment for projects outside Dubai?", answer: "Absolutely. We serve all Emirates including Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ with consistent service quality." },
      { question: "What happens if the equipment breaks down?", answer: "Our 24/7 support team will dispatch a technician immediately. If repairs cannot be completed on-site within 4 hours, we provide a replacement machine." }
    ],
    relatedServices: [
      { name: "Supply of Trained Operators", slug: "supply-trained-operators", description: "Get certified operators with your leased equipment." },
      { name: "Equipment Repair & Maintenance", slug: "equipment-repair-maintenance", description: "Comprehensive maintenance for all machinery types." },
      { name: "Heavy Duty Construction Machinery", slug: "heavy-duty-construction", description: "Access our fleet of heavy construction equipment." }
    ]
  },

  "supply-trained-operators": {
    slug: "supply-trained-operators",
    name: "Supply of Trained Operators",
    shortDescription: "Skilled and certified operators for safe and efficient equipment operation.",
    heroTitle: "Trained Heavy Equipment Operators in UAE",
    heroSubtitle: "Access a pool of certified, experienced operators who deliver safety, efficiency, and productivity on every project across the UAE.",
    metaTitle: "Trained Equipment Operators for Hire UAE | Western Eagle",
    metaDescription: "Hire certified heavy equipment operators in Dubai, Abu Dhabi & UAE. Skilled crane, excavator, forklift operators. Safety trained, background verified. Call now!",
    metaKeywords: "equipment operators UAE, crane operator hire Dubai, forklift operator Abu Dhabi, heavy machinery operator Sharjah",
    layoutType: "timeline",
    icon: Users,
    overview: {
      title: "Expert Operators for Every Machine",
      content: [
        "Finding skilled heavy equipment operators is one of the biggest challenges facing construction and industrial companies in the UAE. At Western Eagle Transport Company, we maintain a roster of thoroughly vetted, professionally trained operators ready for immediate deployment to your project site.",
        "Every operator in our network holds valid UAE certifications and has undergone rigorous training programs covering equipment operation, safety protocols, and emergency procedures. We match operators to equipment types based on their specific expertise, ensuring optimal productivity and safety on your worksite.",
        "Our operators bring years of hands-on experience across diverse project environments—from high-rise construction sites in Dubai Marina to oil and gas facilities in Abu Dhabi and infrastructure projects throughout the Northern Emirates. They understand not just how to operate machinery, but how to maximize efficiency while maintaining the highest safety standards."
      ],
      highlights: [
        "All operators hold valid UAE certifications",
        "Minimum 3 years of verified experience",
        "Continuous safety training programs",
        "Background and reference checks completed"
      ]
    },
    benefits: [
      { title: "Certified Professionals", description: "All operators hold valid heavy equipment certifications recognized across the UAE.", icon: Award },
      { title: "Safety First", description: "Rigorous safety training ensures compliance with UAE regulations and international standards.", icon: Shield },
      { title: "Versatile Skills", description: "Operators trained on multiple equipment types for maximum flexibility on your projects.", icon: Target },
      { title: "Immediate Availability", description: "Large pool of operators ready for quick deployment to any location in the UAE.", icon: Clock },
      { title: "Background Verified", description: "Complete background checks, reference verification, and health screening completed.", icon: CheckCircle },
      { title: "Flexible Engagement", description: "Hire operators daily, weekly, monthly, or for the duration of your project.", icon: HeartHandshake }
    ],
    process: [
      { step: 1, title: "Equipment Specification", description: "Tell us what equipment you need operated and the required skill level." },
      { step: 2, title: "Operator Matching", description: "We match certified operators with the right experience for your equipment and project type." },
      { step: 3, title: "Verification Review", description: "Review operator credentials, certifications, and experience history." },
      { step: 4, title: "Site Deployment", description: "Operator arrives on-site, completes safety orientation, and begins work." },
      { step: 5, title: "Performance Monitoring", description: "Regular check-ins and performance reviews ensure consistent quality." }
    ],
    industries: ["Construction & Building", "Oil & Gas Operations", "Port & Marine Operations", "Logistics & Warehousing", "Industrial Manufacturing", "Infrastructure Projects"],
    whyChooseUs: {
      title: "Why Choose Our Operators?",
      points: [
        "500+ certified operators in our network",
        "Operators for all equipment types",
        "24-hour replacement guarantee",
        "Multi-lingual operators available",
        "Competitive daily and monthly rates",
        "Full documentation and compliance support"
      ]
    },
    faqs: [
      { question: "What certifications do your operators hold?", answer: "Our operators hold equipment-specific certifications from recognized training institutes, along with valid UAE driving licenses, safety cards, and any client-required certifications." },
      { question: "Can operators work night shifts?", answer: "Yes, we provide operators for all shift patterns including day, night, and rotating shifts based on your project requirements." },
      { question: "What if an operator doesn't meet our expectations?", answer: "We offer a 24-hour replacement guarantee. If you're not satisfied with an operator's performance, we'll provide a replacement immediately." },
      { question: "Do operators come with their own PPE?", answer: "All our operators are equipped with standard PPE. If your site has specific requirements, please inform us in advance." },
      { question: "How quickly can you provide operators?", answer: "For standard equipment types, we can deploy operators within 24-48 hours. Emergency deployments can often be arranged same-day." },
      { question: "Are operators available for short-term projects?", answer: "Yes, we offer flexible engagement terms from single-day assignments to multi-year project commitments." }
    ],
    relatedServices: [
      { name: "Leasing of Machineries & Equipments", slug: "leasing-machineries-equipments", description: "Lease equipment along with trained operators." },
      { name: "Logistic & Operator Support", slug: "logistic-operator-support", description: "Complete logistics and manpower solutions." },
      { name: "Heavy Duty Construction Machinery", slug: "heavy-duty-construction", description: "Access our fleet of construction equipment." }
    ]
  },

  "equipment-repair-maintenance": {
    slug: "equipment-repair-maintenance",
    name: "Equipment Repair & Maintenance Services",
    shortDescription: "Comprehensive repair and maintenance services to keep your equipment running.",
    heroTitle: "Equipment Repair & Maintenance Services in UAE",
    heroSubtitle: "Minimize downtime and maximize equipment lifespan with our professional repair and preventive maintenance programs across Dubai, Abu Dhabi, and all Emirates.",
    metaTitle: "Heavy Equipment Repair & Maintenance UAE | Western Eagle",
    metaDescription: "Professional equipment repair and maintenance services in UAE. 24/7 emergency support, genuine parts, certified technicians. Serving Dubai, Abu Dhabi & Sharjah.",
    metaKeywords: "equipment repair UAE, machinery maintenance Dubai, heavy equipment service Abu Dhabi, construction equipment repair Sharjah",
    layoutType: "cards-grid",
    icon: Wrench,
    overview: {
      title: "Keep Your Equipment Running at Peak Performance",
      content: [
        "Equipment downtime is the enemy of productivity and profitability. At Western Eagle Transport Company, our comprehensive repair and maintenance services are designed to keep your machinery operating at peak efficiency while preventing costly breakdowns before they occur.",
        "Our team of factory-trained technicians brings expertise across all major equipment brands and types. From routine oil changes and filter replacements to complex engine overhauls and hydraulic system repairs, we handle every aspect of equipment maintenance with precision and care.",
        "We understand that construction and industrial operations don't stop for equipment problems. That's why we offer 24/7 emergency repair services across the UAE, with rapid response times and fully-equipped mobile service units that can address many issues directly at your job site."
      ],
      highlights: [
        "24/7 emergency breakdown support",
        "Factory-trained certified technicians",
        "Genuine OEM spare parts",
        "Mobile on-site repair units"
      ]
    },
    benefits: [
      { title: "24/7 Emergency Support", description: "Round-the-clock breakdown service with rapid response across all Emirates.", icon: Clock },
      { title: "Genuine Parts", description: "We use only OEM and approved aftermarket parts for lasting repairs.", icon: CheckCircle },
      { title: "Preventive Programs", description: "Scheduled maintenance plans that catch issues before they cause downtime.", icon: Shield },
      { title: "Mobile Service", description: "Fully-equipped service vehicles that bring the workshop to your site.", icon: Truck },
      { title: "Expert Technicians", description: "Factory-trained mechanics with multi-brand expertise.", icon: Award },
      { title: "Warranty Protection", description: "All repairs backed by comprehensive workmanship warranty.", icon: ThumbsUp }
    ],
    process: [
      { step: 1, title: "Report Issue", description: "Contact us via phone, WhatsApp, or online with equipment details and symptoms." },
      { step: 2, title: "Rapid Response", description: "Technician dispatched to your location, typically within 2-4 hours in Dubai/Abu Dhabi." },
      { step: 3, title: "Diagnosis", description: "Thorough inspection to identify root cause and required repairs." },
      { step: 4, title: "Repair Execution", description: "Professional repair using genuine parts and proper procedures." },
      { step: 5, title: "Quality Testing", description: "Comprehensive testing to verify repair quality before handover." }
    ],
    industries: ["Construction Sites", "Oil & Gas Facilities", "Industrial Plants", "Logistics Centers", "Marine Operations", "Mining Operations"],
    whyChooseUs: {
      title: "Why Choose Western Eagle for Repairs?",
      points: [
        "Average response time under 3 hours in urban areas",
        "85% of repairs completed on first visit",
        "Transparent pricing with no hidden charges",
        "Repair history and documentation provided",
        "Loaner equipment available during major repairs",
        "Serving all Emirates with consistent quality"
      ]
    },
    faqs: [
      { question: "What brands of equipment do you service?", answer: "We service all major brands including Caterpillar, Komatsu, JCB, Volvo, Hitachi, Liebherr, and more. Our technicians are trained on multiple equipment platforms." },
      { question: "Do you offer preventive maintenance contracts?", answer: "Yes, we offer customized preventive maintenance agreements that include scheduled servicing, inspections, and priority emergency response at discounted rates." },
      { question: "Can you repair equipment at our job site?", answer: "Yes, our mobile service units can perform most repairs on-site. Only major overhauls requiring specialized equipment are done at our workshop." },
      { question: "What is your warranty on repairs?", answer: "We provide a minimum 90-day warranty on all repairs and replaced parts, with extended warranties available for major component replacements." },
      { question: "How quickly can you get spare parts?", answer: "We maintain extensive parts inventory for common items. For specialized parts, we leverage our supplier network for expedited delivery, typically within 24-72 hours." },
      { question: "Do you provide equipment inspection services?", answer: "Yes, we offer comprehensive pre-purchase inspections, annual safety inspections, and condition assessment reports for equipment fleets." }
    ],
    relatedServices: [
      { name: "Workshop & Maintenance", slug: "workshop-maintenance", description: "Full workshop facilities for major repairs." },
      { name: "Leasing of Machineries & Equipments", slug: "leasing-machineries-equipments", description: "Lease well-maintained equipment." },
      { name: "Quality-Assured Industrial Equipment", slug: "quality-assured-equipment", description: "Thoroughly inspected equipment for your projects." }
    ]
  },

  "quality-assured-equipment": {
    slug: "quality-assured-equipment",
    name: "Quality-Assured Industrial Equipment",
    shortDescription: "High-quality, regularly inspected industrial equipment for all projects.",
    heroTitle: "Quality-Assured Industrial Equipment in UAE",
    heroSubtitle: "Every piece of equipment in our fleet undergoes rigorous inspection and testing to ensure reliable performance on your critical projects.",
    metaTitle: "Quality Certified Industrial Equipment UAE | Western Eagle",
    metaDescription: "Rent quality-assured industrial equipment in Dubai & Abu Dhabi. Regular inspections, safety certified, performance tested. Trusted by UAE contractors.",
    metaKeywords: "quality equipment UAE, certified machinery Dubai, inspected equipment rental Abu Dhabi, industrial equipment Sharjah",
    layoutType: "comparison",
    icon: Shield,
    overview: {
      title: "Equipment Quality You Can Trust",
      content: [
        "In construction and industrial operations, equipment reliability directly impacts project success, safety, and profitability. At Western Eagle Transport Company, we've built our reputation on providing equipment that meets the highest quality standards in the UAE market.",
        "Every machine in our fleet undergoes a comprehensive multi-point inspection before deployment. Our quality assurance program covers mechanical systems, hydraulics, electrical components, safety features, and overall operational readiness. Only equipment that passes our strict criteria is made available for customer projects.",
        "We maintain detailed service histories and inspection records for all equipment, providing transparency and peace of mind. Our commitment to quality extends beyond initial inspection—regular in-service checks and preventive maintenance ensure that equipment performs reliably throughout your rental period."
      ],
      highlights: [
        "150-point inspection protocol",
        "Full service history documentation",
        "Safety certification included",
        "Performance tested before delivery"
      ]
    },
    benefits: [
      { title: "Rigorous Inspections", description: "Every machine passes our comprehensive 150-point quality checklist before deployment.", icon: CheckCircle },
      { title: "Safety Certified", description: "All equipment meets UAE safety regulations and international standards.", icon: Shield },
      { title: "Documented History", description: "Complete service records and inspection reports available for review.", icon: Award },
      { title: "Performance Tested", description: "Operational testing under load conditions ensures real-world readiness.", icon: Target },
      { title: "Clean & Maintained", description: "Equipment delivered clean, fueled, and in presentation condition.", icon: ThumbsUp },
      { title: "Defect-Free Guarantee", description: "Any defects discovered within 24 hours addressed immediately at no cost.", icon: HeartHandshake }
    ],
    process: [
      { step: 1, title: "Selection", description: "Choose from our quality-assured fleet based on your project requirements." },
      { step: 2, title: "Pre-Delivery Check", description: "Final inspection and testing completed before dispatch to your site." },
      { step: 3, title: "Documentation", description: "Receive complete inspection reports and safety certificates." },
      { step: 4, title: "Delivery & Handover", description: "Equipment delivered with walkthrough and operational verification." },
      { step: 5, title: "Ongoing Quality", description: "Regular in-service inspections maintain quality throughout rental period." }
    ],
    industries: ["High-Rise Construction", "Infrastructure Projects", "Oil & Gas Operations", "Government Contracts", "Industrial Manufacturing", "Airport & Port Projects"],
    whyChooseUs: {
      title: "Our Quality Commitment",
      points: [
        "ISO-aligned quality management processes",
        "Dedicated quality assurance team",
        "Third-party inspection reports available",
        "Zero tolerance for safety defects",
        "Regular fleet renewal program",
        "Customer satisfaction tracking"
      ]
    },
    faqs: [
      { question: "What does your quality inspection include?", answer: "Our 150-point inspection covers engine performance, hydraulic systems, structural integrity, safety devices, electrical systems, operator controls, and cosmetic condition." },
      { question: "Can I see inspection reports before renting?", answer: "Yes, we provide detailed inspection reports and service history for any equipment you're considering. Transparency is fundamental to our quality commitment." },
      { question: "How often is equipment re-inspected?", answer: "Equipment undergoes inspection after every rental return and at minimum every 250 operating hours during long-term rentals." },
      { question: "What if equipment fails during my rental?", answer: "In the rare event of equipment failure, we provide immediate replacement and credit any downtime against your rental charges." },
      { question: "Do you offer third-party inspection services?", answer: "Yes, we can arrange independent third-party inspections for clients who require additional verification, particularly for major contracts." },
      { question: "Is your equipment compliant with UAE regulations?", answer: "All our equipment meets or exceeds UAE municipality requirements and relevant industry safety standards." }
    ],
    relatedServices: [
      { name: "Leasing of Machineries & Equipments", slug: "leasing-machineries-equipments", description: "Flexible leasing of quality-assured equipment." },
      { name: "Equipment Repair & Maintenance", slug: "equipment-repair-maintenance", description: "Professional maintenance for continued quality." },
      { name: "Heavy Duty Construction Machinery", slug: "heavy-duty-construction", description: "Quality-certified heavy construction equipment." }
    ]
  },

  "welding-cutting-equipment": {
    slug: "welding-cutting-equipment",
    name: "Welding & Cutting Equipment",
    shortDescription: "Professional welding and cutting equipment for industrial applications.",
    heroTitle: "Welding & Cutting Equipment Rental in UAE",
    heroSubtitle: "Industrial-grade welding and cutting solutions for fabrication, construction, and maintenance projects across Dubai, Abu Dhabi, and all Emirates.",
    metaTitle: "Welding & Cutting Equipment Rental UAE | Western Eagle",
    metaDescription: "Rent professional welding and cutting equipment in Dubai & UAE. MIG, TIG, plasma cutters, oxy-fuel systems. Operator training included. Get quote today!",
    metaKeywords: "welding equipment rental UAE, cutting equipment Dubai, plasma cutter rental Abu Dhabi, industrial welding Sharjah",
    layoutType: "icon-heavy",
    icon: Hammer,
    overview: {
      title: "Professional Welding & Cutting Solutions",
      content: [
        "From structural steel fabrication to pipeline construction and industrial maintenance, quality welding and cutting equipment is essential for project success. Western Eagle Transport Company provides a comprehensive range of professional welding and cutting systems designed for demanding industrial applications.",
        "Our welding equipment inventory includes MIG, TIG, and stick welders in various amperage ratings, along with multi-process machines for maximum versatility. For cutting applications, we offer plasma cutting systems, oxy-fuel setups, and specialized equipment for specific materials and thicknesses.",
        "Understanding that welding quality depends on both equipment and skill, we offer operator training and certification programs. Our experienced welding professionals can train your team on equipment operation, safety procedures, and techniques for achieving optimal weld quality in various applications."
      ],
      highlights: [
        "Industrial-grade equipment",
        "Full range of welding processes",
        "Operator training available",
        "Consumables supply included"
      ]
    },
    benefits: [
      { title: "Industrial Grade", description: "Heavy-duty equipment designed for continuous industrial use and demanding conditions.", icon: Factory },
      { title: "Process Variety", description: "MIG, TIG, stick welding, plasma cutting, and oxy-fuel systems available.", icon: Settings },
      { title: "Safety Equipment", description: "Complete PPE packages including helmets, gloves, and protective gear.", icon: Shield },
      { title: "Operator Training", description: "Professional training programs for safe and effective equipment operation.", icon: Users },
      { title: "Consumables Supply", description: "Electrodes, wire, gases, and cutting consumables available for purchase.", icon: Package },
      { title: "Technical Support", description: "Expert advice on equipment selection and welding procedures.", icon: HeartHandshake }
    ],
    process: [
      { step: 1, title: "Requirement Assessment", description: "Discuss your welding/cutting applications, materials, and project scope." },
      { step: 2, title: "Equipment Selection", description: "We recommend optimal equipment based on your specific requirements." },
      { step: 3, title: "Training & Setup", description: "Optional operator training and on-site equipment setup." },
      { step: 4, title: "Consumables Plan", description: "Arrange regular supply of electrodes, gases, and consumables." },
      { step: 5, title: "Technical Support", description: "Ongoing technical assistance throughout your project." }
    ],
    industries: ["Steel Fabrication", "Pipeline Construction", "Shipbuilding & Marine", "Oil & Gas Facilities", "Industrial Maintenance", "Construction Sites"],
    whyChooseUs: {
      title: "Why Choose Our Welding Equipment?",
      points: [
        "Premium brands: Lincoln, Miller, ESAB",
        "Equipment for all welding processes",
        "Calibrated and tested before delivery",
        "Consumables available for purchase",
        "Certified operator training programs",
        "Technical support from welding experts"
      ]
    },
    faqs: [
      { question: "What welding processes do you support?", answer: "We provide equipment for MIG (GMAW), TIG (GTAW), stick (SMAW), flux-cored, and submerged arc welding, plus plasma and oxy-fuel cutting." },
      { question: "Do you supply welding consumables?", answer: "Yes, we stock a wide range of electrodes, welding wire, shielding gases, and cutting consumables for purchase alongside equipment rentals." },
      { question: "Can you provide certified welders?", answer: "Yes, we can supply certified welders for various welding codes and specifications as part of our manpower services." },
      { question: "Is operator training available?", answer: "We offer training programs covering equipment operation, safety procedures, and welding techniques. Training can be conducted at your site or our facility." },
      { question: "What safety equipment is included?", answer: "Basic PPE is included with rentals. Extended safety packages with auto-darkening helmets, welding screens, and fire extinguishers are available." },
      { question: "Do you offer long-term rental rates?", answer: "Yes, significant discounts are available for rentals of one month or longer. Contact us for customized long-term pricing." }
    ],
    relatedServices: [
      { name: "Heavy Duty Construction Machinery", slug: "heavy-duty-construction", description: "Complete construction equipment solutions." },
      { name: "Supply of Trained Operators", slug: "supply-trained-operators", description: "Hire certified welders for your projects." },
      { name: "Workshop & Maintenance", slug: "workshop-maintenance", description: "Welding repairs and fabrication services." }
    ]
  },

  "heavy-duty-construction": {
    slug: "heavy-duty-construction",
    name: "Heavy Duty Construction Machinery",
    shortDescription: "Robust heavy-duty machinery for large-scale construction projects.",
    heroTitle: "Heavy Duty Construction Machinery in UAE",
    heroSubtitle: "Power your largest projects with our fleet of heavy construction equipment. From massive excavators to powerful wheel loaders, we supply the muscle for UAE's most ambitious builds.",
    metaTitle: "Heavy Construction Machinery Rental UAE | Western Eagle",
    metaDescription: "Rent heavy construction machinery in Dubai, Abu Dhabi & UAE. Excavators, bulldozers, wheel loaders, cranes. Large fleet, competitive rates. Request quote!",
    metaKeywords: "heavy machinery rental UAE, construction equipment Dubai, excavator rental Abu Dhabi, bulldozer hire Sharjah",
    layoutType: "split-hero",
    icon: HardHat,
    overview: {
      title: "Power for Your Biggest Projects",
      content: [
        "Major construction projects demand major equipment. At Western Eagle Transport Company, we maintain one of the UAE's most comprehensive fleets of heavy-duty construction machinery, ready to tackle everything from high-rise developments to highway construction and large-scale industrial projects.",
        "Our heavy equipment fleet includes excavators from 20 to 80 tons, wheel loaders, bulldozers, motor graders, and mobile cranes with lifting capacities up to 200 tons. Each machine is maintained to exacting standards and operated by experienced professionals who understand the demands of large-scale construction.",
        "We pride ourselves on being a true partner to our clients, not just an equipment supplier. Our project planning team works with you to optimize equipment selection, coordinate logistics, and ensure that you have the right machines on site when you need them. From initial mobilization through project completion, we're committed to your success."
      ],
      highlights: [
        "Excavators up to 80 tons",
        "Cranes up to 200-ton capacity",
        "Complete earthmoving fleet",
        "Project-based pricing available"
      ]
    },
    benefits: [
      { title: "Large Fleet", description: "One of the UAE's largest fleets of heavy construction equipment for any project scale.", icon: Truck },
      { title: "Latest Models", description: "Regularly updated fleet featuring fuel-efficient, productive modern machines.", icon: Zap },
      { title: "GPS Tracking", description: "Real-time equipment tracking for fleet management and productivity monitoring.", icon: Target },
      { title: "Operators Included", description: "Experienced operators available with all heavy equipment rentals.", icon: Users },
      { title: "Project Pricing", description: "Competitive rates for large projects with flexible payment structures.", icon: CheckCircle },
      { title: "Logistics Support", description: "Complete mobilization and demobilization services for your project site.", icon: Package }
    ],
    process: [
      { step: 1, title: "Project Consultation", description: "Detailed discussion of your project scope, timeline, and equipment needs." },
      { step: 2, title: "Site Assessment", description: "If needed, our team visits your site to understand access and operational requirements." },
      { step: 3, title: "Fleet Recommendation", description: "We propose an optimized equipment package tailored to your project phases." },
      { step: 4, title: "Contract & Mobilization", description: "Finalize terms and coordinate equipment delivery to your site." },
      { step: 5, title: "Ongoing Support", description: "Continuous technical support, maintenance, and equipment adjustments as needed." }
    ],
    industries: ["Highway & Road Construction", "High-Rise Development", "Industrial Construction", "Infrastructure Projects", "Mining & Quarry", "Land Development"],
    whyChooseUs: {
      title: "Why Choose Western Eagle?",
      points: [
        "200+ heavy machines in our fleet",
        "Experience on UAE mega-projects",
        "Dedicated project coordinators",
        "24/7 technical support",
        "Flexible rental terms",
        "Transport and logistics included"
      ]
    },
    faqs: [
      { question: "What is your largest excavator?", answer: "We have excavators up to 80 tons capacity. For larger requirements, we can source equipment through our partner network." },
      { question: "Do you provide equipment for road construction?", answer: "Yes, we offer complete road construction packages including graders, rollers, pavers, and material transport equipment." },
      { question: "Can you supply equipment for a 2-year project?", answer: "Absolutely. We specialize in long-term project support with dedicated equipment allocations, competitive pricing, and priority maintenance." },
      { question: "Is GPS tracking available?", answer: "Yes, all our heavy equipment is GPS-enabled for location tracking, operating hours monitoring, and productivity analysis." },
      { question: "Do operators come with the equipment?", answer: "Operators are optional but recommended. All our operators are certified and experienced with heavy construction equipment." },
      { question: "How do you handle equipment transport?", answer: "We provide complete logistics including low-bed transport, necessary permits, and route planning for all equipment movements." }
    ],
    relatedServices: [
      { name: "Leasing of Machineries & Equipments", slug: "leasing-machineries-equipments", description: "Flexible leasing for long-term projects." },
      { name: "Supply of Trained Operators", slug: "supply-trained-operators", description: "Certified operators for all equipment types." },
      { name: "Logistic & Operator Support", slug: "logistic-operator-support", description: "Complete logistics and support solutions." }
    ]
  },

  "scaffolding": {
    slug: "scaffolding",
    name: "Scaffolding",
    shortDescription: "Safe and reliable scaffolding solutions for construction and maintenance.",
    heroTitle: "Scaffolding Solutions in UAE",
    heroSubtitle: "Safe, certified scaffolding systems for construction, maintenance, and industrial access. From simple platforms to complex configurations across all Emirates.",
    metaTitle: "Scaffolding Rental & Installation UAE | Western Eagle",
    metaDescription: "Rent certified scaffolding in Dubai, Abu Dhabi & UAE. Frame, system, suspended scaffolding. Professional installation, safety certified. Get free quote!",
    metaKeywords: "scaffolding rental UAE, scaffold hire Dubai, industrial scaffolding Abu Dhabi, construction scaffolding Sharjah",
    layoutType: "fullwidth-sections",
    icon: Building2,
    overview: {
      title: "Safe Access Solutions for Every Project",
      content: [
        "Scaffolding is the foundation of safe elevated work. At Western Eagle Transport Company, we provide comprehensive scaffolding solutions including rental, installation, and maintenance of certified scaffold systems for construction, industrial maintenance, and specialized access applications throughout the UAE.",
        "Our inventory includes traditional frame scaffolding, modern system scaffolding (ringlock and cuplock), suspended scaffolding, and mobile scaffold towers. Each system is certified to meet UAE municipality requirements and international safety standards, ensuring compliance and worker safety on your projects.",
        "Beyond just supplying scaffolding, we offer professional installation services by trained scaffold erectors who understand both the engineering requirements and safety regulations. Our team can design and install complex configurations for challenging access situations, from high-rise facades to industrial plant maintenance."
      ],
      highlights: [
        "All systems safety certified",
        "Professional installation teams",
        "Design services for complex needs",
        "Regular safety inspections included"
      ]
    },
    benefits: [
      { title: "Certified Systems", description: "All scaffolding meets UAE municipality and international safety standards.", icon: Shield },
      { title: "Multiple Types", description: "Frame, system, suspended, and mobile scaffolding for any application.", icon: Settings },
      { title: "Professional Install", description: "Trained erectors ensure safe, code-compliant installations.", icon: Users },
      { title: "Design Services", description: "Engineering support for complex or unusual access requirements.", icon: Target },
      { title: "Regular Inspections", description: "Scheduled safety inspections during long-term installations.", icon: CheckCircle },
      { title: "Rental or Purchase", description: "Flexible options to rent or buy scaffolding based on your needs.", icon: HeartHandshake }
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "Our team evaluates your site to determine optimal scaffolding solutions." },
      { step: 2, title: "Design & Proposal", description: "Custom scaffold design with detailed drawings and pricing." },
      { step: 3, title: "Installation", description: "Professional erection by trained scaffolders with safety certification." },
      { step: 4, title: "Inspection & Handover", description: "Safety inspection completed and scaffold tag issued before use." },
      { step: 5, title: "Maintenance & Removal", description: "Regular inspections during use and safe dismantling upon completion." }
    ],
    industries: ["Building Construction", "Facade & Cladding", "Industrial Maintenance", "Painting & Coating", "Oil & Gas Facilities", "Event & Entertainment"],
    whyChooseUs: {
      title: "Why Choose Our Scaffolding?",
      points: [
        "1000+ tons of scaffolding inventory",
        "Certified scaffold erectors",
        "Engineering design support",
        "Weekly safety inspections",
        "Competitive rental rates",
        "Rapid mobilization capability"
      ]
    },
    faqs: [
      { question: "What types of scaffolding do you provide?", answer: "We offer frame scaffolding, ringlock/cuplock system scaffolding, suspended scaffolding, mobile towers, and specialized access solutions." },
      { question: "Do you handle installation?", answer: "Yes, our trained scaffold erectors handle all installations. We also provide supervision for client-erected scaffolding if required." },
      { question: "Is your scaffolding certified?", answer: "All our scaffolding is certified to UAE municipality requirements and regularly inspected. Certification documentation is provided with every installation." },
      { question: "Can you provide scaffolding for high-rise buildings?", answer: "Yes, we have experience with high-rise scaffolding and can design and install systems for buildings of any height." },
      { question: "Do you offer scaffolding for sale?", answer: "Yes, we offer both rental and purchase options. For long-term projects, purchasing may be more economical." },
      { question: "How quickly can you mobilize scaffolding?", answer: "For standard requirements, we can mobilize within 48-72 hours. Emergency requests can often be accommodated faster." }
    ],
    relatedServices: [
      { name: "Heavy Duty Construction Machinery", slug: "heavy-duty-construction", description: "Complete construction equipment solutions." },
      { name: "Quality-Assured Industrial Equipment", slug: "quality-assured-equipment", description: "Certified equipment for your projects." },
      { name: "Logistic & Operator Support", slug: "logistic-operator-support", description: "Transport and installation support." }
    ]
  },

  "logistic-operator-support": {
    slug: "logistic-operator-support",
    name: "Logistic & Operator Support",
    shortDescription: "End-to-end logistics and on-site operator support services.",
    heroTitle: "Logistics & Operator Support in UAE",
    heroSubtitle: "Complete logistics coordination and on-site support services. From equipment transport to manpower deployment, we handle the complexity so you can focus on your project.",
    metaTitle: "Equipment Logistics & Support Services UAE | Western Eagle",
    metaDescription: "Professional logistics and operator support in Dubai, Abu Dhabi & UAE. Equipment transport, site coordination, manpower deployment. Call for quote!",
    metaKeywords: "equipment logistics UAE, operator support Dubai, construction logistics Abu Dhabi, site support services Sharjah",
    layoutType: "minimalist",
    icon: Truck,
    overview: {
      title: "Your Complete Support Partner",
      content: [
        "Managing equipment logistics and on-site operations requires expertise, coordination, and resources that many companies prefer to outsource. Western Eagle Transport Company provides comprehensive logistics and operator support services that handle the complexity of equipment movement and site operations throughout the UAE.",
        "Our logistics capabilities include equipment transport using our fleet of low-bed trailers, route planning and permit acquisition, customs coordination for cross-border movements, and just-in-time delivery scheduling. We understand that construction timelines are tight, and delays in equipment arrival can cascade into costly project setbacks.",
        "On-site operator support goes beyond providing skilled equipment operators. We offer site coordination services, equipment marshalling, fueling and daily maintenance, shift scheduling, and real-time reporting on equipment utilization. Our goal is to maximize equipment productivity while minimizing the management burden on your team."
      ],
      highlights: [
        "Door-to-site equipment delivery",
        "Complete permit handling",
        "Real-time tracking available",
        "24/7 coordination center"
      ]
    },
    benefits: [
      { title: "End-to-End Logistics", description: "Complete equipment transport from our yard to your site, anywhere in UAE.", icon: Truck },
      { title: "Permit Handling", description: "We obtain all necessary transport permits and coordinate with authorities.", icon: CheckCircle },
      { title: "Site Coordination", description: "On-site supervision to manage equipment deployment and operations.", icon: Users },
      { title: "Real-Time Tracking", description: "GPS tracking of equipment in transit and on site for complete visibility.", icon: Target },
      { title: "Insurance Coverage", description: "Full transit insurance and site coverage for peace of mind.", icon: Shield },
      { title: "24/7 Support", description: "Round-the-clock coordination center for urgent requirements.", icon: Clock }
    ],
    process: [
      { step: 1, title: "Logistics Planning", description: "Detailed planning of equipment movements and site requirements." },
      { step: 2, title: "Transport Arrangement", description: "Coordinate vehicles, permits, and scheduling for equipment delivery." },
      { step: 3, title: "Delivery Execution", description: "Professional transport with real-time tracking and updates." },
      { step: 4, title: "Site Deployment", description: "Equipment positioned and ready for operation at your site." },
      { step: 5, title: "Ongoing Support", description: "Continuous coordination for additional equipment, operator changes, and demobilization." }
    ],
    industries: ["Construction Projects", "Oil & Gas Operations", "Infrastructure Development", "Industrial Facilities", "Events & Entertainment", "Emergency Response"],
    whyChooseUs: {
      title: "Why Choose Our Logistics Support?",
      points: [
        "Fleet of 50+ transport vehicles",
        "RTA and municipality permit expertise",
        "Cross-emirate coordination",
        "Experienced logistics coordinators",
        "Integrated equipment + operator packages",
        "Competitive all-inclusive pricing"
      ]
    },
    faqs: [
      { question: "What size equipment can you transport?", answer: "We transport equipment from small compressors to oversized loads including large cranes and excavators. Our fleet includes various trailer configurations for different equipment types." },
      { question: "Do you handle transport permits?", answer: "Yes, we manage all required permits from RTA, municipalities, and police for standard and oversized equipment movements." },
      { question: "Can you coordinate multi-site logistics?", answer: "Absolutely. We regularly manage logistics for clients with multiple project sites, optimizing equipment movements between locations." },
      { question: "Is equipment insured during transport?", answer: "Yes, all equipment in transit is covered by comprehensive insurance. Site insurance can also be arranged." },
      { question: "Do you offer after-hours delivery?", answer: "Yes, we provide 24/7 logistics services and can schedule deliveries for off-peak hours when required by site or traffic conditions." },
      { question: "Can you store equipment between projects?", answer: "Yes, we offer secure yard storage for equipment between projects, with maintenance and security included." }
    ],
    relatedServices: [
      { name: "Leasing of Machineries & Equipments", slug: "leasing-machineries-equipments", description: "Equipment leasing with logistics included." },
      { name: "Supply of Trained Operators", slug: "supply-trained-operators", description: "Operators deployed to your site." },
      { name: "Heavy Duty Construction Machinery", slug: "heavy-duty-construction", description: "Heavy equipment with transport included." }
    ]
  },

  "workshop-maintenance": {
    slug: "workshop-maintenance",
    name: "Workshop & Maintenance",
    shortDescription: "Fully equipped workshop for equipment servicing and repairs.",
    heroTitle: "Equipment Workshop & Maintenance in UAE",
    heroSubtitle: "State-of-the-art workshop facilities in Dubai for comprehensive equipment servicing, overhauls, and repairs. Expert technicians, genuine parts, and quick turnaround.",
    metaTitle: "Equipment Workshop & Maintenance Services UAE | Western Eagle",
    metaDescription: "Professional equipment workshop in Dubai. Heavy machinery repairs, engine overhauls, hydraulic services. Genuine parts, certified technicians. Call now!",
    metaKeywords: "equipment workshop UAE, machinery maintenance Dubai, heavy equipment repair Abu Dhabi, industrial workshop Sharjah",
    layoutType: "industrial",
    icon: Cog,
    overview: {
      title: "State-of-the-Art Workshop Facilities",
      content: [
        "Some repairs and maintenance work require the specialized equipment and controlled environment that only a professional workshop can provide. At Western Eagle Transport Company, our fully-equipped workshop facilities handle everything from routine servicing to complete equipment overhauls.",
        "Our workshop spans over 10,000 square feet and is equipped with heavy-lift cranes, engine dynometers, hydraulic test benches, and specialized diagnostic equipment. We maintain dedicated bays for different equipment types, ensuring that your machinery receives focused attention from technicians who specialize in your specific equipment category.",
        "Our team includes factory-trained technicians certified on major equipment brands, supported by modern diagnostic tools and a comprehensive parts inventory. Whether your equipment needs a scheduled service, unexpected repair, or complete rebuild, our workshop delivers quality workmanship with documented processes."
      ],
      highlights: [
        "10,000+ sq ft workshop facility",
        "Heavy-lift capability up to 50 tons",
        "Extensive spare parts inventory",
        "Quick turnaround on standard services"
      ]
    },
    benefits: [
      { title: "Full-Service Facility", description: "Complete workshop equipped for any repair or overhaul requirement.", icon: Factory },
      { title: "Expert Technicians", description: "Factory-trained mechanics with certifications on major equipment brands.", icon: Award },
      { title: "Genuine Parts", description: "Extensive inventory of OEM parts for rapid repair completion.", icon: Package },
      { title: "Quality Warranty", description: "All repairs backed by comprehensive workmanship warranty.", icon: Shield },
      { title: "Quick Turnaround", description: "Efficient processes designed to minimize your equipment downtime.", icon: Clock },
      { title: "Transport Included", description: "Equipment pickup and delivery services available.", icon: Truck }
    ],
    process: [
      { step: 1, title: "Equipment Receipt", description: "Equipment received at our workshop with documented condition assessment." },
      { step: 2, title: "Detailed Inspection", description: "Comprehensive diagnostic inspection to identify all required work." },
      { step: 3, title: "Quote Approval", description: "Detailed repair quotation provided for your review and approval." },
      { step: 4, title: "Repair Execution", description: "Professional repairs using genuine parts and approved procedures." },
      { step: 5, title: "Testing & Delivery", description: "Thorough testing followed by delivery back to your site." }
    ],
    industries: ["Construction Companies", "Industrial Manufacturers", "Logistics Operators", "Mining Operations", "Oil & Gas Contractors", "Government Agencies"],
    whyChooseUs: {
      title: "Why Choose Our Workshop?",
      points: [
        "One of the largest equipment workshops in UAE",
        "Multi-brand service capability",
        "Genuine OEM parts stock",
        "Transparent pricing and documentation",
        "Loaner equipment during major repairs",
        "Pick-up and delivery services"
      ]
    },
    faqs: [
      { question: "What types of repairs do you handle?", answer: "We handle all mechanical, hydraulic, electrical, and structural repairs for construction and industrial equipment of all sizes and brands." },
      { question: "How long does a typical repair take?", answer: "Minor repairs are often completed same-day. Standard services take 1-3 days. Major overhauls are scheduled based on scope but typically 1-2 weeks." },
      { question: "Can you pick up equipment from my site?", answer: "Yes, we offer equipment transport services for workshop repairs. Pickup and delivery can be included in your repair quote." },
      { question: "Do you provide loaner equipment during repairs?", answer: "For major repairs with extended timelines, we can arrange loaner equipment to minimize your operational disruption." },
      { question: "What warranty do you offer on repairs?", answer: "Standard repairs carry a 90-day warranty. Major component rebuilds and overhauls carry extended warranties up to 12 months." },
      { question: "Can you service equipment from other rental companies?", answer: "Yes, we provide third-party maintenance and repair services for equipment fleet owners and other rental companies." }
    ],
    relatedServices: [
      { name: "Equipment Repair & Maintenance", slug: "equipment-repair-maintenance", description: "Field repair and maintenance services." },
      { name: "Quality-Assured Industrial Equipment", slug: "quality-assured-equipment", description: "Thoroughly inspected equipment for rental." },
      { name: "Leasing of Machineries & Equipments", slug: "leasing-machineries-equipments", description: "Equipment leasing with maintenance included." }
    ]
  }
};

export const getServiceData = (slug: string): ServiceData | undefined => {
  return servicesData[slug];
};

export const getAllServices = (): ServiceData[] => {
  return Object.values(servicesData);
};
