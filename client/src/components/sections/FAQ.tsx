import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "We work on a wide range of projects including web applications, mobile apps, e-commerce platforms, enterprise software, and custom solutions. Our expertise spans across various industries including fintech, edtech, e-commerce, and real estate."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise solution could take 3-6 months. We provide detailed timelines during our initial consultation based on your specific requirements."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology that includes requirement gathering, planning, design, development, testing, and deployment. We maintain regular communication with clients and provide frequent updates throughout the development process."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, updates, security patches, and feature enhancements. We can create a custom maintenance plan based on your needs."
  },
  {
    question: "How do you ensure the security of applications?",
    answer: "Security is a top priority in all our projects. We implement industry-standard security practices, including secure coding, data encryption, regular security audits, and compliance with relevant data protection regulations."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies tailored to each project's needs. This includes React, Node.js, Python, cloud services (AWS, Azure, GCP), and various other technologies. We choose the best tech stack based on your specific requirements."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and process
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
