export const site = {
  name: 'Mazhwetu General Works',
  legalName: 'MAZHWETU GENERAL WORKS (PTY) LTD',
  established: '2015',
  registration: '2015/074342/07',
  address: '2954 Ext 6, Diepsloot',
  phone: '083 483 0390',
  phoneHref: 'tel:+27834830390',
  email: 'info@mazhwetu.com',
  emailHref: 'mailto:info@mazhwetu.com',
  adminEmail: 'administration@mazhwetu.com',
  adminEmailHref: 'mailto:administration@mazhwetu.com',
  website: 'www.mazhwetu.com',
  websiteHref: 'https://www.mazhwetu.com/',
  hero: {
    eyebrow: 'Mazhwetu General Works',
    title: 'We create places & spaces that work, inspire & last.',
    body:
      'Professional construction, renovation, landscaping, outdoor living and maintenance solutions for residential, commercial, private estate and development projects.',
    cta: 'Start your project',
    secondaryCta: 'View our projects',
  },
  positioning: 'Value Created In Our Execution',
  introduction: {
    title: 'Your Vision. Our Expertise. One Exceptional Result.',
    body:
      'Mazhwetu General Works delivers professional construction, renovation, landscaping, outdoor living and maintenance solutions for residential, commercial, private estate and development projects. From the first idea to final execution, we focus on quality, functionality, durability and value.',
  },
  difference: {
    title: "We Don’t Just Complete Projects. We Create Value.",
    body:
      'Every project has its own purpose, character and requirements. We take the time to understand what you want to achieve, then bring together planning, design, materials, workmanship and execution to deliver it. Your project. Your vision. Our expertise.',
  },
  approach: {
    title: 'Every Place & Space Has A Purpose.',
    body:
      'A successful project is more than construction or appearance. It must work. It must feel right. It must last. We combine functionality, aesthetic appeal, quality materials, professional workmanship and practical execution to create places and spaces that deliver real value.',
  },
  visualisation: {
    title: 'See It Before We Build It.',
    body:
      'Where applicable, our design and visualisation approach allows clients to explore ideas before execution. From 3D/CAD drawings to live simulations, we help turn concepts into something you can see, understand and refine. Imagine it. Visualise it. Build it.',
  },
  quality: {
    title: 'We Build For More Than The Moment.',
    body:
      'Quality is built into every stage of execution. We focus on appropriate materials, professional workmanship, attention to detail, durability and a finished result that meets the requirements of the project.',
    statement: "Quality Isn’t An Extra. It’s The Standard.",
  },
  afterSales: {
    title: 'Our Relationship Doesn’t End At Handover.',
    body:
      'We believe in supporting our clients beyond project delivery. Where required, we remain available for consultation, guidance and ongoing support — helping ensure that the value created continues beyond completion.',
  },
  finalCta: {
    title: 'Have A Project In Mind?',
    body:
      'Let’s turn the idea into something real. Whether you’re building, renovating, transforming an outdoor space or looking for ongoing property maintenance, talk to Mazhwetu General Works.',
  },
} as const;

