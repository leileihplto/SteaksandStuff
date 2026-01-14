import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function RefundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Refund Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Our Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to delivering the highest quality products. If you are not completely satisfied with
                  your purchase, we offer a 7-day return and refund policy for products that do not meet our quality
                  standards.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Eligible Returns</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">You may request a return or refund if:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The product arrived in poor condition or compromised packaging</li>
                  <li>The product does not match the description or what was ordered</li>
                  <li>The product is past its use-by date upon delivery</li>
                  <li>You received the wrong product</li>
                  <li>The product shows signs of quality issues</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Non-Eligible Returns</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We cannot accept returns or provide refunds for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Products that have been improperly stored after delivery</li>
                  <li>Products purchased more than 7 days ago (unless frozen and unopened)</li>
                  <li>Products that show signs of improper handling by the customer</li>
                  <li>Change of mind or personal preference</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Return Process</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">To initiate a return:</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Contact us within 24 hours of delivery at returns@steaksandstuff.ph</li>
                  <li>Provide your order number and photos of the product issue</li>
                  <li>Our team will review and respond within 24 hours</li>
                  <li>If approved, we will arrange pickup or provide return instructions</li>
                  <li>Keep the product refrigerated until pickup</li>
                </ol>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Refund Method</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Approved refunds will be processed within 5-7 business days using your original payment method. For
                  cash payments, we will process a bank transfer or provide store credit at your preference.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Replacement Option</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Instead of a refund, we can offer a free replacement of the same product or equivalent value. This is
                  often the fastest solution and we'll prioritize delivery of your replacement order.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Order Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Orders can be cancelled free of charge up to 1 hour after placement. After processing has begun, a
                  cancellation fee of 20% may apply. Orders already out for delivery cannot be cancelled.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For return and refund inquiries, contact us at returns@steaksandstuff.ph or call +63 2 1234 5678.
                  We're here to ensure your complete satisfaction.
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
