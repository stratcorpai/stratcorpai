
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, GraduationCap, Users, Target } from 'lucide-react';

interface TeamMemberPanelProps {
  member: {
    name: string;
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

const TeamMemberPanel = ({ member, isOpen, onClose }: TeamMemberPanelProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white/95 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 p-8 flex justify-between items-center">
              <h2 className="text-3xl font-black text-stratified">{member.name}</h2>
              <motion.button
                onClick={onClose}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} className="text-gray-600" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-stratified-lighter/30 to-stratified-light/20 rounded-2xl p-8 border-l-4 border-stratified">
                    <p className="text-xl italic text-stratified font-medium leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Professional Details */}
              <div className="grid gap-8">
                {member.education && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-stratified-lighter/30 rounded-lg">
                        <GraduationCap size={20} className="text-stratified" />
                      </div>
                      <h4 className="text-xl font-black text-stratified">Education & Credentials</h4>
                    </div>
                    <div className="grid gap-3">
                      {member.education.map((item, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                          <p className="text-gray-700 font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {member.currentRoles && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-stratified-lighter/30 rounded-lg">
                        <Users size={20} className="text-stratified" />
                      </div>
                      <h4 className="text-xl font-black text-stratified">Current Roles</h4>
                    </div>
                    <div className="grid gap-3">
                      {member.currentRoles.map((role, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                          <p className="text-gray-700 font-medium">{role}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {member.advisoryFocus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-stratified-lighter/30 rounded-lg">
                        <Target size={20} className="text-stratified" />
                      </div>
                      <h4 className="text-xl font-black text-stratified">Advisory Focus</h4>
                    </div>
                    <div className="grid gap-3">
                      {member.advisoryFocus.map((area, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                          <p className="text-gray-700 font-medium">{area}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Contact Actions */}
              <motion.div
                className="flex gap-4 pt-8 border-t border-gray-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {member.linkedinUrl && (
                  <motion.a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-stratified text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
                    className="flex items-center gap-3 bg-white border-2 border-stratified text-stratified px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-stratified hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                    Email
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberPanel;
