export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Vendor {
  id: string;
  name: string;
  verified: boolean;
  logo: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  vendor: { id: string; name: string; logo?: string; verified?: boolean };
  vendorId: string;
  category: string;
  description: string;
  featured: boolean;
  rating?: number;
}

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
  {
    id: "2",
    name: "TechCorp",
    phone: "+1-555-234-5678",
    verified: true,
    rating: 4.6,
    productsCount: 89,
    positiveReviews: 94,
    logo: "/placeholder.svg",
    description: "Leading technology solutions provider.",
    socials: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
    policies: {
      shipping: "Ships within 1-2 business days.",
      returns: "30-day return policy.",
    },
    address: "456 Tech Ave, Vancouver, BC",
  },
];

export const mockCategories: Category[] = [
  { id: "1", name: "Electronics", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400" },
  { id: "2", name: "Clothing", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400" },
  { id: "3", name: "Home & Garden", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400" },
  { id: "4", name: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" },
  { id: "5", name: "Books", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400" },
  { id: "6", name: "Toys & Games", image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400" },
];

export const mockProducts: Product[] = [
  { 
    id: "1", 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", 
    vendor: { id: "1", name: "TechCorp", verified: true },
    vendorId: "1",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    featured: true,
    rating: 4.5
  },
  { 
    id: "2", 
    name: "Smart Watch", 
    price: 199.99, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", 
    vendor: { id: "2", name: "TechCorp", verified: true },
    vendorId: "2",
    category: "Electronics",
    description: "Advanced fitness tracking and smartphone connectivity.",
    featured: false,
    rating: 4.2
  },
  { 
    id: "3", 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", 
    vendor: { id: "3", name: "OfficeSupply Co", verified: false },
    vendorId: "1",
    category: "Electronics",
    description: "Ergonomic aluminum laptop stand for better posture.",
    featured: false,
    rating: 4.0
  },
  { 
    id: "4", 
    name: "Organic Coffee", 
    price: 24.99, 
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400", 
    vendor: { id: "4", name: "Canadian Roasters", verified: true },
    vendorId: "1",
    category: "Food & Beverages",
    description: "100% organic, fair-trade coffee beans.",
    featured: true,
    rating: 4.8
  },
];

// Mock Orders
export const mockOrders = [
  {
    id: "ORD001",
    date: "2024-01-15",
    total: 249.98,
    status: "Delivered",
    vendor: "TechCorp",
    items: [
      { name: "Wireless Headphones", quantity: 1, price: 99.99 },
      { name: "Smart Watch", quantity: 1, price: 149.99 }
    ]
  },
  {
    id: "ORD002", 
    date: "2024-01-10",
    total: 74.98,
    status: "Shipped",
    vendor: "Canadian Roasters",
    items: [
      { name: "Organic Coffee", quantity: 3, price: 24.99 }
    ]
  }
];

// Mock Addresses
export const mockAddresses = [
  {
    id: "1",
    type: "billing",
    firstName: "John",
    lastName: "Doe", 
    company: "TechCorp",
    street: "123 Main St",
    city: "Toronto",
    province: "ON",
    postalCode: "M5V 3A8",
    country: "Canada",
    phone: "+1-416-555-0123",
    isDefault: true
  }
];

// Mock Payment Methods
export const mockPaymentMethods = [
  {
    id: "1",
    type: "visa",
    last4: "1234",
    expiryMonth: 12,
    expiryYear: 2025,
    isDefault: true
  }
];

// Mock Reviews
export const mockReviews = [
  {
    id: "1",
    productName: "Wireless Headphones",
    rating: 5,
    title: "Amazing quality!",
    comment: "These headphones exceeded my expectations.",
    date: "2024-01-20"
  }
];