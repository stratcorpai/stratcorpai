
import { useState } from 'react';
import { Linkedin, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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

  // On mobile, show only first paragraph of description initially
  const truncatedDescription = isMobile ? [description[0]] : description;
  const hasMoreContent = education || currentRoles || advisoryFocus;
  const hasLongDescription = description.length > 1;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
      <div className={`md:flex ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:flex-shrink-0 md:w-1/3">
          <div className="h-64 md:h-full relative overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="p-6 md:p-10 md:w-2/3">
          <div className="uppercase tracking-wider text-sm text-stratified font-bold mb-2 bg-stratified-lighter/20 px-3 py-1 rounded-full inline-block">
            {role}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{name}</h3>
          <p className="text-lg text-stratified font-semibold mb-4 leading-relaxed">{title}</p>
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              <MapPin size={16} className="mr-2 text-stratified" />
              <span className="font-medium">{location}</span>
            </div>
          </div>
          
          <div className="mb-6">
            {(isMobile && !showFullDescription ? truncatedDescription : description).map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
            ))}
            
            {isMobile && hasLongDescription && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-stratified font-medium hover:text-stratified-dark transition-colors flex items-center gap-1 mb-4"
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
                {showFullDescription ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
            
            {quote && (
              <blockquote className="text-lg italic text-stratified border-l-4 border-stratified pl-6 mb-6 bg-stratified-lighter/10 py-4 rounded-r-lg">
                "{quote}"
              </blockquote>
            )}
          </div>
          
          {hasMoreContent && (
            <Collapsible open={!isMobile || isExpanded} onOpenChange={setIsExpanded}>
              {isMobile && (
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors mb-4">
                  <span className="text-lg font-semibold text-stratified">Professional Details</span>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </CollapsibleTrigger>
              )}
              
              <CollapsibleContent className="space-y-6">
                {education && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-stratified border-b border-stratified-lighter pb-2">
                      Education & Credentials
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-4 rounded-lg">
                      {education.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentRoles && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-stratified border-b border-stratified-lighter pb-2">
                      Current Board & Governance Roles
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-4 rounded-lg">
                      {currentRoles.map((role, index) => (
                        <li key={index} className="leading-relaxed">{role}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {advisoryFocus && (
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-stratified border-b border-stratified-lighter pb-2">
                      Advisory Focus Areas
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-4 rounded-lg">
                      {advisoryFocus.map((area, index) => (
                        <li key={index} className="leading-relaxed">{area}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CollapsibleContent>
            </Collapsible>
          )}
          
          <div className="flex space-x-4 pt-4 border-t border-gray-200">
            {linkedinUrl && (
              <a 
                href={linkedinUrl} 
                className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-3 rounded-full transition-all hover:scale-110 shadow-md hover:shadow-lg" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            )}
            {emailUrl && (
              <a 
                href={emailUrl} 
                className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-3 rounded-full transition-all hover:scale-110 shadow-md hover:shadow-lg"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
