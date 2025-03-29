
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-stratified-lighter/50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white" />
        <img 
          src="/lovable-uploads/f60f538c-b58d-4847-9c51-0f91d64da0b0.png" 
          alt="Abstract blocks representing innovative structure and strategy" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-20">
        <div className="max-w-3xl">
          <h1 className="font-bold mb-6 gradient-text">
            Strategic Excellence at the Intersection of AI & Leadership
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-800">
            Transforming executive boards through human ingenuity 
            augmented by artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-stratified hover:bg-stratified-dark text-white px-8 py-6 text-lg">
              Discover Our Approach
            </Button>
            <Button variant="outline" className="border-stratified text-stratified hover:bg-stratified-lighter px-8 py-6 text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h3 className="text-stratified text-xl font-semibold mb-2">
              Board-as-a-Service
            </h3>
            <p className="text-gray-700">
              Transformative board expertise with a full team of specialists
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h3 className="text-stratified text-xl font-semibold mb-2">
              AI Assessment
            </h3>
            <p className="text-gray-700">
              Strategic evaluation of AI opportunities through StratCorp.AI
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h3 className="text-stratified text-xl font-semibold mb-2">
              Strategic Innovation
            </h3>
            <p className="text-gray-700">
              Aligning emerging technologies with sustainable business models
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h3 className="text-stratified text-xl font-semibold mb-2">
              Global Expertise
            </h3>
            <p className="text-gray-700">
              International perspective and experience in regulated industries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
