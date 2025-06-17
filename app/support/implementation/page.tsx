import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Settings,
  Database,
  Shield,
  Zap,
  Target,
  BarChart3,
  Headphones,
  Calendar,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"

export default function ImplementationPage() {
  const implementationPhases = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      icon: Target,
      description: "Understanding your business requirements and creating a detailed implementation plan.",
      activities: [
        "Business process analysis",
        "Requirements gathering",
        "System architecture design",
        "Implementation timeline creation",
        "Resource allocation planning",
      ],
    },
    {
      phase: "System Setup & Configuration",
      duration: "2-3 weeks",
      icon: Settings,
      description: "Setting up and configuring the system according to your business needs.",
      activities: [
        "System installation and setup",
        "Custom configuration",
        "User roles and permissions setup",
        "Integration with existing systems",
        "Security configuration",
      ],
    },
    {
      phase: "Data Migration",
      duration: "1-2 weeks",
      icon: Database,
      description: "Safely migrating your existing data to the new system.",
      activities: [
        "Data extraction and cleaning",
        "Data mapping and transformation",
        "Migration testing",
        "Data validation and verification",
        "Backup and rollback procedures",
      ],
    },
    {
      phase: "Testing & Quality Assurance",
      duration: "1-2 weeks",
      icon: Shield,
      description: "Comprehensive testing to ensure everything works perfectly.",
      activities: [
        "System functionality testing",
        "Integration testing",
        "Performance testing",
        "User acceptance testing",
        "Security testing",
      ],
    },
    {
      phase: "Training & Go-Live",
      duration: "1 week",
      icon: Zap,
      description: "Training your team and launching the system for production use.",
      activities: [
        "User training sessions",
        "Documentation handover",
        "Go-live preparation",
        "System launch",
        "Post-launch monitoring",
      ],
    },
    {
      phase: "Support & Optimization",
      duration: "Ongoing",
      icon: Headphones,
      description: "Continuous support and system optimization for maximum efficiency.",
      activities: [
        "24/7 technical support",
        "Performance monitoring",
        "Regular system updates",
        "Optimization recommendations",
        "Additional training as needed",
      ],
    },
  ]

  const implementationServices = [
    {
      title: "Standard Implementation",
      description: "Complete implementation with standard configurations",
      duration: "6-8 weeks",
      price: "₹2,50,000",
      features: [
        "System setup and configuration",
        "Basic data migration",
        "Standard integrations",
        "User training (up to 10 users)",
        "3 months post-launch support",
        "Documentation package",
      ],
      popular: false,
    },
    {
      title: "Premium Implementation",
      description: "Enhanced implementation with custom configurations",
      duration: "8-12 weeks",
      price: "₹4,50,000",
      features: [
        "Custom system configuration",
        "Advanced data migration",
        "Multiple system integrations",
        "Comprehensive user training",
        "6 months post-launch support",
        "Custom reporting setup",
        "Workflow optimization",
      ],
      popular: true,
    },
    {
      title: "Enterprise Implementation",
      description: "Full-scale implementation for large organizations",
      duration: "12-16 weeks",
      price: "Custom Quote",
      features: [
        "Multi-location setup",
        "Complex data migration",
        "Enterprise integrations",
        "Advanced customizations",
        "12 months premium support",
        "Dedicated project manager",
        "On-site implementation team",
        "Custom development work",
      ],
      popular: false,
    },
  ]

  const successMetrics = [
    {
      metric: "98%",
      label: "Implementation Success Rate",
      description: "Projects completed successfully within timeline",
    },
    {
      metric: "6-8 weeks",
      label: "Average Implementation Time",
      description: "From project start to go-live",
    },
    {
      metric: "24/7",
      label: "Post-Launch Support",
      description: "Continuous support after implementation",
    },
    {
      metric: "500+",
      label: "Successful Implementations",
      description: "Businesses successfully onboarded",
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
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Implementation Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Seamless
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Implementation
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Our expert implementation team ensures a smooth transition to our solutions with minimal disruption to your
            business operations.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {successMetrics.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{item.label}</div>
                <div className="text-sm text-slate-600">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Implementation Process */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Implementation Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Proven Implementation Methodology</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure successful implementation of our solutions.
          </p>
        </div>

        <div className="space-y-8">
          {implementationPhases.map((phase, index) => (
            <Card key={index} className="border border-slate-200 hover:border-orange-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
                      <phase.icon className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          Phase {index + 1}: {phase.phase}
                        </h3>
                        <p className="text-slate-600">{phase.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="border-orange-200 text-orange-700">
                          <Clock className="h-4 w-4 mr-1" />
                          {phase.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Implementation Packages */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Implementation Packages</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Implementation Package</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Select the implementation package that best fits your business size and requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {implementationServices.map((service, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative ${
                service.popular ? "border-t-4 border-t-orange-600" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                <p className="text-slate-600">{service.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                </div>
                <div className="flex items-center justify-center text-sm text-slate-600 mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.duration}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    service.popular
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                  variant={service.popular ? "default" : "outline"}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Our Implementation */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Our Implementation Stands Out</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our implementation approach is designed to minimize risk and maximize success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Team",
              description: "Our implementation specialists have years of experience across various industries.",
              icon: Users,
              color: "text-blue-600",
              bgColor: "bg-blue-100",
            },
            {
              title: "Proven Methodology",
              description: "We follow a time-tested implementation process that ensures success.",
              icon: Target,
              color: "text-green-600",
              bgColor: "bg-green-100",
            },
            {
              title: "Minimal Disruption",
              description: "Our approach ensures minimal disruption to your ongoing business operations.",
              icon: Shield,
              color: "text-purple-600",
              bgColor: "bg-purple-100",
            },
            {
              title: "Comprehensive Training",
              description: "We provide thorough training to ensure your team can use the system effectively.",
              icon: FileText,
              color: "text-orange-600",
              bgColor: "bg-orange-100",
            },
            {
              title: "Ongoing Support",
              description: "Post-implementation support to ensure continued success and optimization.",
              icon: Headphones,
              color: "text-cyan-600",
              bgColor: "bg-cyan-100",
            },
            {
              title: "Performance Monitoring",
              description: "We monitor system performance and provide optimization recommendations.",
              icon: BarChart3,
              color: "text-red-600",
              bgColor: "bg-red-100",
            },
          ].map((item, index) => (
            <Card key={index} className="border border-slate-200 hover:border-orange-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className={`h-16 w-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your implementation requirements and create a customized plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
