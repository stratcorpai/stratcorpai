import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, MapPin, GraduationCap, Users, Target } from 'lucide-react';
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
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative w-full h-full bg-background overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[110] p-2.5 bg-stratified text-white hover:bg-stratified-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stratified focus-visible:ring-offset-2"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <ScrollArea className="h-full pt-4">
              <div className="pb-16">
                <div className="border-b border-border bg-muted/20 px-5 sm:px-6 md:px-12 py-6 sm:py-8 md:py-16">
                  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-16">
                    <div className="flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover object-center border-2 border-border"
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-stratified mb-3 sm:mb-4 leading-tight">
                        {member.name}
                      </h1>
                      <p className="text-body-lg text-foreground/90 mb-4">{member.title}</p>
                      <div className="flex items-center text-muted-foreground text-sm sm:text-base mb-5 sm:mb-8">
                        <MapPin size={18} className="mr-2 text-stratified/70" />
                        {member.location}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
                          >
                            <Linkedin size={18} />
                            LinkedIn
                          </a>
                        )}
                        {member.emailUrl && (
                          <a
                            href={member.emailUrl}
                            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-sm"
                          >
                            <Mail size={18} />
                            Email
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 py-8 sm:py-12 space-y-10 sm:space-y-14">
                  <section>
                    <h2 className="font-heading text-stratified text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 border-b border-border pb-3">
                      About
                    </h2>
                    <div className="space-y-6">
                      {member.description.map((paragraph, index) => (
                        <p key={index} className="text-body-lg text-foreground/90">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>

                  {member.quote && (
                    <section className="rounded-lg bg-muted/30 px-6 md:px-8 py-5 sm:py-6">
                      <p className="text-xl md:text-2xl font-heading italic text-stratified leading-relaxed">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </section>
                  )}

                  {member.education && member.education.length > 0 && (
                    <section>
                      <h3 className="font-heading text-stratified text-lg mb-4 flex items-center gap-3">
                        <GraduationCap size={22} className="text-stratified" />
                        Education & credentials
                      </h3>
                      <ul className="space-y-3">
                        {member.education.map((item, index) => (
                          <li key={index} className="text-body-lg text-foreground/90">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {member.currentRoles && member.currentRoles.length > 0 && (
                    <section>
                      <h3 className="font-heading text-stratified text-lg mb-4 flex items-center gap-3">
                        <Users size={22} className="text-stratified" />
                        Current roles
                      </h3>
                      <ul className="space-y-3">
                        {member.currentRoles.map((role, index) => (
                          <li key={index} className="text-body-lg text-foreground/90">
                            {role}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {member.advisoryFocus && member.advisoryFocus.length > 0 && (
                    <section>
                      <h3 className="font-heading text-stratified text-lg mb-4 flex items-center gap-3">
                        <Target size={22} className="text-stratified" />
                        Advisory focus
                      </h3>
                      <ul className="space-y-3">
                        {member.advisoryFocus.map((area, index) => (
                          <li key={index} className="text-body-lg text-foreground/90">
                            {area}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
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
