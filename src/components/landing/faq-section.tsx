import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is DelaySense?",
    answer: "DelaySense is a conceptual AI-powered platform designed to predict and mitigate flight delays for airlines. It uses machine learning to analyze various data points and provide actionable insights.",
  },
  {
    question: "Is this a real product I can use?",
    answer: "Currently, DelaySense is a conceptual project developed by the Code & Karma team to showcase the potential of AI in aviation. It is not available for commercial use at this time.",
  },
  {
    question: "What kind of data does DelaySense analyze?",
    answer: "The system is designed to process historical flight data, real-time aircraft telemetry, weather patterns, air traffic control information, and airport operational data.",
  },
  {
    question: "Who is the target audience for DelaySense?",
    answer: "DelaySense is conceptualized for airline operations centers, flight dispatchers, airport management, and ground handling teams.",
  },
  {
    question: "What technologies are used in this project?",
    answer: "Our proof-of-concept is built using a modern tech stack including Next.js, React, TypeScript, and various AI/ML libraries for predictive modeling. We focus on a scalable and robust architecture.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-muted-foreground md:text-lg">
              Find answers to common questions about our conceptual project.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
