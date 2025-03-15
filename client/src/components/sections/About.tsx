import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly exploring new solutions to drive digital transformation."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We are committed to delivering high-quality solutions that exceed expectations and create lasting impact."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build strong, lasting relationships with our clients, working together to achieve their goals."
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We maintain the highest standards of integrity and security in everything we do."
  }
];

export default function About() {
  return (
    <section id="company" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Corban Technologies</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Corban Technologies is a leading software development company based in Nairobi, Kenya. 
                We specialize in creating innovative digital solutions that help businesses thrive in 
                the modern digital landscape.
              </p>
              <p>
                Since our inception, we have been dedicated to delivering cutting-edge technology 
                solutions that drive growth and efficiency for our clients. Our team of experienced 
                professionals combines technical expertise with industry knowledge to create 
                tailored solutions that meet specific business needs.
              </p>
              <p>
                We take pride in our ability to understand complex business challenges and 
                transform them into elegant, efficient digital solutions. Our commitment to 
                excellence and innovation has made us a trusted partner for businesses 
                across Africa.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <Card key={value.title} className="bg-primary/5 border-none">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground">
            To empower businesses across Africa with innovative technology solutions that drive 
            growth, efficiency, and digital transformation. We strive to be the leading force 
            in shaping the future of technology in the region.
          </p>
        </div>
      </div>
    </section>
  );
}
