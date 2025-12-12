import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena Petrova",
    title: "Operations Director, Global Airways",
    avatar: "EP",
    image: "https://picsum.photos/seed/elena/100/100",
    quote: "The predictive capabilities of DelaySense are game-changing. To anticipate disruptions before they cascade would revolutionize our operational control.",
  },
  {
    name: "Marcus Thorne",
    title: "Chief Pilot, Skyward Express",
    avatar: "MT",
    image: "https://picsum.photos/seed/marcus/100/100",
    quote: "A tool that provides clear, data-driven rerouting options in real-time is exactly what the flight deck needs to make safer, more efficient decisions.",
  },
  {
    name: "Jasmine Chen",
    title: "Head of Passenger Experience, Apex Airlines",
    avatar: "JC",
    image: "https://picsum.photos/seed/jasmine/100/100",
    quote: "Being able to proactively communicate with passengers about potential delays, armed with accurate information, would significantly boost customer satisfaction.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">What Industry Leaders Are Saying</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Fictional endorsements highlighting the potential impact of DelaySense.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card/50 backdrop-blur-sm border-border/50 flex flex-col justify-between transition-all duration-300 hover:bg-card hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
              </CardContent>
              <div className="bg-card/50 px-6 py-4 flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="professional portrait" />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
