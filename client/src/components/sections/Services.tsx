import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Brain,
  Cloud,
  Users,
  Check
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies.  We offer expertise in front-end, back-end, and full-stack development, using various frameworks and languages to create responsive, scalable, and secure web solutions. Our services include website design, e-commerce development, custom application development, and API integration.",
    icon: Globe
  },
  {
    title: "Mobile Development",
    description: "Cutting-edge native and cross-platform mobile applications using React Native, Flutter, and native technologies. We deliver high-performance apps with seamless user experiences, push notifications, offline capabilities, and secure data management.",
    icon: Smartphone
  },
  {
    title: "Cyber Security Solutions",
    description: "Comprehensive security services including penetration testing, vulnerability assessments, security audits, and implementation of robust security measures. We ensure your systems are protected against modern cyber threats.",
    icon: Shield
  },
  {
    title: "Artificial Intelligence",
    description: "Advanced AI solutions including machine learning models, natural language processing, computer vision, and predictive analytics. We help businesses automate processes and gain valuable insights from their data.",
    icon: Brain
  },
  {
    title: "Cloud Services and Migration",
    description: "Expert cloud migration, architecture design, and management services across major platforms. We optimize cloud infrastructure for scalability, performance, and cost-efficiency while ensuring minimal downtime.",
    icon: Cloud
  },
  {
    title: "Consultancy Services",
    description: "Strategic technology consulting to guide digital transformation initiatives. Our experts provide roadmap planning, technology stack selection, architecture review, and best practices implementation tailored to your business goals.",
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