
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, MapPin, GraduationCap, Users, Target } from 'lucide-react';
import { useEffect } from 'react';

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
          className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Full Page Content */}
          <div className="min-h-screen w-full">
            {/* Close Button - Fixed position */}
            <motion.button
              onClick={onClose}
              className="fixed top-4 right-4 z-[110] p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X size={20} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
            </motion.button>

            {/* Header Section with Profile */}
            <motion.div
              className="bg-gradient-to-br from-stratified-lighter/10 to-stratified-light/5 pt-8 pb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="container mx-auto px-4 max-w-4xl">
                {/* Profile Image */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', damping: 20 }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 object-cover object-center rounded-full border-4 border-white shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-stratified/20" />
                  </motion.div>
                </div>

                {/* Name and Title */}
                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stratified leading-tight">
                    {member.name}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold leading-snug max-w-3xl mx-auto">
                    {member.title}
                  </p>
                  <div className="flex items-center justify-center text-gray-600 text-lg">
                    <MapPin size={20} className="mr-2 text-stratified/70" />
                    <span className="font-medium">{member.location}</span>
                  </div>
                </motion.div>

                {/* Contact Actions */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {member.linkedinUrl && (
                    <motion.a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-stratified text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </motion.a>
                  )}
                  {member.emailUrl && (
                    <motion.a
                      href={member.emailUrl}
                      className="flex items-center justify-center gap-2 bg-white border-2 border-stratified text-stratified px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-stratified hover:text-white flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={18} />
                      Email
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="container mx-auto px-4 max-w-4xl py-8 pb-20">
              <div className="space-y-12">
                {/* Description */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  {member.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed text-lg text-justify">
                      {paragraph}
                    </p>
                  ))}
                </motion.section>

                {/* Quote */}
                {member.quote && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="bg-gradient-to-br from-stratified-lighter/20 to-stratified-light/10 rounded-2xl p-8 border-l-4 border-stratified">
                      <p className="text-xl md:text-2xl italic text-stratified font-medium leading-relaxed text-center">
                        "{member.quote}"
                      </p>
                    </div>
                  </motion.section>
                )}

                {/* Education */}
                {member.education && member.education.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-stratified-lighter/30 rounded-xl">
                        <GraduationCap size={24} className="text-stratified" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-stratified">Education & Credentials</h2>
                    </div>
                    <div className="grid gap-4">
                      {member.education.map((item, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:shadow-md transition-shadow">
                          <p className="text-gray-700 font-medium text-base leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Current Roles */}
                {member.currentRoles && member.currentRoles.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-stratified-lighter/30 rounded-xl">
                        <Users size={24} className="text-stratified" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-stratified">Current Roles</h2>
                    </div>
                    <div className="grid gap-4">
                      {member.currentRoles.map((role, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:shadow-md transition-shadow">
                          <p className="text-gray-700 font-medium text-base leading-relaxed">{role}</p>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Advisory Focus */}
                {member.advisoryFocus && member.advisoryFocus.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-stratified-lighter/30 rounded-xl">
                        <Target size={24} className="text-stratified" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-stratified">Advisory Focus</h2>
                    </div>
                    <div className="grid gap-4">
                      {member.advisoryFocus.map((area, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:shadow-md transition-shadow">
                          <p className="text-gray-700 font-medium text-base leading-relaxed">{area}</p>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
