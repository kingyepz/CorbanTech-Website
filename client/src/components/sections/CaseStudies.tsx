import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BarChart, Clock } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    client: "Duka",
    challenge: "Duka needed a scalable e-commerce platform that could handle growing user demand while providing a seamless shopping experience.",
    solution: "We developed a custom e-commerce solution with advanced features including real-time inventory management, secure payment processing, and analytics dashboard.",
    results: [
      "300% increase in online sales",
      "50% reduction in cart abandonment",
      "99.9% uptime achieved"
    ],
    duration: "4 months",
    teamSize: "6 developers",
    image: "/assets/case-studies/duka.jpg"
  },
  {
    title: "Mental Wellness Platform Development",
    client: "Nafsi Reset",
    challenge: "Creating an accessible and engaging platform for mental wellness resources and community support.",
    solution: "Developed a comprehensive platform with features like secure video consultations, resource library, and community forums.",
    results: [
      "10,000+ active monthly users",
      "95% user satisfaction rate",
      "40% increase in resource accessibility"
    ],
    duration: "6 months",
    teamSize: "8 developers",
    image: "/assets/case-studies/nafsi.jpg"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-muted-foreground">
            Explore how we've helped businesses achieve their digital transformation goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <p className="text-primary font-medium">{study.client}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Our Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Results</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {study.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm">{study.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm">{study.teamSize}</span>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
