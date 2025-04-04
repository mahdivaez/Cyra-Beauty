import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photoUrl: string; // URL to the team member's photo
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sepideh Moallemi, MD",
    role: "Founder of Cyra Beauty",
    photoUrl: "/dr-sepideh-modir.png", // Replace with actual photo URL
  },
  {
    id: 2,
    name: "Dr. Hilary Modir, MD",
    role: "Co- Founder of Cyra Beauty",
    photoUrl: "/dr-hilory-modir.png", // Replace with actual photo URL
  },
  {
    id: 3,
    name: "Dr. Ali Modir, PhD",
    role: "Co- Founder of Cyra Beauty",
    photoUrl: "/dr-ali-modir.png", // Replace with actual photo URL
  },
];

const TeamSection: React.FC = () => {
  return (
    <section
      id="team-section"
      className="py-20 px-6 md:px-12 text-[#1A3C34]/60 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-serif text-[#2C5F5B] font-bold leading-tight"
        >
          Meet Your Cyra Team
        </motion.h2>

        <div className="flex flex-col items-center mt-16 space-y-10 md:space-y-16">
          {/* Top Member */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <img
              src={teamMembers[0].photoUrl}
              alt={teamMembers[0].name}
              className="w-full max-w-xs md:max-w-sm"
            />
            <h3 className="text-xl md:text-2xl font-semibold  text-[#2C5F5B]">
              {teamMembers[0].name}
            </h3>
            <p className="text-[#2C5F5B] mt-2 font-medium">{teamMembers[0].role}</p>
          </motion.div>

          {/* Bottom Members */}
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
            {teamMembers.slice(1).map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
              >
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full max-w-xs md:max-w-sm"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F5B] mt-6">
                  {member.name}
                </h3>
                <p className="text-[#2C5F5B]mt-2 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
