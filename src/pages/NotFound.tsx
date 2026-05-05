import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-44 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl rounded-xl border border-border/80 bg-muted/20 p-6 sm:p-10 md:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-stratified mb-4">404</p>
            <h1 className="text-4xl md:text-5xl mb-4">Page not found</h1>
            <p className="text-muted-foreground text-lg mb-8">
              This direct path is not active anymore. We have consolidated legacy routes into a single board-first experience.
            </p>
            <Button asChild>
              <Link to="/">Return to homepage</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
