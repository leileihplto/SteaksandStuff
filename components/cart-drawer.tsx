"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Shopping cart" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Shopping cart ({totalItems} items)</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Shopping Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="font-medium text-lg text-foreground mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-6">Add some premium cuts to get started</p>
            <Button asChild>
              <Link href="/shop">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div className="flex-1 min-w-0 pr-4">
                          <h4 className="text-sm font-medium text-foreground line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.weight}</p>
                          <p className="text-sm font-semibold text-foreground mt-1">
                            ₱{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between text-base font-medium">
                <span className="text-foreground">Subtotal</span>
                <span className="text-foreground">₱{totalPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
