import { useEffect, useRef, useState } from "react";
import "./watertimeline.css";

const WaterTimeline = ({ events }) => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > timelineTop && scrollPosition < timelineTop + timelineHeight) {
        const progress = (scrollPosition + windowHeight - timelineTop) / (timelineHeight + windowHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createDroplets = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 4, // Random size between 4px and 10px
      delay: Math.random() * 2, // Random delay up to 2 seconds
      duration: Math.random() * 1 + 1.5, // Random duration between 1.5 and 2.5 seconds
      horizontalOffset: Math.random() * 60 - 30, // Random horizontal offset between -30px and 30px
    }));
  };

  const droplets = createDroplets(30);

  return (
    <div className="water-timeline" ref={timelineRef}>
      <div className="water-container" style={{ height: `${scrollProgress * 100}%` }}>
        <div className="water-stream"></div>
        {droplets.map((droplet) => (
          <div
            key={droplet.id}
            className="water-drop"
            style={{
              width: `${droplet.size}px`,
              height: `${droplet.size}px`,
              animationDelay: `${droplet.delay}s`,
              animationDuration: `${droplet.duration}s`,
              left: `calc(50% + ${droplet.horizontalOffset}px)`,
            }}
          ></div>
        ))}
      </div>
      {events.map((event, index) => (
        <div
          key={index}
          className={`leaf-container ${scrollProgress > (index + 0.5) / events.length ? "watered" : ""} ${index % 2 === 0 ? "left" : "right"}`}
          style={{ top: `${((index + 1) * 100) / (events.length + 1)}%` }}
        >
          <div className="leaf">
            <div className="leaf-content">
              <div className="date">{event.date}</div>
              <div className="description">{event.description}</div>
            </div>
          </div>
        </div>
      ))}
      <div className={`well ${scrollProgress === 1 ? "filled" : ""}`}></div>
    </div>
  );
};

export default WaterTimeline;