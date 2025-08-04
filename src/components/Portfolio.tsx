"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "LeBron James - Lakers Poster",
    category: "Sports Marketing",
    client: "NBA Lakers",
    year: "2024",
    image: "/portfolio/rpkdesign_3.png",
    description:
      "Dynamic sports poster featuring LeBron James with halftone effects, multiple player poses, and Lakers branding for fan engagement campaigns.",
    tags: ["Sports Design", "Typography", "Photo Manipulation"],
  },
  {
    id: 2,
    title: "Jean Paul Gaultier - Timeless Elegance",
    category: "Luxury Advertising",
    client: "Jean Paul Gaultier",
    year: "2024",
    image: "/portfolio/PARFUM.png",
    description:
      "Premium perfume advertisement showcasing luxury product photography with elegant typography and sophisticated purple gradient backgrounds.",
    tags: ["Luxury Branding", "Product Photography", "Premium Design"],
  },
  {
    id: 3,
    title: "Spotify Podcast - Host Promotion",
    category: "Digital Media",
    client: "Spotify",
    year: "2024",
    image: "/portfolio/dsigne_2.png",
    description:
      "Professional podcast promotional design integrating Spotify branding with clean typography and portrait photography for digital platforms.",
    tags: ["Digital Marketing", "Brand Integration", "Social Media"],
  },
  {
    id: 4,
    title: "Basketball VICE - Player Poster",
    category: "Sports Design",
    client: "Professional Basketball",
    year: "2024",
    image: "/portfolio/designe.png",
    description:
      "High-energy basketball poster with bold VICE typography, dynamic player photography, and striking green gradient lighting effects.",
    tags: ["Sports Marketing", "Bold Typography", "Dynamic Lighting"],
  },
  {
    id: 5,
    title: "Fanta Orange - Product Advertisement",
    category: "Product Advertising",
    client: "Coca-Cola Company",
    year: "2023",
    image: "/portfolio/fanta-orange-ad.png",
    description:
      "Dynamic product advertisement featuring 3D visualization, splash effects, and vibrant orange branding for beverage marketing campaign.",
    tags: ["3D Visualization", "Product Design", "Beverage Marketing"],
  },
  {
    id: 6,
    title: "Ready Set Go - Sports Promotion",
    category: "Sports Marketing",
    client: "Sports Event",
    year: "2023",
    image: "/portfolio/sports-promo-design.png",
    description:
      "High-energy sports promotional design with bold typography, athlete photography, and dynamic lighting effects for fan day event.",
    tags: ["Event Promotion", "Sports Photography", "Fan Engagement"],
  },
  {
    id: 7,
    title: "Passion Strawberry - Beverage Campaign",
    category: "Product Advertising",
    client: "Beverage Brand",
    year: "2023",
    image: "/portfolio/passion-strawberry-ad.png",
    description:
      "Premium beverage advertisement showcasing product photography, condensation effects, and elegant typography on gradient backgrounds.",
    tags: ["Product Photography", "Beverage Design", "Premium Branding"],
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of commercial design projects showcasing expertise across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm"
                        onClick={() => openLightbox(index)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white font-medium">{item.category}</Badge>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900 font-medium">
                      {item.year}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client Info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600">{item.client}</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
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

              {/* Enhanced Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{portfolioItems[selectedImage].title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span>{portfolioItems[selectedImage].client}</span>
                      <span>•</span>
                      <span>{portfolioItems[selectedImage].year}</span>
                      <span>•</span>
                      <Badge className="bg-purple-600 text-white">{portfolioItems[selectedImage].category}</Badge>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {selectedImage + 1} of {portfolioItems.length}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{portfolioItems[selectedImage].description}</p>

                <div className="flex flex-wrap gap-2">
                  {portfolioItems[selectedImage].tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
