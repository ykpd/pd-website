export interface Testimonial {
  quote: string;
  author: string;
  short?: string;
}

export const testimonials: Testimonial[] = [
  { quote: "Excelent Work!", author: "Adam Lewis" },
  {
    quote:
      '"Moving from Volusion to BigCommerce felt overwhelming, but the team made it seamless. Our customers can finally find the right parts easily — especially with the new fitment system."',
    author: "Conor Bradley",
    short: "Huge Improvement After Migration",
  },
  { quote: "Amazing Team!", author: "Adrian Lee" },
  {
    quote:
      '"Puget Digital handled a massive migration for us without disrupting operations. The new Shopify Plus setup is faster, cleaner, and finally able to keep up with our catalog."',
    author: "Zlatan Amberland",
    short: "Outstanding Technical Execution",
  },
  { quote: "Best team ever!", author: "Zlatan Amberland" },
];
