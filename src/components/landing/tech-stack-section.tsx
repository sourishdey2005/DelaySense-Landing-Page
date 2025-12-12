import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = {
  "Frontend & Visualization": ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Recharts", "Vercel"],
  "AI & Machine Learning": ["Genkit", "PyTorch", "Scikit-learn", "Apache Kafka", "Kubeflow", "Python"],
  "Data & Backend": ["Firebase", "PostgreSQL", "TimescaleDB", "Redis", "GraphQL", "Node.js"],
  "DevOps & Monitoring": ["Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Technology Stack</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Built with a modern, scalable, and powerful set of technologies for high-performance data processing and intelligence.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {Object.entries(techCategories).map(([category, techs]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="font-headline text-lg font-semibold text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm font-normal">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
