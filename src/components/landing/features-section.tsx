import { TrendingUp, PlaneTakeoff, Cpu } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Predictive Delay Analysis',
    description: 'Leverage historical data and machine learning to forecast potential flight delays before they happen, enabling proactive mitigation.',
  },
  {
    icon: <PlaneTakeoff className="w-10 h-10 text-primary" />,
    title: 'Real-time Flight Monitoring',
    description: 'Track flights in real-time with comprehensive data on status, weather patterns, and airspace congestion for a complete operational picture.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'AI-Powered Recommendations',
    description: 'Receive intelligent suggestions for rerouting, resource allocation, and passenger communication to optimize decision-making.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Core Capabilities</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            DelaySense is designed to provide a comprehensive suite of tools for modern airline operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 backdrop-blur-sm border-border/50 text-center flex flex-col items-center p-8 transition-all duration-300 hover:bg-card hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center p-0">
                <div className="p-4 bg-primary/10 rounded-full mb-6">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
