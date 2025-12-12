import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Plane, Signal, Building } from "lucide-react";

const useCases = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Airline Operations Control",
    description: "Empower operations centers with predictive insights to make smarter, faster decisions on resource allocation and flight management.",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Flight Dispatch & Crew",
    description: "Provide pilots and dispatchers with real-time, AI-driven recommendations for optimal routing and fuel management.",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Airport & Ground Teams",
    description: "Enhance ground handling efficiency by anticipating delays and optimizing gate assignments and turnaround services.",
  },
  {
    icon: <Signal className="w-8 h-8" />,
    title: "Passenger Communication",
    description: "Improve the passenger experience by enabling proactive, transparent communication about potential travel disruptions.",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Who Can Benefit?</h2>
            <p className="text-lg text-muted-foreground font-body">
              DelaySense is conceptualized to serve a wide range of stakeholders across the aviation ecosystem, creating a more cohesive and efficient operational environment for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    {useCase.icon}
                  </div>
                  <CardTitle className="font-headline text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
