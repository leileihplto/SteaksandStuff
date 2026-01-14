"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const priceRanges = [
  { label: "Under ₱500", value: "0-500" },
  { label: "₱500 - ₱1,000", value: "500-1000" },
  { label: "₱1,000 - ₱2,000", value: "1000-2000" },
  { label: "Over ₱2,000", value: "2000+" },
]

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
]

export function ProductFilters() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between mb-4 md:mb-6">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Showing all products</span>
      </div>

      {/* Mobile Filter Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="md:hidden bg-transparent">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>Filter Products</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            {/* Sort */}
            <div>
              <h3 className="font-medium text-foreground mb-3">Sort By</h3>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox id={`sort-${option.value}`} />
                    <Label htmlFor={`sort-${option.value}`} className="text-sm font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium text-foreground mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <div key={range.value} className="flex items-center space-x-2">
                    <Checkbox id={`price-${range.value}`} />
                    <Label htmlFor={`price-${range.value}`} className="text-sm font-normal cursor-pointer">
                      {range.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full" onClick={() => setOpen(false)}>
              Apply Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sort Dropdown */}
      <div className="hidden md:flex items-center gap-2">
        <Label htmlFor="sort" className="text-sm text-muted-foreground">
          Sort by:
        </Label>
        <select
          id="sort"
          className="bg-secondary border border-border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
