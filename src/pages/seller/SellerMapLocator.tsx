import { useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockVendors } from "@/data/mock";

const SellerMapLocator = () => {
  const [radius, setRadius] = useState([25]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Seller Map Locator" description="Find sellers near you with an interactive map and filters." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10 grid gap-8 md:grid-cols-3">
        <aside className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Search</h3>
            <Input placeholder="City or address" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Radius</h3>
            <Slider min={5} max={200} defaultValue={radius} onValueChange={setRadius} />
            <div className="mt-1 text-sm text-muted-foreground">Within {radius[0]} km</div>
          </div>
          <Button>Search</Button>
        </aside>
        <section className="md:col-span-2 space-y-6">
          <div className="h-80 w-full rounded-lg border border-border bg-muted grid place-items-center">
            <span className="text-muted-foreground text-sm">Map placeholder (Google Maps/Mapbox)</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mockVendors.map((v) => (
              <Card key={v.id}>
                <CardHeader><CardTitle className="text-base">{v.name}</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">{v.address}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellerMapLocator;
