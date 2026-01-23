import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Award, Truck, ThermometerSnowflake, ArrowRight } from "lucide-react"

// --- CONFIGURATION: The 9 Main Categories ---
const mainCategories = [
  { 
    name: "Beef", 
    description: "Premium cuts with exceptional marbling",
    image: "/assets/BEEF/aus mb6-7 ribeye tomahawk.png", 
    href: "/collections/beef" 
  },
  { 
    name: "Pork", 
    description: "Succulent, high-quality pork",
    image: "/assets/PORK/pork belly boneless.png", 
    href: "/collections/pork" 
  },
  { 
    name: "Lamb", 
    description: "Tender, flavorful cuts",
    image: "/assets/LAMB/new Z lamb chops.png", 
    href: "/collections/lamb" 
  },
  { 
    name: "Poultry", 
    description: "Fresh chicken and specialty poultry",
    image: "/assets/POULTRY/chick breast boneless.png", 
    href: "/collections/poultry" 
  },
  { 
    name: "Seafood", 
    description: "Ocean-fresh fish and shellfish",
    image: "/assets/SEAFOOD/tempura fish fillet.png", 
    href: "/collections/seafood" 
  },
  { 
    name: "Sausages", 
    description: "Artisanal sausages and specialty links",
    image: "/assets/SAUSAGE/cheesy hungarian.png", 
    href: "/collections/sausage" 
  },
  { 
    name: "Potato", 
    description: "Premium frozen fries and wedges",
    image: "/assets/POTATO/crispy french fries.png", 
    href: "/collections/potato" 
  },
  { 
    name: "Spices", 
    description: "Premium rubs and seasonings",
    image: "/assets/SPICES/wild herbs.png", 
    href: "/collections/spices" 
  },
  { 
    name: "Sauces", 
    description: "Gourmet sauces and vinegars",
    image: "/assets/SAUCES/ACETO CLASSIC (1).png", 
    href: "/collections/sauces" 
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/30 to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
           <p className="text-sm md:text-lg lg:text-xl text-foreground mb-4 md:mb-8 max-w-xl md:max-w-2xl text-pretty animate-in fade-in duration-700 delay-150 font-bold">
              Experience butcher-quality cuts with exceptional marbling and flavor. Sourced with care, delivered fresh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-12 w-full max-w-[280px] sm:max-w-none mx-auto sm:mx-0 animate-in fade-in duration-700 delay-300">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm md:text-base font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 hover:scale-105 active:scale-95 shadow-md"
              >
                Shop All Products
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
              
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm md:text-base font-medium transition-all border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white h-10 px-6"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* EXPLORE COLLECTIONS (CLEAN LOOP) */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Explore Our Collections
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From premium beef to fine pantry essentials, discover our curated selection.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
              {mainCategories.map((cat) => (
                <Link key={cat.name} href={cat.href} className="group">
                  <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        style={{ objectPosition: 'center 35%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg md:text-2xl font-semibold text-foreground mb-1">{cat.name}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm mb-3 line-clamp-2">{cat.description}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center">
                        View Products
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES SECTION (Unchanged) */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                The Steaks & Stuff Difference
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quality, freshness, and service you can trust
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* ICON 1 */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every cut is carefully selected for exceptional marbling, tenderness, and flavor
                </p>
              </div>
              {/* ICON 2 */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ThermometerSnowflake className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Cold Chain Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Temperature-controlled storage and delivery ensure maximum freshness
                </p>
              </div>
              {/* ICON 3 */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Truck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Same-day and next-day delivery available across Metro Manila
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to Experience Premium Quality?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                Browse our full selection of premium raw meats and have them delivered fresh to your door
              </p>
              <Button
                asChild
                size="lg"
                className="text-base hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-200"
              >
                <Link href="/shop">
                  Start Shopping
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}