import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SettingsPageClient } from "./settings-page-client"

export const metadata = {
  title: "Settings | Steaks and Stuff",
  description: "Manage your account settings",
}

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <SettingsPageClient />
      <SiteFooter />
    </div>
  )
}
