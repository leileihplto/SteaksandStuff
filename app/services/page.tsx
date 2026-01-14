import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Scissors, Users, Package, Truck } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/BEEF/canadian prime ribeye bone in.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4" data-testid="page-title">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Customized solutions for every need
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 max-w-4xl mx-auto">
              {/* Custom Cuts */}
              <Card className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Scissors className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Custom Cuts</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Need a specific cut or thickness? We offer custom butchering services to your exact specifications. Whether you need steaks cut to a particular thickness, special trim requirements, or unique portioning, our experienced butchers can accommodate your requests.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom thickness for steaks (1 inch, 1.5 inch, 2 inch)</li>
                      <li>• Special trim specifications</li>
                      <li>• Portion control cuts</li>
                      <li>• Frenched or trimmed to preference</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Bulk Orders */}
              <Card className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Bulk Orders</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Planning a big event, celebration, or stocking up? We offer special pricing and packaging for bulk orders. Perfect for family gatherings, celebrations, or monthly meal prep. Contact us for customized bulk packages and competitive pricing.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Volume discounts available</li>
                      <li>• Customized packaging options</li>
                      <li>• Flexible delivery scheduling</li>
                      <li>• Mixed product bundles</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Restaurant & Reseller Supply */}
              <Card className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Restaurant & Reseller Supply</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      We supply premium meats to restaurants, hotels, catering services, and resellers across Metro Manila. Consistent quality, reliable delivery schedules, and competitive wholesale pricing. Our B2B service includes dedicated account management and flexible payment terms.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Wholesale pricing for qualified businesses</li>
                      <li>• Consistent quality and supply</li>
                      <li>• Scheduled regular deliveries</li>
                      <li>• Dedicated account manager</li>
                      <li>• Flexible payment terms</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Packaging & Delivery */}
              <Card className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Packaging & Delivery Options</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      All products are vacuum-sealed or packaged in food-grade materials to maintain freshness. We use insulated cooler bags with gel ice packs to ensure temperature control during delivery. Choose from same-day, next-day, or scheduled delivery options.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Vacuum-sealed packaging for extended freshness</li>
                      <li>• Insulated cooler bags with gel ice packs</li>
                      <li>• Same-day delivery (orders before 12PM)</li>
                      <li>• Next-day delivery across Metro Manila</li>
                      <li>• Scheduled delivery for regular customers</li>
                      <li>• Contactless delivery available</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss your specific requirements. Our team is ready to create a customized solution for your needs.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
