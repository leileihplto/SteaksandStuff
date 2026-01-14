"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

interface StickyAddToCartProps {
  productId: string
  productName: string
  price: number
  weight: string
  image: string
  category: string
}

export function StickyAddToCart({ productId, productName, price, weight, image, category }: StickyAddToCartProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: productId,
      name: productName,
      price,
      weight,
      image,
      category,
      quantity,
    })
    toast.success(`Added ${quantity} × ${productName} to cart`)
    setQuantity(1)
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{productName}</p>
            <p className="text-lg font-bold text-foreground">₱{(price * quantity).toLocaleString()}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-secondary rounded-md border border-border">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium w-8 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <Button size="sm" className="h-9 gap-1.5" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
