"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Instagram, Facebook, Lock, Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react"

const Booking: React.FC = () => {
  const { toast } = useToast()
  const [timeLeft, setTimeLeft] = useState(86400) // 24 hours in seconds

  // Countdown timer for limited-time offer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}h ${minutes}m ${secs}s`
  }

  const handleBookingClick = () => {
    // Open the external booking link
    window.open("https://booking.cyrabeauty.ca", "_blank")

    toast({
      title: "Opening Booking System",
      description: "You're being redirected to our online booking system.",
    })
  }

  return (
    <section
      id="booking"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1A3C34] to-[#2A5C54] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC0xMnY2aDEydjEyYzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh2LTE4eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')]"></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side: Info and Contact */}
          <div className="relative animate-fade-in">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1887&auto=format&fit=crop"
                alt="Booking Background"
                className="w-full h-full object-cover opacity-30 rounded-xl"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/60 rounded-xl"></div>
            </div>

            <div className="relative z-10 p-8 text-white">
              <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-white/80 mb-6 sm:mb-8 max-w-lg text-sm sm:text-base">
                Take the first step towards enhancing your natural beauty. Schedule a free consultation with our experts
                to discuss your goals and create a personalized treatment plan.
              </p>

              {/* Limited-Time Offer */}
              <div className="bg-[#D4AF37]/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
                <p className="font-montserrat text-xs sm:text-sm text-[#D4AF37]">
                  Limited-Time Offer: Book within 24 hours for a 10% discount! Time left:{" "}
                  <span className="font-bold">{formatTime(timeLeft)}</span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <Phone className="text-[#D4AF37]" size={16} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-white">Call Us Directly</h3>
                    <p className="text-white/70 text-sm">(604) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <Mail className="text-[#D4AF37]" size={16} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-white">Email Us</h3>
                    <p className="text-white/70 text-sm">info@cyrabeauty.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <MapPin className="text-[#D4AF37]" size={16} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-white">Visit Us</h3>
                    <p className="text-white/70 text-sm">123 Beauty Way, Coquitlam, BC</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/cyrabeautyclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/cyrabeautyclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Card */}
          <div
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] mb-3 sm:mb-4 px-3 py-1">Easy Online Booking</Badge>
              <h3 className="font-montserrat font-semibold text-xl sm:text-2xl text-[#1A3C34] mb-3 sm:mb-4">
                Schedule Your Appointment
              </h3>
              <p className="text-[#1A3C34]/70 mb-4 sm:mb-6 text-sm sm:text-base">
                Book your free consultation in just a few clicks. Our online booking system is available 24/7.
              </p>
            </div>

            {/* Booking Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#F5F5F5]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A3C34]/10 flex items-center justify-center">
                  <Calendar className="text-[#1A3C34]" size={16} />
                </div>
                <div>
                  <p className="font-medium text-[#1A3C34] text-sm sm:text-base">Choose Your Date</p>
                  <p className="text-xs text-[#1A3C34]/60">Available 7 days a week</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#F5F5F5]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A3C34]/10 flex items-center justify-center">
                  <Clock className="text-[#1A3C34]" size={16} />
                </div>
                <div>
                  <p className="font-medium text-[#1A3C34] text-sm sm:text-base">Select Your Time</p>
                  <p className="text-xs text-[#1A3C34]/60">Flexible scheduling</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#F5F5F5]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A3C34]/10 flex items-center justify-center">
                  <CheckCircle className="text-[#1A3C34]" size={16} />
                </div>
                <div>
                  <p className="font-medium text-[#1A3C34] text-sm sm:text-base">Instant Confirmation</p>
                  <p className="text-xs text-[#1A3C34]/60">No waiting for approval</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-[#F5F5F5]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A3C34]/10 flex items-center justify-center">
                  <Lock className="text-[#1A3C34]" size={16} />
                </div>
                <div>
                  <p className="font-medium text-[#1A3C34] text-sm sm:text-base">Secure Booking</p>
                  <p className="text-xs text-[#1A3C34]/60">Your data is protected</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleBookingClick}
              className="w-full bg-[#D4AF37] hover:bg-[#b89630] text-white font-montserrat py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 rounded-xl flex items-center justify-center gap-2"
            >
              Book Your Free Consultation
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Button>

            {/* Trust Indicators */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <Lock className="text-[#D4AF37]" size={14} />
              <p className="text-xs text-[#1A3C34]/60">Trusted by 1,500+ Clients | Secure Booking</p>
            </div>

            {/* Testimonial */}
            <div className="mt-8 p-4 bg-[#F5F5F5] rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[#1A3C34]">Sarah M.</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#1A3C34]/70 italic">
                "Booking was so easy! The consultation was thorough and I felt heard. Highly recommend their services."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking

