"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, ShoppingCart, Truck, RefreshCw, Shield, ChevronDown, ArrowLeft, Heart } from "lucide-react"
import { notFound, useRouter } from "next/navigation"
import { StickyAddToCart } from "@/components/sticky-add-to-cart"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { useFavorites } from "@/lib/favorites-context"
import { toast } from "sonner"

export function ProductPageClient({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1)
  const [showDescription, setShowDescription] = useState(false)
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const router = useRouter()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      image: product.image,
      category: product.category,
      quantity,
    })
    toast.success(`Added ${quantity} × ${product.name} to cart`)
    setQuantity(1)
  }

  const handleFavoriteToggle = () => {
    toggleFavorite(product)
    if (isFavorite(product.id)) {
      toast.success("Removed from favorites")
    } else {
      toast.success("Added to favorites")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Button
            variant="ghost"
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Browse
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={handleFavoriteToggle}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite(product.id) ? "fill-primary text-primary" : "text-muted-foreground"
                  }`}
                />
              </Button>
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">₱{product.price.toLocaleString()}</span>
                <span className="text-muted-foreground">/ {product.weight}</span>
              </div>

              <div className="mb-6">
                <Button
                  variant="outline"
                  onClick={() => setShowDescription(!showDescription)}
                  className="w-full justify-between text-left font-medium"
                >
                  <span>Product Description</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showDescription ? "rotate-180" : ""}`} />
                </Button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    showDescription ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-medium text-foreground mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector - Desktop */}
              <div className="hidden md:block mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-transparent"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="w-16 h-10 text-center border border-border rounded-md bg-background text-foreground"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 bg-transparent"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart - Desktop */}
              <div className="hidden md:block mb-8">
                <Button size="lg" className="w-full md:w-auto md:min-w-[200px]" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Same-day available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <RefreshCw className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">7-day policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Quality Guaranteed</p>
                    <p className="text-xs text-muted-foreground">Premium grade</p>
                  </div>
                </div>
              </div>

              {/* Product Details Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="storage">
                  <AccordionTrigger className="text-foreground font-medium">Storage Instructions</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {product.storage}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="preparation">
                  <AccordionTrigger className="text-foreground font-medium">Preparation Tips</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {product.preparation}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="nutrition">
                  <AccordionTrigger className="text-foreground font-medium">Nutritional Information</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {product.nutritional}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Add to Cart - Mobile */}
      <StickyAddToCart
        productId={product.id}
        productName={product.name}
        price={product.price}
        weight={product.weight}
        image={product.image}
        category={product.category}
      />

      <SiteFooter />
    </div>
  )
}
