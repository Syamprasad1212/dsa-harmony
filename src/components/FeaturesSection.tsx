import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Curated Problems",
    description: "Hand-picked problems with official statements and constraints",
    badge: "500+ Problems"
  },
  {
    title: "Video Explanations", 
    description: "Top YouTube tutorials for each problem concept",
    badge: "Multi-source"
  },
  {
    title: "Multi-Language Solutions",
    description: "Solutions in C++, Java, Python, JavaScript, and more",
    badge: "6 Languages"
  },
  {
    title: "Progress Tracking",
    description: "Track solved problems and learning progress",
    badge: "Personal Dashboard"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">Everything You Need</h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive DSA learning in one centralized platform
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 transition-colors hover:bg-accent/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;