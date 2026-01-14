import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Steaks and Stuff ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website and
                  use our services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name, email address, phone number, and delivery address</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Communication preferences and correspondence with us</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and our services</li>
                  <li>Send promotional materials (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your information with
                  service providers who assist us in operating our business (e.g., delivery partners, payment
                  processors) and who are bound by confidentiality obligations.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at privacy@steaksandstuff.ph or
                  call +63 2 1234 5678.
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
