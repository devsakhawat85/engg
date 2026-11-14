export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
}

export type ProjectCategory =
  | 'All'
  | 'Civic & Sports'
  | 'Hospitality'
  | 'Healthcare'
  | 'Education & Fitness';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: Exclude<ProjectCategory, 'All'>;
  status?: string;
  scaleMetric?: string;
  summary: string;
  scope: string[];
  image: string;
  imageCredit: string;
  featured?: boolean;
}

export interface TeamLeader {
  name: string;
  role: string;
  bio: string;
}

export const COMPANY_INFO = {
  legalName: 'SC Engineering, LLC',
  shortName: 'SC Engineering',
  tagline: 'consulting engineers',
  foundedYear: '2021',
  designation: 'Service-Disabled Veteran-Owned Small Business',
  specialtyLine:
    'Specializing in Electrical, Mechanical, Plumbing, Fire Protection, and Structural Design',
  phoneDisplay: '+615-401-9931',
  phoneHref: 'tel:+16154019931',
  email: 'info@sc-engr.com',
  emailHref: 'mailto:info@sc-engr.com?subject=New%20Inquire%20Information',
  addressLine1: '475 Metroplex Drive, STE 114',
  addressLine2: 'Nashville, TN 37211',
  country: 'United States',
  capabilitiesPdfUrl:
    'https://www.sc-engr.com/_files/ugd/b96e6a_6ce4828f458942039afae0060731b019.pdf',
  copyright: '© 2021 by SC Engineering, LLC. All rights reserved.',
  codes: [
    { label: 'DUNS', value: '009754072' },
    { label: 'NAICS', value: '541330 ; 541310' },
    { label: 'UEI', value: 'QHT7ZN9NDXD9' },
    { label: 'CAGE', value: '98Z96' },
  ],
  certifications: [
    {
      title: 'Federal SDVOSB',
      detail: 'Service-Disabled Veteran-Owned Small Business',
    },
    {
      title: 'State of Tennessee SDVBE',
      detail: 'Service-Disabled Veteran-Owned Business Enterprise',
    },
    {
      title: 'Metro Nashville SBA DBE / MNAA',
      detail: 'Disadvantaged Business Enterprise & Airport Authority',
    },
    {
      title: 'NMSDC Certified MBE',
      detail: 'Minority Business Enterprise',
    },
  ],
  siteLinks: {
    home: 'https://www.sc-engr.com',
    about: 'https://www.sc-engr.com/about-3',
    team: 'https://www.sc-engr.com/team-4',
    services: 'https://www.sc-engr.com/services',
    projects: 'https://www.sc-engr.com/s-projects-side-by-side',
    jobs: 'https://www.sc-engr.com/jobs',
    apply: 'https://www.sc-engr.com/application',
    contact: 'https://www.sc-engr.com/contact',
  },
};

