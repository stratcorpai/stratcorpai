
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
            className="relative w-full h-full bg-white overflow-hidden pt-20 md:pt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button - positioned relative to modal content */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <X size={20} className="text-gray-600" />
            </button>

            {/* Scrollable Content */}
            <ScrollArea className="h-full">
              <div className="pb-12">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-stratified/5 to-stratified-light/10 px-6 md:px-12 py-12 md:py-16">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-2xl"
                          />
                          <div className="absolute inset-0 rounded-full ring-4 ring-stratified/20" />
                        </div>
                      </div>

                      {/* Header Info */}
                      <div className="flex-1 text-center md:text-left space-y-4">
                        <div>
                          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-stratified mb-3">
                            {member.name}
                          </h1>
                          <p className="text-xl md:text-2xl text-gray-700 font-semibold leading-tight">
                            {member.title}
                          </p>
                          <div className="flex items-center justify-center md:justify-start mt-3 text-gray-600">
                            <MapPin size={18} className="mr-2 text-stratified/70" />
                            <span className="font-medium">{member.location}</span>
                          </div>
                        </div>

                        {/* Contact Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                          {member.linkedinUrl && (
                            <a
                              href={member.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 bg-stratified text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex-1"
                            >
                              <Linkedin size={18} />
                              LinkedIn
                            </a>
                          )}
                          {member.emailUrl && (
                            <a
                              href={member.emailUrl}
                              className="flex items-center justify-center gap-2 bg-white border-2 border-stratified text-stratified px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-stratified hover:text-white hover:scale-105 flex-1"
                            >
                              <Mail size={18} />
                              Email
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-8 space-y-12">
                  {/* About Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl md:text-3xl font-black text-stratified border-b-2 border-stratified/20 pb-3">
                      About
                    </h2>
                    <div className="space-y-4">
                      {member.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-lg">
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
                      className="space-y-6"
                    >
                      <div className="bg-gradient-to-br from-stratified/10 to-stratified-light/5 rounded-2xl p-8 border-l-4 border-stratified relative">
                        <Quote size={24} className="absolute top-6 right-6 text-stratified/30" />
                        <p className="text-xl md:text-2xl italic text-stratified font-medium leading-relaxed pr-12">
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.section>
                  )}

                  {/* Professional Details Grid */}
                  <div className="grid gap-8 md:gap-12">
                    {/* Education */}
                    {member.education && (
                      <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-stratified/10 rounded-xl">
                            <GraduationCap size={24} className="text-stratified" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-stratified">
                            Education & Credentials
                          </h3>
                        </div>
                        <div className="grid gap-3">
                          {member.education.map((item, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                              <p className="text-gray-700 font-medium">{item}</p>
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
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-stratified/10 rounded-xl">
                            <Users size={24} className="text-stratified" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-stratified">
                            Current Roles
                          </h3>
                        </div>
                        <div className="grid gap-3">
                          {member.currentRoles.map((role, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                              <p className="text-gray-700 font-medium">{role}</p>
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
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-stratified/10 rounded-xl">
                            <Target size={24} className="text-stratified" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-stratified">
                            Advisory Focus
                          </h3>
                        </div>
                        <div className="grid gap-3">
                          {member.advisoryFocus.map((area, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                              <p className="text-gray-700 font-medium">{area}</p>
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
