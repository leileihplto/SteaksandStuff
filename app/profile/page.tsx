"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8">
                    Profile
                </h1>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-muted-foreground text-lg">
                        Manage your account settings and preferences.
                    </p>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