export const VISION_COPY = {
  heading:
    'Cost-effective, efficient, and client-centered engineering built on honesty, dedication, and hard work.',
  paragraphs: [
    'At SC Engineering, LLC, we strive to provide the most cost effective, efficient and client-centered design while considering every design schedule and budget.',
    'Our engineers go above and beyond to meet client expectations, meeting client schedules on time using the latest technology.',
    'SC Engineering, LLC was founded in 2021 by Saul Camarena, P.E. with the core values of honesty, dedication and hard work—pillars of strong relationships with team members and clients across commercial, industrial, educational, healthcare, and hospitality projects.',
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mechanical',
    number: '01',
    title: 'Mechanical Design',
    summary:
      'Heating, Ventilation, and Air Conditioning (HVAC) systems engineered for occupant comfort, energy efficiency, and demanding clinical or industrial environments.',
    capabilities: [
      'Heating systems & load analysis',
      'Ventilation & medical-grade air exchange',
      'Air conditioning & multi-zone climate control',
    ],
    image: '/images/hero-facility.jpg',
    imageAlt: 'Industrial facility overhead HVAC ductwork and steel truss framing',
  },
  {
    id: 'electrical',
    number: '02',
    title: 'Electrical Power Design',
    summary:
      'Building and utility power systems engineered for continuous operational reliability, emergency backup resilience, and strict code compliance.',
    capabilities: [
      'Building power distribution systems',
      'Utility power & campus service coordination',
      'Redundant & emergency backup power systems',
    ],
    image: '/images/services-architecture.jpg',
    imageAlt: 'Modern architectural building exterior detail at golden hour',
  },
  {
    id: 'lighting',
    number: '03',
    title: 'Lighting Design',
    summary:
      'Architectural dimming and control systems, building lighting network systems, accent and ambient lighting design, and photometric simulation models.',
    capabilities: [
      'Architectural dimming & control systems',
      'Building lighting network systems',
      'Accent and ambient lighting design',
      'Lighting simulation models',
    ],
    image: '/images/projects/glass-hollow.jpg',
    imageAlt: 'Warm architectural hospitality lighting design inside Glass Hollow Table & Tavern',
  },
  {
    id: 'plumbing',
    number: '04',
    title: 'Plumbing Design',
    summary:
      'Waste, water, gas, and special systems engineered for commercial kitchens, healthcare surgical suites, locker rooms, and multi-story facilities.',
    capabilities: [
      'Domestic water & high-efficiency fixture design',
      'Sanitary waste & storm drainage systems',
      'Fuel gas & special clinical/medical gas systems',
    ],
    image: '/images/services-detail.jpg',
    imageAlt: 'Detailed architectural and MEP plumbing floor plan construction drawings',
  },
  {
    id: 'fire-protection',
    number: '05',
    title: 'Fire Protection',
    summary:
      'Life safety engineering covering fire detection, alarm, communication systems, and mass notification tailored to occupancy and local codes.',
    capabilities: [
      'Fire detection & alarm system engineering',
      'Emergency voice & communication systems',
      'Mass notification & life-safety integration',
    ],
    image: '/images/projects/new-nissan-stadium.png',
    imageAlt: 'New Nissan Stadium large-scale civic engineering showcase',
  },
  {
    id: 'structural',
    number: '06',
    title: 'Structural Design',
    summary:
      'Comprehensive structural calculations, analysis, PE-stamped plan review, and Revit structural modeling services for new builds and renovations.',
    capabilities: [
      'Structural calculations and analysis',
      'Plan review with PE stamping',
      'Structural BIM & Revit structural design services',
      'Structural modeling services',
    ],
    image: '/images/services-architecture.jpg',
    imageAlt: 'Precision structural cladding and architectural geometry',
  },
  {
    id: 'bim',
    number: '07',
    title: 'BIM Coordination',
    summary:
      'Mechanical, Electrical, Plumbing, and Fire Protection BIM coordination utilizing Navisworks clash detection and parametric component modeling.',
    capabilities: [
      'HVAC, Electrical, Plumbing & Fire Protection BIM',
      'Collision detection & Navisworks coordination',
      'Detailing of MEP components & parametric modeling',
      'Coordinated construction documents',
    ],
    image: '/images/about-team.jpg',
    imageAlt: 'SC Engineering engineers collaborating over coordinated technical drawings',
  },
  {
    id: 'third-party-review',
    number: '08',
    title: 'Third-Party Review',
    summary:
      'Objective peer and code review across Mechanical, Electrical, Plumbing, Fire Protection, and Structural construction documents and feasibility studies.',
    capabilities: [
      'MEP, Fire Protection & Structural drawing review',
      'Construction document peer review',
      'Technical feasibility studies & risk mitigation',
    ],
    image: '/images/services-detail.jpg',
    imageAlt: 'Technical engineering construction document review drawings',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'new-nissan-stadium',
    title: 'New Nissan Stadium',
    subtitle: 'Titans Stadium · Third-Party MEP Technical Review',
    location: 'Nashville, TN',
    category: 'Civic & Sports',
    scaleMetric: '1.8M sq. ft.',
    featured: true,
    summary:
      'SC Engineering was engaged to provide an expert third-party MEP technical review for the new 1.8 million square foot Nissan Stadium, evaluating large-scale systems for code compliance, operational efficiency, and long-term sustainability.',
    scope: [
      'Large-Scale Systems Validation: Expert review of complex MEP infrastructure designed to support a 1.8 million square foot stadium environment.',
      'Community Space Integration: Detailed analysis of systems serving the dedicated 12,000 sq. ft. community and multi-use facilities.',
      'Peer Review Excellence: Providing an objective, third-party assessment of mechanical, electrical, and plumbing designs to optimize performance and mitigate risk.',
      'Civic Infrastructure: Contributing technical oversight to one of Nashville’s most significant urban development and professional sports projects.',
    ],
    image: '/images/projects/new-nissan-stadium.png',
    imageCredit: 'Sewanee: MANICA',
  },
  {
    id: 'forrest-general',
    title: 'Forrest General Hospital',
    subtitle: 'Two-Story, 30-Bed Orthopedic Expansion',
    location: 'Hattiesburg, MS',
    category: 'Healthcare',
    scaleMetric: '14,000 sq. ft. · 6 ORs',
    summary:
      'Specialized MEP design for a new two-story, 30-bed orthopedic hospital expansion focused on six orthopedic operating rooms and supporting administrative suites.',
    scope: [
      'Surgical Suite HVAC: Design of high-precision environmental controls and specialized HEPA filtration systems for six orthopedic operating rooms to meet stringent sterile field requirements.',
      'Critical Power Systems: Engineering of redundant electrical systems and emergency backup power to ensure uninterrupted surgical and patient care operations.',
      'Medical Gas & Plumbing: Comprehensive plumbing and medical gas infrastructure tailored for specialized orthopedic surgical equipment and patient recovery areas.',
      'Administrative Integration: Full MEP systems for the 14,000 sq. ft. expansion, balancing high-performance clinical needs with energy-efficient office and admin space.',
    ],
    image: '/images/projects/forrest-general.png',
    imageCredit: 'Davis Stoke Collaborative',
  },
  {
    id: 'wild-turkey',
    title: 'Wild Turkey Distillery',
    subtitle: 'Visitor Center Modernization',
    location: 'Lawrenceburg, KY',
    category: 'Hospitality',
    scaleMetric: '12,000 sq. ft.',
    summary:
      'High-level MEP design for the modernization of the Wild Turkey Distillery Visitor Center, balancing a high-volume tasting facility with a refined luxury brand atmosphere.',
    scope: [
      'Hospitality & Bar Infrastructure: Integrated MEP systems for three distinct indoor and outdoor bars, designed for high-efficiency beverage service and guest comfort.',
      'Specialized Tasting Environments: Precise climate control and lighting design for intimate tasting rooms to ensure a sensory-focused guest experience.',
      'Retail & Corporate Integration: Comprehensive HVAC, power, and lighting for a 12,000 sq. ft. program including retail space, modern offices, and executive conference rooms.',
      'Outdoor Amenity Power: Electrical and plumbing design for exterior seating and bar areas, engineered for durability and year-round operation.',
      'Brand-Focused Lighting: Custom electrical design to highlight architectural features and retail displays, reinforcing the distillery’s iconic identity.',
    ],
    image: '/images/projects/wild-turkey.jpg',
    imageCredit: 'Visit Lawrenceburg',
  },
  {
    id: 'glass-hollow',
    title: 'Glass Hollow Table & Tavern',
    subtitle: 'Historic Knox Pitts Hardware Adaptive Reuse',
    location: 'Shelbyville, TN',
    category: 'Hospitality',
    scaleMetric: '20,000 sq. ft.',
    summary:
      'Comprehensive MEP design transforming the landmark 19th-century Knox Pitts Hardware building into a premier 20,000 sq. ft. restaurant and tavern destination.',
    scope: [
      'Industrial-Scale HVAC: Specialized ventilation and climate control designed for a 20,000 sq. ft. open-concept restaurant and kitchen.',
      'Commercial Power & Lighting: Full electrical infrastructure modernization to support professional kitchen equipment and custom architectural lighting.',
      'Specialized Plumbing: High-capacity plumbing and drainage systems designed for high-volume hospitality and bar service.',
      'Historic Adaptation: Seamless integration of modern MEP utilities within the original 19th-century hardware building framework.',
    ],
    image: '/images/projects/glass-hollow.jpg',
    imageCredit: 'Chase Hartwell',
  },
  {
    id: 'sewanee',
    title: 'SEWANEE: The University of the South',
    subtitle: 'Historic Dormitory Modernization',
    location: 'Sewanee, TN',
    category: 'Education & Fitness',
    status: 'Under construction',
    scaleMetric: 'Est. 1953 & 1964',
    summary:
      'Specialized MEP design modernizing Hunter Hall (est. 1953) and McCrady Hall (est. 1964) while preserving their historic architectural identities.',
    scope: [
      'HVAC Modernization: Implementation of full air conditioning and high-efficiency climate control systems within existing historic footprints.',
      'Plumbing & Life Safety: Comprehensive redesign and enlargement of communal bathrooms and relocated laundry facilities.',
      'Electrical & Accessibility: Power and systems integration for new elevator installations and modernized lighting throughout.',
      'Infrastructure Design: Navigating the structural conditions of 1950s and 60s construction to deliver seamless, code-compliant utility upgrades.',
    ],
    image: '/images/projects/sewanee.jpg',
    imageCredit: 'Sewanee: The University of the South',
  },
  {
    id: 'carbon-performance',
    title: 'Carbon Performance — Atlanta',
    subtitle: 'Elite Fitness Industrial Shell Conversion',
    location: 'Atlanta, GA',
    category: 'Education & Fitness',
    scaleMetric: '35,000 sq. ft.',
    summary:
      'Full-phase MEP design services transforming a 35,000 sq. ft. industrial shell into a multi-functional Carbon Performance athletic and recovery facility.',
    scope: [
      'Mechanical & HVAC: Specialized climate control and high-volume ventilation systems designed for fitness areas, group studios, and humid sauna environments.',
      'Electrical & Lighting: Comprehensive power distribution for professional-grade fitness equipment and architectural lighting for the café and office suites.',
      'Specialized Plumbing: High-capacity plumbing design for luxury restrooms, locker rooms, and integrated café food service.',
      'Lifecycle Engineering: Full-phase involvement including Design Development, Construction Documents, and on-site Construction Administration.',
    ],
    image: '/images/projects/carbon-performance.jpg',
    imageCredit: 'Carbon Performance',
  },
  {
    id: 'vai-resorts',
    title: 'VAI Resorts',
    subtitle: 'Destination-Scale Resort Engineering',
    location: 'Arizona',
    category: 'Hospitality',
    summary:
      'Partnering with VAI Resorts to deliver high-occupancy HVAC, luxury lighting and power, and redundant resilience engineering across destination-scale spaces.',
    scope: [
      'High-Occupancy HVAC: Specialized climate control for large-scale resorts.',
      'Luxury Lighting & Power: Electrical design for premium hospitality suites and entertainment zones.',
      'Resilience Engineering: Redundant systems and high-capacity plumbing for destination-scale developments.',
    ],
    image: '/images/projects/vai-resorts.jpg',
    imageCredit: 'SC Engineering',
  },
  {
    id: 'riverbend-cc',
    title: 'Riverbend Country Club',
    subtitle: 'Clubhouse Renovation & Expansion',
    location: 'Shelbyville, TN',
    category: 'Hospitality',
    status: 'Under construction',
    scaleMetric: '20,900 sq. ft. total',
    summary:
      'High-end MEP design integrating modern climate control, lighting, and drainage across 3,600 sq. ft. of additions, 11,500 sq. ft. of renovations, and a 5,800 sq. ft. patio.',
    scope: [
      'Expansion & New Build: Specialized MEP systems for 3,600 sq. ft. of new facility additions.',
      'Modernization: Full infrastructure renovation of 11,500 sq. ft. of existing club space.',
      'Outdoor Amenity Design: Advanced electrical, lighting, and drainage solutions for 5,800 sq. ft. of premium patio space.',
      'Systems Strategy: High-efficiency HVAC and power design tailored for luxury hospitality and social environments.',
    ],
    image: '/images/projects/riverbend-cc.png',
    imageCredit: 'www.riverbendtn.com',
  },
  {
    id: 'play-playground',
    title: 'Play Playground',
    subtitle: 'Commercial Interior Renovation',
    location: 'Nashville, TN',
    category: 'Hospitality',
    scaleMetric: '9,100 sq. ft.',
    summary:
      'Targeted MEP design services modernizing essential building systems, architectural lighting, and hospitality bar plumbing inside a 9,100 sq. ft. Nashville space.',
    scope: [
      'Lighting Design & Modernization: Specification and design of new electrical lighting fixtures to enhance aesthetic and functional performance.',
      'Hospitality Plumbing Infrastructure: Full plumbing design and connectivity for a new bar area integrated with existing building mains.',
      'Fixture Upgrades: Strategic replacement and modernization of plumbing fixtures within existing restroom facilities.',
      'System Integration: Engineering precise connections for all new fixtures to ensure code compliance and long-term operational reliability.',
    ],
    image: '/images/projects/play-playground.png',
    imageCredit: 'Play Playground',
  },
  {
    id: 'nyquist-ortho',
    title: 'Nyquist Orthodontist',
    subtitle: 'Specialized Clinical Tenant Improvement',
    location: 'Nolensville, TN',
    category: 'Healthcare',
    scaleMetric: '1,400 sq. ft.',
    summary:
      'Precise MEP design services converting an existing tenant space into a 5-station orthodontic clinic with medical-grade air exchange and sterilization support.',
    scope: [
      'Dental Operatory Infrastructure: Specialized MEP systems for five individual orthodontic stations, ensuring precise delivery of water, air, and power.',
      'Clinic-Specific HVAC: Design of climate control and ventilation systems optimized for patient comfort and medical-grade air exchange.',
      'Medical Plumbing & Support: Engineered plumbing solutions for high-performance clinical use, including sterilization and support rooms.',
      'Tenant Improvement: Adaptive design to maximize a 1,400 sq. ft. layout for high-volume patient flow and administrative efficiency.',
    ],
    image: '/images/projects/nyquist-ortho.png',
    imageCredit: 'Facet Design',
  },
  {
    id: 'crazy-gnome',
    title: 'Crazy Gnome Brewery',
    subtitle: 'Dual-Building Brewery & Taproom Complex',
    location: 'Nashville, TN',
    category: 'Hospitality',
    scaleMetric: '4,200 sq. ft. campus',
    summary:
      'Expert electrical design powering industrial brewing operations, exterior cold storage, and a 2,300 sq. ft. guest taproom across a multi-structure Nashville campus.',
    scope: [
      'Brewery Industrial Power: Electrical design for a 1,100 sq. ft. production facility, including dedicated circuits for brewing equipment and 400 sq. ft. of support/office space.',
      'Taproom Systems: Comprehensive electrical and lighting design for a 2,300 sq. ft. guest-facing taproom.',
      'Specialized Cold Storage: Electrical infrastructure for a new 400 sq. ft. exterior cold room engineered for constant-load refrigeration.',
      'ADA & Code Modernization: Strategic electrical and lighting upgrades across restroom facilities and public spaces.',
    ],
    image: '/images/projects/crazy-gnome.png',
    imageCredit: 'cgbrewing.com',
  },
  {
    id: 'trousdale',
    title: 'Trousdale County High School',
    subtitle: 'Athletic Field House',
    location: 'Hartsville, TN',
    category: 'Education & Fitness',
    status: 'Under construction',
    scaleMetric: "7,200 sq. ft. (90' × 80')",
    summary:
      'Comprehensive MEP engineering for a new 7,200 sq. ft. athletic facility engineered for high-occupancy performance and long-term operational efficiency.',
    scope: [
      'Mechanical: High-efficiency HVAC design for optimal climate control and ventilation.',
      'Electrical: Full-scale power distribution and advanced LED lighting systems.',
      'Plumbing: Robust, high-capacity plumbing infrastructure tailored for athletic use.',
    ],
    image: '/images/projects/trousdale.png',
    imageCredit: 'CTC DESIGN COLLABORATIVE LLC',
  },
];

