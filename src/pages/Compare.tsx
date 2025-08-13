import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Compare = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Compare Items" description="Compare selected products side by side." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <h1 className="text-2xl font-bold mb-4">Compare Products</h1>
        <p className="text-muted-foreground">You have no items to compare.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Compare;
