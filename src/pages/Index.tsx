import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/HeroSlider";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { mockCategories, mockProducts } from "@/data/mock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo
        title="Adobe Store Style Marketplace | Home"
        description="Discover products, categories, and top sellers in our Adobe-style multi-vendor marketplace."
        canonical={window.location.href}
      />
      <Header />
      <main className="flex-1">
        <HeroSlider />

        <section id="categories" className="container mx-auto py-12">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">Shop by Category</h2>
          </header>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {mockCategories.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </section>

        <section className="container mx-auto py-12">
          <header className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
          </header>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockProducts.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

