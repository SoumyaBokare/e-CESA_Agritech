import React from 'react';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Gallery from './components/Gallery'; // Import the Gallery component
import './App.css';

const App = () => {
  return (
    <div className="landing">
      <main className="min-h-screen bg-gray-100">
        <Gallery />
      </main>
      <About />
      <Timeline />
      <Prizes />
      <Rules />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;