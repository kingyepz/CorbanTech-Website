
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, ExternalLink, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    client: "Duka",
    challenge: "Duka needed a scalable e-commerce platform that could handle growing user demand while providing a seamless shopping experience.",
    solution: "We developed a custom e-commerce solution with advanced features including real-time inventory management, secure payment processing, and analytics dashboard.",
    fullDescription: `Our team worked closely with Duka to understand their specific needs and challenges. 
    We implemented a microservices architecture to ensure scalability, integrated multiple payment gateways
    for global reach, and developed a custom analytics dashboard for real-time business insights.
    The platform includes features like:
    • AI-powered product recommendations
    • Real-time inventory tracking
    • Multi-currency support
    • Advanced search with filters
    • Mobile-first responsive design`,
    results: [
      "300% increase in online sales",
      "50% reduction in cart abandonment",
      "99.9% uptime achieved"
    ],
    duration: "4 months",
    teamSize: "6 developers",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    link: "https://myduka.vercel.app/"
  },
  {
    title: "Mental Wellness Platform Development",
    client: "Nafsi Reset",
    challenge: "Creating an accessible and engaging platform for mental wellness resources and community support.",
    solution: "Developed a comprehensive platform with features like secure video consultations, resource library, and community forums.",
    fullDescription: `The Nafsi Reset platform was built with privacy and accessibility at its core.
    We implemented end-to-end encryption for video consultations, created an extensive resource
    library with categorized content, and developed moderated community forums for peer support.
    Key features include:
    • HIPAA-compliant video consultations
    • AI-powered content recommendations
    • Anonymous community support
    • Progress tracking tools
    • Multi-language support`,
    results: [
      "10,000+ active monthly users",
      "95% user satisfaction rate",
      "40% increase in resource accessibility"
    ],
    duration: "6 months",
    teamSize: "8 developers",
    technologies: ["React Native", "Python", "MongoDB", "WebRTC", "GCP"],
    link: "https://nafsireset.com"
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

                    <div className="flex gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full" variant="outline">
                            Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{study.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Client</h4>
                              <p>{study.client}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Overview</h4>
                              <p className="whitespace-pre-line">{study.fullDescription}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button 
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => window.open(study.link, '_blank')}
                      >
                        Visit Site <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
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
