import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about our products, ordering, and delivery.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    What areas do you deliver to?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We currently deliver to all areas within Metro Manila. Same-day delivery is available for orders
                    placed before 12:00 PM. Next-day delivery is available for orders placed after 12:00 PM.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    How are the products kept fresh during delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    All products are packed in insulated cooler bags with sufficient ice packs to maintain proper
                    temperature throughout transit. Our delivery vehicles are also equipped with refrigeration to ensure
                    the cold chain is never broken.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We offer a 7-day return policy for products that do not meet our quality standards. If you receive a
                    product that appears compromised or does not meet expectations, please contact us immediately with
                    photos and we will arrange for a replacement or full refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    Are your meats frozen or fresh?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Most of our products are delivered fresh (chilled at 0-4°C) unless otherwise specified. Some
                    specialty items may be frozen. Product descriptions clearly indicate whether items are fresh or
                    frozen. We recommend freezing fresh items immediately if you do not plan to use them within 2-3
                    days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We accept credit/debit cards (Visa, Mastercard, American Express), GCash, PayMaya, and bank
                    transfers. Cash on delivery is also available for select areas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    How long can I store the products?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Fresh (refrigerated) products should be used within 2-3 days. Frozen products can be stored for up
                    to 6 months at -18°C or below. Always check the use-by date on the packaging and follow proper
                    storage guidelines.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    Can I request specific cuts or custom orders?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes! We accept custom orders for specific cuts, thicknesses, or quantities. Please contact us at
                    least 48 hours in advance for custom orders. Additional charges may apply depending on the request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    What is your minimum order amount?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Our minimum order amount is ₱500 for free delivery within Metro Manila. Orders below ₱500 are
                    subject to a ₱100 delivery fee.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    Where do you source your meats?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We work with trusted local and international suppliers who meet our strict quality standards. Our
                    beef comes from USDA-certified sources, lamb from New Zealand and Australia, and seafood from
                    sustainable fisheries. All suppliers are regularly audited for quality and food safety compliance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                    Do you offer gift certificates or corporate orders?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes, we offer gift certificates in various denominations. For corporate orders, bulk purchases, or
                    special events, please contact our customer service team for customized pricing and delivery
                    arrangements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
