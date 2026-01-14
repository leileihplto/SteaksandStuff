"use client"

import { useFavorites } from "@/lib/favorites-context"
import { ProductCard } from "@/components/product-card"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FavoritesPageClient() {
  const { favorites } = useFavorites()

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">My Favorites</h1>
          <p className="text-muted-foreground">
            {favorites.length} {favorites.length === 1 ? "item" : "items"}
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <Heart className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="font-medium text-lg text-foreground mb-2">No favorites yet</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Start adding products to your favorites by clicking the heart icon
            </p>
            <Button asChild>
              <Link href="/shop">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
