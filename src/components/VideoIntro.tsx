import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";
import { MorphingText } from "@/components/magicui/morphing-text";

interface Video {
  id: number;
  title: string;
  url: string; // Local file path
}

const video: Video = {
  id: 1,
  title: "Welcome to Cyra Beauty Clinic",
  url: "/video1.mp4",
};

// Beauty-themed text arrays for left and right sides
const leftMorphTexts = [
  "Glow",
  "Radiance",
  "Beauty",
  "Elegance",
  "Serenity",
];

const rightMorphTexts = [
  "Transform",
  "Confidence",
  "Skin",
  "Wellness",
  "Luxury",
];

const VideoIntro: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current
                .play()
                .catch((error) => {
                  console.log("Autoplay prevented:", error);
                });
              setIsPlaying(true);
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => console.log("Play error:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="video-intro"
      className="relative py-16 px-4 md:px-6 bg-gradient-to-br from-[#FFF8F0] to-[#FFECD6] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2C5F5B_0%,transparent_70%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10"></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Morphing Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: -120 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block text-[#2C5F5B] font-serif text-2xl md:text-4xl font-bold text-center md:text-right w-full md:w-1/4"
          >
            <MorphingText texts={leftMorphTexts} />
          </motion.div>

          {/* Video Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(44,95,91,0.2)] group w-full max-w-lg z-20"
          >
            <div className="relative aspect-w-9 aspect-h-16 max-h-[80vh]">
              <video
                ref={videoRef}
                loop
                playsInline
                className="w-full h-full object-cover brightness-95"
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F5B]/60 via-transparent to-transparent"></div>
            </div>

            <motion.button
              onClick={togglePlayPause}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "backOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 right-4 inline-flex items-center justify-center bg-[#C9AD7F]/80 text-[#2C5F5B] w-12 h-12 rounded-full shadow-md hover:bg-[#C9AD7F] transition-all duration-300"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <FaPause size={16} />
              ) : (
                <FaPlay size={16} className="ml-0.5" />
              )}
            </motion.button>
          </motion.div>

          {/* Right Morphing Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block text-[#2C5F5B] font-serif text-2xl md:text-4xl font-bold text-center md:text-left w-full md:w-1/4"
          >
            <MorphingText texts={rightMorphTexts} />
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-serif text-[#2C5F5B] font-bold leading-tight drop-shadow-md"
          >
            Transform Your Beauty Journey
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-base md:text-lg font-sans text-[#7D7D7D] mt-4 md:mt-6 max-w-lg mx-auto drop-shadow-md"
          >
            Experience world-class beauty treatments that transform your skin and confidence.
          </motion.p>

          <motion.a
            href="https://cyrabeauty.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, backgroundColor: "#C9AD7F" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[#2C5F5B] text-white font-sans text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-md hover:bg-[#C9AD7F] transition-all duration-300 mt-6"
          >
            Book Your Appointment
          </motion.a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-24 h-24 bg-[#C9AD7F]/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-[#2C5F5B]/20 rounded-full blur-2xl translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
    </section>
  );
};

export default VideoIntro;
