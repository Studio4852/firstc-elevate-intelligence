import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface CommunicationToolkitProps {
  script: string;
}

export function CommunicationToolkit({ script }: CommunicationToolkitProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(script);
    toast.success("Script copied to clipboard");
  };

  return (
    <div className="metric-card">
      <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">
        Agent Communication Toolkit
      </h3>

      <Badge className="badge-risk-low mb-4 text-xs">
        Verified Script
      </Badge>

      <blockquote className="text-muted-foreground italic leading-relaxed text-sm mb-6">
        "{script}"
      </blockquote>

      <div className="flex gap-3">
        <Button 
          onClick={handleCopy}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy to Script Board
        </Button>
        <Button variant="outline" size="icon">
          <AlertTriangle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
