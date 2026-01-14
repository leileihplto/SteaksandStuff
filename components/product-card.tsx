"use client"

import type React from "react"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useFavorites } from "@/lib/favorites-context"
import { toast } from "sonner"

interface ProductCardProps {
  id: string
  name: string
  price: number
  weight: string
  image: string
  category: string
}

export function ProductCard({ id, name, price, weight, image, category }: ProductCardProps) {
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const isProductFavorite = isFavorite(id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id,
      name,
      price,
      weight,
      image,
      category,
    })
    toast.success(`Added ${name} to cart`)
  }

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const nowFavorite = toggleFavorite({ id, name, price, weight, image, category })
    toast.success(nowFavorite ? `Added ${name} to favorites` : `Removed ${name} from favorites`)
  }

  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
      <Link href={`/products/${id}`} className="flex-1 flex flex-col">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <div className="p-3 flex-1 flex flex-col">
          <div className="mb-1">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{category}</span>
          </div>
          <h3 className="font-medium text-foreground mb-1 line-clamp-1 text-sm">{name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{weight}</p>
          <div className="flex items-center justify-between gap-2 mt-auto">
            <span className="text-base font-semibold text-foreground">₱{price.toLocaleString()}</span>
            <Button
              size="sm"
              className="h-8 text-xs hover:scale-105 active:scale-95 transition-transform duration-200"
              onClick={handleAddToCart}
              data-testid={`add-to-cart-${id}`}
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 hover:bg-background hover:scale-110 backdrop-blur-sm transition-all duration-200"
          onClick={handleToggleFavorite}
          data-testid={`favorite-${id}`}
        >
          <Heart
            className={`h-4 w-4 transition-all duration-200 ${
              isProductFavorite ? "fill-primary text-primary scale-110" : "text-foreground"
            }`}
          />
        </Button>
      </div>
    </Card>
  )
}
