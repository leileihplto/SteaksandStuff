"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <Button 
      variant="ghost" 
      onClick={() => router.back()} 
      className="gap-2 pl-0 hover:pl-2 transition-all mb-4 text-muted-foreground hover:text-primary"
    >
      <ChevronLeft className="h-4 w-4" />
      Back
    </Button>
  )
}