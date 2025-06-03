
import { useState } from 'react';
import { Linkedin, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  role: string;
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
  reverse?: boolean;
}

const TeamMember = ({
  role,
  name,
  title,
  location,
  image,
  description,
  quote,
  education,
  currentRoles,
  advisoryFocus,
  linkedinUrl,
  emailUrl,
  reverse = false
}: TeamMemberProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isMobile = useIsMobile();

  const truncatedDescription = isMobile ? [description[0]] : description;
  const hasMoreContent = education || currentRoles || advisoryFocus;
  const hasLongDescription = description.length > 1;

  return (
    <div className="card-modern group hover:shadow-brand transition-all duration-500 border-2 hover:border-stratified/20">
      <div className={`md:flex ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:flex-shrink-0 md:w-1/3">
          <div className="h-72 md:h-full relative overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none">
            <motion.img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="p-8 md:p-12 md:w-2/3">
          <div className="uppercase tracking-wider text-sm text-stratified font-bold mb-3 bg-stratified-lighter/30 px-4 py-2 rounded-full inline-block">
            {role}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 text-balance">
            {name}
          </h3>
          
          <p className="text-xl text-stratified font-bold mb-6 leading-relaxed text-balance">
            {title}
          </p>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-4">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
              <MapPin size={16} className="mr-2 text-stratified" />
              <span className="font-semibold">{location}</span>
            </div>
          </div>
          
          <div className="mb-8">
            {(isMobile && !showFullDescription ? truncatedDescription : description).map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed text-lg text-pretty">
                {paragraph}
              </p>
            ))}
            
            {isMobile && hasLongDescription && (
              <motion.button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-stratified font-semibold hover:text-stratified-dark transition-colors flex items-center gap-2 mb-6 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
                <motion.div
                  animate={{ rotate: showFullDescription ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} className="group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                </motion.div>
              </motion.button>
            )}
            
            {quote && (
              <motion.blockquote 
                className="text-xl italic text-stratified border-l-4 border-stratified pl-8 mb-8 bg-stratified-lighter/20 py-6 rounded-r-xl shadow-soft"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                "{quote}"
              </motion.blockquote>
            )}
          </div>
          
          {hasMoreContent && (
            <Collapsible open={!isMobile || isExpanded} onOpenChange={setIsExpanded}>
              {isMobile && (
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors mb-6 group">
                  <span className="text-xl font-bold text-stratified">Professional Details</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} className="group-hover:scale-110 transition-transform duration-200" />
                  </motion.div>
                </CollapsibleTrigger>
              )}
              
              <CollapsibleContent className="space-y-8">
                {education && (
                  <div>
                    <h4 className="text-xl font-black mb-4 text-stratified border-b-2 border-stratified-lighter pb-2">
                      Education & Credentials
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 bg-gray-50 p-6 rounded-xl shadow-soft">
                      {education.map((item, index) => (
                        <li key={index} className="leading-relaxed text-lg font-medium">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentRoles && (
                  <div>
                    <h4 className="text-xl font-black mb-4 text-stratified border-b-2 border-stratified-lighter pb-2">
                      Current Board & Governance Roles
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 bg-gray-50 p-6 rounded-xl shadow-soft">
                      {currentRoles.map((role, index) => (
                        <li key={index} className="leading-relaxed text-lg font-medium">{role}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {advisoryFocus && (
                  <div>
                    <h4 className="text-xl font-black mb-4 text-stratified border-b-2 border-stratified-lighter pb-2">
                      Advisory Focus Areas
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 bg-gray-50 p-6 rounded-xl shadow-soft">
                      {advisoryFocus.map((area, index) => (
                        <li key={index} className="leading-relaxed text-lg font-medium">{area}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          )}
          
          <div className="flex space-x-4 pt-6 border-t border-gray-200">
            {linkedinUrl && (
              <motion.a 
                href={linkedinUrl} 
                className="interactive bg-stratified-lighter hover:bg-stratified-light text-stratified p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            )}
            {emailUrl && (
              <motion.a 
                href={emailUrl} 
                className="interactive bg-stratified-lighter hover:bg-stratified-light text-stratified p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
