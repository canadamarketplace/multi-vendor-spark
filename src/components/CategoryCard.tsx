import { cn } from "@/lib/utils";

export type Category = {
  id: string;
  name: string;
  image?: string;
};

const CategoryCard = ({ category, className }: { category: Category; className?: string }) => {
  return (
    <article className={cn("rounded-lg border border-border bg-card p-4 hover-scale", className)}>
      <div className="aspect-[3/2] w-full rounded-md bg-muted overflow-hidden mb-3">
        <img
          src={category.image || "/placeholder.svg"}
          alt={`${category.name} category`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="font-medium">{category.name}</h3>
    </article>
  );
};

export default CategoryCard;
