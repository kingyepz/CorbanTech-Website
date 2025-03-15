import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CareersDialog from "./CareersDialog";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // Assuming these components are available

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your trusted partner for software delivery.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We enable businesses to achieve their goals through cutting-edge technology
              and tailored software solutions.
            </p>
            <div className="mt-8 flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Talk to us</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input type="email" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea className="w-full p-2 border rounded h-24"></textarea>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline">Learn More</Button>
              <CareersDialog />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://www.corbantechnologies.org/_next/image?url=%2FheroBg3.png&w=750&q=75"
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}