import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const positions = [
  {
    title: "Senior Software Engineer",
    type: "Full-time",
    location: "Remote",
    description: "Lead development of enterprise-scale applications using modern technologies.",
    requirements: [
      "7+ years of experience in software development",
      "Strong knowledge of React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure/GCP)",
    ]
  },
  {
    title: "Software Engineering Intern",
    type: "Internship",
    location: "Hybrid",
    description: "Join our engineering team and gain hands-on experience in software development.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Basic knowledge of web development",
      "Strong problem-solving skills",
    ]
  },
  {
    title: "Product Designer",
    type: "Full-time",
    location: "Remote",
    description: "Create exceptional user experiences for our enterprise products.",
    requirements: [
      "5+ years of product design experience",
      "Strong portfolio showcasing UX/UI work",
      "Experience with Figma and design systems",
    ]
  },
  {
    title: "Junior Developer",
    type: "Full-time",
    location: "Remote",
    description: "Build and maintain web applications using modern JavaScript frameworks.",
    requirements: [
      "1-2 years of development experience",
      "Knowledge of React and JavaScript",
      "Understanding of Git and version control",
    ]
  },
  {
    title: "DevOps Intern",
    type: "Internship",
    location: "Remote",
    description: "Learn and assist in maintaining our cloud infrastructure and deployment pipelines.",
    requirements: [
      "Basic understanding of Linux systems",
      "Interest in cloud technologies",
      "Knowledge of basic scripting",
    ]
  }
];

export default function CareersDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          View Careers <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Career Opportunities</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join our team and help build the future of technology
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {positions.map((position, index) => (
            <div key={index} className="border rounded-lg p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-muted-foreground">{position.type}</span>
                    <span className="text-sm text-muted-foreground">{position.location}</span>
                  </div>
                </div>
                <Button>Apply Now</Button>
              </div>
              <p className="text-muted-foreground">{position.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="text-muted-foreground">{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}