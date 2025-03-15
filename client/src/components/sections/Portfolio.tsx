import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Duka - ecommerce platform",
    category: "Software Development",
    description: "Duka is a robust eCommerce platform designed to provide a seamless shopping experience. It features user-friendly navigation, secure payment options, and a wide range of products, making online shopping convenient and enjoyable.",
    image: "/dukalogo.png"
  },
  {
    title: "Nafsi Reset - Mental wellness",
    category: "Website Development",
    description: "Nafsi Reset is a dedicated mental wellness website aimed at providing resources, support, and community for individuals seeking mental wellness. The platform offers articles, forums, and professional guidance to help users on their mental health journey.",
    image: "/nafsiresetlogo.png"
  },
  {
    title: "Suppco - construction supplies marketplace",
    category: "Website Development",
    description: "Suppco is a dynamic platform that connects suppliers and contractors, serving as a comprehensive marketplace. It streamlines the procurement process, allowing users to find reliable suppliers and contractors efficiently, enhancing collaboration and business growth.",
    image: "/suppcologo.png"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground">
            We empower some of Africa's best startups with our innovative and scalable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="aspect-video relative mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" className="w-full">
                    Want one like this?
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
