import Image from "next/image"
import { Mail, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from "next/link"

export default function TeamPage() {
  const executiveTeam = [
    {
      name: "Karan Patel",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in software development and business management, Rajesh founded Nuvatech with a vision to transform businesses through technology.",
      image: "https://nuvatetechnology.com/nuvate-image/logo/karanPatel.png",
      linkedin: "https://www.linkedin.com/in/karan-patel-0b8205144/",
      twitter: "#",
      email: "karanpatel@gmail.com",
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      bio: "Priya leads our technology initiatives with her extensive background in enterprise software architecture and cloud infrastructure.",
      image: "/placeholder.svg?height=400&width=400&text=PS",
      linkedin: "#",
      twitter: "#",
      email: "priya@nuvatetechnology.com",
    },
    {
      name: "Amit Kumar",
      position: "Chief Operating Officer",
      bio: "Amit oversees all operational aspects of Nuvatech, ensuring efficient delivery of our solutions and exceptional customer service.",
      image: "/placeholder.svg?height=400&width=400&text=AK",
      linkedin: "#",
      twitter: "#",
      email: "amit@nuvatetechnology.com",
    },
  ]

  const departmentHeads = [
    {
      name: "Neha Reddy",
      position: "Head of Product Development",
      bio: "Neha leads our product development team, focusing on creating innovative solutions that address our clients' unique challenges.",
      image: "/placeholder.svg?height=300&width=300&text=NR",
      linkedin: "#",
    },
    {
      name: "Vikram Singh",
      position: "Head of Customer Success",
      bio: "Vikram ensures our clients achieve their business objectives through effective implementation and support of our solutions.",
      image: "/placeholder.svg?height=300&width=300&text=VS",
      linkedin: "#",
    },
    {
      name: "Ananya Desai",
      position: "Head of Marketing",
      bio: "Ananya drives our marketing initiatives, showcasing how our solutions can transform businesses across different industries.",
      image: "/placeholder.svg?height=300&width=300&text=AD",
      linkedin: "#",
    },
    {
      name: "Rahul Mehta",
      position: "Head of Sales",
      bio: "Rahul leads our sales team, helping businesses identify the right solutions to address their specific challenges.",
      image: "/placeholder.svg?height=300&width=300&text=RM",
      linkedin: "#",
    },
  ]

  const teamValues = [
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration to achieve exceptional results.",
    },
    {
      title: "Innovation",
      description: "We encourage creative thinking and innovative approaches to solving complex problems.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service.",
    },
    {
      title: "Growth",
      description: "We invest in our team's professional development and personal growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-8 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Our Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Meet the People
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Behind Nuvate
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Our talented team of professionals is dedicated to creating innovative solutions that transform businesses
            and drive growth.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="container mx-auto px-4 py-8 md:py-8 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Leadership</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Executive Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the visionaries leading Nuvatech towards innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {executiveTeam.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-orange-600 font-medium">{member.position}</p>
                </div>
                <p className="text-slate-600">{member.bio}</p>
                <div className="flex space-x-3 pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Department Heads 
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Department Leaders</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Department Heads</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our department leaders bring expertise and passion to drive excellence in their respective areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departmentHeads.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-orange-600 font-medium text-sm">{member.position}</p>
                </div>
                <p className="text-slate-600 text-sm">{member.bio}</p>
                <div className="pt-2">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700"
                  >
                    <Linkedin className="h-4 w-4 mr-1" /> LinkedIn Profile
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      */}

      {/* Team Culture */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Our Culture</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Makes Us Different</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Nuvatech, we foster a culture of innovation, collaboration, and continuous learning. We believe that
              our team is our greatest asset, and we invest in their growth and well-being.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {teamValues.map((value, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
              src="https://finserveinfotech.com/img/photos/g3@2x.jpg"
              alt="Nuvatech Team Culture"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="container mx-auto px-4 py-16 md:py-24">
  <div className="max-w-[70%] mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
      We're always looking for talented individuals who are passionate about technology and innovation. Explore
      our current openings and become part of our journey.
    </p>
    <Link href='/careers'>
      <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
        View Career Opportunities at Nuvate
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
