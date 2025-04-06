"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const Banner: React.FC = () => {
  const [appointmentCount, setAppointmentCount] = useState(0)

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev))
    }, 3000) // Increment every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Banner Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen bg-[#F5E9E2] flex flex-col md:flex-row items-center justify-center">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 text-[#1A3C34] text-center md:text-left">
          {/* Tagline with Fade-In Animation - Hidden on mobile, visible on larger screens */}
          <p
            className="hidden sm:block text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Coquitlam's Premier Beauty Clinic
          </p>

          {/* Headline with Fade-In Animation */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Beauty Begins Here
          </h1>

          {/* Subheadline with Fade-In Animation */}
          <p
            className="text-base sm:text-lg md:text-xl mb-6 animate-fadeIn max-w-md mx-auto md:mx-0"
            style={{ animationDelay: "0.6s" }}
          >
            Transform your skin with personalized facials, laser treatments, and more.
          </p>

          {/* Primary CTA Button */}
          <a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base md:text-lg hover:scale-105 transition-transform animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            Book Your Free Consultation
          </a>

          {/* Live Appointment Counter */}
          <div
            className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#1A3C34] animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
            <span className="font-bold">{appointmentCount}+</span> appointments booked today
          </div>
        </div>

        {/* Right Side: Image with Overlay Elements */}
        <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-screen relative">
          <img
            src="/Group-67.png" // Path to image in public folder
            alt="Cyra Beauty Clinic Team"
            className="w-full h-full object-cover object-center"
            style={{
              filter: "grayscale(100%)", // Match the black-and-white effect
            }}
          />
          {/* Floating Badge for Trust Signal - Uncomment if needed */}
          {/* <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-[#D4AF37] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm animate-bounce">
            CIDESCO-Certified Experts
          </div> */}
        </div>
      </section>

      {/* Google Review Section */}
      <div className="bg-[#F5E9E2] py-3 sm:py-4 flex flex-wrap justify-center items-center px-4">
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
              <Star key={index} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-[#1A3C34] text-xs sm:text-sm whitespace-nowrap">
            We're rated 5/5 <span className="hidden xs:inline">(97 reviews)</span>
          </p>
        </a>
      </div>
    </div>
  )
}

export default Banner

