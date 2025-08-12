import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, User, ShoppingCart } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex h-16 items-center gap-6">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="text-primary" />
          <span className="font-semibold">Adobe Store Style</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {[
              { label: "Products", to: "/seller/1/products" },
              { label: "Sellers", to: "/seller/map" },
              { label: "Pricing", to: "/#pricing" },
              { label: "Support", to: "/#support" },
            ].map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavLink to={item.to} className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground">
                  <NavigationMenuLink>{item.label}</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input className="pl-8 w-64" placeholder="Search products" />
            </div>
          </div>
          <Button asChild variant="ghost" size="icon" aria-label="Account">
            <Link to="/account">
              <User />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Cart">
            <Link to="/cart">
              <ShoppingCart />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
