import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    // Reduced mt-8 to mt-4 to pull it closer to the content above
    <footer className="border-t border-border bg-card mt-4">
      {/* Reduced py-10/12 to py-6 to shrink the vertical height */}
      <div className="container mx-auto px-4 py-6">
        {/* Reduced gap-8/12 to gap-4 to pull columns closer together */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Steaks & Stuff"
                // Shrinking the logo height slightly also saves a lot of space
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground leading-snug">
              Premium quality raw meats delivered to your door.
            </p>
            <div className="mt-3 flex gap-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-medium text-foreground mb-2">Information</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/quality" className="text-muted-foreground hover:text-foreground">Quality & Handling</Link></li>
              <li><Link href="/faqs" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-foreground mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground">Shipping Policy</Link></li>
              <li><Link href="/refund" className="text-muted-foreground hover:text-foreground">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Reduced mt-10/pt-6 to mt-6/pt-4 */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Steaks and Stuff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}