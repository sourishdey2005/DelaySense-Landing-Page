import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { TeamSection } from '@/components/landing/team-section';
import { VisionSection } from '@/components/landing/vision-section';
import { ShowcaseSection } from '@/components/landing/showcase-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { UseCasesSection } from '@/components/landing/use-cases-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { TechStackSection } from '@/components/landing/tech-stack-section';
import { FaqSection } from '@/components/landing/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <VisionSection />
        <ShowcaseSection />
        <TechStackSection />
        <TestimonialsSection />
        <FaqSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
