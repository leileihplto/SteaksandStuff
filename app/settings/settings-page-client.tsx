"use client"

import type React from "react"

import { useAuth } from "@/lib/auth-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"
import { useState } from "react"
import { SignInDialog } from "@/components/sign-in-dialog"
import { toast } from "sonner"

export function SettingsPageClient() {
  const { user, isAuthenticated } = useAuth()
  const [showSignIn, setShowSignIn] = useState(false)

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Settings saved successfully!")
  }

  if (!isAuthenticated) {
    return (
      <>
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16 text-center">
            <Settings className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Sign in to manage settings</h2>
            <p className="text-muted-foreground mb-6">Access your account preferences and settings</p>
            <Button onClick={() => setShowSignIn(true)}>Sign In</Button>
          </div>
        </main>
        <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} />
      </>
    )
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>

        <form onSubmit={handleSaveSettings} className="space-y-6">
          <Card className="p-6">
            <h2 className="font-medium text-lg text-foreground mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={user?.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={user?.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+63 912 345 6789" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-medium text-lg text-foreground mb-4">Delivery Address</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Manila" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal Code</Label>
                  <Input id="postal" placeholder="1000" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-medium text-lg text-foreground mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Get special offers and promotions</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
            </div>
          </Card>

          <Button type="submit" size="lg" className="w-full">
            Save Changes
          </Button>
        </form>
      </div>
    </main>
  )
}
