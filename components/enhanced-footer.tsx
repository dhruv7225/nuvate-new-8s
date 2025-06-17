"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Scissors,
  Droplets,
  ShoppingCart,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from "lucide-react"

export default function EnhancedFooter() {
  const solutions = [
    {
      title: "StitchIT",
      description: "Garment Manufacturing ERP",
      href: "/stitchit",
      icon: Scissors,
      color: "text-orange-600",
    },
    {
      title: "WashIT",
      description: "Industrial Laundry Management",
      href: "/washit",
      icon: Droplets,
      color: "text-blue-600",
    },
    {
      title: "DigitAil",
      description: "E-commerce Solution",
      href: "/digitail",
      icon: ShoppingCart,
      color: "text-purple-600",
    },
    {
      title: "HR TECH",
      description: "HR Management System",
      href: "/hrtech",
      icon: Users,
      color: "text-green-600",
    },
  ]

  const company = [
    { title: "About Us", href: "/about" },
    { title: "Our Team", href: "/team" },
    { title: "Careers", href: "/careers" },
    { title: "Contact Us", href: "/contact" },
    
  ]

  const resources = [
    { title: "Case Studies", href: "/case-studies" },
    { title: "Blog", href: "/blog" },
    { title: "Support", href: "/support" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section 
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-slate-400">
                Get the latest updates on our products, industry insights, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      */}
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <span className="text-xl font-bold">Nuvate</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  Technology Pvt Ltd
                </Badge>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Leading technology solutions provider specializing in industry-specific ERP systems. Transforming
              businesses with innovative software solutions since 2014.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-slate-300">+91 76007 67857</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-slate-300">info@nuvatetechnology.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-500 mt-1" />
                <span className="text-slate-300">
                  B-901, Empire Business Hub,
                  <br />
                  Science City Road, Ahmedabad,
                  <br />
                  Gujarat 380060, India
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/nuvate"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                target="_blank"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/nuvate"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                target="_blank"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/nuvate-it-solutions/"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/nuvate_technology"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                target="_blank"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCXmi3NChhHn9HV6rdWH5Hlw/videos"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                target="_blank"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-6">Our Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution.title}>
                  <Link
                    href={solution.href}
                    className="group flex items-center space-x-3 hover:text-orange-400 transition-colors"
                  >
                    <solution.icon className={`h-4 w-4 ${solution.color} group-hover:text-orange-400`} />
                    <div>
                      <div className="font-medium">{solution.title}</div>
                      <div className="text-xs text-slate-500">{solution.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 hover:text-orange-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-slate-400 hover:text-orange-400 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">&copy; 2024 Nuvate Technology Pvt Ltd. All rights reserved.</div>
            {/*
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>
    </footer>
  )
}
