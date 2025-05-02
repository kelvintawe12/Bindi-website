import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { ProcessOverview } from './components/ProcessOverview';
import { AboutSection } from './components/AboutSection';
import { PortfolioPreview } from './components/PortfolioPreview';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { Chatbot } from './components/common/Chatbot';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesOverview />
        <ProcessOverview />
        <PortfolioPreview />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
      <Chatbot />
    </div>;
}