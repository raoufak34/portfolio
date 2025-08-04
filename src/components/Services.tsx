import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Monitor, Palette, Users, Zap, Target } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Social Media Design",
    description:
      "Eye-catching social media posts and graphics that drive engagement and build brand presence across all platforms.",
    features: [
      "Instagram Posts",
      "Facebook Graphics",
      "Twitter Visuals",
      "LinkedIn Content",
      "Story Templates",
      "Brand Consistency",
    ],
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "User-centered interface design that creates intuitive and engaging digital experiences for web and mobile applications.",
    features: [
      "Mobile App UI",
      "Web Interface Design",
      "User Experience Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    icon: Palette,
    title: "Digital Brand Identity",
    description:
      "Comprehensive digital branding solutions that establish strong visual identity across digital platforms.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palettes",
      "Typography Systems",
      "Digital Assets",
      "Brand Applications",
    ],
  },
  {
    icon: Users,
    title: "Social Media Campaigns",
    description:
      "Complete social media campaign design from concept to execution, ensuring consistent brand messaging.",
    features: [
      "Campaign Strategy",
      "Content Planning",
      "Visual Storytelling",
      "Multi-Platform Design",
      "Engagement Graphics",
      "Brand Campaigns",
    ],
  },
  {
    icon: Zap,
    title: "Interactive Design",
    description:
      "Dynamic and interactive design elements that enhance user engagement and create memorable digital experiences.",
    features: [
      "Interactive Prototypes",
      "Micro-Interactions",
      "Animation Design",
      "User Flow Design",
      "Interactive Elements",
      "Engagement Features",
    ],
  },
  {
    icon: Target,
    title: "Digital Marketing Graphics",
    description:
      "Compelling marketing visuals designed specifically for digital platforms to maximize conversion and engagement.",
    features: [
      "Ad Creatives",
      "Banner Design",
      "Promotional Graphics",
      "Email Templates",
      "Landing Page Design",
      "Conversion Optimization",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in social media design and UI/UX, I create digital experiences that engage audiences and drive
            results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-6 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Whats Included:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-gray-700 transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h3>
            <p className="text-xl mb-6 text-purple-100">
              Lets create stunning social media content and user experiences that engage your audience and drive
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
