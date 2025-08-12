import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { mockVendors, mockProducts } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SellerStorefront = () => {
  const seller = mockVendors[0];
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title={`${seller.name} | Storefront`} description={`Shop ${seller.name} catalog with verified badges and stats.`} canonical={window.location.href} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto py-10">
            <div className="flex items-center gap-4">
              <img src={seller.logo} alt={`${seller.name} logo`} className="size-16 rounded" />
              <div>
                <h1 className="text-2xl font-bold">{seller.name}</h1>
                <div className="mt-1 flex items-center gap-2">
                  {seller.verified && <Badge variant="secondary">Verified</Badge>}
                  <Badge variant="outline">{seller.productsCount} products</Badge>
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <Button>Contact</Button>
                <Button variant="outline">Follow</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-10">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellerStorefront;
