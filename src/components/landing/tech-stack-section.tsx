import { Card, CardContent } from "@/components/ui/card";
import {
  IconApacheKafka,
  IconDocker,
  IconFirebase,
  IconGcp,
  IconGithub,
  IconGrafana,
  IconGraphql,
  IconKubernetes,
  IconNextjs,
  IconNodejs,
  IconPostgresql,
  IconPrometheus,
  IconPython,
  IconPytorch,
  IconReact,
  IconRedis,
  IconScikitlearn,
  IconShadcn,
  IconTailwind,
  IconTerraform,
  IconTimescaledb,
  IconTypescript,
} from "@/components/icons/tech";
import { GenkitIcon } from "@/components/icons/genkit";

const techCategories = {
  "Frontend & Visualization": [
    { name: "Next.js", icon: <IconNextjs className="h-8 w-8" /> },
    { name: "React", icon: <IconReact className="h-8 w-8" /> },
    { name: "TypeScript", icon: <IconTypescript className="h-8 w-8" /> },
    { name: "Tailwind CSS", icon: <IconTailwind className="h-8 w-8" /> },
    { name: "ShadCN UI", icon: <IconShadcn className="h-8 w-8" /> },
  ],
  "AI & Machine Learning": [
    { name: "Genkit", icon: <GenkitIcon className="h-8 w-8" /> },
    { name: "PyTorch", icon: <IconPytorch className="h-8 w-8" /> },
    { name: "Scikit-learn", icon: <IconScikitlearn className="h-8 w-8" /> },
    { name: "Apache Kafka", icon: <IconApacheKafka className="h-8 w-8" /> },
    { name: "Kubeflow", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24"><path fill="currentColor" d="M12.44 2.6L12 2.33l-.44.27L3.3 7.6v9.39l8.26 4.77l.44.27l.44-.27l8.26-4.77V7.6zm-7.39 5.4l7.39-4.27l7.39 4.27l-3.95 2.28l-3.44-1.99l-3.44 1.99zm-.53 7.89V9.12l3.44 1.98v3.97zm1.06.6l-2.9-1.68v-3.4l2.9 1.68zm4.4-1.98v-3.97l3.44-1.98v3.97zm7.39-4.27L12 12.56l-3.95-2.28l-3.44 1.99l7.39 4.27l7.39-4.27l-3.44-1.99z"/></svg> },
    { name: "Python", icon: <IconPython className="h-8 w-8" /> },
  ],
  "Data & Backend": [
    { name: "Firebase", icon: <IconFirebase className="h-8 w-8" /> },
    { name: "PostgreSQL", icon: <IconPostgresql className="h-8 w-8" /> },
    { name: "TimescaleDB", icon: <IconTimescaledb className="h-8 w-8" /> },
    { name: "Redis", icon: <IconRedis className="h-8 w-8" /> },
    { name: "GraphQL", icon: <IconGraphql className="h-8 w-8" /> },
    { name: "Node.js", icon: <IconNodejs className="h-8 w-8" /> },
  ],
  "DevOps & Monitoring": [
    { name: "Google Cloud", icon: <IconGcp className="h-8 w-8" /> },
    { name: "Kubernetes", icon: <IconKubernetes className="h-8 w-8" /> },
    { name: "Docker", icon: <IconDocker className="h-8 w-8" /> },
    { name: "Terraform", icon: <IconTerraform className="h-8 w-8" /> },
    { name: "GitHub", icon: <IconGithub className="h-8 w-8" /> },
    { name: "Prometheus", icon: <IconPrometheus className="h-8 w-8" /> },
    { name: "Grafana", icon: <IconGrafana className="h-8 w-8" /> },
  ],
};


export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Powering Innovation</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            DelaySense is built on a foundation of industry-leading technologies, enabling powerful, scalable, and intelligent airline operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techCategories).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-headline text-xl font-semibold text-primary text-center">{category}</h3>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-6 grid grid-cols-3 gap-y-8 gap-x-4">
                  {techs.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center text-center gap-2 transition-transform duration-300 hover:scale-105">
                      <div className="text-foreground h-8 w-8 flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <span className="text-xs text-muted-foreground">{tech.name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
