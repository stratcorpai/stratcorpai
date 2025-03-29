
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-stratified/80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/0ae8bdf5-33e6-4040-b227-017f8717c813.png" 
          alt="Abstract blocks representing innovative structure" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto mt-20">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
              alt="Stratified Advisory Logo" 
              className="h-20 md:h-24"
            />
          </div>
          <h1 className="font-bold mb-6 text-white">
            Welcome to<br />Stratified Advisory
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
            Experience the power of our <span className="font-bold">Board-as-a-Service</span> practice to 
            elevate and transform your executive board whether you are a VC, a 
            startup or a small medium business.
          </p>
          
          <Button className="bg-[#3C1822] hover:bg-[#2c111a] text-white px-8 py-6 text-lg rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
