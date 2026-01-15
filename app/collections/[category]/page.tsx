import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { notFound } from "next/navigation"
import { getProductsByCategory, getAllCategories } from "@/lib/products"

const categoryInfo: Record<string, { title: string; description: string }> = {
  beef: {
    title: "Beef",
    description: "Premium cuts with exceptional marbling and flavor",
  },
  lamb: {
    title: "Lamb",
    description: "Tender, flavorful lamb cuts",
  },
  pork: {
    title: "Pork",
    description: "Succulent, high-quality pork",
  },
  poultry: {
    title: "Poultry",
    description: "Fresh chicken and specialty poultry",
  },
  seafood: {
    title: "Seafood",
    description: "Ocean-fresh fish and shellfish",
  },
  sausage: {
    title: "Sausage",
    description: "Artisanal sausages and specialty links",
  },
  fries: {
    title: "Fries",
    description: "Premium frozen fries and potato products",
  },
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.toLowerCase(),
  }))
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  const categoryParam = resolvedParams.category.toLowerCase()

  if (!categoryInfo[categoryParam]) {
    notFound()
  }

  const info = categoryInfo[categoryParam]

  const products = getProductsByCategory(info.title)

  if (products.length === 0) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-8">
          {/* Page Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">{info.title}</h1>
            <p className="text-muted-foreground text-lg">{info.description}</p>
          </div>

          {/* Filters */}
          <ProductFilters />

          {/* Product Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
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
