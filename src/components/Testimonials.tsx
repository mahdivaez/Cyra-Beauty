"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Define available services
const AVAILABLE_SERVICES = [
  "Laser Hair Removal",
  "HydraFacial",
  "Wrinkle Treatment",
  "PRP Treatment",
  "Scar Treatment",
] as const

type ServiceType = (typeof AVAILABLE_SERVICES)[number]

interface FormData {
  name: string
  email: string
  phone: string
  service: ServiceType
}

interface Testimonial {
  id: number
  name: string
  service: ServiceType
  image: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Laser Hair Removal",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Dr. Modir is one of the best and most skilled doctors who truly possesses a beautiful and unique range of skills in his field. The laser hair removal was quick and effective.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily Chen",
    service: "HydraFacial",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I had an amazing experience with the HydraFacial at Dr Modir. My skin felt refreshed and glowing for days afterward.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    service: "Scar Treatment",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The scar treatment exceeded my expectations! The doctors are so knowledgeable and professional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Patel",
    service: "Wrinkle Treatment",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    text: "The wrinkle treatment was fantastic! The team was incredibly knowledgeable and the results were natural-looking.",
    rating: 5,
  },
  {
    id: 5,
    name: "James Carter",
    service: "PRP Treatment",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "The PRP treatment was a game-changer for my skin. The staff made me feel at ease, and the results are incredible!",
    rating: 5,
  },
  {
    id: 6,
    name: "Lisa Nguyen",
    service: "Laser Hair Removal",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    text: "I'm so impressed with the laser hair removal service! The clinic is spotless, and the team is super professional.",
    rating: 5,
  },
]

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const { register, handleSubmit, reset, setValue } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsFormVisible(false)
    setSelectedService(null)
    reset()
  }

  const openForm = (service: ServiceType) => {
    if (AVAILABLE_SERVICES.includes(service)) {
      setSelectedService(service)
      setValue("service", service)
      setIsFormVisible(true)
    }
  }

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F5E9E2] to-[#E8D5C4] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC0xMnY2aDEydjEyYzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh2LTE4eiIgZmlsbD0icmdiYSgyNiwgNjAsIDUyLCAwLjAzKSIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A3C34] mb-2 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-[#1A3C34]/70 max-w-2xl mx-auto">
            Real stories from real clients who have experienced our transformative treatments.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-6 md:-left-12 bg-[#1A3C34] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#D4AF37] transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-6 md:-right-12 bg-[#1A3C34] text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#D4AF37] transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-2 sm:px-4">
                  <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 relative shadow-lg transition-all duration-300 hover:shadow-xl">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#D4AF37]" />
                    </div>

                    {/* Verified Badge - Positioned better for mobile */}
                    <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                      Verified Client
                    </Badge>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 pt-8 sm:pt-4">
                      {/* Client Image */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto sm:mx-0">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 text-center sm:text-left">
                        {/* Star Rating */}
                        <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[#D4AF37] text-[#D4AF37]" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-sm sm:text-base md:text-lg text-[#1A3C34] mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-none">
                          "{testimonial.text}"
                        </p>

                        {/* Client Info */}
                        <div className="mb-4">
                          <p className="font-medium text-[#1A3C34] text-base sm:text-lg">{testimonial.name}</p>
                          <p className="text-xs sm:text-sm text-[#1A3C34]/70">{testimonial.service}</p>
                        </div>

                        {/* Book Button - Always visible on mobile */}
                        <Button
                          onClick={() => openForm(testimonial.service)}
                          className="bg-[#1A3C34] hover:bg-[#1A3C34]/90 text-white text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-full"
                        >
                          Book This Service
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 sm:mt-8 gap-1 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#D4AF37]" : "bg-[#F5E9E2]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Cyra+Beauty,+Health+and+Laser+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-[#1A3C34] hover:text-[#D4AF37] transition-colors duration-300"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-5 sm:p-8 rounded-lg max-w-md w-full relative animate-fadeIn">
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#1A3C34] text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C34] mb-4">Book Your Appointment</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <Input
                {...register("email", { required: true })}
                placeholder="Email"
                type="email"
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <Input
                {...register("phone", { required: true })}
                placeholder="Phone"
                type="tel"
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <Select
                defaultValue={selectedService || undefined}
                onValueChange={(value) => setValue("service", value as ServiceType)}
              >
                <SelectTrigger className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_SERVICES.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Testimonials

