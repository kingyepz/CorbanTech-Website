import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Brain,
  Cloud,
  Users
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies.",
    icon: Globe
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    icon: Smartphone
  },
  {
    title: "Cyber Security Solutions",
    description: "Protect your digital assets with our security expertise.",
    icon: Shield
  },
  {
    title: "Artificial Intelligence",
    description: "Leverage AI to transform your business processes.",
    icon: Brain
  },
  {
    title: "Cloud Services and Migration",
    description: "Seamless cloud solutions and migration strategies.",
    icon: Cloud
  },
  {
    title: "Consultancy Services",
    description: "Expert guidance for your technology decisions.",
    icon: Users
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Accelerating your results with our comprehensive solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide end-to-end solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
