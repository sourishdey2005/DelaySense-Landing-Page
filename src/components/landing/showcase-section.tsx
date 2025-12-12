import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const showcaseIds = ['showcase-logo', 'showcase-visual', 'showcase-concept', 'showcase-ui'];

export function ShowcaseSection() {
  const showcaseImages = showcaseIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section id="showcase" className="py-24 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Project Showcase</h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">A glimpse into the concept and design of DelaySense.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseImages.map(image => (
            image && (
              <Card key={image.id} className="overflow-hidden group bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
