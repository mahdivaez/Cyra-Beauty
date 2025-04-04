import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaCalendarPlus, FaLock } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const Booking: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

  // Form handling with React Hook Form
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    },
  });

  // Countdown timer for limited-time offer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmationVisible(true);
      toast({
        title: "Booking Request Submitted",
        description: "We'll contact you shortly to confirm your consultation.",
      });
    }, 1500);
  };

  const addToCalendar = () => {
    // Placeholder for calendar integration (e.g., Google Calendar API)
    toast({
      title: "Added to Calendar",
      description: "Your consultation has been added to your calendar.",
    });
  };

  return (
    <section
      id="booking"
      className="py-20 px-6 bg-gradient-to-br from-[#1A3C34] to-[#2A5C54] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Hero Image/Video and Contact Info */}
          <div className="relative animate-fade-in">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/G6.jpg"
                alt="Booking Background"
                className="w-full h-full object-cover opacity-30 rounded-xl"
              />
              <div className="absolute inset-0 bg-[#1A3C34]/60 rounded-xl"></div>
            </div>

            <div className="relative z-10 p-8 text-white">
              <h2 className="font-montserrat text-3xl md:text-4xl font-semibold mb-4">
                Book Your Free Consultation
              </h2>
              <p className="font-lora text-white/80 mb-8 max-w-lg">
                Take the first step towards enhancing your natural beauty. Schedule a free consultation with our experts to discuss your goals and create a personalized treatment plan.
              </p>

              {/* Limited-Time Offer */}
              <div className="bg-[#D4AF37]/20 rounded-lg p-4 mb-8">
                <p className="font-montserrat text-sm text-[#D4AF37]">
                  Limited-Time Offer: Book within 24 hours for a 10% discount! Time left:{" "}
                  <span className="font-bold">{formatTime(timeLeft)}</span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <FaPhone className="text-[#D4AF37]" size={16} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-white">Call Us Directly</h3>
                    <p className="text-white/70 text-sm">(604) 555-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <FaEnvelope className="text-[#D4AF37]" size={16} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-medium text-white">Email Us</h3>
                    <p className="text-white/70 text-sm">info@cyrabeauty.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-0.5">
                    <FaMapMarkerAlt className="text-[#D4AF37]" size={16} />
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
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/cyrabeautyclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-montserrat font-semibold text-xl text-[#1A3C34] mb-6">
              Request Your Free Consultation
            </h3>

            {/* Trusted by Badge */}
            <div className="flex items-center gap-2 mb-6">
              <FaLock className="text-[#D4AF37]" size={16} />
              <p className="text-sm text-[#1A3C34]/70">Trusted by 1,000+ Clients | Secure Form</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Full Name</label>
                <Input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your name"
                  className={`bg-[#F5E9E2]/10 border-[#F5E9E2] ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Email</label>
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Your email"
                    className={`bg-[#F5E9E2]/10 border-[#F5E9E2] ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Phone</label>
                  <Input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10,15}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    placeholder="Your phone number"
                    className={`bg-[#F5E9E2]/10 border-[#F5E9E2] ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Interested Service</label>
                <Select
                  onValueChange={(value) => setValue("service", value)}
                  defaultValue={watch("service")}
                >
                  <SelectTrigger className="bg-[#F5E9E2]/10 border-[#F5E9E2]">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laser-hair-removal">Laser Hair Removal</SelectItem>
                    <SelectItem value="cyra-facial">CYRA Facial</SelectItem>
                    <SelectItem value="scars-stretch-marks">Scars & Stretch Marks</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Preferred Date</label>
                  <Input
                    type="date"
                    {...register("date", { required: "Date is required" })}
                    className={`bg-[#F5E9E2]/10 border-[#F5E9E2] ${errors.date ? "border-red-500" : ""}`}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Preferred Time</label>
                  <Select
                    onValueChange={(value) => setValue("time", value)}
                    defaultValue={watch("time")}
                  >
                    <SelectTrigger className="bg-[#F5E9E2]/10 border-[#F5E9E2]">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#1A3C34]/70 mb-1 block">Message (Optional)</label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell us more about your needs"
                  rows={3}
                  className="bg-[#F5E9E2]/10 border-[#F5E9E2] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#b89630] text-white font-montserrat py-2.5 transition-all duration-300 hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Schedule Consultation"}
              </Button>

              <p className="text-xs text-center text-[#1A3C34]/60 mt-4">
                By submitting this form, you agree to our{" "}
                <a href="#" className="underline hover:text-[#D4AF37]">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirmationVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative animate-fadeIn">
            <button
              onClick={() => setIsConfirmationVisible(false)}
              className="absolute top-4 right-4 text-[#1A3C34] text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#1A3C34] mb-4">Booking Confirmed!</h2>
            <p className="font-lora text-[#1A3C34]/80 mb-6">
              Thank you for booking your consultation. We'll contact you shortly to confirm your appointment details.
            </p>
            <button
              onClick={addToCalendar}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaCalendarPlus size={16} />
              Add to Calendar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
