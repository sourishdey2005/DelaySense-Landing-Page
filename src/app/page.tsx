import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { TeamSection } from '@/components/landing/team-section';
import { VisionSection } from '@/components/landing/vision-section';
import { ShowcaseSection } from '@/components/landing/showcase-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <VisionSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
