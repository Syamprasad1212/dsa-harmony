import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Master Data Structures & Algorithms
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Centralized learning platform with curated problems, video explanations, 
            multi-language solutions, and structured progress tracking.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              Browse Problems
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;