import React, { useState, useEffect } from "react";

const Banner: React.FC = () => {
  const [appointmentCount, setAppointmentCount] = useState(0);

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev));
    }, 3000); // Increment every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Banner Section */}
      <section className="relative min-h-screen bg-[#F5E9E2] flex flex-col md:flex-row items-center justify-center">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 text-[#1A3C34] text-center md:text-left">
          {/* Tagline with Fade-In Animation */}
          <p
            className="text-sm uppercase tracking-widest mb-4 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Coquitlam's Premier Beauty Clinic
          </p>
          {/* Headline with Fade-In Animation */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            Beauty Begins Here
          </h1>
          {/* Subheadline with Fade-In Animation */}
          <p
            className="text-lg md:text-xl mb-6 animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            Transform your skin with personalized facials, laser treatments, and
            more.
          </p>
          {/* Primary CTA Button */}
          <a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-white py-3 px-6 rounded-full text-lg hover:scale-105 transition-transform animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            Book Your Free Consultation
          </a>
          {/* Live Appointment Counter */}
          <div
            className="mt-6 text-sm text-[#1A3C34] animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
            <span className="font-bold">{appointmentCount}+</span> appointments
            booked today
          </div>
        </div>

        {/* Right Side: Image with Overlay Elements */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
          <img
            src="/Group-67.png" // Path to image in public folder
            alt="Cyra Beauty Clinic Team"
            className="w-full h-full object-cover object-center"
            style={{
              filter: "grayscale(100%)", // Match the black-and-white effect
            }}
          />
          {/* Floating Badge for Trust Signal */}
          {/* <div className="absolute top-8 right-8 bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm animate-bounce">
            CIDESCO-Certified Experts
          </div> */}
        </div>
      </section>

      {/* Google Review Section */}
      <div className="bg-[#F5E9E2] py-4 flex justify-center items-center space-x-2">
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
              <svg
                key={index}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[#1A3C34] text-sm">
            We’re rated 5/5 (97 reviews)
          </p>
        </a>
      </div>
    </div>
  );
};

export default Banner;

// Add this CSS in your global stylesheet (e.g., src/index.css)
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }
`;
