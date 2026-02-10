export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  challenge: string;
  solution: string;
  highlights: string[];
  client: string;
  clientDescription: string;
  timeline: string;
  liveUrl?: string;
  liveLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "power-driven-diesel",
    title: "Power Driven Diesel",
    subtitle: "Ecommerce Migration & Performance Overhaul",
    category: "Ecommerce Migration / Shopify Plus / ERP Integration",
    description: "Shopify Plus Migration, Performance Optimization, ERP + YYM Search Integration",
    tags: ["Full WooCommerce → Shopify Plus Migration", "50k+ Product Data Cleanup, Variants, Bundles, Fitment Logic", "Acumatica ERP, Klaviyo, Convermax Search Integration"],
    challenge: "Power Driven Diesel is a nationally recognized brand in the diesel performance industry, known for its extensive catalog of parts, custom builds, and educational content. Their existing WooCommerce store struggled to support rapid growth — frequent slowdowns, plugin conflicts, and limited scalability created operational bottlenecks. The brand needed a platform built for speed and reliability, capable of managing 50,000+ SKUs, complex product bundles, fitment data, and constant inventory changes driven by Acumatica ERP. Puget Digital was brought in to lead a full ecommerce transformation: migrate the business to Shopify Plus, rebuild their product architecture, sync real-time ERP data, and modernize the shopping experience for diesel enthusiasts and professional builders alike.",
    solution: "The new Shopify Plus storefront significantly improved speed, stability, and user experience. We implemented a fully automated data pipeline with Acumatica for inventory, pricing, and order syncing. Search accuracy improved dramatically with Convermax, providing intelligent filtering and compatibility logic tailored to complex diesel-performance parts. The revised UX simplified decisions for consumers — whether upgrading injectors, rebuilding a turbo system, or selecting custom components. Today, Power Driven Diesel operates on a platform built to scale with their brand.",
    highlights: ["Migration & Catalog Engineering", "Consolidated thousands of legacy products", "Accurate fitment and compatibility data", "Unified taxonomies and cleaned metadata"],
    client: "Power Driven Diesel",
    clientDescription: "A leading U.S. brand specializing in high-performance diesel parts, custom builds, and technical education.",
    timeline: "2024",
    liveUrl: "#",
    liveLabel: "New Site",
  },
  {
    slug: "auto-krafters-shopify-migration",
    title: "Auto Krafters",
    subtitle: "Platform Migration & Catalog Modernization",
    category: "Ecommerce Migration / BigCommerce / Automotive Parts",
    description: "Legacy Platform Migration, Catalog Cleanup, UX & Performance Improvements",
    tags: ["Migration from Legacy Platform → BigCommerce", "Full Catalog Cleanup & Standardization", "Navigation, UX, and Performance Overhaul"],
    challenge: "Auto Krafters has been supplying restoration parts for classic Ford vehicles since 1978, serving a deeply passionate and detail-oriented customer base. Their online store was built on an aging platform that struggled with stability, speed, and catalog management — especially with thousands of SKUs spanning dozens of Ford models and generations. Product data had accumulated over decades: inconsistent naming, outdated SKUs, duplicate items, and missing attributes made both internal operations and customer browsing increasingly difficult. Puget Digital was brought in to lead a full modernization: migrate Auto Krafters to BigCommerce, restructure its extensive catalog, streamline navigation, and create a reliable, high-performance storefront optimized for enthusiasts restoring classic cars.",
    solution: "The new BigCommerce storefront dramatically improves speed, stability, and usability. Customers can now browse parts intuitively, filter by specific Ford models, and navigate complex categories with far less friction. Product data loads reliably, pages are cleaner, and the overall experience matches the precision expected from a restoration-focused brand. For the Auto Krafters team, the migration eliminates the limitations of their legacy system.",
    highlights: ["Catalog Engineering & User Experience Redesign", "Standardized product titles and variant logic", "Rebuilt navigation around restoration workflows", "Cleaner product templates and faster load times"],
    client: "Auto Krafters",
    clientDescription: "A trusted classic Ford restoration parts supplier serving enthusiasts since 1978.",
    timeline: "2024",
    liveUrl: "#",
    liveLabel: "View Website",
  },
  {
    slug: "bunnies-by-the-bay-shopify",
    title: "Bunnies By The Bay",
    subtitle: "Shopify Modernization & UX Revamp",
    category: "Shopify Redesign / UX / Catalog Optimization",
    description: "Theme Modernization, UX & Navigation Redesign, Catalog Cleanup",
    tags: ["Shopify Theme Overhaul & Speed Optimization", "Collection Architecture + Catalog Cleanup", "Enhanced UX, Visual Hierarchy & Story Integration"],
    challenge: "Bunnies By The Bay is a nationally recognized children's gift brand known for its whimsical characters, illustrated stories, and heirloom-quality products. As the catalog expanded—plush toys, apparel, books, gift sets, personalization—the site structure became harder to manage. The existing Shopify theme had outdated components, slow page loads, and inconsistent visual hierarchy. Collections were difficult to browse, product templates lacked clarity, and the overall flow didn't fully highlight the brand's emotional storytelling. Puget Digital partnered with Bunnies By The Bay to modernize the entire storefront.",
    solution: "Customers can now explore collections effortlessly, discover story-driven product lines, and navigate seasonal gifts with ease. Product detail pages load faster and communicate value more effectively—supporting higher conversions across both mobile and desktop. Operationally, the team now works with a cleaner catalog, reusable theme sections, and a scalable site structure that supports new launches, collaborations, and gifting seasons.",
    highlights: ["Catalog structure & user experience transformation", "Reorganized categories around intuitive parent/child relationships", "Rebuilt navigation (Find Your Bunny, Gift by Age)", "Theme components refactored for speed and consistency"],
    client: "Bunnies By The Bay",
    clientDescription: "An iconic children's brand known for handcrafted plush toys, clothing, books, and personalized gifts.",
    timeline: "2025",
    liveUrl: "#",
    liveLabel: "View Website",
  },
  {
    slug: "bavco-bigcommerce",
    title: "BAVCO",
    subtitle: "BigCommerce Modernization for a Technical Parts Distributor",
    category: "BigCommerce Development / Technical Catalog Optimization / B2B Ecommerce",
    description: "BigCommerce Development, Catalog Engineering, B2B Quoting + ERP Integration",
    tags: ["Built on BigCommerce", "Custom ERP Integration", "UX Redesign for Technical & B2B Buyers"],
    challenge: "BAVCO is one of America's most respected suppliers of commercial lock parts, door hardware, and access-control components. Their catalog spans thousands of highly specific SKUs, each requiring precise technical attributes, compatibility details, and manufacturer-specific metadata. Their previous ecommerce setup couldn't handle the demands of technical buyers - contractors, locksmiths, facility managers - who depend on accurate filtering and fast product identification. B2B workflows such as quoting and bulk orders were also limited. Puget Digital partnered with BAVCO to modernize their entire digital infrastructure on BigCommerce.",
    solution: "The new BigCommerce storefront delivers a fast, reliable, and highly structured buying experience designed specifically for technical users. Buyers can now identify correct parts with far greater accuracy, submit quotes, and access specialized product data without friction. PartsFinder integration dramatically improved search success rates. BigCommerce was extended with custom ERP data sync, B2B quoting flow, and dual-mode storefront supporting both retail and trade accounts.",
    highlights: ["Technical catalog cleanup & structured UX", "Standardized attributes, function, finish, compatibility", "PartsFinder integration for part identification", "Custom ERP sync, B2B quoting, dual-mode storefront"],
    client: "BAVCO",
    clientDescription: "A nationwide leader in back-flow valves distribution.",
    timeline: "2025",
    liveUrl: "#",
    liveLabel: "View Site",
  },
  {
    slug: "danforth-pewter-ecommerce",
    title: "Danforth Pewter",
    subtitle: "Ecommerce Modernization for a Heritage Brand",
    category: "Ecommerce Redesign / BigCommerce / ERP Integration",
    description: "BigCommerce Migration, Catalog & Collections Rebuild, Performance & UX Improvements",
    tags: ["BigCommerce Storefront Build-Out", "Product Template + Catalog Cleanup", "UX, Navigation & Performance Optimization"],
    challenge: "Danforth Pewter is a family-owned American craft manufacturer with deep roots in traditional pewter-making. Their catalog spans ornaments, jewelry, home goods, special collections, and customizable gift items. As the brand grew, the existing Magento setup became harder to maintain — inconsistent product structures, outdated templates, difficult navigation, and a lack of cohesive visual hierarchy limited their ability to tell their story and convert visitors. Puget Digital partnered with Danforth to migrate their online experience from Magento to BigCommerce.",
    solution: "The revitalized storefront delivers a faster, clearer, and more emotionally resonant experience. Users can now browse categories effortlessly, product pages load faster with cleaner media and descriptions, and the refined structure supports seasonal launches and campaigns with far less operational overhead. By migrating both the catalog and the UX foundation, Danforth Pewter now has an ecommerce platform that reflects the quality of its craftsmanship.",
    highlights: ["Catalog refinement & story-driven UX", "Standardized product fields and naming", "Rebuilt collection logic around shopping behaviors", "Cleaner layouts, typography, heritage storytelling"],
    client: "Danforth Pewter",
    clientDescription: "An American artisanal brand producing handcrafted pewter goods since 1975.",
    timeline: "2024",
    liveUrl: "#",
    liveLabel: "View Website",
  },
  {
    slug: "e-clampitt-adobe-commerce",
    title: "Clampitt Paper",
    subtitle: "Adobe Commerce Storefront for a Large-Scale Paper Supplier",
    category: "Adobe Commerce / Custom Storefront / ERP Integration",
    description: "Custom Adobe Commerce Storefront, ERP Integration, 60,000+ Product Catalog",
    tags: ["Custom Storefront on Adobe Commerce (Magento)", "Custom Integration with ERP", "60,000+ Products Supported"],
    challenge: "Clampitt Paper is a major U.S. supplier of printing paper, specialty paper, envelopes, and wholesale materials for commercial print shops and creative industries. Their ecommerce needs exceed the capabilities of standard platforms due to the size and depth of their catalog — more than 60,000 unique SKUs spanning grades, finishes, weights, colors, and formats. Their previous digital infrastructure lacked the flexibility and performance required for a catalog of this scale. Puget Digital was engaged to build a fully custom Adobe Commerce storefront.",
    solution: "The completed Adobe Commerce storefront delivers stability, scale, and usability tailored to industrial-level ecommerce needs. Performance remains high even with tens of thousands of product records, while navigation and filtering allow customers to quickly identify the right paper specifications. With a custom ERP integration, Clampitt now operates a connected system where pricing, orders, and inventory move seamlessly between the ecommerce front end and internal operations.",
    highlights: ["Custom architecture for large-scale catalog", "Structured product attributes, grades, finishes, weights", "Real-time inventory, tiered pricing, customer accounts", "Order flows and fulfillment data integration"],
    client: "Clampitt Paper",
    clientDescription: "One of the largest paper suppliers in the United States.",
    timeline: "2024",
    liveUrl: "#",
    liveLabel: "View Website",
  },
  {
    slug: "van-cafe",
    title: "VanCafe",
    subtitle: "Ecommerce Migration & Catalog Modernization",
    category: "Ecommerce Migration / BigCommerce / Automotive Parts / ERP Integration",
    description: "BigCommerce Migration, Catalog Restructuring, Performance Optimization",
    tags: ["Volusion → BigCommerce Migration", "Complete Catalog Cleanup & Standardization", "Performance Upgrades & UX Improvements"],
    challenge: "VanCafe is a well-known brand in the Volkswagen Vanagon and Bus community, offering thousands of parts for restoration, maintenance, and performance upgrades. Their legacy Volusion site had reached its limits — slow page loads, inconsistent product data, plugin conflicts, and a fragmented customer experience made it difficult to scale. Puget Digital led an end-to-end transformation: migrating the store to BigCommerce, rebuilding the product taxonomy, and implementing a clean, intuitive shopping flow. We also integrated the new storefront with Acumatica ERP.",
    solution: "The new BigCommerce storefront delivers a smoother, faster, and more reliable buying experience for a customer base that depends on accuracy and clarity. The improved catalog structure makes it easier for users to locate parts by system, repair type, or vehicle generation. For the VanCafe team, the migration eliminated constant maintenance struggles and created a cleaner backend workflow.",
    highlights: ["Catalog restructure & UX improvements", "Standardized product titles and naming rules", "Categories organized around repair workflows", "Eliminated plugin bloat, improved load times"],
    client: "VanCafe",
    clientDescription: "A trusted supplier for Volkswagen Vanagon, Bus, and Syncro owners, specializing in high-quality restoration and performance parts.",
    timeline: "2024",
    liveUrl: "#",
    liveLabel: "View Website",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
