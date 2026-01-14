import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThermometerSnowflake, Shield, Clock, Truck } from "lucide-react"

export default function QualityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quality & Handling
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your safety and satisfaction are paramount. Learn about our stringent quality control measures and
                proper handling practices.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Our Quality Standards
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ThermometerSnowflake className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Cold Chain Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From storage to delivery, all products are maintained at optimal temperatures. Our facilities and
                    delivery vehicles are equipped with advanced refrigeration systems.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Food Safety Certified</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our facility complies with all local food safety regulations. Our team is trained in proper food
                    handling and sanitation procedures.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Freshness Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We process orders daily and deliver within hours, not days. Every product comes with a freshness
                    guarantee and clear use-by dates.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Insulated Packaging</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All orders are packed in insulated cooler bags with ice packs to maintain proper temperature during
                    transit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Handling Guidelines */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Safe Handling Guidelines
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Upon Delivery</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Inspect packaging immediately upon receipt</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Transfer to refrigerator or freezer within 30 minutes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Contact us immediately if product temperature seems compromised</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Storage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Keep refrigerated at 0-4°C for immediate use (within 2-3 days)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Freeze at -18°C or below for longer storage</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Store raw meat on the lowest shelf to prevent cross-contamination</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Keep in original packaging or transfer to airtight containers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Thawing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Thaw slowly in the refrigerator overnight (recommended method)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Place in a sealed bag and submerge in cold water for faster thawing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Never thaw at room temperature</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Use thawed meat within 2 days and do not refreeze</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Preparation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Wash hands thoroughly before and after handling raw meat</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Use separate cutting boards for raw meat</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Clean all surfaces and utensils with hot, soapy water</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>Cook to recommended internal temperatures for food safety</span>
                    </li>
                  </ul>
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
