
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyBooking: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };
  
  const handleBookNow = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-xs w-full animate-scale-in">
      <div className="bg-white rounded-lg shadow-xl p-5 border border-cyra-beige">
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-cyra-teal/50 hover:text-cyra-teal transition-colors"
          aria-label="Close booking popup"
        >
          <X size={18} />
        </button>
        
        <div className="text-center mb-4">
          <h3 className="font-montserrat font-semibold text-cyra-teal mb-1">
            Limited Time Offer!
          </h3>
          <p className="text-sm text-cyra-teal/70">
            Book your free consultation today and receive 15% off your first treatment.
          </p>
        </div>
        
        <Button 
          onClick={handleBookNow}
          className="w-full btn-primary"
        >
          Book Your Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default StickyBooking;
