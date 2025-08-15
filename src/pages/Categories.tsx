import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { mockCategories, mockProducts } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Grid, List } from "lucide-react";

const Categories = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");

  const category = mockCategories.find(c => c.id === categoryId) || mockCategories[0];
  const categoryProducts = mockProducts.filter(p => p.category === category.name);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title={`${category.name} | Canada Marketplace`} 
        description={`Shop ${category.name} products from verified Canadian sellers`} 
        canonical={window.location.href} 
      />
      <Header />
      
      <main className="flex-1">
        {/* Category Hero Banner */}
        <section className="relative h-64 bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-lg text-muted-foreground">
                Discover {categoryProducts.length} products from Canadian sellers
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-6">
              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-semibold mb-4">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000}
                      step={10}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Best Rating</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {categoryProducts.length} products
                  </span>
                  <Badge variant="outline">{category.name}</Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {categoryProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                  />
                ))}
              </div>

              {categoryProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No products found in this category.</p>
                  <Button onClick={() => navigate("/")}>Browse All Products</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;