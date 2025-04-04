"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white to-[#f8f5f0]">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC0xMnY2aDEydjEyYzAgNi42My01LjM3IDEyLTEyIDEydjZjOS45NCAwIDE4LTguMDYgMTgtMTh2LTE4eiIgZmlsbD0icmdiYSgyNiwgNjAsIDUyLCAwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-50 z-0"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#e9e1d6] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#e9e1d6] rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-2">
              <Badge className="bg-[#26604a]/10 text-[#26604a] hover:bg-[#26604a]/20 px-4 py-1.5 text-sm rounded-full">
                Advanced Beauty Treatments
              </Badge>
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-[#26604a] leading-tight">
                Reveal Your Natural <span className="text-[#d4af37]">Radiance</span>
              </h1>
              <p className="text-lg text-[#26604a]/80 mt-4 font-light leading-relaxed">
                Experience transformative, non-invasive beauty treatments with cutting-edge technology and personalized
                care.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-2 text-[#26604a]/70">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <span className="text-sm">5.0 from 1,500+ happy clients</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cyrabeauty.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#26604a] hover:bg-[#26604a]/90 text-white rounded-full px-8 font-medium flex items-center justify-center"
              >
                Book Free Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-[#26604a] text-[#26604a] hover:bg-[#26604a]/5 rounded-full px-8"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </Button>
            </div>

            {/* Certification */}
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#e9e1d6] max-w-md">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-[#d4af37]" />
                </div>
              </div>
              <div>
                <p className="font-medium text-[#26604a]">CIDESCO Certified Experts</p>
                <p className="text-sm text-[#26604a]/60">Internationally recognized standards of excellence</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1887&auto=format&fit=crop"
                  alt="Beauty treatment at Cyra Beauty Clinic"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 z-20">
                <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-pulse-slow">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[#f8f5f0] border-2 border-white ring-2 ring-[#e9e1d6] overflow-hidden"
                      >
                        <img
                          src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                          alt={`Client ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-[#26604a]">
                    <span className="block text-[#d4af37] font-bold">This Week</span>
                    12 people booked
                  </p>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-[#e9e1d6] rounded-2xl"></div>

              {/* Special offer badge */}
              <div className="absolute top-4 -right-10 z-20 bg-[#d4af37] text-white px-6 py-2 rounded-full shadow-lg transform rotate-12">
                <p className="text-sm font-bold">20% OFF First Visit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
