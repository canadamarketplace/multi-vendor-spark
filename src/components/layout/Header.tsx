import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, User, ShoppingCart, Heart, Languages } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const language = (localStorage.getItem("lang") as "en" | "fr") || "en";

  const setLanguage = (val: "en" | "fr") => {
    localStorage.setItem("lang", val);
    // simple reload to reflect header/menu text
    window.location.reload();
  };

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
              { label: language === "fr" ? "Catégories" : "Categories", to: "/categories/1" },
              { label: language === "fr" ? "Vendeurs" : "Sellers", to: "/seller/map" },
              { label: language === "fr" ? "Promotions" : "Sale", to: "/sale" },
              { label: language === "fr" ? "Assistance" : "Support", to: "/contact" },
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
              <Input className="pl-8 w-64" placeholder={language === "fr" ? "Rechercher des produits" : "Search products"} />
            </div>
          </div>

          {/* Language quick switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Language">
                <Languages />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{language === "fr" ? "Langue" : "Language"}</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={language} onValueChange={(v) => setLanguage(v as "en" | "fr")}>
                <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Wishlist */}
          <Button asChild variant="ghost" size="icon" aria-label="Wishlist">
            <Link to="/wishlist">
              <Heart />
            </Link>
          </Button>

          {/* Account dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Account">
                <User />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel className="text-sm">
                {language === "fr" ? "Bonjour" : "Hello"},{" "}
                {token ? (language === "fr" ? "Votre compte" : "Your Account") : (language === "fr" ? "Connectez-vous" : "Sign in")}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/account")}>{language === "fr" ? "Mon Compte" : "My Account"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/wishlist")}>{language === "fr" ? "Ma liste d'envies" : "My Wishlist"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/compare")}>{language === "fr" ? "Comparer" : "Compare Items"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/account?tab=orders")}>{language === "fr" ? "Mes commandes" : "My Orders"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/#support")}>{language === "fr" ? "Contactez-nous" : "Contact Us"}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>{language === "fr" ? "Langue" : "Language"}</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
              {token && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()}>{language === "fr" ? "Se déconnecter" : "Logout"}</DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

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

