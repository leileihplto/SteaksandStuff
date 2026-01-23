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
import { UserProfileMenu } from "@/components/user-profile-menu"

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
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
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Shop
                </Link>
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileProductsOpen && (
                    <div className="flex flex-col gap-2 mt-2 ml-4">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-muted-foreground hover:text-foreground py-1 block"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {navigation.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Steaks & Stuff"
              className="h-16 md:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/shop"
              className="text-sm font-medium text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Shop
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[240px] gap-1 p-2 bg-black/90 border border-border shadow-lg rounded-md">
                      {productCategories.map((category) => (
                        <NavigationMenuLink key={category.name} asChild>
                          <Link
                            href={category.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground text-white"
                          >
                            <div className="text-sm font-medium text-white">{category.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="hover:scale-110 hover:bg-primary/10 transition-all duration-200"
            >
              <Search className="h-5 w-5" />
            </Button>
            <UserProfileMenu />
            <CartDrawer />
          </div>
        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
