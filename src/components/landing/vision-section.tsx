import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function VisionSection() {
  const visionImage = PlaceHolderImages.find(p => p.id === 'vision-image');
  if (!visionImage) return null;

  return (
    <section id="vision" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Our Vision for Aviation</h2>
            <p className="text-lg text-muted-foreground font-body">
              We envision a future where air travel is not just about moving from one point to another, but a seamless, predictable, and stress-free experience. Through DelaySense, we explore the potential of artificial intelligence to bring this vision to life, one flight at a time. Our work is inspired by the endless possibilities that emerge when human ingenuity meets technological innovation.
            </p>
          </div>
          <div className="relative">
            <Image
              src={visionImage.imageUrl}
              alt={visionImage.description}
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl shadow-primary/10"
              data-ai-hint={visionImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
