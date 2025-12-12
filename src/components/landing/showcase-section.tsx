import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const showcaseIds = ['showcase-logo', 'showcase-visual', 'showcase-concept', 'showcase-ui'];

export function ShowcaseSection() {
  const showcaseImages = showcaseIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section id="showcase" className="py-24 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Project Showcase</h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">A glimpse into the concept and design of DelaySense.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {showcaseImages.map(image => (
              image && (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-0 flex aspect-[3/2] items-center justify-center">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
