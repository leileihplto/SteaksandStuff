import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-8">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Steaks & Stuff"
                className="h-24 md:h-[7.5rem] w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Premium quality raw meats delivered to your door. Experience butcher-quality cuts.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/collections/us-beef" className="text-muted-foreground hover:text-foreground transition-colors">
                  U.S Beef
                </Link>
              </li>
              <li>
                <Link href="/collections/beef" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beef
                </Link>
              </li>
              <li>
                <Link href="/collections/pork" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pork
                </Link>
              </li>
              <li>
                <Link href="/collections/poultry" className="text-muted-foreground hover:text-foreground transition-colors">
                  Poultry
                </Link>
              </li>
              <li>
                <Link href="/collections/seafood" className="text-muted-foreground hover:text-foreground transition-colors">
                  Seafood
                </Link>
              </li>
              <li>
                <Link href="/collections/lamb" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lamb
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-muted-foreground hover:text-foreground transition-colors">
                  Quality & Handling
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-muted-foreground hover:text-foreground transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Steaks and Stuff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
