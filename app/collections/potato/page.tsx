import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"

export default function PotatoPage() {
  const products = getProductsByCategory("Potato")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="mb-6 md:mb-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="page-title">Potato Products</h1>
            <p className="text-muted-foreground text-lg">Premium frozen potato products - fries, croquettes, and more</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
