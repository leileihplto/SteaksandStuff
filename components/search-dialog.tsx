"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { products } from "@/lib/products"

// Use products from lib/products.ts
const allProducts = products.map(product => ({
  id: product.id,
  name: product.name,
  price: product.price,
  weight: product.weight,
  category: product.category,
  image: product.image,
  },
  {
    id: "italian-sausage",
    name: "Italian Sausage",
    price: 650,
    weight: "500g",
    category: "Sausage",
    image: "/raw-sausages-premium-butcher.jpg",
  },
  {
    id: "wagyu-beef",
    name: "A5 Wagyu Beef",
    price: 4500,
    weight: "300g",
    category: "Beef",
    image: "/raw-premium-beef-steak-marbling.jpg",
  },
  {
    id: "lamb-shoulder",
    name: "Lamb Shoulder",
    price: 1650,
    weight: "800g",
    category: "Lamb",
    image: "/raw-lamb-chops-premium.jpg",
  },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")

  const filteredProducts = query.trim()
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  const handleProductClick = () => {
    setQuery("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="font-serif text-2xl">Search Products</DialogTitle>
        </DialogHeader>
        <div className="px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by product name or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
        </div>

        <ScrollArea className="max-h-[400px]">
          {query.trim() && filteredProducts.length > 0 ? (
            <div className="px-6 py-4 space-y-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={handleProductClick}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground line-clamp-1">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <p className="text-sm font-semibold text-primary mt-1">₱{product.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="px-6 py-8 text-center">
              <p className="text-muted-foreground">No products found for "{query}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="px-6 py-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-muted-foreground">Start typing to search products</p>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
