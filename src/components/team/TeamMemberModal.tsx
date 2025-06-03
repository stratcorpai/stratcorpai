
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
  // Handle escape key
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-7xl max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
            </motion.button>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Name overlay on image for mobile */}
                  <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                    <h2 className="text-3xl font-black text-white mb-2 drop-shadow-lg">{member.name}</h2>
                    <p className="text-white/90 font-semibold text-lg drop-shadow-md">{member.title}</p>
                    <div className="flex items-center text-white/80 text-sm mt-2">
                      <MapPin size={16} className="mr-2" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 flex flex-col">
                {/* Header - Desktop only */}
                <div className="hidden lg:block p-8 pb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-4xl font-black text-stratified mb-3">{member.name}</h2>
                    <p className="text-xl text-gray-700 font-semibold mb-2">{member.title}</p>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2 text-stratified/70" />
                      <span className="font-medium">{member.location}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="space-y-4">
                      {member.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Quote */}
                  {member.quote && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-gradient-to-br from-stratified-lighter/30 to-stratified-light/20 rounded-2xl p-6 border-l-4 border-stratified">
                        <p className="text-xl italic text-stratified font-medium leading-relaxed">
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Professional Details Grid */}
                  <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
                    {member.education && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-stratified-lighter/30 rounded-lg">
                            <GraduationCap size={20} className="text-stratified" />
                          </div>
                          <h4 className="text-xl font-black text-stratified">Education & Credentials</h4>
                        </div>
                        <div className="space-y-3">
                          {member.education.map((item, index) => (
                            <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                              <p className="text-gray-700 font-medium text-sm lg:text-base">{item}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {member.currentRoles && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-stratified-lighter/30 rounded-lg">
                            <Users size={20} className="text-stratified" />
                          </div>
                          <h4 className="text-xl font-black text-stratified">Current Roles</h4>
                        </div>
                        <div className="space-y-3">
                          {member.currentRoles.map((role, index) => (
                            <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                              <p className="text-gray-700 font-medium text-sm lg:text-base">{role}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {member.advisoryFocus && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-4 xl:col-span-2"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-stratified-lighter/30 rounded-lg">
                            <Target size={20} className="text-stratified" />
                          </div>
                          <h4 className="text-xl font-black text-stratified">Advisory Focus</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {member.advisoryFocus.map((area, index) => (
                            <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                              <p className="text-gray-700 font-medium text-sm lg:text-base">{area}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Contact Actions */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {member.linkedinUrl && (
                      <motion.a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-stratified text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-1 sm:flex-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={20} />
                        LinkedIn
                      </motion.a>
                    )}
                    {member.emailUrl && (
                      <motion.a
                        href={member.emailUrl}
                        className="flex items-center justify-center gap-3 bg-white border-2 border-stratified text-stratified px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-stratified hover:text-white flex-1 sm:flex-none"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail size={20} />
                        Email
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
