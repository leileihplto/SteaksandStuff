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
  /* 1. Changed max-w-[200px] to w-full to let the grid control width */
  <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col relative">
    <Link href={`/products/${id}`} className="flex-1 flex flex-col">
      <div className="aspect-square overflow-hidden relative bg-white">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          /* 2. Changed p-4 to p-1 to make the image fill the box */
          className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      
      {/* 3. Reduced padding to p-2 for a tighter look */}
      <div className="p-2 flex-1 flex flex-col">
        
        {/* MOVED UP: Name is now first */}
        <h3 className="font-semibold text-foreground mb-0.5 line-clamp-1 text-xs md:text-sm">
          {name}
        </h3>

        {/* MOVED DOWN: Category is now second */}
        <div className="mb-0.5">
          <span className="text-[9px] text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
        </div>

        <p className="text-[10px] text-muted-foreground mb-1">{weight}</p>
        
        <div className="flex items-center justify-between gap-1 mt-auto">
          <span className="text-xs md:text-sm font-bold text-foreground">₱{price.toLocaleString()}</span>
          <Button
            size="sm"
            className="h-6 px-1.5 text-[10px] hover:scale-105 active:scale-95 transition-transform duration-200"
            onClick={handleAddToCart}
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