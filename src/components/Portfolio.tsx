"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Fanta Orange - Product Advertisement",
    category: "Product Advertising",
    image: "/portfolio/fanta-orange-ad.png",
    description:
      "Dynamic product advertisement featuring 3D visualization, splash effects, and vibrant orange branding for beverage marketing campaign.",
  },
  {
    id: 2,
    title: "Ready Set Go - Sports Promotion",
    category: "Sports Marketing",
    image: "/portfolio/sports-promo-design.png",
    description:
      "High-energy sports promotional design with bold typography, athlete photography, and dynamic lighting effects for fan day event.",
  },
  {
    id: 3,
    title: "Passion Strawberry - Beverage Campaign",
    category: "Product Advertising",
    image: "/portfolio/passion-strawberry-ad.png",
    description:
      "Premium beverage advertisement showcasing product photography, condensation effects, and elegant typography on gradient backgrounds.",
  },
  {
    id: 4,
    title: "Jean Paul Gaultier - Timeless Elegance",
    category: "Luxury Advertising",
    image: "/portfolio/PARFUM.png",
    description:
      "Premium perfume advertisement showcasing luxury product photography with elegant typography and sophisticated purple gradient backgrounds.",
  },
  {
    id: 5,
    title: "LeBron James - Lakers Poster",
    category: "Sports Marketing",
    image: "/portfolio/rpkdesign_3.png",
    description:
      "Dynamic sports poster featuring LeBron James with halftone effects, multiple player poses, and Lakers branding for fan engagement campaigns.",
  },
  {
    id: 6,
    title: "Basketball VICE - Player Poster",
    category: "Sports Design",
    image: "/portfolio/designe.png",
    description:
      "High-energy basketball poster with bold VICE typography, dynamic player photography, and striking green gradient lighting effects.",
  },
  {
    id: 7,
    title: "Spotify Podcast - Host Promotion",
    category: "Digital Media",
    image: "/portfolio/dsigne_2.png",
    description:
      "Professional podcast promotional design integrating Spotify branding with clean typography and portrait photography for digital platforms.",
  },
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : portfolioItems.length - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < portfolioItems.length - 1 ? selectedImage + 1 : 0)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for creating impactful visual solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Main Image */}
              <div
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={portfolioItems[selectedImage].image || "/placeholder.svg"}
                  alt={portfolioItems[selectedImage].title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{portfolioItems[selectedImage].title}</h3>
                <p className="text-sm text-gray-300 mb-2">{portfolioItems[selectedImage].description}</p>
                <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                  {portfolioItems[selectedImage].category}
                </span>
                <div className="mt-2 text-xs text-gray-400">
                  {selectedImage + 1} of {portfolioItems.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
