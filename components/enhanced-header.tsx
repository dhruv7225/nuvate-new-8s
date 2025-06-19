"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Scissors,
  Droplets,
  ShoppingCart,
  Users,
  ArrowRight,
  Star,
  Award,
  Clock,
  ChevronDown,
} from "lucide-react"

const solutions = [
  {
    title: "StitchIT",
    description: "Complete garment manufacturing solution",
    href: "/stitchit",
    icon: Scissors,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    features: ["Production Planning", "Quality Control", "Inventory Management"],
  },
  {
    title: "WashIT",
    description: "Industrial laundry management system",
    href: "/washit",
    icon: Droplets,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Customer Management", "Route Optimization", "Automated Billing"],
  },
  {
    title: "DigitAil",
    description: "Complete e-commerce solution",
    href: "/digitail",
    icon: ShoppingCart,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    features: ["Multi-channel Sales", "Inventory Sync", "Analytics"],
  },
  {
    title: "HR TECH",
    description: "Advanced HR management system",
    href: "/hrtech",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
    features: ["Payroll Automation", "Compliance", "Employee Portal"],
  },
]

const company = [
  { title: "About Us", href: "/about", description: "Learn about our mission and values" },
  { title: "Our Team", href: "/team", description: "Meet the experts behind our solutions" },
  { title: "Careers", href: "/careers", description: "Join our growing team" },
  { title: "Contact", href: "/contact", description: "Get in touch with us" },
]

const resources = [
  { title: "Case Studies", href: "/case-studies", description: "Success stories from our clients" },
  { title: "Blog", href: "/blog", description: "Industry insights and updates" },
  { title: "Support", href: "/support", description: "Get help when you need it" },
]

export default function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <span>+91 76007 67857</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3" />
              <span>info@nuvatetechnology.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="h-3 w-3" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-orange-600 text-white hover:bg-orange-700">
              <Star className="h-3 w-3 mr-1" />
              Trusted by 200+ Businesses
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
        } border-b`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-800">Nuvate</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  Technology Pvt Ltd
                </Badge>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" className="px-4 py-2 text-slate-700 hover:text-orange-600 transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-orange-600">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[800px] grid-cols-2 gap-6 p-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">Our Products</h3>
                        {solutions.map((solution) => (
                          <Link
                            key={solution.title}
                            href={solution.href}
                            className="group block space-y-2 rounded-lg p-3 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`h-10 w-10 rounded-lg ${solution.bgColor} flex items-center justify-center`}
                              >
                                <solution.icon className={`h-5 w-5 ${solution.color}`} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900 group-hover:text-orange-600">
                                  {solution.title}
                                </h4>
                                <p className="text-sm text-slate-600">{solution.description}</p>
                              </div>
                            </div>
                            <div className="ml-13 space-y-1">
                              {solution.features.map((feature, index) => (
                                <div key={index} className="text-xs text-slate-500">
                                  • {feature}
                                </div>
                              ))}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-900">Why Choose Us?</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                            <Award className="h-8 w-8 text-orange-600" />
                            <div>
                              <h4 className="font-semibold text-slate-900">Industry Expertise</h4>
                              <p className="text-sm text-slate-600">8+ years of domain knowledge</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                            <Clock className="h-8 w-8 text-blue-600" />
                            <div>
                              <h4 className="font-semibold text-slate-900">Quick Implementation</h4>
                              <p className="text-sm text-slate-600">Go live in 4-6 weeks</p>
                            </div>
                          </div>
                        </div>
                        <Link href="/contact">
                          <Button className="w-full bg-orange-600 hover:bg-orange-700 mt-3">
                            Schedule Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-orange-600">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      {company.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block space-y-1 rounded-lg p-3 hover:bg-slate-50 transition-colors"
                        >
                          <h4 className="font-semibold text-slate-900 hover:text-orange-600">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-orange-600">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      {resources.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block space-y-1 rounded-lg p-3 hover:bg-slate-50 transition-colors"
                        >
                          <h4 className="font-semibold text-slate-900 hover:text-orange-600">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white overflow-y-auto scrollbar-hide">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center py-8 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-white font-bold text-lg">N</span>
                      </div>
                      <span className="text-2xl font-bold text-slate-800">Nuvate</span>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Technology Solutions</p>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 py-6 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                    {/* Home */}
                    <Link
                      href="/"
                      className="block text-center text-lg font-medium text-slate-900 hover:text-orange-600 py-4 px-4 mx-2 hover:bg-slate-50 rounded-lg transition-all duration-200 border-b border-slate-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>

                    {/* Solutions Dropdown */}
                    <div className="border-b border-slate-100">
                      <button
                        onClick={() => toggleDropdown("solutions")}
                        className="w-full flex items-center justify-center py-4 px-4 text-lg font-medium text-slate-900 hover:text-orange-600 hover:bg-slate-50 transition-all duration-200 rounded-lg mx-2"
                      >
                        <span>Solutions</span>
                        <div
                          className={`ml-2 transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </button>
                      {activeDropdown === "solutions" && (
                        <div className="py-2 px-4 bg-gradient-to-b from-slate-50 to-white animate-in slide-in-from-top-2 duration-300 ease-out">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.title}
                              href={solution.href}
                              className="block text-center py-3 px-4 text-base font-medium text-slate-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {solution.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Company Dropdown */}
                    <div className="border-b border-slate-100">
                      <button
                        onClick={() => toggleDropdown("company")}
                        className="w-full flex items-center justify-center py-4 px-4 text-lg font-medium text-slate-900 hover:text-orange-600 hover:bg-slate-50 transition-all duration-200 rounded-lg mx-2"
                      >
                        <span>Company</span>
                        <div
                          className={`ml-2 transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180" : ""}`}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </button>
                      {activeDropdown === "company" && (
                        <div className="py-2 px-4 bg-gradient-to-b from-slate-50 to-white animate-in slide-in-from-top-2 duration-300 ease-out">
                          {company.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-center py-3 px-4 text-base font-medium text-slate-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Resources Dropdown */}
                    <div className="border-b border-slate-100">
                      <button
                        onClick={() => toggleDropdown("resources")}
                        className="w-full flex items-center justify-center py-4 px-4 text-lg font-medium text-slate-900 hover:text-orange-600 hover:bg-slate-50 transition-all duration-200 rounded-lg mx-2"
                      >
                        <span>Resources</span>
                        <div
                          className={`ml-2 transition-transform duration-300 ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </div>
                      </button>
                      {activeDropdown === "resources" && (
                        <div className="py-2 px-4 bg-gradient-to-b from-slate-50 to-white animate-in slide-in-from-top-2 duration-300 ease-out">
                          {resources.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-center py-3 px-4 text-base font-medium text-slate-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </nav>

                  {/* Footer CTA */}
                  <div className="px-6 py-6 border-t border-slate-200 bg-gradient-to-t from-slate-50 to-white">
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                      asChild
                    >
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Contact Us
                      </Link>
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-3">Get started with our solutions today</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
