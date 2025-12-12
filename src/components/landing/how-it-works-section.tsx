import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Combine, Database, Plane, Siren } from "lucide-react";

const steps = [
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "1. Data Aggregation",
    description: "The system gathers vast amounts of data, including historical flight records, weather forecasts, and real-time air traffic information.",
  },
  {
    icon: <Combine className="w-10 h-10 text-primary" />,
    title: "2. AI-Powered Analysis",
    description: "Our machine learning models process the aggregated data to identify patterns and predict the probability of a delay for any given flight.",
  },
  {
    icon: <Siren className="w-10 h-10 text-primary" />,
    title: "3. Proactive Alerts",
    description: "When a high probability of delay is detected, the system sends proactive alerts to the airline's operations team with detailed context.",
  },
  {
    icon: <Plane className="w-10 h-10 text-primary" />,
    title: "4. Mitigation Strategies",
    description: "DelaySense suggests optimal solutions, such as rerouting, swapping aircraft, or adjusting schedules to minimize operational impact.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">How DelaySense Works</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            A simplified look at our four-step process for enhancing operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step) => (
            <Card key={step.title} className="bg-card/50 backdrop-blur-sm border-border/50 text-center flex flex-col items-center p-6 transition-all duration-300 hover:bg-card hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center p-0">
                <div className="p-4 bg-primary/10 rounded-full mb-6">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl mb-2">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
