"use client"

import { useState } from "react"
import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Product } from "@/lib/products"

interface CategorySectionProps {
  title: string
  products: Product[]
}

export function CategorySection({ title, products }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // If no products, don't render anything
  if (products.length === 0) return null

  // Determine which products to show
  // Show only 3 if not expanded, otherwise show all
  const displayedProducts = isExpanded ? products : products.slice(0, 3)
  const hasMore = products.length > 3

  return (
    <section className="mb-12 border-b pb-12 last:border-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h2>
        <span className="text-sm text-muted-foreground">
          {products.length} Items
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="min-w-[200px]"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
            ) : (
              <>See More ({products.length - 3} more) <ChevronDown className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        </div>
      )}
    </section>
  )
}