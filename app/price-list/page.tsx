"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PriceListPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8">
                    Price List
                </h1>
                <div className="max-w-4xl mx-auto">
                    <p className="text-muted-foreground text-lg text-center mb-12">
                        Browse our competitive prices for premium quality meats and products.
                    </p>
                    {/* Price list content can be added here */}
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
