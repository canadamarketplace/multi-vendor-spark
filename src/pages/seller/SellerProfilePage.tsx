import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockVendors } from "@/data/mock";
import { Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

const SellerProfilePage = () => {
  const seller = mockVendors[0];
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title={`${seller.name} | Seller Profile`} description={`View ${seller.name} profile, verification, and contact details.`} canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10">
        <section className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <article className="border border-border rounded-lg p-6 bg-card">
              <div className="flex items-center gap-4">
                <img src={seller.logo} alt={`${seller.name} logo`} className="size-16 rounded" />
                <div>
                  <h1 className="text-2xl font-bold">{seller.name}</h1>
                  <div className="mt-1 flex items-center gap-2">
                    {seller.verified && (
                      <Badge variant="secondary" className="flex items-center gap-1"><ShieldCheck className="size-3" /> Verified</Badge>
                    )}
                    <Badge variant="outline">{seller.productsCount} products</Badge>
                    <Badge variant="outline">{seller.positiveReviews}% positive</Badge>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">{seller.description}</p>
            </article>

            <article className="border border-border rounded-lg p-6 bg-card">
              <h2 className="font-semibold mb-4">Policies</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5" /> Shipping: {seller.policies.shipping}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-primary mt-0.5" /> Returns: {seller.policies.returns}</li>
              </ul>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-3">Contact Seller</h3>
              <Button asChild className="w-full">
                <a href={`tel:${seller.phone}`} aria-label="Call seller"><Phone className="mr-2 size-4" /> Call {seller.phone}</a>
              </Button>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-3">Follow</h3>
              <div className="space-y-2 text-sm">
                <a className="story-link" href={seller.socials.twitter}>Twitter</a>
                <a className="story-link" href={seller.socials.facebook}>Facebook</a>
                <a className="story-link" href={seller.socials.instagram}>Instagram</a>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellerProfilePage;
