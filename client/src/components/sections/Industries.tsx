import { motion } from "framer-motion";
import { 
  Banknote,
  GraduationCap,
  ShoppingBag,
  Home
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const industries = [
  {
    title: "Fintech",
    description: "We empower businesses to innovate and streamline their financial services.",
    icon: Banknote,
    options: [
      "Secure payment systems",
      "Mobile banking applications",
      "Investment platforms"
    ]
  },
  {
    title: "Edtech",
    description: "E-Learning solutions that provide more efficient and productive learning experiences for all users",
    icon: GraduationCap,
    options: [
      "E-learning platforms",
      "Learning Management Systems (LMS)",
      "Management software"
    ]
  },
  {
    title: "Ecommerce",
    description: "Ecommerce software solutions that drive sales and enhance customer experience",
    icon: ShoppingBag,
    options: [
      "Custom ecommerce websites",
      "Payment Solutions",
      "Inventory management systems"
    ]
  },
  {
    title: "Real Estate",
    description: "Software solutions for better property management",
    icon: Home,
    options: [
      "Real estate listings",
      "Property management systems",
      "Virtual tour applications"
    ]
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            We provide solutions for every industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced software engineers, architects, and developers use cutting-edge
            technologies and approaches to drive innovation across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <industry.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.options.map((option) => (
                      <li key={option} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
