"use client"

import { ArrowRight, CheckCircle, Users, Zap, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "./components/enhanced-header"
import EnhancedFooter from "./components/enhanced-footer"

import TestimonialCarousel from "./components/testimonial-carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useRef } from "react";
import Image from "next/image"

const services = [
  {
    id: "stitchit",
    title: "StitchIT",
    tagline: "Cut To Pack Software Solution",
    description:
      "Streamline your textile manufacturing process with our comprehensive software solution designed for single umbrella management.",
    features: ["MRP and PPC Allocation", "Inventory Tracking", "Quality Control", "Production Analytics"],
    color: "from-pink-100 to-orange-100",
    textColor: "text-orange-600",
    cta: "Explore StitchIT",
  },
  {
    id: "washit",
    title: "WashIT",
    tagline: "Complete IT Solution For Industrial Laundry",
    description:
      "Transform your laundry operations with our end-to-end management system covering customer management, billing, and operational efficiency.",
    features: ["Customer Management", "Automated Billing", "Recipe Management", "Real-time Tracking"],
    color: "from-blue-100 to-cyan-100",
    textColor: "text-blue-600",
    cta: "Discover WashIT",
  },
  {
    id: "digitail",
    title: "DigitAil",
    tagline: "Complete E-commerce Solution",
    description:
      "Build and scale your online business with our comprehensive e-commerce platform featuring advanced analytics and seamless integrations.",
    features: ["Multi-channel Sales", "Inventory Sync", "Payment Gateway", "Analytics Dashboard"],
    color: "from-purple-100 to-pink-100",
    textColor: "text-purple-600",
    cta: "Launch DigitAil",
  },
  {
    id: "hrtech",
    title: "HR TECH",
    tagline: "Calculate Salary at Your Finger Tip",
    description:
      "Simplify your HR operations with our intuitive payroll and employee management system designed for modern businesses.",
    features: ["Payroll Automation", "Employee Self-Service", "Compliance Management", "Performance Tracking"],
    color: "from-green-100 to-emerald-100",
    textColor: "text-green-600",
    cta: "Try HR TECH",
  },
]


export default function ImprovedHomepage() {
  const BASE_URL = "https://nuvatetechnology.com/";

  const logos = [
    { src: `${BASE_URL}nuvate-image/logo/avadat.png`, alt: "Avadat" },
    { src: `${BASE_URL}nuvate-image/logo/sonam_logo.png`, alt: "Sonam Collection" },
    { src: `${BASE_URL}nuvate-image/logo/kapoor_logo.png`, alt: "Kapoor Enterprises" },
    { src: `${BASE_URL}nuvate-image/logo/zedex_clothing.png`, alt: "Zedex Clothing" },
    { src: `${BASE_URL}nuvate-image/logo/Fashion-Fair.png`, alt: "Fashion Fair" },
    { src: `${BASE_URL}nuvate-image/logo/Kajal-Kids.png`, alt: "Kajal Kids" },
  ]

  const repeatedLogos = [...logos, ...logos] // Duplicate for seamless loop
  const contactRef = useRef(null);
  const scrollToContact = () => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Trusted by 500+ Businesses</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Innovative Technology Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Modern Business
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Empower your business with our comprehensive suite of industry-specific software solutions designed to
            streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={scrollToContact}>
              Explore Our Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push("/contact")} >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, label: "Active Clients", value: "200+" },
            { icon: Zap, label: "Projects Delivered", value: "250+" },
            { icon: Shield, label: "Years Experience", value: "8+" },
            { icon: Target, label: "Success Rate", value: "98%" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <stat.icon className="h-8 w-8 mx-auto text-orange-600" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section ref={contactRef} id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Technology Solutions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized software solutions tailored for different industries, built with cutting-edge technology and
            industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                  <Badge variant="secondary" className={service.textColor}>
                    Industry Leader
                  </Badge>
                </div>
                <CardDescription className="text-lg font-medium text-slate-700">{service.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full group-hover:bg-orange-600 group-hover:text-white transition-colors"
                  onClick={() => router.push(`/${service.id}`)}
                >
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel - Replacing Success Stories */}
      <TestimonialCarousel />
      {/* scrollb bar */}
      <div className="border-b py-8 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="text-center lg:text-left w-full lg:w-1/3">
            <p className="text-xl font-bold text-slate-800">Trusted by 30+ Clients</p>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="relative overflow-hidden">
              <div className="min-w-max flex gap-12 animate-scroll-x">
                {repeatedLogos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have streamlined their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50" onClick={() => router.push("/contact")}>
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50" onClick={() => router.push("/case-studies")}>
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
      <EnhancedFooter />


      {/* Footer 
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded"></div>
                <span className="text-lg font-bold">Nuvate</span>
              </div>
              <p className="text-slate-400">Leading technology solutions provider for modern businesses.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/stitchit" className="hover:text-white transition-colors">
                    StitchIT
                  </a>
                </li>
                <li>
                  <a href="/washit" className="hover:text-white transition-colors">
                    WashIT
                  </a>
                </li>
                <li>
                  <a href="/digitail" className="hover:text-white transition-colors">
                    DigitAil
                  </a>
                </li>
                <li>
                  <a href="/hrtech" className="hover:text-white transition-colors">
                    HR TECH
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-slate-400">
                <p>Email: info@nuvate.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: Tech Park, Innovation Street</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 Nuvate Technology Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
      */}
    </div>
  )
}
