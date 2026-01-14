import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { FavoritesProvider } from "@/lib/favorites-context"
import { Toaster } from "@/components/ui/sonner"

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Steaks and Stuff | Premium Raw Meat Delivered",
  description:
    "Premium quality raw beef, lamb, pork, poultry, seafood, and specialty meats delivered to your door. Experience luxury butcher-quality cuts.",
  keywords: [
    "premium beef",
    "raw meat delivery",
    "butcher",
    "lamb",
    "pork",
    "poultry",
    "seafood",
    "Manila",
    "Philippines",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F1F1F",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        <AuthProvider>
          <FavoritesProvider>
            <CartProvider>
              {children}
              <Toaster />
            </CartProvider>
          </FavoritesProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
