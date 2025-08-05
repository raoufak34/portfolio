import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-playfair mb-4">RPK X</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Passionate graphic designer creating visual stories that inspire, engage, and drive results. Lets bring
              your brand to life.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/RaoufAkhrouf" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.instagram.com/raouf.rpk/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/raouf-akhrouf-b37b3a2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://github.com/raoufak34" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Brand Identity</span>
              </li>
              <li>
                <span className="text-gray-400">Web Design</span>
              </li>
              <li>
                <span className="text-gray-400">Print Design</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile App Design</span>
              </li>
              <li>
                <span className="text-gray-400">Packaging Design</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RPK X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
