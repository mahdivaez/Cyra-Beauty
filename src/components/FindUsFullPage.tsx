import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaPhone, FaClock, FaStar } from "react-icons/fa";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const FindUsFullPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const address = "3056 Glen Dr Unit 204, Coquitlam, BC V3B 0V1, Canada";
  const phone = "+1 778-504-5400";
  const coordinates: [number, number] = [49.282670069485164, -122.79079514232714];
  const [appointmentCount, setAppointmentCount] = useState(0);

  // Simulate live appointment counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentCount((prev) => (prev < 10 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false,
    }).setView(coordinates, 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
    }).addTo(map);

    // Define custom icon with transparent background
    const customIcon = L.icon({
      iconUrl: "/clinic-marker.png", // Use PNG with transparent background
      iconSize: [30, 30], // Adjust size as needed
      iconAnchor: [27.5, 55], // Center horizontally, anchor at bottom
      popupAnchor: [0, -55], // Popup above the marker
      shadowUrl: undefined, // No shadow to avoid background
    });

    // Add marker with error handling
    try {
      const marker = L.marker(coordinates, { icon: customIcon }).addTo(map);
      marker.bindPopup(`
        <div style="text-align: center; font-family: 'Poppins', sans-serif;">
          <b>Cyra Beauty Clinic</b><br>
          ${address}
        </div>
      `);
    } catch (error) {
      console.error("Failed to load marker:", error);
      // Fallback to default marker
      L.marker(coordinates).addTo(map).bindPopup(`
        <div style="text-align: center; font-family: 'Poppins', sans-serif;">
          <b>Cyra Beauty Clinic</b><br>
          ${address}
        </div>
      `);
    }

    const zoomControl = L.control.zoom({ position: "bottomright" });
    zoomControl.addTo(map);

    L.control
      .attribution({ position: "bottomleft", prefix: false })
      .addAttribution(
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      )
      .addTo(map);

    return () => {
      if (map) map.remove();
    };
  }, []);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="font-poppins bg-[#F5E9E2] min-h-screen relative">
      {/* Map Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <div ref={mapRef} className="w-full h-full shadow-2xl"></div>
        <div className="absolute top-6 left-6 bg-white bg-opacity-95 px-6 py-3 rounded-lg shadow-lg animate-fadeIn">
          <h3 className="text-2xl font-semibold text-[#1A3C34]">
            Find Us Here
          </h3>
        </div>
        <div className="absolute bottom-6 right-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C34] text-center mb-6 md:mb-8 animate-fadeIn">
            Visit Cyra Beauty Clinic
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 md:mb-12 max-w-3xl mx-auto animate-fadeIn">
            We’re here to help you glow. Find our location, contact us, or book
            your appointment today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start text-gray-700 animate-fadeIn">
                <FaMapMarkerAlt className="text-[#D4AF37] mr-4 mt-1 text-2xl" />
                <div>
                  <span className="font-semibold text-[#1A3C34] block">
                    Address:
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:text-[#b89630] transition-colors"
                  >
                    {address}
                  </a>
                </div>
              </div>
              <div className="flex items-start text-gray-700 animate-fadeIn">
                <FaPhone className="text-[#D4AF37] mr-4 mt-1 text-2xl" />
                <div>
                  <span className="font-semibold text-[#1A3C34] block">
                    Phone:
                  </span>
                  <a
                    href={`tel:${phone}`}
                    className="text-[#D4AF37] hover:text-[#b89630] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start text-gray-700 animate-fadeIn">
                <FaClock className="text-[#D4AF37] mr-4 mt-1 text-2xl" />
                <div>
                  <span className="font-semibold text-[#1A3C34] block">
                    Hours:
                  </span>
                  <ul className="list-none pl-0 mt-2 space-y-1">
                    <li>Monday: Closed</li>
                    <li>Tuesday: 10:00–18:00</li>
                    <li>Wednesday: 10:00–18:00</li>
                    <li>Thursday: 10:00–18:00</li>
                    <li>Friday: 10:00–18:00</li>
                    <li>Saturday: 10:00–17:00</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="col-span-2 bg-[#F5E9E2] p-6 rounded-lg shadow-lg animate-fadeIn">
              <h3 className="text-2xl font-semibold text-[#1A3C34] mb-4">
                Book Your Visit
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <option value="scars-stretch-marks">
                      Scars & Stretch Marks
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#b89630] hover:scale-105 transition-all duration-200 shadow-md"
                >
                  <a
                    href="https://cyrabeauty.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-center"
                  >
                    Book Appointment
                  </a>
                </button>
              </form>
              <div className="mt-4 text-center text-sm text-[#1A3C34]">
                <span className="font-bold">{appointmentCount}+</span>{" "}
                appointments booked today
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#1A3C34] text-center mb-4 animate-fadeIn">
              Getting Here
            </h3>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto animate-fadeIn">
              We’re located near Coquitlam Centre. Free parking is available on-site, and public transit options are just a 5-minute walk away.
            </p>
          </div>

          <div className="mt-12 bg-[#F5E9E2] py-6 rounded-lg shadow-lg">
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
                    <FaStar
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[#1A3C34] text-sm">
                  We’re rated 5/5 (97 reviews)
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Now Button */}
      <a
        href={`tel:${phone}`}
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-white p-4 rounded-full shadow-lg hover:bg-[#b89630] hover:scale-110 transition-all duration-200 animate-bounce z-[1000]"
      >
        <FaPhone className="text-2xl" />
      </a>
    </div>
  );
};

export default FindUsFullPage;