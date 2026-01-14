import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Award, Truck, ThermometerSnowflake } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-8">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/U.S BEEF/Prime Ribeye boneless.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance animate-in fade-in duration-700">
              Premium Raw Meats,
              <br />
              Delivered to Your Door
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-in fade-in duration-700 delay-150">
              Experience butcher-quality cuts with exceptional marbling and flavor. Sourced with care, delivered fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700 delay-300">
              <Button
                asChild
                size="lg"
                className="text-base hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-200"
              >
                <Link href="/shop">
                  Shop All Products
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-transparent hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Explore Our Collections
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From premium beef to fresh seafood, discover our carefully curated selection of raw meats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Beef */}
              <Link href="/collections/beef" className="group">
                <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/assets/BEEF/aus mb6-7 ribeye tomahawk.png"
                      alt="Premium Beef"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Beef</h3>
                    <p className="text-muted-foreground text-sm mb-3">Premium cuts with exceptional marbling</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Card>
              </Link>

              {/* Lamb */}
              <Link href="/collections/lamb" className="group">
                <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/assets/LAMB/new Z lamb chops.png"
                      alt="Premium Lamb"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Lamb</h3>
                    <p className="text-muted-foreground text-sm mb-3">Tender, flavorful cuts</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Card>
              </Link>

              {/* Pork */}
              <Link href="/collections/pork" className="group">
                <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/assets/PORK/pork belly boneless.png"
                      alt="Premium Pork"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Pork</h3>
                    <p className="text-muted-foreground text-sm mb-3">Succulent, high-quality pork</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Card>
              </Link>

              {/* Poultry */}
              <Link href="/collections/poultry" className="group">
                <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/raw-chicken-breast-premium-poultry.jpg"
                      alt="Premium Poultry"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Poultry</h3>
                    <p className="text-muted-foreground text-sm mb-3">Fresh chicken and specialty poultry</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Card>
              </Link>

              {/* Seafood */}
              <Link href="/collections/seafood" className="group">
                <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/raw-fresh-salmon-fillet-premium-seafood.jpg"
                      alt="Premium Seafood"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Seafood</h3>
                    <p className="text-muted-foreground text-sm mb-3">Ocean-fresh fish and shellfish</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Card>
              </Link>

              {/* Sausage */}
              <Link href="/collections/sausage" className="group">
                <Card className="overflow-hidden border-border bg-secondary hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/raw-sausages-premium-butcher.jpg"
                      alt="Premium Sausage"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Sausage</h3>
                    <p className="text-muted-foreground text-sm mb-3">Artisanal sausages and specialty links</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

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
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every cut is carefully selected for exceptional marbling, tenderness, and flavor
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ThermometerSnowflake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Cold Chain Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Temperature-controlled storage and delivery ensure maximum freshness
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Same-day and next-day delivery available across Metro Manila
                </p>
              </div>
            </div>
          </div>
        </section>

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
