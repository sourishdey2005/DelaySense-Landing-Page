import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-background -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at top, hsla(175, 100%, 38%, 0.1), transparent 40%), radial-gradient(circle at bottom right, hsla(175, 100%, 38%, 0.1), transparent 50%), radial-gradient(circle at bottom left, hsla(175, 100%, 38%, 0.05), transparent 70%)'
        }}
      />
      
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">
            DelaySense
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground font-body">
            An innovative airline operations assistant designed by the Code & Karma team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
