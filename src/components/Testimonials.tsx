import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Ramy Medjoubi",
    role: "CEO, TechStart",
    image: "/ramy.png?height=80&width=80",
    content:
      "RPK X transformed our brand identity completely. Her creative vision and attention to detail exceeded our expectations. Our new brand has helped us attract more clients and stand out in the market.",
    rating: 5,
  },
  {
    name: "Hamadouch Ayoub",
    role: "Marketing Director, GreenTech",
    image: "/ayoub.jpg?height=80&width=80",
    content:
      "Working with RPK X was a fantastic experience. She understood our vision perfectly and delivered designs that truly represent our company values. Highly recommended!",
    rating: 5,
  },
  {
    name: "Hichem Merniz",
    role: "Founder, Artisan Bakery",
    image: "/hichem.jpg?height=80&width=80",
    content:
      "RPK X designed our website and packaging, and the results have been amazing. Our online sales increased by 40% after the redesign. She really knows how to create designs that convert.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dont just take my word for it—heres what my clients have to say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
