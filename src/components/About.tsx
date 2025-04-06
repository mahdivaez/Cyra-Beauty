"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Star, X, Heart, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
}

const About: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [appointmentCount, setAppointmentCount] = useState(0)

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev))
    }, 3000) // Increment every 3 seconds
    return () => clearInterval(interval)
  }, [])

  // Form handling with React Hook Form
  const { register, handleSubmit, reset } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    console.log(data) // Replace with API call (e.g., Formspree or HubSpot)
    setIsFormVisible(false) // Close form after submission
    reset() // Reset form fields
  }

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#F5E9E2] to-[#E8D5C4] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC0xMnY2aDEydjEyYzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh2LTE4eiIgZmlsbD0icmdiYSgyNiwgNjAsIDUyLCAwLjAzKSIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side: Text Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3C34] mb-4 sm:mb-6">
              The Cyra Beauty Experience
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#1A3C34]/80 mb-6 sm:mb-8">
              At Cyra Beauty Clinic, we combine cutting-edge technology with personalized care to deliver exceptional
              results. Led by Jaspreet Grewal, our CIDESCO-certified team is dedicated to enhancing your natural beauty.
            </p>

            {/* Key Features with Icons */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A3C34] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors duration-300">
                    Advanced Technology
                  </h3>
                  <p className="text-sm sm:text-base text-[#1A3C34]/70">
                    We invest in state-of-the-art equipment to ensure safe, effective, and comfortable treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A3C34] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors duration-300">
                    Expert Team
                  </h3>
                  <p className="text-sm sm:text-base text-[#1A3C34]/70">
                    Our licensed professionals receive ongoing training to stay at the forefront of aesthetic
                    treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A3C34] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors duration-300">
                    Personalized Care
                  </h3>
                  <p className="text-sm sm:text-base text-[#1A3C34]/70">
                    We develop customized treatment plans tailored to your unique skin type and concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats with Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-10">
              <div className="bg-white rounded-lg p-3 sm:p-6 shadow-md sm:shadow-lg">
                <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#D4AF37]">1,500+</p>
                <p className="text-xs sm:text-sm text-[#1A3C34]/70">Happy Clients</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-6 shadow-md sm:shadow-lg">
                <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#D4AF37]">5</p>
                <p className="text-xs sm:text-sm text-[#1A3C34]/70">Years Experience</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-6 shadow-md sm:shadow-lg col-span-2 sm:col-span-1">
                <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#D4AF37]">3</p>
                <p className="text-xs sm:text-sm text-[#1A3C34]/70">Specialized Services</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://cyrabeauty.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md text-center"
              >
                Book Your Free Consultation
              </a>
              <a
                href="#gallery"
                className="bg-[#1A3C34] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#2A4C44] hover:scale-105 transition-all duration-200 shadow-md text-center"
              >
                See Our Clinic
              </a>
            </div>
          </div>

          {/* Right Side: Image with Overlay */}
          <div className="relative group mt-8 md:mt-0">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="/G5.jpg"
                alt="Cyra Beauty Clinic Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#1A3C34]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-base sm:text-lg font-medium">Discover Our Space</p>
              </div>
            </div>
            {/* Quote Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-lg shadow-lg p-3 sm:p-6 max-w-[200px] sm:max-w-[250px]">
              <p className="font-medium text-sm sm:text-base text-[#1A3C34] italic">
                "We believe in enhancing your natural beauty, not changing who you are."
              </p>
              <p className="text-xs sm:text-sm text-[#D4AF37] mt-1 sm:mt-2 font-medium">— Dr. Sepideh Modir, Founder</p>
            </div>
          </div>
        </div>

        {/* Social Proof: Google Reviews */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-white py-4 sm:py-6 px-4 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <a
              href="https://www.google.com/search?q=Cyra+Beauty,+Health+and+Laser+Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-4 sm:h-6"
              />
              <div className="flex gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-3 h-3 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#1A3C34] text-xs sm:text-sm">
                We're rated 5/5 <span className="hidden sm:inline">(97 reviews)</span>
              </p>
            </a>
          </div>
        </div>

        {/* Live Appointment Counter */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-center text-[#1A3C34]">
          <span className="font-bold text-lg sm:text-xl md:text-2xl">{appointmentCount}+</span>{" "}
          <span className="text-sm sm:text-base">appointments booked today</span>
        </div>
      </div>

      {/* Lead Capture Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#1A3C34] p-1 rounded-full hover:bg-gray-100"
              aria-label="Close form"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C34] mb-3 sm:mb-4 pr-8">
              Book Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              <Input
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full p-2 sm:p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <Input
                {...register("email", { required: true })}
                placeholder="Email"
                type="email"
                className="w-full p-2 sm:p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <Input
                {...register("phone", { required: true })}
                placeholder="Phone"
                type="tel"
                className="w-full p-2 sm:p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <Select onValueChange={(value) => register("service").onChange({ target: { value } } as any)}>
                <SelectTrigger className="w-full p-2 sm:p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="laser-hair-removal">Laser Hair Removal</SelectItem>
                  <SelectItem value="cyra-facial">CYRA Facial</SelectItem>
                  <SelectItem value="scars-stretch-marks">Scars & Stretch Marks</SelectItem>
                </SelectContent>
              </Select>
              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#b89630] text-white py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all duration-200"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default About