export const serviceGroups = [
  {
    id: 'build',
    label: 'Build',
    title: 'Construction',
    body: 'Professional construction solutions delivered with attention to quality, durability, specifications and timelines.',
    services: ['Construction'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of an active construction site',
  },
  {
    id: 'landscape',
    label: 'Landscape',
    title: 'Landscapes & Gardens',
    body: 'Beautiful, functional landscapes designed around your space, environment and vision.',
    services: ['Landscaping', 'Garden & Groundskeeping'],
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of a landscaped garden',
  },
  {
    id: 'irrigation',
    label: 'Water',
    title: 'Irrigation Systems',
    body: 'Manual and automatic irrigation systems designed for efficient, reliable watering.',
    services: ['Manual Irrigation', 'Automatic Irrigation'],
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of a landscaped lawn with irrigation',
  },
  {
    id: 'water',
    label: 'Water Features',
    title: 'Swimming Pools, Fish Ponds & Water Features',
    body: 'From excavation and construction to finishing, drainage, pumps and tiling — we create standout water features built to last.',
    services: ['Swimming Pools', 'Fish Ponds', 'Water Features'],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of a swimming pool beside a contemporary home',
  },
  {
    id: 'outdoor',
    label: 'Outdoor Living',
    title: 'Patios, Pergolas, Bomas & Braai Areas',
    body: 'Outdoor places and spaces designed for living, entertaining and enjoyment — brought to life with professional planning and execution.',
    services: ['Patios', 'Pergolas', 'Bomas & Braai Areas'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of an outdoor living area',
  },
  {
    id: 'renew',
    label: 'Renew',
    title: 'Remodelling & Renovations',
    body: 'Transforming existing spaces with thoughtful planning, modernisation, quality workmanship and lasting finishes.',
    services: ['Remodelling', 'Renovations'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of a renovated interior',
  },
  {
    id: 'finish',
    label: 'Finish',
    title: 'Ceilings, Bulkheads, Concrete, Paving & Cabinetry',
    body: 'Practical finishing work that enhances the look, performance and usability of the space.',
    services: ['Ceilings & Bulkheads', 'Concrete & Paving', 'Cabinetry'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of custom cabinetry and interior finishes',
  },
  {
    id: 'maintain',
    label: 'Maintain',
    title: 'Garden & Groundskeeping',
    body: 'Professional ongoing care for homes, private estates, commercial properties and developments.',
    services: ['Garden Care', 'Groundskeeping', 'General Maintenance'],
    image: 'https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Temporary reference image of maintained landscaped grounds',
  },
] as const;

export const audience = ['Residential', 'Commercial', 'Private Estates', 'Developments'] as const;

export const whyMazhwetu = [
  { title: 'Experience', body: 'Practical experience across a range of construction, property improvement and outdoor projects.' },
  { title: 'Expertise', body: 'Professional workmanship backed by careful planning and attention to detail.' },
  { title: 'Cost-Efficiency', body: 'Smart solutions that respect your budget without compromising quality.' },
  { title: 'Health & Safety', body: 'Safety-conscious execution and adherence to applicable requirements.' },
  { title: 'Fast Delivery', body: 'Efficient project execution without losing sight of quality.' },
  { title: 'Quality Project Delivery', body: 'Results that look good, perform well and stand the test of time.' },
] as const;

export const process = [
  { number: '01', title: 'Connect', body: 'Tell us what you have in mind.' },
  { number: '02', title: 'Consult', body: 'We understand your needs, objectives and requirements.' },
  { number: '03', title: 'Plan', body: 'We establish the practical approach to your project.' },
  { number: '04', title: 'Design', body: 'Where required, we develop visual concepts, 3D/CAD drawings and project solutions.' },
  { number: '05', title: 'Contract', body: 'Scope, requirements and expectations are confirmed.' },
  { number: '06', title: 'Execution', body: 'Our team brings the project to life with professional workmanship and attention to detail.' },
  { number: '07', title: 'Value Created', body: 'You receive a finished result designed around your objectives.' },
] as const;

export const values = [
  { title: 'Integrity', body: 'We do what is right.' },
  { title: 'Dedication', body: 'We are committed to the project and its outcome.' },
  { title: 'Respect', body: 'We value our clients, people, property and partnerships.' },
  { title: 'Accountability', body: 'We take ownership of our work and responsibilities.' },
  { title: 'Innovation', body: 'We look for better ways to create and deliver.' },
  { title: 'Uncompromising Quality', body: "We don’t cut corners on the things that matter." },
] as const;

export const projects = [
  {
    id: '01',
    title: 'Construction',
    galleryTags: ['Construction', 'Outdoor Spaces'],
    type: 'Residential',
    service: 'Construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    alt: 'Temporary reference image of contemporary residential architecture',
  },
  {
    id: '02',
    title: 'Patios & Pergolas',
    galleryTags: ['Patios & Pergolas', 'Outdoor Spaces'],
    type: 'Residential',
    service: 'Patios & Pergolas',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    alt: 'Temporary reference image of a modern outdoor living area',
  },
  {
    id: '03',
    title: 'Landscapes & Gardens',
    galleryTags: ['Landscapes & Gardens', 'Groundskeeping'],
    type: 'Private Estates',
    service: 'Landscapes & Gardens',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=85',
    alt: 'Temporary reference image of a landscaped contemporary garden',
  },
  {
    id: '04',
    title: 'Swimming Pools',
    galleryTags: ['Swimming Pools', 'Outdoor Spaces'],
    type: 'Residential',
    service: 'Swimming Pools',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
    alt: 'Temporary reference image of a swimming pool beside a contemporary home',
  },
  {
    id: '05',
    title: 'Renovations',
    galleryTags: ['Renovations', 'Cabinetry', 'Paving & Concrete'],
    type: 'Commercial',
    service: 'Renovations',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    alt: 'Temporary reference image of a commercial interior detail',
  },
  {
    id: '06',
    title: 'Groundskeeping',
    galleryTags: ['Groundskeeping', 'Landscapes & Gardens'],
    type: 'Developments',
    service: 'Groundskeeping',
    image: 'https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1400&q=85',
    alt: 'Temporary reference image of maintained green grounds',
  },
] as const;

export const galleryCategories = [
  'All',
  'Construction',
  'Renovations',
  'Landscapes & Gardens',
  'Swimming Pools',
  'Water Features',
  'Patios & Pergolas',
  'Bomas & Braai Areas',
  'Paving & Concrete',
  'Cabinetry',
  'Groundskeeping',
  'Outdoor Spaces',
] as const;
