import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
    >
      {/* ✅ شبكة SVG في الخلفية */}
      <div
        className="absolute inset-0 -z-10 bg-white"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)">
            <animate
              attributeName="x"
              from="0"
              to="40"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              from="0"
              to="40"
              dur="10s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      {/* ✅ المحتوى */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold font-playfair text-gray-900 mb-6">
              Creative Design
              <span className="block text-purple-600">That Speaks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Im a commercial graphic designer specializing in product advertising, beverage marketing. I create visually stunning campaigns that drive sales and build brand recognition through
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
              <Image
                src="/IMG_4582.PNG"
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
