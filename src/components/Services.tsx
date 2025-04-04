import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  details?: string;
}

const services: Service[] = [
  {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    description:
      "Achieve smooth, hair-free skin with our advanced 755nm Alexandrite and 1064nm Nd:YAG laser technology. Safe for all skin types.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    features: ["Permanent reduction", "All skin types", "Fast & effective", "Minimal discomfort"],
    details:
      "Our laser hair removal treatment uses state-of-the-art technology to target hair follicles, ensuring long-lasting results with minimal discomfort. Suitable for all skin types, this treatment is perfect for those seeking a permanent solution to unwanted hair.",
  },
  {
    id: "cyra-facial",
    title: "CYRA Facial",
    description:
      "Our signature facial combines cutting-edge technology with customized treatments to address your unique skin concerns.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1887&auto=format&fit=crop",
    features: ["Custom approach", "Deep cleansing", "Enhanced hydration", "Visible results"],
    details:
      "The CYRA Facial is a bespoke treatment tailored to your skin’s needs. Using advanced techniques, we deeply cleanse, hydrate, and rejuvenate your skin, leaving you with a radiant, youthful glow.",
  },
  {
    id: "scars-stretch-marks",
    title: "Scars & Stretch Marks",
    description:
      "Advanced treatments to reduce the appearance of scars and stretch marks, promoting smoother, more even skin texture.",
    image:
      "https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=2066&auto=format&fit=crop",
    features: ["Texture improvement", "Collagen stimulation", "Non-invasive", "Minimal downtime"],
    details:
      "Our scars and stretch marks treatment uses non-invasive methods to stimulate collagen production, improving skin texture and reducing the visibility of imperfections with minimal downtime.",
  },
];

const Services: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [quickViewService, setQuickViewService] = useState<Service | null>(null);
  const [appointmentCount, setAppointmentCount] = useState(0);

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Form handling with React Hook Form
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data); // Replace with API call (e.g., Formspree or HubSpot)
    setIsFormVisible(false);
    setSelectedService(null);
    reset();
  };

  // Open form with pre-filled service
  const openForm = (service: string) => {
    setSelectedService(service);
    setValue("service", service);
    setIsFormVisible(true);
  };

  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#F5E9E2] to-[#E8D5C4] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-fadeIn">Our Premium Services</h2>
          <p className="section-subtitle animate-fadeIn">
            Discover our range of non-invasive, effective treatments designed to enhance your natural beauty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group relative overflow-hidden animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="absolute bottom-4 left-4 right-4 font-montserrat font-semibold text-2xl text-white">
                  {service.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 bg-white">
                <p className="font-lora text-[#1A3C34]/80 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#F5E9E2] flex items-center justify-center">
                        <span className="text-[#D4AF37] text-sm">✓</span>
                      </div>
                      <span className="text-sm text-[#1A3C34]/70">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Availability Indicator */}
                <p className="text-sm text-red-500 font-montserrat mb-4">
                  3 slots left this week
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-[#1A3C34] hover:text-[#D4AF37] hover:bg-[#F5E9E2] transition-all duration-300"
                    onClick={() => setQuickViewService(service)}
                  >
                    <span>Quick View</span>
                    <ArrowRight size={16} />
                  </Button>
                  <a
                    href="https://cyrabeauty.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof: Google Reviews */}
        <div className="mt-16 bg-white py-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="flex justify-center items-center space-x-2">
            <a
              href="https://www.google.com/search?sca_esv=a8ceca4dfe58fbed&q=Cyra%20Beauty%2C%20Health%20and%20Laser%20Clinic&stick=H4sIAAAAAAAAAONgU1I1qDA1sTAzTzNPMzJONLY0NTW3MqgwNrI0MgTCZKOkZHNLA9NFrCrOlUWJCk6piaUllToKHqmJOSUZCol5KQo-icWpRQrOOZl5mckAGXWd8VAAAAA&mat=CWlethn1mwJk&ved=2ahUKEwjp4PSTpLyMAxWC4gIHHSQTNykQrMcEegQIHhAF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-6"
              />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#1A3C34] text-sm">We’re rated 5/5 (97 reviews)</p>
            </a>
          </div>
        </div>

        {/* Live Appointment Counter */}
        <div className="mt-8 text-center text-[#1A3C34] animate-fadeIn">
          <span className="font-bold text-2xl">{appointmentCount}+</span> appointments booked today
        </div>

        {/* Ready to Transform Section */}
        <div className="mt-12 bg-[#1A3C34] text-white py-6 rounded-lg shadow-lg text-center">
          <p className="font-montserrat text-lg md:text-xl mb-4">
            Ready to Transform Your Skin? Book Your Appointment Now!
          </p>
          <a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setQuickViewService(null)}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-lg w-full relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickViewService(null)}
              className="absolute top-4 right-4 text-[#1A3C34] text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#1A3C34] mb-4">{quickViewService.title}</h2>
            <img
              src={quickViewService.image}
              alt={quickViewService.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="font-lora text-[#1A3C34]/80 mb-4">{quickViewService.details}</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {quickViewService.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F5E9E2] flex items-center justify-center">
                    <span className="text-[#D4AF37] text-sm">✓</span>
                  </div>
                  <span className="text-sm text-[#1A3C34]/70">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://cyrabeauty.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Book This Service
            </a>
          </div>
        </div>
      )}

      {/* Lead Capture Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative animate-fadeIn">
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-4 right-4 text-[#1A3C34] text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#1A3C34] mb-4">Book Your Appointment</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                type="email"
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <input
                {...register("phone", { required: true })}
                placeholder="Phone"
                type="tel"
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <select
                {...register("service", { required: true })}
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
                value={selectedService || ""}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select a Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn-primary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
