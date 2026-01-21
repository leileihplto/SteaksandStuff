import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Award, ThermometerSnowflake, Truck, ShieldCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/U.S BEEF/SRF gold wagyu striploin.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4" data-testid="page-title">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering premium quality meats to Filipino families since day one
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Quality, Delivered Fresh
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Steaks & Stuff, we believe everyone deserves access to premium, butcher-quality meats without having to leave home. What started as a passion for exceptional cuts has grown into Metro Manila's trusted source for premium raw meats.
                </p>
                <p>
                  We partner directly with the world's finest meat producers - from USDA Prime certified ranches in the United States, to grass-fed farms in Australia and New Zealand, to heritage Kurobuta pork breeders. Every product is hand-selected for quality, marbling, and flavor.
                </p>
                <p>
                  Our commitment goes beyond just selling meat. We ensure every cut arrives at your door in perfect condition through our uncompromising cold chain process, maintaining optimal freshness from our facility to your kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values - FIXED SPACING */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Steaks & Stuff
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quality, safety, and service you can trust
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* CARD 1 */}
              {/* Changed p-8 to p-6 for tighter padding */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                {/* Changed mb-6 to mb-4 to bring title closer */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                {/* Changed mb-3 to mb-2 */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Premium Selection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every cut is carefully selected for exceptional marbling, tenderness, and flavor
                </p>
              </Card>

              {/* CARD 2 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 mx-auto">
                  <ThermometerSnowflake className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Cold Chain Guarantee</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Temperature-controlled storage and delivery ensure maximum freshness
                </p>
              </Card>

              {/* CARD 3 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Truck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Same-day and next-day delivery available across Metro Manila
                </p>
              </Card>

              {/* CARD 4 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4 mx-auto">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strict hygiene standards and proper handling from farm to your table
                </p>
              </Card>

            </div>
          </div>
        </section>

        {/* Sourcing & Handling */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Our Sourcing & Handling Standards
              </h2>

              <div className="grid gap-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Global Sourcing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We source from the world's premier meat producers: USDA Prime beef from the United States, Wagyu from Japan and Snake River Farms, grass-fed lamb from New Zealand, heritage Kurobuta pork, and premium poultry from trusted farms. Every supplier meets our strict quality and ethical standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Hygiene & Safety</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our facility maintains the highest hygiene standards with regular inspections and HACCP compliance. All meats are handled in temperature-controlled environments, properly packaged, and stored at optimal temperatures. We follow strict protocols to ensure food safety at every step.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Freshness Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From the moment we receive our products to the time they reach your door, our cold chain is never broken. We use insulated packaging with gel ice packs to maintain proper temperature during delivery. Your satisfaction and safety are our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}