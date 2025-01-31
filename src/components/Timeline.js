import { useEffect, useRef } from "react"
import "./timeline.css"

const Timeline = () => {
  const events = [
    {
      title: "REGISTRATIONS STARTS",
      date: "29TH JAN 2025",
    },
    {
      title: "REGISTRATIONS ENDS",
      date: "1ST MAR 2025",
    },
    {
      title: "ROUND 1 RESULT DECLARATION",
      date: "10TH MAR 2025",
    },
    {
      title: "HACKATHON-DAY 1",
      date: "27TH MAR 2025",
    },
    {
      title: "HACKATHON-DAY 2",
      date: "28TH MAR 2025",
    },
    {
      title: "ROUND 2 RESULT DECLARATION",
      date: "28TH MAR 2025",
    },
    
  ]

  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineEvents = timelineRef.current.querySelectorAll(".timeline-event")
    timelineEvents.forEach((event) => {
      observer.observe(event)
    })

    return () => {
      timelineEvents.forEach((event) => {
        observer.unobserve(event)
      })
    }
  }, [])

  return (
    <section className="timeline-section">
      <h1 className="timeline-main-title">TIMELINE</h1>

      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>

        <div className="timeline-events">
          {events.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="timeline-content">
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-date">{event.date}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

