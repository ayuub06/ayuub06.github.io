"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces designed with user experience and accessibility in mind.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Responsive mobile applications that work seamlessly across all devices and platforms.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Search engine optimization to help your website rank higher and reach more customers.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with databases, APIs, and cloud infrastructure.",
    color: "from-purple-500 to-blue-400",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your website with advanced optimization techniques and best practices.",
    color: "from-blue-400 to-cyan-400",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Cubes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-lg animate-float-slow transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg animate-float-medium transform -rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg animate-float-fast transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg animate-float-slow transform -rotate-45"></div>

        {/* Gradient Blobs */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-full blur-xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Services</h2>
            {/* Animated Underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            {/* Floating Cube Animation */}
            <div className="absolute -top-8 -right-8 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded transform rotate-45 animate-bounce opacity-60"></div>
          </div>
          <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
            Transforming ideas into digital experiences with cutting-edge technology and creative design
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredCard === index

            return (
              <Card
                key={index}
                className={`relative p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl transition-all duration-300 cursor-pointer group ${
                  isHovered ? "transform scale-105 shadow-2xl shadow-blue-500/20" : "shadow-lg hover:shadow-xl"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  } bg-gradient-to-r ${service.color} opacity-5`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} p-0.5 transition-all duration-300 ${
                      isHovered ? "scale-110 shadow-lg shadow-blue-500/30" : ""
                    }`}
                  >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <Icon
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isHovered ? "text-blue-500" : "text-gray-700"
                        }`}
                      />
                    </div>
                  </div>
                  {/* Icon Glow */}
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${service.color} blur-md transition-opacity duration-300 ${
                      isHovered ? "opacity-30" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3
                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isHovered ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`transition-all duration-300 border-blue-200 text-blue-600 hover:bg-blue-50 ${
                        isHovered ? "shadow-md shadow-blue-500/20 border-blue-300" : ""
                      }`}
                    >
                      Learn More
                    </Button>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 ${
                        isHovered ? "shadow-xl shadow-blue-500/30 scale-105" : ""
                      }`}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-40"></div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to bring your project to life?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 px-8 py-3"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
