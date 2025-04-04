import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const About: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [appointmentCount, setAppointmentCount] = useState(0);

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

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#F5E9E2] to-[#E8D5C4] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] mb-6">
              The Cyra Beauty Experience
            </h2>
            <p className="font-lora text-[#1A3C34]/80 text-lg mb-8">
              At Cyra Beauty Clinic, we combine cutting-edge technology with
              personalized care to deliver exceptional results. Led by Jaspreet
              Grewal, our CIDESCO-certified team is dedicated to enhancing your
              natural beauty.
            </p>

            {/* Key Features with Icons */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1A3C34] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37-6.37a4.5 4.5 0 0 0-6.37-6.36L9.06 9.05"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors duration-300">
                    Advanced Technology
                  </h3>
                  <p className="text-[#1A3C34]/70">
                    We invest in state-of-the-art equipment to ensure safe,
                    effective, and comfortable treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1A3C34] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors duration-300">
                    Expert Team
                  </h3>
                  <p className="text-[#1A3C34]/70">
                    Our licensed professionals receive ongoing training to stay
                    at the forefront of aesthetic treatments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#1A3C34] flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors duration-300">
                    Personalized Care
                  </h3>
                  <p className="text-[#1A3C34]/70">
                    We develop customized treatment plans tailored to your
                    unique skin type and concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats with Animation */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 shadow-lg animate-fadeIn">
                <p className="font-montserrat font-bold text-3xl text-[#D4AF37]">
                  1,500+
                </p>
                <p className="text-sm text-[#1A3C34]/70">Happy Clients</p>
              </div>
              <div
                className="bg-white rounded-lg p-6 shadow-lg animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="font-montserrat font-bold text-3xl text-[#D4AF37]">
                  5
                </p>
                <p className="text-sm text-[#1A3C34]/70">Years Experience</p>
              </div>
              <div
                className="bg-white rounded-lg p-6 shadow-lg animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="font-montserrat font-bold text-3xl text-[#D4AF37]">
                  3
                </p>
                <p className="text-sm text-[#1A3C34]/70">
                  Specialized Services
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://cyrabeauty.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md animate-fadeIn"
                style={{ animationDelay: "0.6s" }}
              >
                Book Your Free Consultation
              </a>
              <a
                href="#gallery"
                className="bg-[#1A3C34] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#2A4C44] hover:scale-105 transition-all duration-200 shadow-md animate-fadeIn"
                style={{ animationDelay: "0.8s" }}
              >
                See Our Clinic
              </a>
            </div>
          </div>

          {/* Right Side: Image with Overlay */}
          <div className="relative group animate-fadeIn">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg relative">
              <img
                src="/G5.jpg"
                alt="Cyra Beauty Clinic Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#1A3C34]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-montserrat">
                  Discover Our Space
                </p>
              </div>
            </div>
            {/* Quote Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-[250px] animate-fadeIn">
              <p className="font-montserrat font-medium text-[#1A3C34] italic">
                "We believe in enhancing your natural beauty, not changing who
                you are."
              </p>
              <p className="text-sm text-[#D4AF37] mt-2 font-montserrat">
                — Dr. Sepideh Modir, Founder
              </p>
            </div>
          </div>
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
      </div>

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

export default About;
