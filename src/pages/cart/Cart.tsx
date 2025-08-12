import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { mockProducts } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Cart = () => {
  // Group mock items by vendor
  const groups = Object.values(
    mockProducts.slice(0, 4).reduce<Record<string, { vendor: string; items: typeof mockProducts }>>((acc, p) => {
      const key = p.vendor?.name || "Unknown";
      acc[key] = acc[key] || { vendor: key, items: [] as any };
      (acc[key].items as any).push(p);
      return acc;
    }, {})
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="Cart | Multi-vendor" description="Review items grouped by seller with vendor-specific shipping." canonical={window.location.href} />
      <Header />
      <main className="container mx-auto flex-1 py-10 grid gap-8 md:grid-cols-3">
        <section className="md:col-span-2 space-y-6">
          {groups.map((g, idx) => (
            <article key={idx} className="border border-border rounded-lg bg-card">
              <header className="p-4 border-b border-border font-semibold">Seller: {g.vendor}</header>
              <div className="divide-y divide-border">
                {g.items.map((item) => (
                  <div key={item.id} className="p-4 flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="size-16 rounded bg-muted" />
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="w-56">
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Shipping method" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="express">Express</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
              <footer className="p-4 flex items-center justify-between border-t border-border">
                <span className="text-sm text-muted-foreground">Secure checkout • SSL encrypted</span>
                <Button>Checkout Seller</Button>
              </footer>
            </article>
          ))}
        </section>
        <aside className="space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="flex items-center justify-between mb-2"><span>Subtotal</span><span>$ {(groups.flatMap((g:any)=>g.items).reduce((s:any,p:any)=>s+p.price,0)).toFixed(2)}</span></div>
            <div className="flex items-center justify-between mb-4 text-muted-foreground text-sm"><span>Shipping</span><span>Calculated at checkout</span></div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
