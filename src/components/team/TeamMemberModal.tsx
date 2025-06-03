
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
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
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
            className="relative w-full max-w-4xl h-full max-h-[95vh] bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Fixed Header with Profile */}
            <div className="relative flex-shrink-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
              </motion.button>

              {/* Header Content */}
              <motion.div
                className="text-center px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Circular Profile Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover object-center rounded-full border-4 border-white shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-stratified/20" />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stratified">{member.name}</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold leading-tight px-2">{member.title}</p>
                  <div className="flex items-center justify-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-stratified/70" />
                    <span className="font-medium text-sm sm:text-base">{member.location}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center max-w-md mx-auto px-4">
                  {member.linkedinUrl && (
                    <motion.a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-stratified text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-1 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </motion.a>
                  )}
                  {member.emailUrl && (
                    <motion.a
                      href={member.emailUrl}
                      className="flex items-center justify-center gap-2 bg-white border-2 border-stratified text-stratified px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-stratified hover:text-white flex-1 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={16} />
                      Email
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  {member.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed text-base sm:text-lg text-left max-w-none">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Quote */}
                {member.quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full"
                  >
                    <div className="bg-gradient-to-br from-stratified-lighter/30 to-stratified-light/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-l-4 border-stratified">
                      <p className="text-lg sm:text-xl md:text-2xl italic text-stratified font-medium leading-relaxed">
                        "{member.quote}"
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Professional Details Grid */}
                <div className="space-y-6 sm:space-y-8">
                  {member.education && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="p-2 sm:p-3 bg-stratified-lighter/30 rounded-xl">
                          <GraduationCap size={20} className="text-stratified sm:w-6 sm:h-6" />
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-stratified">Education & Credentials</h4>
                      </div>
                      <div className="space-y-3">
                        {member.education.map((item, index) => (
                          <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50">
                            <p className="text-gray-700 font-medium text-sm sm:text-base">{item}</p>
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
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="p-2 sm:p-3 bg-stratified-lighter/30 rounded-xl">
                          <Users size={20} className="text-stratified sm:w-6 sm:h-6" />
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-stratified">Current Roles</h4>
                      </div>
                      <div className="space-y-3">
                        {member.currentRoles.map((role, index) => (
                          <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50">
                            <p className="text-gray-700 font-medium text-sm sm:text-base">{role}</p>
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
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="p-2 sm:p-3 bg-stratified-lighter/30 rounded-xl">
                          <Target size={20} className="text-stratified sm:w-6 sm:h-6" />
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-black text-stratified">Advisory Focus</h4>
                      </div>
                      <div className="grid gap-3">
                        {member.advisoryFocus.map((area, index) => (
                          <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200/50">
                            <p className="text-gray-700 font-medium text-sm sm:text-base">{area}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Spacing */}
                <div className="h-4 sm:h-8" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
