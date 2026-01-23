"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"
import { useCart } from "@/lib/cart-context"
import { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

// Base product fields required for display
interface BaseProductFields {
  id: string
  name: string
  price: number
  weight: string
  image: string
  category: string
}

// Make description and other detail fields optional for favorites compatibility
type ProductCardProduct = BaseProductFields & Partial<Omit<Product, keyof BaseProductFields>>

interface ProductCardProps {
  product: ProductCardProduct
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { addItem } = useCart()
  const isLoved = isFavorite(product.id)

  return (
    <div className={cn("group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md", className)}>

      {/* IMAGE SECTION */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {/* Favorite Button (Top Right) */}
        <button
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite(product)
          }}
          className="absolute right-2 top-2 z-20 rounded-full bg-white/80 p-2 text-foreground backdrop-blur-sm transition-all hover:bg-white hover:text-red-500"
        >
          <Heart className={cn("h-5 w-5", isLoved && "fill-red-500 text-red-500")} />
          <span className="sr-only">Add to favorites</span>
        </button>

        <Link href={`/products/${product.id}`} className="block h-full w-full">
          {/* Fallback image if product.image is missing */}
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url('${product.image || '/placeholder.png'}')` }}
          />
        </Link>
      </div>

      {/* DETAILS SECTION */}
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="line-clamp-1 font-serif text-lg font-bold">{product.name}</h3>
        </Link>
        <p className="mb-4 text-sm text-muted-foreground">{product.category}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold">
            {new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(product.price)}
          </span>

          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  )
}