import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold font-playfair text-gray-900 mb-6">
              Creative Design
              <span className="block text-purple-600">That Speaks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Im a commercial graphic designer specializing in product advertising, beverage marketing, and sports
              promotion. I create visually stunning campaigns that drive sales and build brand recognition through
              advanced Photoshop techniques and compelling visual storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Lets Talk</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <Image
                src="/IMG_4582.PNG?height=500&width=500"
                alt="Sarah Johnson - Graphic Designer"
                width={500}
                height={500}
                className="relative z-10 rounded-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            href="#portfolio"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowDown className="animate-bounce" size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
