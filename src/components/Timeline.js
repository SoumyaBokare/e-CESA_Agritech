import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./timeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  { date: "Jan 1", description: "Hackathon Kickoff" },
  { date: "Feb 10", description: "Team Registration Closes" },
  { date: "Mar 25", description: "Prototype Submission Deadline" },
  { date: "Apr 15", description: "Final Pitch Presentation" },
  { date: "May 30", description: "Winners Announcement" },
];

const Timeline = () => {
  const waterContainerRef = useRef(null);
  const leavesRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // Create multiple drops dynamically
    for (let i = 0; i < 10; i++) {
      const drop = document.createElement("div");
      drop.className = "water-drop";
      drop.style.left = `${40 + Math.random() * 20}%`;
      drop.style.animationDelay = `${Math.random() * 2}s`;
      waterContainerRef.current.appendChild(drop);
    }

    // Animating each leaf and text
    leavesRef.current.forEach((leaf, index) => {
      gsap.fromTo(
        leaf,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: leaf,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        textRefs.current[index],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: leaf,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="timeline-container">
      {/* Tap at the top */}
      <div className="tap" ref={waterContainerRef}></div>

      {/* Timeline Events */}
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`leaf leaf-${index}`}
            ref={(el) => (leavesRef.current[index] = el)}
          >
            <div className="date">{event.date}</div>
            <div
              className="description"
              ref={(el) => (textRefs.current[index] = el)}
            >
              {event.description}
            </div>
          </div>
        ))}
      </div>

      {/* Well at the bottom */}
      <div className="well">🏺</div>
    </div>
  );
};

export default Timeline;
