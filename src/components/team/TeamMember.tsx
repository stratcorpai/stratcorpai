
import { Linkedin, Mail, MapPin } from 'lucide-react';

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
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className={`md:flex ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:flex-shrink-0 md:w-1/3">
          <div className="h-full relative overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        </div>
        <div className="p-8 md:p-10 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-stratified font-semibold mb-1">{role}</div>
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <p className="text-lg text-stratified font-medium mb-4">{title}</p>
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="mb-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
            {quote && (
              <blockquote className="text-lg italic text-stratified border-l-4 border-stratified pl-4 mb-4">
                "{quote}"
              </blockquote>
            )}
          </div>
          
          {education && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-stratified">Education & Credentials</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {currentRoles && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-stratified">Current Board & Governance Roles</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {currentRoles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          )}

          {advisoryFocus && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-stratified">Advisory Focus Areas</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {advisoryFocus.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex space-x-4">
            {linkedinUrl && (
              <a href={linkedinUrl} className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            )}
            {emailUrl && (
              <a href={emailUrl} className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors">
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
