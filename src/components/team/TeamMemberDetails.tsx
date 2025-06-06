
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMemberDetailsProps {
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
}

const TeamMemberDetails = ({ member }: TeamMemberDetailsProps) => {
  return (
    <div className="p-6 space-y-6">
      {/* Location */}
      <div className="flex items-center text-sm text-gray-600">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
          <MapPin size={16} className="mr-2 text-stratified" />
          <span className="font-semibold">{member.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3">
        {member.description.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Quote */}
      {member.quote && (
        <motion.blockquote 
          className="text-lg italic text-stratified border-l-4 border-stratified pl-6 py-4 bg-stratified-lighter/20 rounded-r-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          "{member.quote}"
        </motion.blockquote>
      )}

      {/* Professional Details */}
      <div className="space-y-6">
        {member.education && (
          <div>
            <h4 className="text-lg font-bold mb-3 text-stratified border-b border-stratified-lighter pb-2">
              Education & Credentials
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-4 rounded-xl">
              {member.education.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {member.currentRoles && (
          <div>
            <h4 className="text-lg font-bold mb-3 text-stratified border-b border-stratified-lighter pb-2">
              Current Board & Governance Roles
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-4 rounded-xl">
              {member.currentRoles.map((role, index) => (
                <li key={index} className="leading-relaxed">{role}</li>
              ))}
            </ul>
          </div>
        )}

        {member.advisoryFocus && (
          <div>
            <h4 className="text-lg font-bold mb-3 text-stratified border-b border-stratified-lighter pb-2">
              Advisory Focus Areas
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 p-4 rounded-xl">
              {member.advisoryFocus.map((area, index) => (
                <li key={index} className="leading-relaxed">{area}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contact Links */}
      <div className="flex space-x-4 pt-4 border-t border-gray-200">
        {member.linkedinUrl && (
          <motion.a 
            href={member.linkedinUrl} 
            className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        )}
        {member.emailUrl && (
          <motion.a 
            href={member.emailUrl} 
            className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberDetails;
