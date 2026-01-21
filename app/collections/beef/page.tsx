import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

// --- CONFIGURATION FOR THIS PAGE ---
const pageData = {
  title: "Beef",
  description: "Experience premium cuts with exceptional marbling and flavor.",
  coverImage: "/assets/BEEF/aus mb6-7 ribeye tomahawk.png", // Make sure this path exists in your public folder
  subCategories: [
    { 
      name: "U.S. Beef", 
      href: "/collections/us-beef",
      image: "/assets/U.S BEEF/SRF gold wagyu striploin.png", // Replace with your actual image
      description: "USDA Prime & Choice cuts"
    },
    { 
      name: "Australian Beef", 
      href: "/collections/australian-beef",
      image: "/assets/BEEF/aus mb6-7 ribeye tomahawk.png", 
      description: "Grass-fed & Grain-fed options"
    },
    { 
      name: "Canadian Beef", 
      href: "/collections/canadian-beef",
      image: "/assets/placeholder-canadian.png", // Add your image
      description: "Premium Canadian raised beef"
    },
    { 
      name: "Japanese Beef", 
      href: "/collections/japanese-beef",
      image: "/assets/placeholder-japanese.png", // Add your image
      description: "Authentic Wagyu A5 & more"
    },
    { 
      name: "Other", 
      href: "/collections/other-beef",
      image: "/assets/placeholder-beef.png", 
      description: "Specialty cuts and trim"
    },
  ]
}

export default function BeefCollectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        
        {/* --- HERO SECTION (Cover Photo) --- */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url('${pageData.coverImage}')` }}
          >
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center px-4 animate-in fade-in zoom-in duration-500">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md">
              {pageData.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light drop-shadow-sm">
              {pageData.description}
            </p>
          </div>
        </section>

        {/* --- SUBCATEGORIES GRID --- */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground">Explore Categories</h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pageData.subCategories.map((sub) => (
                <Link key={sub.name} href={sub.href} className="group h-full">
                  <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card group-hover:-translate-y-1">
                    
                    {/* Card Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder loader */}
                      <img 
                        src={sub.image} 
                        alt={sub.name}
                        className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-center">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {sub.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary uppercase tracking-wider">
                        Shop Now <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}