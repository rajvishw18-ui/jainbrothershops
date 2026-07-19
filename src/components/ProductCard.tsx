import { WhatsAppButton } from "./WhatsAppButton";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-card-foreground">{product.name}</h3>
          <span className="font-display text-base font-semibold text-primary">{product.price}</span>
        </div>
        {product.category && (
          <span className="mt-1 inline-block w-fit rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {product.category}
          </span>
        )}
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-5">
          <WhatsAppButton productName={product.name} />
        </div>
      </div>
    </article>
  );
}
