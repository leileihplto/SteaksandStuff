import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Shipping Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Delivery Areas</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We currently deliver to all areas within Metro Manila including Makati, Manila, Quezon City,
                  Parañaque, Pasig, Taguig, Mandaluyong, San Juan, Pasay, Las Piñas, Muntinlupa, Marikina, Caloocan,
                  Malabon, Navotas, and Valenzuela.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Delivery Options</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Same-Day Delivery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Orders placed before 12:00 PM will be delivered the same day between 2:00 PM - 8:00 PM. Additional
                      fee: ₱150
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Next-Day Delivery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Orders placed after 12:00 PM will be delivered the next day between 9:00 AM - 6:00 PM. Free for
                      orders over ₱500
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Scheduled Delivery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Choose your preferred delivery date up to 7 days in advance. Free for orders over ₱500
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Delivery Fees</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Free delivery for orders ₱500 and above</li>
                  <li>₱100 delivery fee for orders below ₱500</li>
                  <li>₱150 additional fee for same-day delivery</li>
                  <li>Fees may vary for remote areas within Metro Manila</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Order Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Orders are processed Monday to Saturday. Orders placed on Sunday will be processed on Monday. During
                  peak seasons and holidays, processing times may be extended.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Packaging</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All products are packed in insulated cooler bags with sufficient ice packs to maintain proper
                  temperature throughout delivery. Our delivery vehicles are equipped with refrigeration units to ensure
                  the cold chain is maintained.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Delivery Confirmation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You will receive SMS and email notifications when your order is out for delivery. Our driver will
                  contact you upon arrival. Please ensure someone is available to receive the delivery. We cannot leave
                  perishable items unattended.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Failed Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If delivery cannot be completed due to incorrect address, no one available to receive, or other
                  customer-related issues, a redelivery fee of ₱150 will apply. Orders will be held for 24 hours before
                  cancellation.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For delivery-related questions, contact our customer service at orders@steaksandstuff.ph or call +63
                  917 123 4567.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
