import Image from "next/image"
import { ArrowRight, CheckCircle, Users, Zap, Shield, Target, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "Nuvatech Technology was established in Ahmedabad with a vision to transform businesses through innovative software solutions.",
    },
    {
      year: "2015",
      title: "First ERP Solution",
      description:
        "Launched our first industry-specific ERP solution for garment manufacturing, which later evolved into StitchIT.",
    },
    {
      year: "2017",
      title: "Expansion of Services",
      description:
        "Expanded our product portfolio with WashIT for laundry management and HR TECH for human resource management.",
    },
    {
      year: "2019",
      title: "Digital Transformation",
      description:
        "Launched DigitAil to help businesses navigate the e-commerce landscape with comprehensive multi-channel management.",
    },
    {
      year: "2021",
      title: "500+ Clients Milestone",
      description:
        "Reached the milestone of serving 500+ businesses across India with our innovative software solutions.",
    },
    {
      year: "2023",
      title: "Cloud Transformation",
      description:
        "Migrated all our solutions to cloud infrastructure, enabling better scalability and accessibility for our clients.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in software development to deliver cutting-edge solutions.",
      icon: Zap,
    },
    {
      title: "Customer Focus",
      description:
        "Our clients' success is our success. We work closely with each client to understand their unique needs and challenges.",
      icon: Users,
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service and support.",
      icon: Target,
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices in all our dealings.",
      icon: Shield,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Transforming Businesses Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Innovative Technology
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Since 2018, Nuvate Technology has been at the forefront of developing industry-specific software solutions
            that empower businesses to streamline operations, increase efficiency, and drive growth.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            
            <iframe
              width="746"
              height="420"
              src="https://www.youtube.com/embed/-EuSxNX5e6o"
              title="Nuvate Technology Company Profile"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl shadow-xl w-full mb-4"
            ></iframe>

          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the leading provider of innovative technology solutions that transform businesses and drive
                industry standards across India and beyond.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower businesses with tailored software solutions that address their unique challenges, streamline
                operations, and accelerate growth through digital transformation.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3">
                {[
                  "Industry-specific expertise across manufacturing, laundry, e-commerce, and HR sectors",
                  "Customizable solutions tailored to your unique business requirements",
                  "Dedicated support team ensuring smooth implementation and operation",
                  "Continuous innovation to keep your business ahead of the competition",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Our Core Values</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Principles That Guide Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our values define who we are and how we work. They shape our culture and guide our decisions every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Our Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Milestones That Define Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From our humble beginnings to becoming a leading technology provider, our journey has been defined by
            innovation and growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  {/* Year Marker */}
                  <div className="md:w-1/2 flex md:justify-center relative mb-8 md:mb-0">
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="bg-orange-500 text-white text-xl font-bold rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                        {milestone.year}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect With Our Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about our company or solutions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
        <Link href='https://maps.app.goo.gl/opv9TedfCDreV7RX7'>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600">
                B-901, Empire Business Hub,
                <br />
                Science City Road, Sola,
                <br />
                Ahmedabad - 380060, Gujarat, India
              </p>
            </CardContent>
          </Card>
        </Link>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600">+91 76007 67857</p>
              <p className="text-slate-500 text-sm mt-2">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">info@nuvatetechnology.com</p>
              <p className="text-slate-500 text-sm mt-2">We'll respond within 24 hours</p>
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
