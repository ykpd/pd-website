export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processIntro =
  "At Puget Digital, we combine expertise in e-commerce development with deep knowledge of ERP systems to create streamlined, scalable solutions. Our process ensures your online store not only looks and performs brilliantly but also integrates seamlessly with your ERP system for effortless operations. This streamlined process guarantees a powerful e-commerce platform tightly integrated with your ERP, helping your business thrive in the digital marketplace.";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We dive into your business goals and technical requirements to design a solution that aligns with your vision.",
  },
  {
    step: 2,
    title: "UX/UI Design",
    description:
      "Our designers create intuitive, visually stunning interfaces tailored to engage your customers and drive conversions.",
  },
  {
    step: 3,
    title: "E-Commerce Development",
    description:
      "We build a robust, scalable online store on Shopify, BigCommerce, or custom platform, customized to meet your business needs.",
  },
  {
    step: 4,
    title: "ERP Integration",
    description:
      "We analyze your workflows to design a seamless connection between your e-commerce platform and your ERP system. We use native connectors, iPaaS, or custom integrations to achieve the best result in the most efficient way.",
  },
  {
    step: 5,
    title: "Rigorous Testing",
    description:
      "We thoroughly test your website and integration to ensure flawless performance and reliability under all conditions.",
  },
  {
    step: 6,
    title: "Launch & Training",
    description:
      "We launch your e-commerce store with confidence and equip your team with the tools to manage it efficiently.",
  },
  {
    step: 7,
    title: "Ongoing Support",
    description:
      "Our partnership doesn't end at launch—we provide continuous support and improvements to keep your system performing at its best.",
  },
];
