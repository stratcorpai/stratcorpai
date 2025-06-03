
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, MapPin, GraduationCap, Users, Target, Quote } from 'lucide-react';
import { useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TeamMemberModalProps {
  member: {
    name: string;
    title: string;
    location: string;
    image: string;
    description: string[];
    quote?: string;
    education?: string[];
    currentRoles?: string[];
    advisoryFocus?: string[];
    linkedinUrl?: string;
    emailUrl?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal = ({ member, isOpen, onClose }: TeamMemberModalProps) => {
  // Handle escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal with proper navbar spacing */}
          <motion.div
            className="relative w-full h-full bg-white overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button - Fixed position accounting for navbar */}
            <button
              onClick={onClose}
              className="fixed top-24 md:top-28 right-6 z-[110] p-4 bg-stratified text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 hover:bg-stratified-dark"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Scrollable Content with navbar spacing */}
            <ScrollArea className="h-full pt-20 md:pt-24">
              <div className="pb-12">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-stratified/5 to-stratified-light/10 px-6 md:px-12 py-16 md:py-20">
                  <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-2xl"
                          />
                          <div className="absolute inset-0 rounded-full ring-4 ring-stratified/20" />
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="flex-1 text-center lg:text-left space-y-6">
                        <div>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stratified mb-4 leading-tight">
                            {member.name}
                          </h1>
                          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold leading-tight mb-4">
                            {member.title}
                          </p>
                          <div className="flex items-center justify-center lg:justify-start text-gray-600 text-lg">
                            <MapPin size={20} className="mr-3 text-stratified/70" />
                            <span className="font-medium">{member.location}</span>
                          </div>
                        </div>

                        {/* Contact Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                          {member.linkedinUrl && (
                            <a
                              href={member.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 bg-stratified text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex-1"
                            >
                              <Linkedin size={20} />
                              LinkedIn
                            </a>
                          )}
                          {member.emailUrl && (
                            <a
                              href={member.emailUrl}
                              className="flex items-center justify-center gap-3 bg-white border-2 border-stratified text-stratified px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-stratified hover:text-white hover:scale-105 flex-1"
                            >
                              <Mail size={20} />
                              Email
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
                  {/* About Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl md:text-4xl font-black text-stratified border-b-3 border-stratified/20 pb-4">
                      About
                    </h2>
                    <div className="space-y-6">
                      {member.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-lg md:text-xl">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.section>

                  {/* Quote Section */}
                  {member.quote && (
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-8"
                    >
                      <div className="bg-gradient-to-br from-stratified/10 to-stratified-light/5 rounded-3xl p-10 md:p-12 border-l-6 border-stratified relative">
                        <Quote size={32} className="absolute top-8 right-8 text-stratified/30" />
                        <p className="text-xl md:text-3xl italic text-stratified font-medium leading-relaxed pr-16">
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.section>
                  )}

                  {/* Professional Details Grid */}
                  <div className="grid gap-12 md:gap-16">
                    {/* Education */}
                    {member.education && (
                      <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-6">
                          <div className="p-4 bg-stratified/10 rounded-2xl">
                            <GraduationCap size={32} className="text-stratified" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-stratified">
                            Education & Credentials
                          </h3>
                        </div>
                        <div className="grid gap-4">
                          {member.education.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                              <p className="text-gray-700 font-medium text-lg">{item}</p>
                            </div>
                          ))}
                        </div>
                      </motion.section>
                    )}

                    {/* Current Roles */}
                    {member.currentRoles && (
                      <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-6">
                          <div className="p-4 bg-stratified/10 rounded-2xl">
                            <Users size={32} className="text-stratified" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-stratified">
                            Current Roles
                          </h3>
                        </div>
                        <div className="grid gap-4">
                          {member.currentRoles.map((role, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                              <p className="text-gray-700 font-medium text-lg">{role}</p>
                            </div>
                          ))}
                        </div>
                      </motion.section>
                    )}

                    {/* Advisory Focus */}
                    {member.advisoryFocus && (
                      <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-6">
                          <div className="p-4 bg-stratified/10 rounded-2xl">
                            <Target size={32} className="text-stratified" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-stratified">
                            Advisory Focus
                          </h3>
                        </div>
                        <div className="grid gap-4">
                          {member.advisoryFocus.map((area, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                              <p className="text-gray-700 font-medium text-lg">{area}</p>
                            </div>
                          ))}
                        </div>
                      </motion.section>
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
