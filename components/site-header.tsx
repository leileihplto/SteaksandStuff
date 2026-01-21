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
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Promo", href: "/promo" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
]

const productCategories = [
  { name: "Beef", href: "/collections/beef" },
  { name: "U.S Beef", href: "/collections/us-beef" },
  { name: "Lamb", href: "/collections/lamb" },
  { name: "Pork", href: "/collections/pork" },
  { name: "U.S Pork", href: "/collections/us-pork" },
  { name: "Poultry", href: "/collections/poultry" },
  { name: "Seafood", href: "/collections/seafood" },
  { name: "Sausage", href: "/collections/sausage" },
  { name: "Potato", href: "/collections/potato" },
  { name: "Sauces", href: "/collections/sauces" },
  { name: "Spices", href: "/collections/spices" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        {/* 1. HEADER HEIGHT: Set to h-24 for mobile (balanced), h-32 for desktop */}
        <div className="relative flex h-32 items-center justify-between md:h-32">
          
          {/* --- LEFT: MOBILE MENU BUTTON --- */}
          <div className="flex items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu" className="w-12 h-12">
                  {/* 2. MENU ICON: Increased to h-7 w-7 */}
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              
              <SheetContent side="left" className="w-[250px] sm:w-[320px] pr-0 flex flex-col h-full max-h-screen">
                <SheetHeader className="px-6 pt-4 shrink-0">
                  <SheetTitle className="text-left font-serif text-2xl">STEAKS&STUFF</SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 overflow-y-auto px-6 pb-8 mt-4">
                  <nav className="flex flex-col gap-6">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      Home
                    </Link>
                    <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      My Account
                    </Link>
                    <Link href="/pricelist" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      Pricelist
                    </Link>
                    <Link href="/delivery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      Delivery Info
                    </Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      About
                    </Link>

                    {/* Mobile Shop Dropdown */}
                    <div>
                      <div className="flex items-center justify-between w-full py-1">
                        <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                            Shop
                        </Link>
                        <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="p-2">
                           <ChevronDown className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      {mobileProductsOpen && (
                        <div className="flex flex-col gap-4 mt-2 ml-2 border-l-2 border-border/50 pl-6 py-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-base text-muted-foreground hover:text-foreground block"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      Contact Us
                    </Link>
                    <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-1">
                      FAQs
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Nav Placeholder */}
             <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                <Link href="/shop" className="text-sm font-medium hover:text-primary">Shop</Link>
                 <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[240px] gap-1 p-2 bg-zinc-950 border border-zinc-800 shadow-xl rounded-md">
                          {productCategories.map((category) => (
                            <NavigationMenuLink key={category.name} asChild>
                              <Link
                                href={category.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 focus:bg-zinc-800"
                              >
                                <div className="text-sm font-medium text-white">
                                  {category.name}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {navigation.slice(1).map((item) => (
                  <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary">
                    {item.name}
                  </Link>
                ))}
            </nav>
          </div>

          {/* --- CENTER: LOGO --- */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Steaks & Stuff"
                /* 3. LOGO SIZE: Set to h-20 (fits h-24 header perfectly) */
                className="h-16 md:h-[8rem] w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* --- RIGHT: SEARCH AND CART --- */}
          <div className="flex items-center gap-1 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="w-12 h-12 hover:scale-110"
            >
              {/* 4. SEARCH ICON: Increased to h-7 w-7 */}
              <Search className="h-7 w-7" />
            </Button>
            
            {/* NOTE: If the Cart Icon is too small, you must edit the CartDrawer file directly. 
               This container just holds the drawer trigger. */}
            <CartDrawer />
          </div>

        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}