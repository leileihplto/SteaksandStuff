"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  ThermometerSnowflake, 
  Truck, 
  ShieldCheck, 
  Globe, 
  Snowflake, 
  ChevronDown, 
  ChevronUp,
} from "lucide-react"

// --- CONFIGURATION ---
const sourcingFeatures = [
  {
    title: "Global Sourcing",
    icon: Globe, 
    shortDesc: "Sourcing from the world's premier meat producers.",
    longDesc: "We source USDA Prime beef from the United States, Wagyu from Japan and Snake River Farms, grass-fed lamb from New Zealand, heritage Kurobuta pork, and premium poultry from trusted farms. Every supplier meets our strict quality and ethical standards."
  },
  {
    title: "Hygiene & Safety",
    icon: ShieldCheck,
    shortDesc: "HACCP compliant with strict safety protocols.",
    longDesc: "Our facility maintains the highest hygiene standards with regular inspections and HACCP compliance. All meats are handled in temperature-controlled environments, properly packaged, and stored at optimal temperatures. We follow strict protocols to ensure food safety at every step."
  },
  {
    title: "Freshness Guarantee",
    icon: Snowflake,
    shortDesc: "Unbroken cold chain delivery to your door.",
    longDesc: "From the moment we receive our products to the time they reach your door, our cold chain is never broken. We use insulated packaging with gel ice packs to maintain proper temperature during delivery. Your satisfaction and safety are our top priorities."
  },
]

// --- SUB-COMPONENT: COMPACT EXPANDABLE CARD ---
function ExpandableFeatureCard({ feature }: { feature: typeof sourcingFeatures[0] }) {
    const [isOpen, setIsOpen] = useState(false)
    const Icon = feature.icon
    
    return (
      <Card className="border-none shadow-sm bg-card h-fit overflow-hidden hover:shadow-md transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center justify-start">
           
          {/* ICON - UPDATED TO MATCH HOME PAGE SIZE (w-24 h-24) */}
          <div className="flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full text-primary mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-12 w-12" strokeWidth={1.5} />
          </div>
  
          {/* TITLE */}
          <h3 className="text-xl font-serif font-bold mb-2 leading-tight">
            {feature.title}
          </h3>
           
          {/* SHORT DESCRIPTION */}
          <p className="text-muted-foreground text-sm leading-relaxed m-0 p-0">
            {feature.shortDesc}
          </p>
  
          {/* EXPANDABLE SECTION */}
          <div 
            className={`grid transition-all duration-300 ease-in-out text-sm text-muted-foreground text-left w-full
            ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4 border-t pt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
          >
             <div className="overflow-hidden">
                 <p className="leading-relaxed m-0">{feature.longDesc}</p>
             </div>
          </div>
  
          {/* TOGGLE BUTTON */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-primary text-xs uppercase tracking-wider font-bold hover:bg-primary/10 mt-3 w-full h-8 px-0"
          >
             {isOpen ? ( 
                <span className="flex items-center justify-center">Close <ChevronUp className="ml-1 h-3 w-3"/></span> 
             ) : ( 
                <span className="flex items-center justify-center">See More <ChevronDown className="ml-1 h-3 w-3"/></span> 
             )}
          </Button>

        </CardContent>
      </Card>
    )
  }

// --- MAIN PAGE COMPONENT ---
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        
        {/* HERO SECTION */}
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
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering premium quality meats to Filipino families since day one
            </p>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Quality, Delivered Fresh
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At <span className="font-bold text-foreground">STEAKS & STUFF</span>, we believe everyone deserves access to <span className= "text-foreground">premium</span>, butcher-quality meats without having to leave home. What started as a passion for exceptional cuts has grown into Metro Manila&apos;s trusted source for premium raw meats.
                </p>
                <p>
                  We partner directly with the world&apos;s finest meat producers - from USDA Prime certified ranches in the United States, to grass-fed farms in Australia and New Zealand, to heritage Kurobuta pork breeders. Every product is hand-selected for quality, marbling, and flavor.
                </p>
                <p>
                  Our commitment goes beyond just selling meat. We ensure every cut arrives at your door in perfect condition through our uncompromising cold chain process, maintaining optimal freshness from our facility to your kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES (Static Cards) */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Steaks & Stuff
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quality, safety, and service you can trust
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
               
              {/* CARD 1 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                {/* UPDATED SIZE: w-24 h-24 */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Premium Selection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every cut is carefully selected for exceptional marbling, tenderness, and flavor
                </p>
              </Card>

              {/* CARD 2 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                {/* UPDATED SIZE: w-24 h-24 */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <ThermometerSnowflake className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Cold Chain Guarantee</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Temperature-controlled storage and delivery ensure maximum freshness
                </p>
              </Card>

              {/* CARD 3 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                {/* UPDATED SIZE: w-24 h-24 */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Same-day and next-day delivery available across Metro Manila
                </p>
              </Card>

              {/* CARD 4 */}
              <Card className="flex flex-col items-center p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                {/* UPDATED SIZE: w-24 h-24 */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
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

        {/* SOURCING & HANDLING (Expandable Features) */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Our Standards
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                    Discover how we source, handle, and deliver premium quality meats.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {sourcingFeatures.map((feature, index) => (
                 <ExpandableFeatureCard key={index} feature={feature} />
              ))}
            </div>

          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}