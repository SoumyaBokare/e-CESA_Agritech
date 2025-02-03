import React from "react";
import About from "./components/About";
import Prizes from "./components/Prizes";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import WaterTimeline from "./components/Watertimeline";
import "./App.css";

const App = () => {
  const timelineEvents = [
    { date: "29 Jan 2025", description: "Round 1 Submission Starts" },
    { date: "01 Mar 2025", description: "Round 1 Submission Ends" },
    { date: "10 Mar 2025", description: "Round 1 Result Declaration" },
    { date: "27 Mar 2025", description: "Hackathon Starts" },
    { date: "28 Mar 2025", description: "Hackathon Ends" },
  ];

  return (
    <>
      <Hero />
      <div className="landing">
        <main className="min-h-screen bg-gray-100">
          <Gallery />
        </main>
        
        <section id="about">
          <About />
        </section>

        <section id="timeline" className="mt-18">
          <h1 style={{ textAlign: "center", padding: "20px" }}>Water Flow Timeline</h1>
          <p style={{ textAlign: "center", padding: "0 20px 40px" }}>
            Scroll down to see the water flow through our journey!
          </p>
          <WaterTimeline events={timelineEvents} />
        </section>

        <Prizes />
        <Rules />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
};

export default App;