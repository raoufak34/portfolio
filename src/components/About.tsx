import Image from "next/image"
import { Award, Users, Coffee, Palette } from "lucide-react"

const stats = [
  { icon: Award, label: "Years Experience", value: "+2" },
  { icon: Users, label: "Happy Clients", value: "10+" },
  { icon: Coffee, label: "Projects Completed", value: "15+" },
  { icon: Palette, label: "Design Awards", value: "12" },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Akhrouf Abderraouf I’m a 21-year-old Computer Science student in
 my third year of university, With degrees in Computer Science , and
 a strong passion for web development and user interface design.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In addition, I am a graphic designer with experience in creating visual identities, digital advertisements, and marketing content. I combine technical expertise with creative skills to deliver effective digital solutions, professional designs, and outstanding user experiences that meet market needs and achieve measurable results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/IMG_4582.PNG?height=600&width=500"
              alt="Sarah working on design projects"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-600 rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-lg opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
