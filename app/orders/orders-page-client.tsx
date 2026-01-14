"use client"

import { useAuth } from "@/lib/auth-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SignInDialog } from "@/components/sign-in-dialog"

// Mock orders data
const mockOrders = [
  {
    id: "ORD-001",
    date: "January 10, 2026",
    status: "Delivered",
    total: 3500,
    items: [{ name: "Premium Ribeye Steak", quantity: 2, price: 1850 }],
  },
  {
    id: "ORD-002",
    date: "January 5, 2026",
    status: "In Transit",
    total: 2850,
    items: [
      { name: "French Lamb Rack", quantity: 1, price: 2200 },
      { name: "Italian Sausage", quantity: 1, price: 650 },
    ],
  },
]

export function OrdersPageClient() {
  const { isAuthenticated } = useAuth()
  const [showSignIn, setShowSignIn] = useState(false)

  if (!isAuthenticated) {
    return (
      <>
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16 text-center">
            <Package className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Sign in to view your orders</h2>
            <p className="text-muted-foreground mb-6">Track your orders and view your purchase history</p>
            <Button onClick={() => setShowSignIn(true)}>Sign In</Button>
          </div>
        </main>
        <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} />
      </>
    )
  }

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">My Orders</h1>
          <p className="text-muted-foreground">{mockOrders.length} orders</p>
        </div>

        {mockOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="font-medium text-lg text-foreground mb-2">No orders yet</h3>
            <p className="text-sm text-muted-foreground mb-6">Start shopping to see your orders here</p>
            <Button asChild>
              <Link href="/shop">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Order {order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={order.status === "Delivered" ? "secondary" : "default"}>{order.status}</Badge>
                    <span className="font-semibold text-foreground">₱{order.total.toLocaleString()}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.quantity}× {item.name}
                      </span>
                      <span className="text-foreground">₱{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
