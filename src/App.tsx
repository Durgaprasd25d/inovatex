import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Preloader />
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Timeline />
      <Tracks />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default App;