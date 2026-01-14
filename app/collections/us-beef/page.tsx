import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"

export default function USBeefPage() {
  const products = getProductsByCategory("U.S Beef")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="mb-6 md:mb-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="page-title">U.S Beef</h1>
            <p className="text-muted-foreground text-lg">USDA Prime and premium American beef selections</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
