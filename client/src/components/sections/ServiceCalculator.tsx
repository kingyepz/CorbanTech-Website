import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Calculator } from "lucide-react";

const services = {
  webDevelopment: {
    name: "Web Development",
    basePrice: 5000,
    features: [
      { name: "Custom Design", price: 2000 },
      { name: "CMS Integration", price: 1500 },
      { name: "E-commerce Features", price: 3000 },
      { name: "SEO Optimization", price: 1000 }
    ]
  },
  mobileDevelopment: {
    name: "Mobile Development",
    basePrice: 8000,
    features: [
      { name: "iOS & Android", price: 4000 },
      { name: "Push Notifications", price: 1000 },
      { name: "Offline Mode", price: 2000 },
      { name: "In-App Purchases", price: 2500 }
    ]
  },
  cyberSecurity: {
    name: "Cyber Security",
    basePrice: 6000,
    features: [
      { name: "Security Audit", price: 3000 },
      { name: "Penetration Testing", price: 4000 },
      { name: "Security Training", price: 2000 },
      { name: "Monitoring Setup", price: 2500 }
    ]
  }
};

export default function ServiceCalculator() {
  const [selectedService, setSelectedService] = useState<keyof typeof services>("webDevelopment");
  const [projectSize, setProjectSize] = useState(50);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const calculateEstimate = () => {
    const service = services[selectedService];
    const baseEstimate = service.basePrice;
    const sizeMultiplier = projectSize / 50;
    const featuresTotal = service.features
      .filter(feature => selectedFeatures.includes(feature.name))
      .reduce((sum, feature) => sum + feature.price, 0);

    return Math.round((baseEstimate + featuresTotal) * sizeMultiplier);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Project Cost Calculator</h2>
          <p className="text-lg text-muted-foreground">
            Get an instant estimate for your project. Choose your service and requirements below.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Calculate Your Estimate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Service</label>
                <Select
                  value={selectedService}
                  onValueChange={(value: keyof typeof services) => setSelectedService(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(services).map(([key, service]) => (
                      <SelectItem key={key} value={key}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Size</label>
                <Slider
                  value={[projectSize]}
                  onValueChange={([value]) => setProjectSize(value)}
                  max={100}
                  step={10}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Small</span>
                  <span>Medium</span>
                  <span>Large</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Features</label>
                <div className="grid gap-4">
                  {services[selectedService].features.map((feature) => (
                    <div key={feature.name} className="flex items-center justify-between">
                      <label className="text-sm">{feature.name}</label>
                      <Switch
                        checked={selectedFeatures.includes(feature.name)}
                        onCheckedChange={(checked) => {
                          setSelectedFeatures(prev =>
                            checked
                              ? [...prev, feature.name]
                              : prev.filter(f => f !== feature.name)
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium">Estimated Cost:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${calculateEstimate().toLocaleString()}
                  </span>
                </div>
                <Button className="w-full">Get Detailed Quote</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
