import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FrameworkContent from '@/components/framework/FrameworkContent';

const Framework = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-28 pb-4 sm:pt-32 sm:pb-6 md:pt-36 md:pb-10 flex-1">
        <FrameworkContent />
      </div>

      <Footer />
    </div>
  );
};

export default Framework;
