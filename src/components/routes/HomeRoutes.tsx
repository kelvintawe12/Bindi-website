import React from 'react';
import { Navbar } from '../Navbar';
import Hero from '../Hero';
import { ServicesOverview } from '../ServicesOverview';
import { ProcessOverview } from '../ProcessOverview';
import { AboutSection } from '../AboutSection';
import { PortfolioPreview } from '../PortfolioPreview';
import { Testimonials } from '../Testimonials';
import { CtaBanner } from '../CtaBanner';
import { Footer } from '../Footer';
import { Chatbot } from '../common/Chatbot';

export function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
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
    </div>
  );
}

export default AppRoutes;
