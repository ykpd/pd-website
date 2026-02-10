export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string;
}

export const homeServices = [
  {
    id: 1,
    title: "E-Commerce Design & Development",
    subtitle: "Shopify, BigCommerce, Custom Stores, B2B Features",
  },
  {
    id: 2,
    title: "Integration Solutions",
    subtitle: "ERPs, CRMs, iPaaS, PIMs - you name it",
  },
  {
    id: 3,
    title: "Data Migration",
    subtitle: "Extract, transform, optimize, load, maintain",
  },
];

export const servicesPageItems: ServiceItem[] = [
  {
    id: 1,
    title: "E-Commerce Development",
    subtitle: "Custom Stories",
    description:
      "We don't just build stores; we engineer B2B engines. We tame the chaos of complex catalogs and intricate pricing rules, forging a digital storefront that devours complexity and is built to scale aggressively.",
    tech: "Shopify, Shopify Plus / BigCommerce, BigCommerce Enterprise, BigCommerce B2B / Custom web stores",
  },
  {
    id: 2,
    title: "ERP Integration",
    subtitle: "Visual Planning",
    description:
      "Stop manually bridging the gap. We fuse your e-commerce directly to Acumatica, creating a single, relentless source of truth. Data flows in real-time, errors are eradicated, and your business moves at the speed of automation.",
    tech: "Acumatica native connectors / iPaaS solutions / 3rd party integrations",
  },
  {
    id: 3,
    title: "UX/UI Optimization",
    subtitle: "Marketing Strategy",
    description:
      "Beauty is the baseline; conversion is the goal. We weaponize design to dismantle friction, creating interfaces where buying feels inevitable. We don't just launch—we relentlessly optimize for speed, clarity, and ROI.",
    tech: "Magento to Shopify / Magento to BigCommerce / WooCommerce to Shopify / WooCommerce to BigCommerce / 3DCart to Shopify / 3DCart to BigCommerce / Volusion to Shopify / Volusion to BigCommerce",
  },
];
