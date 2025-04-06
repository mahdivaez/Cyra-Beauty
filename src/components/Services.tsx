"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Star, ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
}

interface Service {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  details?: string
}

const services: Service[] = [
  {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    description:
      "Achieve smooth, hair-free skin with our advanced 755nm Alexandrite and 1064nm Nd:YAG laser technology. Safe for all skin types.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    features: ["Permanent reduction", "All skin types", "Fast & effective", "Minimal discomfort"],
    details:
      "Our laser hair removal treatment uses state-of-the-art technology to target hair follicles, ensuring long-lasting results with minimal discomfort. Suitable for all skin types, this treatment is perfect for those seeking a permanent solution to unwanted hair.",
  },
  {
    id: "cyra-facial",
    title: "CYRA Facial",
    description:
      "Our signature facial combines cutting-edge technology with customized treatments to address your unique skin concerns.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1887&auto=format&fit=crop",
    features: ["Custom approach", "Deep cleansing", "Enhanced hydration", "Visible results"],
    details:
      "The CYRA Facial is a bespoke treatment tailored to your skin's needs. Using advanced techniques, we deeply cleanse, hydrate, and rejuvenate your skin, leaving you with a radiant, youthful glow.",
  },
  {
    id: "scars-stretch-marks",
    title: "Scars & Stretch Marks",
    description:
      "Advanced treatments to reduce the appearance of scars and stretch marks, promoting smoother, more even skin texture.",
    image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=2066&auto=format&fit=crop",
    features: ["Texture improvement", "Collagen stimulation", "Non-invasive", "Minimal downtime"],
    details:
      "Our scars and stretch marks treatment uses non-invasive methods to stimulate collagen production, improving skin texture and reducing the visibility of imperfections with minimal downtime.",
  },
]

const Services: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [quickViewService, setQuickViewService] = useState<Service | null>(null)
  const [appointmentCount, setAppointmentCount] = useState(0)

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Form handling with React Hook Form
  const { register, handleSubmit, reset, setValue } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    console.log(data) // Replace with API call (e.g., Formspree or HubSpot)
    setIsFormVisible(false)
    setSelectedService(null)
    reset()
  }

  // Open form with pre-filled service
  const openForm = (service: string) => {
    setSelectedService(service)
    setValue("service", service)
    setIsFormVisible(true)
  }

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#F5E9E2] to-[#E8D5C4] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC0xMnY2aDEydjEyYzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh2LTE4eiIgZmlsbD0icmdiYSgyNiwgNjAsIDUyLCAwLjAzKSIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3C34] mb-2 sm:mb-4">
            Our Premium Services
          </h2>
          <p className="text-sm sm:text-base text-[#1A3C34]/80 max-w-2xl mx-auto">
            Discover our range of non-invasive, effective treatments designed to enhance your natural beauty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image with Overlay */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/80 to-transparent opacity-90 hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="absolute bottom-4 left-4 right-4 font-medium text-xl sm:text-2xl text-white">
                  {service.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-[#1A3C34]/80 mb-4 line-clamp-3">{service.description}</p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 sm:gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F5E9E2] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#1A3C34]/70">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Availability Indicator */}
                <p className="text-xs sm:text-sm text-red-500 font-medium mb-3 sm:mb-4">3 slots left this week</p>

                {/* Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-[#1A3C34] hover:text-[#D4AF37] hover:bg-[#F5E9E2] transition-all duration-300 text-xs sm:text-sm py-1.5 sm:py-2"
                    onClick={() => setQuickViewService(service)}
                  >
                    <span>Quick View</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <a
                    href="https://cyrabeauty.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white text-center py-1.5 sm:py-2 px-4 rounded-md text-xs sm:text-sm font-medium transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof: Google Reviews */}
        <div className="mt-10 sm:mt-16 bg-white py-4 sm:py-6 px-4 rounded-lg shadow-md max-w-3xl mx-auto">
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
        <div className="mt-6 sm:mt-8 text-center text-[#1A3C34]">
          <span className="font-bold text-lg sm:text-2xl">{appointmentCount}+</span>{" "}
          <span className="text-sm sm:text-base">appointments booked today</span>
        </div>

        {/* Ready to Transform Section */}
        <div className="mt-8 sm:mt-12 bg-[#1A3C34] text-white py-4 sm:py-6 px-4 rounded-lg shadow-md text-center">
          <p className="font-medium text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Ready to Transform Your Skin? Book Your Appointment Now!
          </p>
          <a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white py-2 px-4 sm:px-6 rounded-md text-xs sm:text-sm font-medium transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setQuickViewService(null)}
        >
          <div
            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickViewService(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-[#1A3C34] p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C34] mb-3 sm:mb-4 pr-8">{quickViewService.title}</h2>
            <img
              src={quickViewService.image || "/placeholder.svg"}
              alt={quickViewService.title}
              className="w-full h-36 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
            />
            <p className="text-sm sm:text-base text-[#1A3C34]/80 mb-3 sm:mb-4">{quickViewService.details}</p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {quickViewService.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F5E9E2] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#1A3C34]/70">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://cyrabeauty.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white text-center py-2 sm:py-3 px-4 rounded-md text-sm sm:text-base font-medium transition-colors"
            >
              Book This Service
            </a>
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
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C34] mb-3 sm:mb-4 pr-8">Book Your Appointment</h2>
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
              <Select defaultValue={selectedService || undefined} onValueChange={(value) => setValue("service", value)}>
                <SelectTrigger className="w-full p-2 sm:p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white py-2 sm:py-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services

