import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProposalsSection from '@/components/ProposalsSection';
import EventsSection from '@/components/EventsSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import GallerySection from '@/components/GallerySection';
import SocialMediaSection from '@/components/SocialMediaSection';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProposalsSection />
        <EventsSection />
        <StatsSection />
        <TestimonialsSection />
        <CTABanner />
        <GallerySection />
        <SocialMediaSection />

      </main>

      <Footer />
    </div>
  );
}
