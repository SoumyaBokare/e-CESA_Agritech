// App.js
import React from "react";
import About from "./components/About";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
// import Gallery from "./components/Gallery";
import Domain from "./components/Domain";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import PrizeCards from "./components/PrizeCards";
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
          <Domain />
        </main>
        <section id="about">
          <About />
        </section>
        <section id="timeline">
          <h1 style={{ textAlign: "center", padding: "20px" }}>Event Timeline</h1>
          <Timeline events={timelineEvents} />
        </section>

        <section id="prizes">
          <PrizeCards />
        </section>
        <Rules />
        <Sponsors />
        <Footer />
      </div>
    </>
  );
};

export default App;
