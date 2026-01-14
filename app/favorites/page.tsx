import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FavoritesPageClient } from "./favorites-page-client"

export const metadata = {
  title: "My Favorites | Steaks and Stuff",
  description: "View your favorite products",
}

export default function FavoritesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <FavoritesPageClient />
      <SiteFooter />
    </div>
  )
}
