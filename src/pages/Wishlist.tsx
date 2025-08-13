import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="My Wishlist" description="View and manage your wishlist items." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
        <p className="text-muted-foreground">You have no items in your wishlist.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
