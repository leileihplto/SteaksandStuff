"use client"

import Link from "next/link"
import { Search, Menu, ChevronDown, User, LogOut, LogIn } from "lucide-react"
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

// 1. Logic: "Shop" and "Profile" are handled separately now, so they are removed from this list.
const mainLinks = [
  { name: "Home", href: "/" },
  // Profile is now handled dynamically
  { name: "Price List", href: "/price-list" },
  { name: "Delivery Areas", href: "/delivery-areas" }, // Renamed from "Delivering To"
  // Shop is now handled as a dropdown
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
]

const productCategories = [
  { name: "Beef", href: "/collections/beef" },
  { name: "Pork", href: "/collections/pork" },
  { name: "Lamb", href: "/collections/lamb" },
  { name: "Poultry", href: "/collections/poultry" },
  { name: "Sausage", href: "/collections/sausage" },
  { name: "Potato", href: "/collections/potato" },
  { name: "Seafood", href: "/collections/seafood" },
  { name: "Sauces", href: "/collections/sauces" },
  { name: "Spices", href: "/collections/spices" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileShopOpen, setMobileShopOpen] = useState(false)

  // 2. Auth Placeholder: Change this to true/false to test the menu!
  // In a real app, this would come from your auth provider (e.g., useSession or useUser)
  const isLoggedIn = false 

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="relative flex h-20 md:h-24 items-center justify-between">

          {/* --- LEFT: MOBILE MENU BUTTON --- */}
          <div className="flex items-center">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu" className="w-10 h-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[300px] flex flex-col h-full bg-background border-r border-border">
                <SheetHeader className="px-4 pt-4 text-left">
                  <SheetTitle className="font-serif text-2xl">STEAKS&STUFF</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto px-4 py-6">
                  <nav className="flex flex-col gap-2">
                    
                    {/* 1. HOME */}
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50">
                      Home
                    </Link>

                    {/* 2. PROFILE (If Logged In) */}
                    {isLoggedIn && (
                       <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50 text-primary">
                       Profile
                     </Link>
                    )}

                    {/* 3. PRICE LIST */}
                    <Link href="/price-list" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50">
                      Price List
                    </Link>

                    {/* 4. DELIVERY AREAS */}
                    <Link href="/delivery-areas" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50">
                      Delivery Areas
                    </Link>

                    {/* 5. SHOP (DROPDOWN) */}
                    <div>
                      <div 
                        className="flex items-center justify-between w-full py-2 cursor-pointer border-b border-border/50"
                        onClick={() => setMobileShopOpen(!mobileShopOpen)}
                      >
                        <span className="text-lg font-medium">Shop</span>
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileShopOpen ? "rotate-180" : ""}`} />
                      </div>

                      {/* Sub-menu for Shop */}
                      {mobileShopOpen && (
                        <div className="flex flex-col gap-3 mt-2 ml-4 border-l-2 border-muted pl-4">
                          <Link 
                              href="/shop" 
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-base font-semibold text-foreground py-1"
                            >
                              Shop All
                          </Link>
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

                    {/* 6. ABOUT US */}
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50">
                      About Us
                    </Link>

                    {/* 7. CONTACT */}
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50">
                      Contact
                    </Link>

                    {/* 8. FAQS */}
                    <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border/50">
                      FAQs
                    </Link>
                  </nav>
                </div>

                {/* --- BOTTOM ACTIONS (LOGIN/LOGOUT) --- */}
                <div className="p-4 border-t border-border bg-muted/20">
                  {isLoggedIn ? (
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => {
                        // Add logout logic here later
                        console.log("Logging out...")
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button asChild className="w-full">
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                          Sign Up
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>

              </SheetContent>
            </Sheet>

            {/* --- DESKTOP NAVIGATION (Simplified for brevity, uses same constants) --- */}
            <nav className="hidden md:flex items-center gap-6">
              {mainLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ))}
               {/* Desktop Shop Dropdown */}
               <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                      Shop
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover rounded-md shadow-md">
                        <div className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/shop"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Shop All
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Browse our full catalog of premium cuts and provisions.
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        <div className="flex flex-col gap-2">
                           {productCategories.slice(0, 5).map((category) => (
                            <Link key={category.name} href={category.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{category.name}</div>
                            </Link>
                           ))}
                        </div>
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
                className="h-14 md:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* --- RIGHT: ICONS --- */}
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

            {/* Desktop Only: Profile Icon */}
            <Button variant="ghost" size="icon" className="hidden md:flex w-10 h-10 hover:text-primary" asChild>
                <Link href={isLoggedIn ? "/profile" : "/login"}>
                    <User className="h-6 w-6" />
                </Link>
            </Button>

            <CartDrawer />
          </div>

        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}