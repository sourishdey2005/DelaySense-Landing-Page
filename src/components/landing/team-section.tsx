import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: 'Nitish Kumar Pandit', avatar: 'NK', image: 'https://picsum.photos/seed/nitish/100/100' },
  { name: 'Sourish Dey', avatar: 'SD', image: 'https://picsum.photos/seed/sourish/100/100' },
  { name: 'Kushagra Mohan', avatar: 'KM', image: 'https://picsum.photos/seed/kushagra/100/100' },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">The Code & Karma Team</h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">The minds behind the innovation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card/50 backdrop-blur-sm border-border/50 text-center transition-all duration-300 hover:bg-card hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center p-6">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint="professional portrait"/>
                  <AvatarFallback>{member.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary">Research & Development</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
