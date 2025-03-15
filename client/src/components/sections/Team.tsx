import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in software development and tech leadership.",
    imageUrl: "https://ui-avatars.com/api/?name=John+Doe",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Jane Smith",
    role: "Technical Lead",
    bio: "Specializing in cloud architecture and scalable systems design.",
    imageUrl: "https://ui-avatars.com/api/?name=Jane+Smith",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Mike Johnson",
    role: "Senior Developer",
    bio: "Expert in full-stack development and modern web technologies.",
    imageUrl: "https://ui-avatars.com/api/?name=Mike+Johnson",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    name: "Sarah Wilson",
    role: "UX Designer",
    bio: "Creating intuitive and beautiful user experiences for web and mobile applications.",
    imageUrl: "https://ui-avatars.com/api/?name=Sarah+Wilson",
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Expert professionals dedicated to delivering exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="rounded-full w-24 h-24"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
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
