
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    description: "We're looking for an experienced Full Stack Developer to join our growing team. You'll work on challenging projects and help shape our technical direction.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong understanding of TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Excellent problem-solving skills"
    ]
  },
  {
    title: "UX/UI Designer",
    type: "Full-time",
    location: "Hybrid",
    description: "Join our design team to create beautiful and intuitive user experiences for our clients across various industries.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma and design systems",
      "Strong portfolio showcasing web applications",
      "Experience with user research"
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
          <DialogTitle>Open Positions</DialogTitle>
          <DialogDescription>
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
