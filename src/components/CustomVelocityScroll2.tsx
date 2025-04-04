import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const CustomVelocityScroll2: React.FC = () => {
  return (
    <div className="relative -mb-24  bg-orange-100 flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Customize the text to be related to a clinic and adjust the speed */}
      <VelocityScroll defaultVelocity={2} numRows={1}>
        Discover Beauty and Confidence at Cyra Clinic
      </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};



export default CustomVelocityScroll2  ;


