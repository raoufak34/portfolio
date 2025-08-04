import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}
