import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FrameworkContent from '@/components/framework/FrameworkContent';

const Framework = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-6 md:pt-28 md:pb-10">
        <FrameworkContent />
      </div>

      <Footer />
    </div>
  );
};

export default Framework;
