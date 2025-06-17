import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, CheckCircle, Monitor, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: "StitchIT Mastery Program",
      duration: "3 Days",
      participants: "Up to 15",
      level: "Comprehensive",
      description: "Complete training program covering all aspects of StitchIT implementation and usage.",
      modules: [
        "System Overview & Navigation",
        "Production Planning & Scheduling",
        "Inventory Management",
        "Quality Control Processes",
        "Financial Reporting & Analytics",
        "User Management & Permissions",
      ],
      price: "₹45,000",
      popular: true,
    },
    {
      title: "WashIT Operations Training",
      duration: "2 Days",
      participants: "Up to 12",
      level: "Essential",
      description: "Focused training on WashIT operations, from order processing to delivery management.",
      modules: [
        "System Setup & Configuration",
        "Order Processing Workflow",
        "Customer Management",
        "Route Optimization",
        "Billing & Payment Processing",
        "Reporting & Analytics",
      ],
      price: "₹32,000",
      popular: false,
    },
    {
      title: "DigitAil E-commerce Bootcamp",
      duration: "2 Days",
      participants: "Up to 10",
      level: "Comprehensive",
      description: "Intensive training on maximizing your e-commerce potential with DigitAil.",
      modules: [
        "Store Setup & Configuration",
        "Product Catalog Management",
        "Order Fulfillment Process",
        "Marketing & Promotions",
        "Customer Service Tools",
        "Performance Analytics",
      ],
      price: "₹38,000",
      popular: false,
    },
    {
      title: "HR TECH Complete Course",
      duration: "2 Days",
      participants: "Up to 15",
      level: "Comprehensive",
      description: "Complete HR management training covering all HR TECH functionalities.",
      modules: [
        "Employee Onboarding Process",
        "Payroll Processing & Compliance",
        "Performance Management",
        "Leave & Attendance Tracking",
        "Statutory Compliance",
        "HR Analytics & Reporting",
      ],
      price: "₹35,000",
      popular: false,
    },
  ]

  const trainingFormats = [
    {
      title: "On-Site Training",
      icon: MapPin,
      description: "Our trainers come to your location for personalized, hands-on training.",
      benefits: [
        "Customized to your specific workflows",
        "Train multiple team members simultaneously",
        "Use your actual data and scenarios",
        "Immediate implementation support",
      ],
      duration: "1-3 days",
      capacity: "Up to 20 participants",
    },
    {
      title: "Virtual Training",
      icon: Monitor,
      description: "Interactive online training sessions conducted via video conferencing.",
      benefits: [
        "Cost-effective solution",
        "Flexible scheduling options",
        "Screen sharing and live demonstrations",
        "Recorded sessions for future reference",
      ],
      duration: "2-4 hours per session",
      capacity: "Up to 15 participants",
    },
    {
      title: "Hybrid Training",
      icon: Users,
      description: "Combination of virtual and on-site training for optimal learning experience.",
      benefits: [
        "Best of both training formats",
        "Initial virtual overview sessions",
        "On-site implementation support",
        "Follow-up virtual Q&A sessions",
      ],
      duration: "Flexible schedule",
      capacity: "Customizable",
    },
  ]

  const upcomingSchedule = [
    {
      program: "StitchIT Mastery Program",
      date: "March 15-17, 2024",
      location: "Mumbai",
      seats: "8 seats left",
      type: "On-Site",
    },
    {
      program: "WashIT Operations Training",
      date: "March 22-23, 2024",
      location: "Virtual",
      seats: "12 seats left",
      type: "Virtual",
    },
    {
      program: "DigitAil E-commerce Bootcamp",
      date: "March 29-30, 2024",
      location: "Bangalore",
      seats: "6 seats left",
      type: "On-Site",
    },
    {
      program: "HR TECH Complete Course",
      date: "April 5-6, 2024",
      location: "Virtual",
      seats: "15 seats left",
      type: "Virtual",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="mr-4">
            <Link href="/support">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Support
            </Link>
          </Button>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Training Programs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Expert Training for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Maximum Success
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Comprehensive training programs designed to help your team master our solutions and achieve optimal results.
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Training Programs</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our comprehensive training programs tailored to each of our solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {trainingPrograms.map((program, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
                program.popular ? "border-t-4 border-t-orange-600" : ""
              }`}
            >
              {program.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{program.title}</CardTitle>
                    <p className="text-slate-600">{program.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">{program.price}</div>
                    <div className="text-sm text-slate-500">per session</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {program.participants}
                  </div>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    {program.level}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Training Modules:</h4>
                  <div className="space-y-2">
                    {program.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    className={`flex-1 ${
                      program.popular
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                    }`}
                  >
                    Book Training
                  </Button>
                  <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Training Formats */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Training Formats</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Preferred Format</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer flexible training formats to suit your team's needs and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingFormats.map((format, index) => (
            <Card key={index} className="border border-slate-200 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <format.icon className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{format.title}</CardTitle>
                <p className="text-slate-600">{format.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {format.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration:</span>
                    <span className="text-slate-900 font-medium">{format.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Capacity:</span>
                    <span className="text-slate-900 font-medium">{format.capacity}</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Select Format
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Schedule */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Upcoming Sessions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scheduled Training Sessions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join our upcoming training sessions or request a custom schedule for your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {upcomingSchedule.map((session, index) => (
            <Card key={index} className="border border-slate-200 hover:border-orange-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{session.program}</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {session.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {session.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className={`mb-2 ${
                        session.type === "Virtual" ? "border-blue-200 text-blue-700" : "border-green-200 text-green-700"
                      }`}
                    >
                      {session.type}
                    </Badge>
                    <div className="text-sm text-slate-600">{session.seats}</div>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
            Request Custom Training Schedule
          </Button>
        </div>
      </section>

      {/* Contact for Training */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our training team to discuss your specific needs and schedule a customized training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +91 76007 67857
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Training Team
            </Button>
          </div>
          <p className="text-sm opacity-75">Training sessions available Monday - Saturday, 9:00 AM - 6:00 PM</p>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
