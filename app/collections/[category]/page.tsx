import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackButton } from "@/components/ui/back-button"
import { CategorySection } from "@/components/category-section"
import { notFound } from "next/navigation"
import { products as allProducts, getAllCategories } from "@/lib/products"

// Configuration for Page Titles
const pageTitles: Record<string, string> = {
  "beef": "Beef Collection",
  "pork": "Pork Collection",
  "lamb": "Lamb Collection",
  "poultry": "Poultry",
  "seafood": "Seafood",
  "sausage": "Sausages",
  "potato": "Potatoes",
  "spices": "Spices",
  "sauces": "Sauces",
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-"),
  }))
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.category.toLowerCase()

  // 1. Get ALL products relevant to this main category
  const categoryProducts = allProducts.filter(p => {
    const cat = p.category.toLowerCase()
    const name = p.name.toLowerCase()
    
    if (slug === 'beef') return cat.includes('beef')
    if (slug === 'pork') return cat.includes('pork')
    if (slug === 'lamb') return cat.includes('lamb')
    
    return cat.includes(slug) || name.includes(slug)
  })

  if (categoryProducts.length === 0) return notFound()

  // 2. ORGANIZE INTO GROUPS (General Beef is now FIRST)
  let sections: { title: string; items: typeof allProducts }[] = []

  if (slug === 'beef') {
    sections = [
      {
        title: "General Beef",
        // Shows items that are NOT US, NOT Japanese, NOT Australian, NOT Canadian
        items: categoryProducts.filter(p => 
          p.category !== "U.S Beef" && 
          !p.name.includes("Japanese") && 
          !p.name.includes("Australian") && 
          !p.name.includes("Canadian")
        )
      },
      {
        title: "U.S. Beef",
        // Strictly checks the category "U.S Beef"
        items: categoryProducts.filter(p => p.category === "U.S Beef")
      },
      {
        title: "Japanese Wagyu",
        // Strictly checks for "Japanese"
        items: categoryProducts.filter(p => p.name.includes("Japanese"))
      },
      {
        title: "Australian Beef",
        items: categoryProducts.filter(p => p.name.includes("Australian"))
      },
      {
        title: "Canadian Beef",
        items: categoryProducts.filter(p => p.name.includes("Canadian"))
      }
    ]
  } else if (slug === 'pork') {
    sections = [
      {
        title: "General Pork",
        // Everything else that isn't US Pork
        items: categoryProducts.filter(p => p.category !== "U.S Pork" && !p.name.includes("Kurobuta"))
      },
      {
        title: "U.S. & Kurobuta Pork",
        items: categoryProducts.filter(p => p.category === "U.S Pork" || p.name.includes("Kurobuta"))
      }
    ]
  } else if (slug === 'lamb') {
    sections = [
      {
        title: "Lamb Cuts",
        items: categoryProducts.filter(p => !p.name.includes("U.S."))
      },
      {
        title: "U.S. Lamb",
        items: categoryProducts.filter(p => p.name.includes("U.S."))
      }
    ]
  } else {
    // Default for Spices, Sauces, etc.
    sections = [
      {
        title: "All Products",
        items: categoryProducts
      }
    ]
  }

  // Filter out empty sections
  const validSections = sections.filter(section => section.items.length > 0)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="bg-muted/30 py-8 md:py-12">
            <div className="container mx-auto px-4">
                <BackButton />
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 capitalize">
                    {pageTitles[slug] || slug}
                </h1>
            </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {validSections.map((section) => (
            <CategorySection 
              key={section.title} 
              title={section.title} 
              products={section.items} 
            />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}