import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log(data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/corbantechorg?s=21&t=qioLX_Kc2xx1YTgPgDKadA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/corbantechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:info@corbantechnologies.org"
                    className="text-gray-600 hover:text-primary"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/corban-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">info@corbantechnologies.org</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      {...register("subject", { required: "Subject is required" })}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}