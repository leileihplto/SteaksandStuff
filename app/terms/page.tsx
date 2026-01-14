import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Steaks and Stuff website and services, you accept and agree to be bound by
                  these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Use of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information when placing orders</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not interfere with or disrupt the service</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Orders and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All orders are subject to availability and acceptance. We reserve the right to refuse or cancel orders
                  at our discretion. Prices are in Philippine Pesos and are subject to change without notice. Payment
                  must be received before order fulfillment.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Product Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product descriptions and images. However, we do not warrant that product
                  descriptions, images, or other content are accurate, complete, or error-free. Weight and size may vary
                  slightly from listed specifications.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Steaks and Stuff shall not be liable for any indirect,
                  incidental, special, or consequential damages arising from your use of our services or products.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service are governed by the laws of the Republic of the Philippines. Any disputes
                  arising from these terms shall be subject to the exclusive jurisdiction of the courts of Makati City,
                  Philippines.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting. Your continued use of the service after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, contact us at legal@steaksandstuff.ph or call +63 2 1234
                  5678.
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
