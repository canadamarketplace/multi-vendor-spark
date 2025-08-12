import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Product = {
  id: string;
  name: string;
  image?: string;
  price: number;
  rating?: number; // 0-5
  vendor?: { id: string; name: string; logo?: string; verified?: boolean };
};

const ProductCard = ({ product, className }: { product: Product; className?: string }) => {
  const stars = Math.round(product.rating || 0);
  return (
    <article className={cn("rounded-lg border border-border bg-card overflow-hidden group", className)}>
      <div className="aspect-[4/3] w-full bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} image`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium line-clamp-2">{product.name}</h3>
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn("size-4", i < stars ? "fill-current" : "opacity-30")} />
          ))}
        </div>
        {product.vendor && (
          <div className="text-xs text-muted-foreground">
            Sold by <span className="font-medium text-foreground">{product.vendor.name}</span>
          </div>
        )}
        <Button className="w-full">Add to Cart</Button>
      </div>
    </article>
  );
};

export default ProductCard;
