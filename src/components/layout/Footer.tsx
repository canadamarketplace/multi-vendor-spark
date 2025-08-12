import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto py-12 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <p className="text-sm text-muted-foreground">A modern multi-vendor marketplace experience.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/seller/1/products" className="hover:underline">All Products</Link></li>
            <li><Link to="/seller/map" className="hover:underline">Find Sellers</Link></li>
            <li><a href="#categories" className="hover:underline">Categories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#support" className="hover:underline">Help Center</a></li>
            <li><a href="#policies" className="hover:underline">Policies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <div className="flex gap-2">
            <Input placeholder="Your email" aria-label="Email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto py-6 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Adobe-style Marketplace</span>
          <div className="space-x-4">
            <Link to="#privacy" className="hover:underline">Privacy</Link>
            <Link to="#terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
