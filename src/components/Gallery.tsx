import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const Gallery: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev));
    }, 3000); // Increment every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Form handling with React Hook Form
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data); // Replace with API call (e.g., Formspree or HubSpot)
    setIsFormVisible(false); // Close form after submission
    reset(); // Reset form fields
  };

  // Clinic images array (replace with your actual image paths)
  const clinicImages = [
    { src: "/G1.jpg", alt: "Clinic Interior", caption: "Our Welcoming Reception Area" },
    { src: "/G2.jpg", alt: "Treatment Room", caption: "Relax in Our Modern Treatment Rooms" },
    { src: "/G3.jpg", alt: "Team at Work", caption: "Our Expert Team in Action" },
    { src: "/G4.jpg", alt: "Equipment", caption: "State-of-the-Art Technology" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-6 md:px-12 bg-[#F5E9E2] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] text-center mb-6 animate-fadeIn">
          Explore Cyra Beauty Clinic
        </h2>
        <p className="text-lg text-[#1A3C34]/80 text-center mb-12 max-w-3xl mx-auto animate-fadeIn">
          Step inside our clinic and see the spaces where beauty transformations happen.
        </p>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicImages.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                onClick={() => setSelectedImage(image.src)}
              />
              {/* Caption Overlay on Hover */}
              <div className="absolute inset-0 bg-[#1A3C34]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-center px-4">{image.caption}</p>
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
              <p className="text-[#1A3C34] text-sm">
                We’re rated 5/5 (97 reviews)
              </p>
            </a>
          </div>
        </div>

        {/* Live Appointment Counter */}
        <div className="mt-8 text-center text-[#1A3C34] animate-fadeIn">
          <span className="font-bold text-2xl">{appointmentCount}+</span>{" "}
          appointments booked today
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md animate-fadeIn"
          >
            Book Your Visit
          </a>
        </div>
      </div>

      {/* Lightbox for Viewing Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Selected Clinic Image"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
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
            <h2 className="text-2xl font-bold text-[#1A3C34] mb-4">
              Book Your Free Consultation
            </h2>
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
              >
                <option value="">Select a Service</option>
                <option value="laser-hair-removal">Laser Hair Removal</option>
                <option value="cyra-facial">CYRA Facial</option>
                <option value="scars-stretch-marks">Scars & Stretch Marks</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-white py-3 rounded-full text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
