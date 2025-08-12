import type { Product } from "@/components/ProductCard";

export const mockVendors = [
  {
    id: "1",
    name: "Creative Hub",
    phone: "+1-555-123-4567",
    verified: true,
    rating: 4.8,
    productsCount: 124,
    positiveReviews: 96,
    logo: "/placeholder.svg",
    description: "Your destination for creative tools and resources.",
    socials: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
    policies: {
      shipping: "Ships within 2-3 business days.",
      returns: "30-day return policy.",
    },
    address: "123 Market St, Toronto, ON",
  },
];

export const mockProducts: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  name: `Creative Suite Plugin ${i + 1}`,
  price: 19.99 + i,
  rating: (i % 5) + 1,
  image: "/placeholder.svg",
  vendor: { id: "1", name: "Creative Hub", verified: true },
}));

export const mockCategories = [
  { id: "design", name: "Design" },
  { id: "photo", name: "Photography" },
  { id: "video", name: "Video" },
  { id: "web", name: "Web" },
  { id: "3d", name: "3D & AR" },
  { id: "mobile", name: "Mobile" },
];
