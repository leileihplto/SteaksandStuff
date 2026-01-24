"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function DeliveringToPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8">
                    Delivering To
                </h1>
                <div className="max-w-4xl mx-auto">
                    <p className="text-muted-foreground text-lg text-center mb-12">
                        We deliver fresh, premium meats to your doorstep. Check our delivery areas and schedules.
                    </p>
                    {/* Delivery information content can be added here */}
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
