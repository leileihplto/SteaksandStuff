"use client"

import Link from "next/link"
import { Search, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CartDrawer } from "@/components/cart-drawer"
import { SearchDialog } from "@/components/search-dialog"

// --- DATA CONSTANTS ---
const navigation = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Price List", href: "/price-list" },
  { name: "Delivering To", href: "/delivering-to" },
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
]

const productCategories = [
  {
    name: "Beef",
    href: "/collections/beef",
    items: [],
  },
  {
    name: "Pork",
    href: "/collections/pork",
    items: [],
  },
  {
    name: "Lamb",
    href: "/collections/lamb",
    items: [],
  },
  {
    name: "Poultry",
    href: "/collections/poultry",
    items: [],
  },
  {
    name: "Sausage",
    href: "/collections/sausage",
    items: [],
  },
  {
    name: "Potato",
    href: "/collections/potato",
    items: [],
  },
  {
    name: "Seafood",
    href: "/collections/seafood",
    items: [],
  },
  {
    name: "Sauces",
    href: "/collections/sauces",
    items: [],
  },
  {
    name: "Spices",
    href: "/collections/spices",
    items: [],
  },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        {/* 1. HEADER HEIGHT: Reduced to h-20 (mobile) and h-24 (desktop) */}
        <div className="relative flex h-20 md:h-24 items-center justify-between">

          {/* --- LEFT: MOBILE MENU BUTTON --- */}
          <div className="flex items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu" className="w-10 h-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[300px] flex flex-col h-full bg-background">
                <SheetHeader className="px-4 pt-4 text-left">
                  <SheetTitle className="font-serif text-2xl">STEAKS&STUFF</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium py-2"
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Mobile Shop Products Dropdown */}
                    <div>
                      <div
                        className="flex items-center justify-between w-full py-2 cursor-pointer"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      >
                        <span className="text-lg font-medium">Shop Products</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                      </div>

                      {mobileProductsOpen && (
                        <div className="flex flex-col gap-3 mt-2 ml-4 border-l-2 border-muted pl-4">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-base text-muted-foreground hover:text-primary py-1"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ))}

              {/* PRODUCTS DROPDOWN */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[240px] gap-1 p-2 bg-black border border-zinc-800 shadow-xl rounded-md z-50">
                        {productCategories.map((category) => (
                          <NavigationMenuLink key={category.name} asChild>
                            <Link
                              href={category.href}
                              className="block select-none rounded-md p-3 text-sm font-medium leading-none text-white no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-primary focus:bg-zinc-800 focus:text-primary"
                            >
                              {category.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* --- CENTER: LOGO --- */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Steaks & Stuff"
                /* 2. LOGO SIZE: Adjusted to h-14 (mobile) and h-20 (desktop) */
                className="h-14 md:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* --- RIGHT: SEARCH AND CART --- */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 hover:text-primary"
            >
              <Search className="h-6 w-6" />
            </Button>

            {/* Cart Drawer Component */}
            <CartDrawer />
          </div>

        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}