import { ArrowRight, Search, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from 'next/link'
export default function SupportPage() {
  const supportOptions = [
    {
      title: "Phone Support",
      description: "Call our dedicated support line for personalized assistance and immediate help.",
      icon: Phone,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      link: "tel:+917600767857",
    },
    {
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours with detailed solutions.",
      icon: Mail,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      link: "mailto:support@nuvatetechnology.com",
    },
  ]

  const faqs = [
    {
      question: "How do I get started with StitchIT?",
      answer:
        "Getting started with StitchIT is easy. After signing up, our team will guide you through the setup process, including data migration, user training, and system configuration. We offer a comprehensive onboarding program to ensure a smooth transition.",
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer:
        "We provide ongoing support through multiple channels including phone and email. Our support team is available during business hours, and we also offer premium support packages with extended hours and dedicated support representatives.",
    },
    {
      question: "Can your solutions integrate with my existing business systems?",
      answer:
        "Yes, our solutions are designed to work seamlessly with a wide range of business systems including accounting software, e-commerce platforms, and other business applications. Our team handles all integration work as part of our service offering.",
    },
    {
      question: "How secure is my data with your solutions?",
      answer:
        "Data security is our top priority. We implement industry-standard security measures including encryption, regular security audits, and strict access controls. Our systems comply with relevant data protection regulations to ensure your data remains secure.",
    },
    {
      question: "Do you offer customization for specific business needs?",
      answer:
        "Yes, we understand that every business is unique. We offer customization services to tailor our solutions to your specific requirements. Our team will work closely with you to understand your needs and implement the necessary customizations.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including subscription-based and one-time license options. The exact pricing depends on the solution, number of users, and specific features required. Contact our sales team for a detailed quote based on your requirements.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation time varies depending on the solution and the complexity of your requirements. Typically, basic implementations can be completed in 4-6 weeks, while more complex projects may take 2-3 months. We provide a detailed timeline during the initial consultation.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes, comprehensive training is included in our implementation process. We offer both in-person and virtual training sessions, as well as documentation and video tutorials. Additional training sessions can be arranged as needed.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-orange-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center max-w-4xl mx-auto mb-1">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 px-4 py-2 text-sm font-medium">
            Support Center
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            We're Here to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
              {" "}
              Help You Succeed
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Our dedicated support team is committed to providing you with the assistance you need to make the most of
            our solutions. Get help through video guides, FAQs, or direct support.
          </p>
          {/*
          <div className="max-w-lg mx-auto relative">
            <Input
              placeholder="Search for help articles..."
              className="pl-12 pr-24 py-6 text-base rounded-2xl border-slate-300 shadow-lg focus:shadow-xl transition-shadow"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Button className="absolute right-2 top-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 rounded-xl px-6">
              Search
            </Button>
          </div>
          */}
        </div>
      </section>

      {/* Video Guides Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 px-4 py-2 text-sm font-medium">
            Video Guides
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Learn Through Video Guides</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Watch our comprehensive video guides to get the most out of our solutions and learn best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* StitchIT Video */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/BbGNoItTbuI"
                  title="StitchIT - Complete Cut to Pack Software Solution for Garment Unit."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">StitchIT - Complete Garment Solution</h3>
                <p className="text-slate-600 leading-relaxed">
                  Complete Cut to Pack Software Solution for Garment Manufacturing Units. Learn how StitchIT streamlines
                  your entire production process.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* HR TECH Video */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oqjx7XCTYNU"
                  title="HR Tech Brochure Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">HR TECH - Complete HR Management</h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive HR management solution covering payroll, attendance, employee management, and compliance
                  requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* DigitAil Video */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3avYI94_gOM"
                  title="Digitail Brochure Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">DigitAil - E-commerce Platform</h3>
                <p className="text-slate-600 leading-relaxed">
                  Complete e-commerce solution for retail businesses. Manage your online store, inventory, and customer
                  relationships seamlessly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* WashIT Video */}
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SxB6dovVe9U"
                  title="INDUSTRIAL LAUNDRY ERP SYSTEM - WASHIT"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">WashIT - Industrial Laundry ERP</h3>
                <p className="text-slate-600 leading-relaxed">
                  Complete ERP system for industrial laundry operations. Streamline your laundry business with advanced
                  management features.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-200 hover:to-green-300 px-4 py-2 text-sm font-medium">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Got Questions? We Have Answers</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our solutions and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-slate-200 rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left text-slate-900 hover:text-orange-600 py-6 text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Options 
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 hover:from-purple-200 hover:to-purple-300 px-4 py-2 text-sm font-medium">
            Direct Support
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Need Personal Assistance?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our expert support team is ready to help you with personalized assistance through multiple channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`h-20 w-20 rounded-2xl ${option.bgColor} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <option.icon className={`h-10 w-10 ${option.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{option.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">{option.description}</p>
                <Button
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href={option.link}>
                    Get Support Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      */}

      {/* Still Need Support Contact Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-orange-50 via-slate-50 to-blue-50">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 hover:from-orange-200 hover:to-red-300 px-4 py-2 text-sm font-medium">
            Contact Information
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Still Need Help?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our support team is standing by to assist you with any questions or technical issues you may encounter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-orange-50">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-600 mx-auto mb-6 shadow-lg">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Call Our Support Team</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">+91 76007 67857</p>
              <p className="text-slate-500 text-lg">Monday - Saturday</p>
              <p className="text-slate-500 text-lg">9:00 AM - 6:00 PM IST</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-lg">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Email Support</h3>
              <p className="text-xl font-bold text-blue-600 mb-2">support@nuvatetechnology.com</p>
              <p className="text-slate-500 text-lg">Response within 24 hours</p>
              <p className="text-slate-500 text-lg">Detailed technical assistance</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
        <Link href='/contact'>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        </div>
      </section>

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
