import { useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { mockProducts, mockCategories } from "@/data/mock";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Grid2X2, List } from "lucide-react";

const SellerProductPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [price, setPrice] = useState([0, 100]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Seller Products | Catalog" description="Browse seller catalog with filters, sorting, and pagination." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <aside className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Search</h3>
              <Input placeholder="Search products" />
            </div>
            <div>
              <h3 className="font-semibold mb-3">Category</h3>
              <Select>
                <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent>
                  {mockCategories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Price</h3>
              <Slider min={0} max={500} defaultValue={price} onValueChange={setPrice} />
              <div className="mt-2 text-sm text-muted-foreground">${price[0]} - ${price[1]}</div>
            </div>
          </aside>

          <section className="md:col-span-3">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button variant={view === "grid" ? "default" : "outline"} size="sm" onClick={() => setView("grid")}><Grid2X2 className="mr-1 size-4" /> Grid</Button>
                <Button variant={view === "list" ? "default" : "outline"} size="sm" onClick={() => setView("list")}><List className="mr-1 size-4" /> List</Button>
              </div>
              <Select>
                <SelectTrigger className="w-44"><SelectValue placeholder="Sort by" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className={view === "grid" ? "grid gap-6 grid-cols-2 md:grid-cols-3" : "space-y-4"}>
              {mockProducts.map((p) => (
                <div key={p.id} className={view === "list" ? "grid grid-cols-[160px_1fr] gap-4 border border-border rounded-lg overflow-hidden" : undefined}>
                  {view === "list" ? (
                    <>
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover bg-muted" />
                      <div className="p-4">
                        <h3 className="font-medium mb-2">{p.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">Sold by {p.vendor?.name}</p>
                        <div className="font-semibold mb-3">${p.price.toFixed(2)}</div>
                        <Button>Add to Cart</Button>
                      </div>
                    </>
                  ) : (
                    <ProductCard product={p} />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm">Next</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerProductPage;
