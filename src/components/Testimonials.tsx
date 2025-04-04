import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// Define available services
const AVAILABLE_SERVICES = [
  "Laser Hair Removal",
  "HydraFacial",
  "Wrinkle Treatment",
  "PRP Treatment",
  "Scar Treatment"
] as const;

type ServiceType = typeof AVAILABLE_SERVICES[number];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
}

interface Testimonial {
  id: number;
  name: string;
  service: ServiceType;
  image: string;
  text: string;
  rating: number;
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
    text: "I’m so impressed with the laser hair removal service! The clinic is spotless, and the team is super professional.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { register, handleSubmit, reset, setValue } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsFormVisible(false);
    setSelectedService(null);
    reset();
  };

  const openForm = (service: ServiceType) => {
    if (AVAILABLE_SERVICES.includes(service)) {
      setSelectedService(service);
      setValue("service", service);
      setIsFormVisible(true);
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-br from-[#F5E9E2] to-[#E8D5C4] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fadeIn">What Our Clients Say</h2>
          <p className="section-subtitle animate-fadeIn">
            Real stories from real clients who have experienced our transformative treatments.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-6 md:-left-12 transform -translate-y-1/2 bg-[#1A3C34] text-white p-3 rounded-full shadow-lg hover:bg-[#D4AF37] transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-6 md:-right-12 transform -translate-y-1/2 bg-[#1A3C34] text-white p-3 rounded-full shadow-lg hover:bg-[#D4AF37] transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-10 relative shadow-lg group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-6 right-6 opacity-20">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 25.5C12.5 25.5 14 24 14 21.5C14 19 12.5 17.5 10.5 17.5C8.5 17.5 7 19 7 21.5L7 22.5C7 28 11 31.5 16.5 31.5V28.5C13 28.5 10.5 26.5 10.5 22.5V25.5ZM25.5 25.5C27.5 25.5 29 24 29 21.5C29 19 27.5 17.5 25.5 17.5C23.5 17.5 22 19 22 21.5L22 22.5C22 28 26 31.5 31.5 31.5V28.5C28 28.5 25.5 26.5 25.5 22.5V25.5Z"
                          fill="#D4AF37"
                        />
                      </svg>
                    </div>

                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-montserrat px-3 py-1 rounded-full">
                      Verified Client
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <FaStar
                              key={i}
                              size={16}
                              className="text-[#D4AF37] drop-shadow-sm"
                            />
                          ))}
                        </div>

                        <p className="font-lora text-lg text-[#1A3C34] mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                          "{testimonial.text}"
                        </p>

                        <div className="mb-4">
                          <p className="font-montserrat font-medium text-[#1A3C34]">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-[#1A3C34]/70">
                            {testimonial.service}
                          </p>
                        </div>

                        <button
                          onClick={() => openForm(testimonial.service)}
                          className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          Book This Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#D4AF37]" : "bg-[#F5E9E2]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Cyra+Beauty,+Health+and+Laser+Clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-[#1A3C34] hover:text-[#D4AF37] transition-colors duration-300"
          >
            See All Reviews on Google
          </a>
        </div>
      </div>

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
                value={selectedService || ""}
                onChange={(e) => setSelectedService(e.target.value as ServiceType)}
                className="w-full p-3 border border-[#1A3C34] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                {AVAILABLE_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
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

export default Testimonials;