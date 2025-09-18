import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sampleProblems = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    solvedCount: "2.1M",
    description: "Find two numbers that add up to target"
  },
  {
    title: "Binary Tree Inorder",
    difficulty: "Medium", 
    tags: ["Tree", "DFS"],
    solvedCount: "890K",
    description: "Return inorder traversal of binary tree"
  },
  {
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Heap"],
    solvedCount: "445K", 
    description: "Merge k sorted linked lists"
  }
];

const ProblemsPreview = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Popular Problems</h2>
          <p className="mt-4 text-muted-foreground">
            Start with these community favorites
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {sampleProblems.map((problem, index) => (
            <Card key={index} className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">{problem.title}</CardTitle>
                  <Badge 
                    variant={problem.difficulty === 'Easy' ? 'default' : 
                            problem.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                  >
                    {problem.difficulty}
                  </Badge>
                </div>
                <CardDescription>{problem.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-3">
                  {problem.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{problem.solvedCount} solved</span>
                  <Button size="sm" variant="ghost">View →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline">View All Problems</Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsPreview;