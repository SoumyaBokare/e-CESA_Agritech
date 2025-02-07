import React from "react";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import HackathonDetails from "./components/hackathondetail";
import Domain from "./components/Domain";
import Landing from "./components/Landing";
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
      <Landing />
      <Navbar />
      <HackathonDetails />
      <div className="landing">
        <main className="min-h-screen bg-gray-100">
          <Domain />
        </main>
        <section id="timeline">
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
