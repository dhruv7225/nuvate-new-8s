import Image from "next/image"
import { ArrowRight, Star, Quote, BarChart2, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "fashion-forward-inc",
      title: "Fashion Forward Inc. Increases Production Efficiency by 35%",
      company: "Fashion Forward Inc.",
      industry: "Apparel Manufacturing",
      location: "Mumbai, India",
      solution: "StitchIT",
      challenge:
        "Fashion Forward Inc. was struggling with inefficient production processes, leading to delays in delivery and customer dissatisfaction. Manual tracking of samples and inventory was causing errors and bottlenecks.",
      approach:
        "We implemented StitchIT with a focus on sample management, inventory tracking, and production planning. The solution was customized to match their specific workflow and integrated with their existing systems.",
      results: [
        "35% increase in production efficiency",
        "45% reduction in lead time",
        "25% reduction in material waste",
        "20% improvement in quality score",
      ],
      testimonial:
        "StitchIT has completely transformed our manufacturing process. We've seen remarkable improvements in efficiency and our customers are happier with faster delivery times. The ROI was evident within the first quarter.",
      author: "Rajesh Sharma",
      position: "Operations Director",
      avatar: "/placeholder.svg?height=60&width=60&text=RS",
      image: "/placeholder.svg?height=600&width=800&text=Fashion+Forward+Case+Study",
      color: "orange",
    },
    {
      id: "clean-pro-industries",
      title: "CleanPro Industries Achieves 40% Route Efficiency with WashIT",
      company: "CleanPro Industries",
      industry: "Commercial Laundry",
      location: "Delhi, India",
      solution: "WashIT",
      challenge:
        "CleanPro Industries was facing challenges with route planning, customer management, and billing accuracy. Manual processes were leading to errors and customer disputes.",
      approach:
        "We deployed WashIT with a focus on route optimization, automated billing, and customer management. The solution included mobile apps for drivers and a customer portal for real-time tracking.",
      results: [
        "40% improvement in route efficiency",
        "98% billing accuracy",
        "60% increase in customer satisfaction",
        "30% reduction in operational costs",
      ],
      testimonial:
        "WashIT has revolutionized our laundry operations. The automated billing and route optimization have significantly improved our efficiency and customer satisfaction. Our revenue has increased by 40% since implementation.",
      author: "Priya Patel",
      position: "General Manager",
      avatar: "/placeholder.svg?height=60&width=60&text=PP",
      image: "/placeholder.svg?height=600&width=800&text=CleanPro+Case+Study",
      color: "blue",
    },
    {
      id: "style-hub",
      title: "Style Hub Achieves 65% Sales Growth with DigitAil",
      company: "Style Hub",
      industry: "E-commerce Fashion",
      location: "Bangalore, India",
      solution: "DigitAil",
      challenge:
        "Style Hub was struggling to manage multiple e-commerce platforms, leading to inventory discrepancies, overselling, and customer dissatisfaction. They lacked a unified view of their business across channels.",
      approach:
        "We implemented DigitAil with a focus on multi-channel integration, inventory synchronization, and order management. The solution provided real-time visibility across all sales channels.",
      results: [
        "65% sales growth across channels",
        "50% improvement in order fulfillment",
        "95% inventory accuracy",
        "45% increase in customer retention",
      ],
      testimonial:
        "DigitAil has been a game-changer for our e-commerce business. The multi-channel integration and automated inventory management have helped us scale rapidly while maintaining excellent customer service.",
      author: "Amit Kumar",
      position: "Founder & CEO",
      avatar: "/placeholder.svg?height=60&width=60&text=AK",
      image: "/placeholder.svg?height=600&width=800&text=Style+Hub+Case+Study",
      color: "purple",
    },
    {
      id: "textile-masters",
      title: "Textile Masters Achieves 99% Payroll Accuracy with HR TECH",
      company: "Textile Masters Ltd.",
      industry: "Textile Manufacturing",
      location: "Chennai, India",
      solution: "HR TECH",
      challenge:
        "Textile Masters was struggling with complex payroll processes, attendance tracking inaccuracies, and compliance management. Manual processes were time-consuming and error-prone.",
      approach:
        "We deployed HR TECH with a focus on biometric attendance, automated salary calculation, and compliance management. The solution streamlined their entire HR process.",
      results: [
        "99% payroll accuracy",
        "80% reduction in processing time",
        "100% compliance score",
        "70% improvement in HR efficiency",
      ],
      testimonial:
        "HR TECH has simplified our complex payroll processes tremendously. The automated compliance features ensure we never miss any regulatory requirements, and our employees love the self-service portal.",
      author: "Lakshmi Narayanan",
      position: "HR Director",
      avatar: "/placeholder.svg?height=60&width=60&text=LN",
      image: "/placeholder.svg?height=600&width=800&text=Textile+Masters+Case+Study",
      color: "green",
    },
  ]

  const industries = ["All", "Manufacturing", "Laundry", "E-commerce", "HR & Payroll"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Success Stories</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Real Customers
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Discover how leading businesses across different industries have transformed their operations and achieved
            remarkable growth with our innovative solutions.
          </p>
        </div>
      </section>

      {/* Case Study Filters */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
  <TabsList className="flex flex-wrap justify-center gap-3 w-full">
  {industries.map((industry) => (
    <TabsTrigger
      key={industry}
      value={industry}
      className={cn(
        "px-4 py-2 text-sm cursor-pointer transition-all duration-200 rounded-md border",
        "border-slate-300",
        "data-[state=active]:bg-orange-600 data-[state=active]:text-white",
        "data-[state=inactive]:bg-slate-100 data-[state=inactive]:text-slate-700 hover:bg-slate-200"
      )}
    >
      {industry}
    </TabsTrigger>
  ))}
</TabsList>

</div>


          {industries.map((industry) => (
            <TabsContent key={industry} value={industry} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies
                  .filter(
                    (study) =>
                      industry === "All" ||
                      (industry === "Manufacturing" && study.solution === "StitchIT") ||
                      (industry === "Laundry" && study.solution === "WashIT") ||
                      (industry === "E-commerce" && study.solution === "DigitAil") ||
                      (industry === "HR & Payroll" && study.solution === "HR TECH"),
                  )
                  .map((study) => (
                    <Card
                      key={study.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div
                          className={`absolute top-4 right-4 bg-${study.color}-600 text-white px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          {study.solution}
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <Badge className={`bg-${study.color}-100 text-${study.color}-700 hover:bg-${study.color}-200`}>
                          {study.industry}
                        </Badge>
                        <h3 className="text-xl font-bold text-slate-900">{study.title}</h3>
                        <p className="text-slate-600 line-clamp-3">{study.challenge}</p>
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full overflow-hidden">
                            <Image src={study.avatar || "/placeholder.svg"} alt={study.author} width={32} height={32} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{study.author}</p>
                            <p className="text-xs text-slate-500">
                              {study.position}, {study.company}
                            </p>
                          </div>
                        </div>
                        <Link href={`/case-studies/${study.id}`}>
                          <Button
                            className={`w-full bg-${study.color}-600 hover:bg-${study.color}-700 text-white`}
                            variant="default"
                          >
                            Read Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Featured Case Study */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Featured Case Study</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fashion Forward Inc. Success Story</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            How StitchIT transformed the production process for one of India's leading apparel manufacturers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://apparelresources.com/wp-content/uploads/2020/06/Production-Line.jpg"
              alt="Fashion Forward Case Study"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Challenge</h3>
              <p className="text-slate-600">
                Fashion Forward Inc. was struggling with inefficient production processes, leading to delays in delivery
                and customer dissatisfaction. Manual tracking of samples and inventory was causing errors and
                bottlenecks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Approach</h3>
              <p className="text-slate-600">
                We implemented StitchIT with a focus on sample management, inventory tracking, and production planning.
                The solution was customized to match their specific workflow and integrated with their existing systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Key Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">35%</div>
                  <div className="text-sm text-slate-600">Production Efficiency</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">-45%</div>
                  <div className="text-sm text-slate-600">Lead Time</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">-25%</div>
                  <div className="text-sm text-slate-600">Material Waste</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">+20%</div>
                  <div className="text-sm text-slate-600">Quality Score</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg relative">
              <Quote className="h-8 w-8 text-orange-300 absolute -top-2 -left-2" />
              <p className="text-slate-700 italic pl-6">
                "StitchIT has completely transformed our manufacturing process. We've seen remarkable improvements in
                efficiency and our customers are happier with faster delivery times. The ROI was evident within the
                first quarter."
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <Image
                  src="/placeholder.svg?height=60&width=60&text=RS"
                  alt="Rajesh Sharma"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-slate-900">Rajesh Sharma</p>
                  <p className="text-sm text-slate-500">Operations Director, Fashion Forward Inc.</p>
                </div>
              </div>
            </div>

            <Link href={`/case-studies/fashion-forward-inc`}>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Impact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Measurable Results Across Industries</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our solutions deliver tangible business outcomes that drive growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <BarChart2 className="h-5 w-5 text-orange-600 mr-2" />
                Efficiency Improvements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">StitchIT</span>
                  <span className="text-orange-600 font-medium">+35%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">WashIT</span>
                  <span className="text-blue-600 font-medium">+40%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">DigitAil</span>
                  <span className="text-purple-600 font-medium">+65%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">HR TECH</span>
                  <span className="text-green-600 font-medium">+70%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Clock className="h-5 w-5 text-orange-600 mr-2" />
                Time Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Production Lead Time</span>
                  <span className="text-orange-600 font-medium">-45%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Order Processing</span>
                  <span className="text-blue-600 font-medium">-50%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Inventory Management</span>
                  <span className="text-purple-600 font-medium">-60%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Payroll Processing</span>
                  <span className="text-green-600 font-medium">-80%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="h-5 w-5 text-orange-600 mr-2" />
                Customer Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">StitchIT</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">WashIT</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">DigitAil</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">HR TECH</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4.9 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have achieved remarkable results with our innovative solutions. Schedule a
            consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact'>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Schedule Consultation
            </Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
