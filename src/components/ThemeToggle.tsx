
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label="Light mode"
      disabled={true}
    >
      <Sun className="h-5 w-5 transition-all" />
      <span className="sr-only">Light mode</span>
    </Button>
  );
}
