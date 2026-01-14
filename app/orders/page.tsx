import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OrdersPageClient } from "./orders-page-client"

export const metadata = {
  title: "My Orders | Steaks and Stuff",
  description: "View your order history",
}

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <OrdersPageClient />
      <SiteFooter />
    </div>
  )
}
