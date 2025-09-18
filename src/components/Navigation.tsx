import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary"></div>
          <span className="text-xl font-bold text-foreground">DSA Central</span>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost">Problems</Button>
          <Button variant="ghost">Curriculum</Button>
          <Button variant="ghost">Dashboard</Button>
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;