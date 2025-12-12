import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teamMembers = [
  { 
    name: 'Nitish Kumar Pandit',
    role: 'AI & Backend Architect',
    bio: 'Nitish is the visionary behind the AI models, architecting the core logic that powers DelaySense’s predictive capabilities. His expertise in machine learning and backend systems forms the project’s foundation.',
  },
  { 
    name: 'Sourish Dey',
    role: 'Frontend & UI/UX Specialist',
    bio: 'Sourish crafts the intuitive and elegant user interface. With a keen eye for design and a passion for user experience, he ensures that the powerful technology is accessible and easy to interact with.',
  },
  { 
    name: 'Kushagra Mohan',
    role: 'Data & DevOps Engineer',
    bio: 'Kushagra manages the complex data pipelines and robust infrastructure that DelaySense relies on. His work ensures that the system is scalable, reliable, and capable of processing vast amounts of information in real-time.',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">The Code & Karma Team</h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">The minds behind the innovation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card/50 backdrop-blur-sm border-border/50 flex flex-col transition-all duration-300 hover:bg-card hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-6 text-center">
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
