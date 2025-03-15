import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "David Thompson",
    company: "Duka",
    content: "Working with Corban Technologies transformed our e-commerce platform. Their expertise in web development and attention to detail exceeded our expectations.",
    rating: 5,
    imageUrl: "https://ui-avatars.com/api/?name=David+Thompson"
  },
  {
    name: "Sarah Miller",
    company: "Nafsi Reset",
    content: "The team at Corban Technologies helped us create a user-friendly mental wellness platform. Their understanding of our vision and technical execution was outstanding.",
    rating: 5,
    imageUrl: "https://ui-avatars.com/api/?name=Sarah+Miller"
  },
  {
    name: "James Wilson",
    company: "Suppco",
    content: "Corban Technologies delivered a robust marketplace solution that perfectly matched our requirements. Their professionalism and technical expertise are commendable.",
    rating: 5,
    imageUrl: "https://ui-avatars.com/api/?name=James+Wilson"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from businesses we've helped transform through technology
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-primary">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
