import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const ScrollComponent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current!,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {/* Banner Section */}
      <div data-scroll-section className="banner" style={{ overflow: 'hidden' }}>
        <div className="banner-content" data-scroll data-scroll-speed="1">
          <h1>Welcome to Our Landing Page</h1>
          <p>This is a smooth scrolling section.</p>
        </div>
      </div>

      {/* Additional Scrollable Content */}
      <div data-scroll-section>
        <h1 data-scroll data-scroll-speed="1">More Content Below</h1>
        <p data-scroll data-scroll-speed="2">This is another section.</p>
      </div>
    </div>
  );
};

export default ScrollComponent;
