"use client"

import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Award, Coffee, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import { useState } from 'react';

export default function CareersPage() {
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentLocation: "",
    skills: "",
    coverLetter: "",
    resume: null as File | null,
    portfolio: "",
    consent: false,
    updates: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files ? files[0] : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);


    try {
      const data = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          if (typeof formData[key] === "boolean") {
            data.append(key, formData[key] ? "true" : "false");
          } else {
            data.append(key, formData[key] as any);
          }
        }
      }

      const response = await fetch("http://127.0.0.1:3001/send-application", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error(`Server error: ${response.statusText}`);

      alert("Application submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        currentLocation: "",
        skills: "",
        coverLetter: "",
        resume: null,
        portfolio: "",
        consent: false,
        updates: false,
      });

      const form = document.getElementById("application-form");
      if (form) form.style.display = "none";

    } catch (error: any) {
      alert("Failed to submit application: " + error.message);
    } finally {
    setSubmitting(false);
    }
  }



  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family, plus wellness programs.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, certifications, and conference attendance.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited coffee.",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with team outings, celebrations, and open communication.",
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities to work on cutting-edge technologies.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based bonuses, employee recognition programs, and achievement awards.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create innovative solutions that transform businesses.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve great results.",
    },
    {
      title: "Growth",
      description: "We invest in our people's growth and provide opportunities to learn and advance.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Join Our Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Build the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Business Technology
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join our passionate team of innovators, developers, and problem-solvers who are transforming industries with
            cutting-edge ERP solutions. Be part of something bigger.
          </p>
          {/*
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn About Our Culture
            </Button>
          </div>
          */}
        </div>
      </section>

      {/* Company Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Team Members", value: "50+" },
            { label: "Years in Business", value: "10+" },
            { label: "Happy Clients", value: "500+" },
            { label: "Products Built", value: "4" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Our Values</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Drives Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our core values shape everything we do and guide how we work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mx-auto">
                  <span className="text-2xl font-bold">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Benefits & Perks</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why You'll Love Working Here</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe in taking care of our team with comprehensive benefits and a great work environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions 
      <section className="container mx-auto px-4 py-16 md:py-24 bg-slate-50">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Open Positions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Current Opportunities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Find your next career opportunity and join our growing team
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {openPositions.map((position, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {position.experience}
                  </Badge>
                </div>

                <p className="text-slate-600 mb-4">{position.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {position.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button className="bg-orange-600 hover:bg-orange-700">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <Button variant="outline" size="lg">
            Send Us Your Resume
          </Button>
        </div>
      </section>
      */}

      {/* Job Application Form Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Join Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Apply?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't see the perfect position? Send us your details and we'll keep you in mind for future opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Button
            size="lg"
            className="w-full bg-orange-600 hover:bg-orange-700 mb-8"
            onClick={() => {
              const form = document.getElementById("application-form")
              if (form) {
                form.style.display = form.style.display === "none" ? "block" : "none"
              }
            }}
          >
            Join Us - Submit Your Application
          </Button>

          <div id="application-form" style={{ display: "none" }}>
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                  Position of Interest
                </label>
                <select
                  id="position"
                  name="position"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.position}
                  onChange={handleChange}
                >
                  <option value="">Select a position</option>
                  <option value="Senior Full Stack Developer">Senior Full Stack Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Sales Executive">Sales Executive</option>
                  <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="currentLocation" className="block text-sm font-medium text-slate-700 mb-2">
                Current Location *
              </label>
              <input
                type="text"
                id="currentLocation"
                name="currentLocation"
                required
                placeholder="City, State"
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={formData.currentLocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-slate-700 mb-2">
                Key Skills
              </label>
              <textarea
                id="skills"
                name="skills"
                rows={3}
                placeholder="List your key technical skills, separated by commas"
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-2">
                Cover Letter / Why do you want to join Nuvatech?
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={4}
                placeholder="Tell us about yourself and why you're interested in joining our team..."
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={formData.coverLetter}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-2">
                Resume / CV *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                onChange={handleChange}
              />
              <p className="text-sm text-slate-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-slate-700 mb-2">
                Portfolio / LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                placeholder="https://linkedin.com/in/yourprofile or portfolio URL"
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-300 rounded"
                checked={formData.consent}
                onChange={handleChange}
              />
              <label htmlFor="consent" className="text-sm text-slate-700">
                I consent to the processing of my personal data for recruitment purposes and agree to Nuvatech's privacy policy. *
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="updates"
                name="updates"
                className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-slate-300 rounded"
                checked={formData.updates}
                onChange={handleChange}
              />
              <label htmlFor="updates" className="text-sm text-slate-700">
                I would like to receive updates about future job opportunities at Nuvatech.
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="flex-1 bg-orange-600 hover:bg-orange-700"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  const form = document.getElementById("application-form");
                  if (form) {
                    form.style.display = "none";
                  }
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
        </div>
      </section>

      {/* CTA Section 
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Take the next step in your career and be part of a team that's transforming businesses with innovative
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Browse All Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
      */}
      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
