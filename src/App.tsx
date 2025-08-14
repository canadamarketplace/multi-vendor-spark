import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./lib/apolloClient";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import BecomeSellerPage from "./pages/auth/BecomeSellerPage";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import SellerProfilePage from "./pages/seller/SellerProfilePage";
import SellerProductPage from "./pages/seller/SellerProductPage";
import SellerDashboardPage from "./pages/seller/SellerDashboardPage";
import SellerStorefront from "./pages/seller/SellerStorefront";
import SellerMapLocator from "./pages/seller/SellerMapLocator";
import CustomerAccountPage from "./pages/account/CustomerAccountPage";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SizingGuide from "./pages/SizingGuide";

const queryClient = new QueryClient();

const App = () => (
  <ApolloProvider client={apolloClient}>
    <AuthProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/become-seller" element={<BecomeSellerPage />} />

                <Route path="/seller/:sellerId/profile" element={<SellerProfilePage />} />
                <Route path="/seller/:sellerId/products" element={<SellerProductPage />} />
                <Route path="/seller/:sellerId/storefront" element={<SellerStorefront />} />
                <Route path="/seller/map" element={<SellerMapLocator />} />

                <Route path="/categories/:categoryId" element={<Categories />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/seller/dashboard" element={<SellerDashboardPage />} />
                <Route path="/account" element={<CustomerAccountPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/sizing-guide" element={<SizingGuide />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </AuthProvider>
  </ApolloProvider>
);

export default App;
