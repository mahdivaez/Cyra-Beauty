"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
}

const Gallery: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [appointmentCount, setAppointmentCount] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  // Clinic images array (replace with your actual image paths)
  const clinicImages = [
    { src: "/G1.jpg", alt: "Clinic Interior", caption: "Our Welcoming Reception Area" },
    { src: "/G2.jpg", alt: "Treatment Room", caption: "Relax in Our Modern Treatment Rooms" },
    { src: "/G3.jpg", alt: "Team at Work", caption: "Our Expert Team in Action" },
    { src: "/G4.jpg", alt: "Equipment", caption: "State-of-the-Art Technology" },
  ]

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-[#F5E9E2] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC0xMnY2aDEydjEyYzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh2LTE4eiIgZmlsbD0icmdiYSgyNiwgNjAsIDUyLCAwLjAzKSIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3C34] text-center mb-3 sm:mb-6">
          Explore Cyra Beauty Clinic
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#1A3C34]/80 text-center mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto">
          Step inside our clinic and see the spaces where beauty transformations happen.
        </p>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clinicImages.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                onClick={() => setSelectedImage(image.src)}
              />
              {/* Caption Overlay on Hover */}
              <div className="absolute inset-0 bg-[#1A3C34]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-center px-4 text-sm sm:text-base">{image.caption}</p>
              </div>
            </div>
          ))}
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

        {/* CTA Button */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md"
          >
            Book Your Visit
          </a>
        </div>
      </div>

      {/* Lightbox for Viewing Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Selected Clinic Image"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 p-1 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      )}

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

export default Gallery

