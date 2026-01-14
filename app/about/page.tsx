import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Award, Heart, Users, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Story</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Since our founding, Steaks and Stuff has been committed to delivering the finest quality raw meats to
                homes across Metro Manila. We believe exceptional meals start with exceptional ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                What We Stand For
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Premium Quality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We source only the finest cuts from trusted suppliers who share our commitment to quality. Every
                    product is carefully inspected to meet our rigorous standards.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Customer First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your satisfaction is our priority. From selection to delivery, we ensure every step of your
                    experience exceeds expectations.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Expert Team</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our butchers and meat specialists bring decades of combined experience, ensuring expert cutting and
                    preparation of every order.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Sustainable Sourcing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We partner with suppliers who practice ethical and sustainable farming, ensuring quality while
                    respecting the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Our Process
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Careful Selection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We personally select each cut from trusted suppliers, ensuring only the best makes it to our
                      facility.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Expert Preparation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our skilled butchers trim and prepare each cut with precision, following traditional techniques
                      and modern food safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Temperature Control</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All products are stored in temperature-controlled environments and packaged in insulated
                      containers for delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We deliver directly to your door with same-day and next-day options, ensuring your meats arrive
                      fresh and ready to cook.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
