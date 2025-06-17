import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Users, TrendingUp, CheckCircle, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"
import Link from "next/link"

export default function TextileMastersCaseStudy() {
  const relatedCaseStudies = [
    {
      title: "Fashion Forward Inc. Increases Production Efficiency by 35%",
      slug: "/case-studies/fashion-forward-inc",
      industry: "Manufacturing",
      solution: "StitchIT",
    },
    {
      title: "CleanPro Industries Achieves 40% Route Efficiency with WashIT",
      slug: "/case-studies/clean-pro-industries",
      industry: "Laundry Services",
      solution: "WashIT",
    },
    {
      title: "Style Hub Achieves 65% Sales Growth with DigitAil",
      slug: "/case-studies/style-hub",
      industry: "E-commerce",
      solution: "DigitAil",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Back Button */}
      <section className="container mx-auto px-4 py-8">
        <Link href="/case-studies">
          <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">HR TECH Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Textile Masters Achieves 99% Payroll Accuracy with HR TECH
              </h1>

              <div className="flex flex-wrap gap-6 text-slate-600 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Coimbatore, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Textile Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Implementation: 3 months</span>
                </div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                Discover how Textile Masters transformed their HR operations, achieving exceptional payroll accuracy and
                compliance while reducing administrative overhead through HR TECH implementation.
              </p>
            </div>

            <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Textile+Masters+Case+Study"
                alt="Textile Masters Case Study"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="container mx-auto px-4 py-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Results Achieved</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                <div className="text-slate-600">Payroll Accuracy</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                <div className="text-slate-600">Time Savings in HR Tasks</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-slate-600">Compliance Achievement</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-slate-600">Employee Satisfaction Increase</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Textile Masters</h2>
              <p className="text-slate-700 mb-6">
                Textile Masters is a leading textile manufacturing company based in Coimbatore, Tamil Nadu. With over 25
                years of experience in the industry, they specialize in producing high-quality fabrics for both domestic
                and international markets, employing over 800 workers across multiple shifts.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">800+ employees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">3 manufacturing units</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">24/7 operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Export to 15+ countries</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Company Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-slate-600">Years in Business</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">₹150Cr</div>
                  <div className="text-sm text-slate-600">Annual Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-slate-600">Export Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">ISO</div>
                  <div className="text-sm text-slate-600">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 mb-6">
                Textile Masters was struggling with complex payroll calculations due to multiple shifts, overtime rules,
                and varying wage structures. Their manual HR processes were error-prone and time-consuming, leading to
                employee dissatisfaction and compliance issues.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Pain Points:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Complex payroll calculations with frequent errors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Manual attendance tracking leading to disputes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Compliance challenges with labor laws and regulations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Time-consuming leave management processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Lack of employee self-service capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Impact on Business</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-red-600">15%</div>
                  <div className="text-sm text-red-700">Payroll error rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">40hrs</div>
                  <div className="text-sm text-red-700">Weekly HR admin time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">25%</div>
                  <div className="text-sm text-red-700">Employee complaints</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">₹5L</div>
                  <div className="text-sm text-red-700">Monthly compliance costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Solution: HR TECH Implementation</h2>

          <div className="mb-12">
            <p className="text-xl text-slate-600 mb-6">
              We implemented HR TECH with a focus on automated payroll processing, biometric attendance integration, and
              comprehensive compliance management. The solution was customized to handle complex shift patterns and wage
              structures specific to the textile industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Payroll Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Multi-shift calculations</li>
                  <li>• Overtime management</li>
                  <li>• Statutory deductions</li>
                  <li>• Bonus calculations</li>
                  <li>• Bank integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Attendance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Biometric integration</li>
                  <li>• Shift scheduling</li>
                  <li>• Leave management</li>
                  <li>• Real-time tracking</li>
                  <li>• Mobile access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Compliance & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Labor law compliance</li>
                  <li>• Statutory reports</li>
                  <li>• Audit trails</li>
                  <li>• Employee portal</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="container mx-auto px-4 py-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Timeline</h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-300"></div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Month 1: System Setup & Data Migration</h3>
                  <p className="text-slate-600">
                    Employee data migration, system configuration, and biometric device installation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Month 2: Payroll Configuration & Testing</h3>
                  <p className="text-slate-600">
                    Complex payroll rules setup, shift patterns configuration, and parallel testing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Month 3: Go-Live & Training</h3>
                  <p className="text-slate-600">System go-live, employee training, and support stabilization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Benefits</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Operational Improvements</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Payroll Accuracy</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">99%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">HR Task Efficiency</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+75%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Compliance Score</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">100%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Employee Satisfaction</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+85%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Business Impact</h3>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Cost Savings</h4>
                  <p className="text-slate-700">
                    ₹3 lakhs monthly savings in HR administrative costs and compliance penalties
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Time Efficiency</h4>
                  <p className="text-slate-700">
                    75% reduction in time spent on payroll processing and HR administration
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Employee Experience</h4>
                  <p className="text-slate-700">
                    Self-service portal reduced HR queries by 60% and improved satisfaction
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Scalability</h4>
                  <p className="text-slate-700">System can handle 2x current workforce without additional HR staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-green-300 mx-auto mb-6" />
          <blockquote className="text-2xl text-slate-700 italic mb-8">
            "HR TECH has revolutionized our HR operations. The automated payroll system has eliminated errors and saved
            us countless hours every month. Our employees are happier with the self-service portal, and we're now fully
            compliant with all labor regulations. The ROI has been exceptional."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <Image
              src="/placeholder.svg?height=60&width=60&text=RK"
              alt="Ravi Kumar"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Ravi Kumar</div>
              <div className="text-slate-600">HR Director, Textile Masters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedCaseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-100 text-orange-700">{study.solution}</Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                  <p className="text-slate-600 mb-4">{study.industry}</p>
                  <Link href={study.slug}>
                    <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                      Read Case Study →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
