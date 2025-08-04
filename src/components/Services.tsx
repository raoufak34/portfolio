import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Monitor, Printer, Smartphone, Package, Megaphone } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Product Advertising",
    description:
      "Eye-catching product advertisements with 3D visualization, dynamic effects, and compelling visual storytelling.",
    features: ["3D Product Visualization", "Splash & Liquid Effects", "Commercial Photography", "Brand Integration"],
  },
  {
    icon: Monitor,
    title: "Beverage Marketing",
    description:
      "Specialized in creating stunning beverage advertisements with realistic product shots and premium aesthetics.",
    features: ["Product Photography", "Condensation Effects", "Label Design", "Campaign Development"],
  },
  {
    icon: Megaphone,
    title: "Sports Promotion",
    description: "High-energy sports promotional materials that capture the excitement and drive fan engagement.",
    features: ["Event Promotion", "Athlete Photography", "Dynamic Typography", "Fan Engagement"],
  },
  {
    icon: Smartphone,
    title: "Commercial Design",
    description: "Professional commercial design solutions for brands looking to make a powerful market impact.",
    features: ["Advertisement Design", "Marketing Materials", "Brand Campaigns", "Visual Identity"],
  },
  {
    icon: Package,
    title: "Product Visualization",
    description: "Advanced 3D product visualization and rendering for marketing and advertising purposes.",
    features: ["3D Rendering", "Product Mockups", "Lighting Effects", "Photorealistic Imagery"],
  },
  {
    icon: Printer,
    title: "Print & Digital Media",
    description: "Versatile design solutions for both print and digital platforms with consistent brand messaging.",
    features: ["Print Advertising", "Digital Campaigns", "Social Media Graphics", "Marketing Collateral"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions to help your business stand out and succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
