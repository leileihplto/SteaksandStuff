import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackButton } from "@/components/ui/back-button"
import { CategorySection } from "@/components/category-section"
import { notFound } from "next/navigation"
import { products as allProducts, getAllCategories } from "@/lib/products"

// --- CONFIGURATION: COVER PHOTOS ---
const categoryConfig: Record<string, { title: string; image: string; description: string }> = {
  beef: {
    title: "BEEF",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070&auto=format&fit=crop",
    description: "Premium cuts including US, Japanese Wagyu, and Australian selections.",
  },
  pork: {
    title: "PORK",
    image: "https://images.unsplash.com/photo-1602490539958-f58c49e79844?q=80&w=2070&auto=format&fit=crop",
    description: "Tender Kurobuta and premium pork cuts for every meal.",
  },
  lamb: {
    title: "LAMB",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea616?q=80&w=2070&auto=format&fit=crop",
    description: "Distinctive flavor and tenderness from the finest flocks.",
  },
  poultry: {
    title: "POULTRY",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop",
    description: "Farm-fresh chicken and poultry essentials.",
  },
  sausage: {
    title: "SAUSAGES",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop",
    description: "Hand-crafted sausages bursting with flavor.",
  },
  potato: {
    title: "POTATOES",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2070&auto=format&fit=crop",
    description: "The perfect sides to complement your main course.",
  },
  seafood: {
    title: "SEAFOOD",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=2088&auto=format&fit=crop",
    description: "Fresh catches from the ocean to your table.",
  },
  sauces: {
    title: "SAUCES",
    image: "https://images.unsplash.com/photo-1472476443507-c7a392dd6182?q=80&w=2000&auto=format&fit=crop",
    description: "Rich sauces to elevate your dining experience.",
  },
  spices: {
    title: "SPICES",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    description: "Aromatic blends to perfect your seasoning.",
  },
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-"),
  }))
}

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.category.toLowerCase()

  const config = categoryConfig[slug] || { 
    title: slug.toUpperCase(), 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80", 
    description: "Browse our premium selection." 
  }

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

  // 2. ORGANIZE INTO GROUPS (Preserving your specific logic)
  let sections: { title: string; items: typeof allProducts }[] = []

  if (slug === 'beef') {
    sections = [
      {
        title: "General Beef",
        items: categoryProducts.filter(p => 
          p.category !== "U.S Beef" && 
          !p.name.includes("Japanese") && 
          !p.name.includes("Australian") && 
          !p.name.includes("Canadian")
        )
      },
      {
        title: "U.S. Beef",
        items: categoryProducts.filter(p => p.category === "U.S Beef")
      },
      {
        title: "Japanese Wagyu",
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
    sections = [
      {
        title: "All Products",
        items: categoryProducts
      }
    ]
  }

  const validSections = sections.filter(section => section.items.length > 0)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        
        {/* --- HERO SECTION --- */}
        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${config.image}')` }}
            >
                {/* Darker Overlay (60% opacity) for better text contrast */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Centered Text - NO BORDER, BIGGER FONT */}
            <div className="relative z-10 text-center px-4 w-full">
                <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase">
                    {config.title}
                </h1>
                {/* Optional: Description is hidden on mobile to keep it clean, visible on desktop */}
                <p className="mt-4 text-lg md:text-2xl text-white/80 font-medium max-w-2xl mx-auto hidden md:block">
                    {config.description}
                </p>
            </div>
        </div>

        {/* --- PRODUCT SECTIONS --- */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
             <BackButton />
          </div>
          
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