export const LICENSED_STATES: { abbr: string; name: string }[] = [
  { abbr: 'AL', name: 'Alabama' },
  { abbr: 'AZ', name: 'Arizona' },
  { abbr: 'CA', name: 'California' },
  { abbr: 'CO', name: 'Colorado' },
  { abbr: 'FL', name: 'Florida' },
  { abbr: 'GA', name: 'Georgia' },
  { abbr: 'IL', name: 'Illinois' },
  { abbr: 'IN', name: 'Indiana' },
  { abbr: 'IA', name: 'Iowa' },
  { abbr: 'KY', name: 'Kentucky' },
  { abbr: 'LA', name: 'Louisiana' },
  { abbr: 'MD', name: 'Maryland' },
  { abbr: 'MA', name: 'Massachusetts' },
  { abbr: 'MS', name: 'Mississippi' },
  { abbr: 'NE', name: 'Nebraska' },
  { abbr: 'NJ', name: 'New Jersey' },
  { abbr: 'NM', name: 'New Mexico' },
  { abbr: 'NY', name: 'New York' },
  { abbr: 'NC', name: 'North Carolina' },
  { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'TN', name: 'Tennessee' },
  { abbr: 'TX', name: 'Texas' },
  { abbr: 'UT', name: 'Utah' },
];

export const LEADERSHIP_TEAM: TeamLeader[] = [
  {
    name: 'Saul Camarena, P.E.',
    role: 'Founder & CEO',
    bio: 'Licensed Electrical Professional Engineer (P.E.) driving executive strategy, vision, and hands-on project delivery with clients.',
  },
  {
    name: 'Jennifer Allen, M.B.A.',
    role: 'Corporate Operations Manager',
    bio: 'Oversees administrative operations, human resources, financial management, and strategic execution across organizational goals.',
  },
  {
    name: 'Leroy Kibet',
    role: 'Engineering Operations Manager',
    bio: 'Leads Mechanical, Plumbing, and Fire Protection operations while directly contributing to technical calculations, Revit modeling, and complex systems delivery.',
  },
];

export const HOLA_AWARD = {
  title: 'HOLA Latino Entrepreneur Business Award Recipient',
  badge: 'Company to Watch',
  description:
    'SC Engineering, LLC was nominated and awarded "COMPANY TO WATCH" at the First Annual HOLA Latino Entrepreneur Business Awards.',
  image: '/images/hola-award.jpg',
};
