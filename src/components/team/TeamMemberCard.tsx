
import { motion } from 'framer-motion';
import { ChevronRight, MapPin } from 'lucide-react';

interface TeamMemberCardProps {
  member: {
    role: string;
    name: string;
    title: string;
    location: string;
    image: string;
    quote?: string;
  };
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const TeamMemberCard = ({ member, index, isSelected, onSelect }: TeamMemberCardProps) => {
  return (
    <motion.div
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${
        isSelected ? 'scale-105 z-10' : 'hover:scale-102'
      }`}
      onClick={onSelect}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main Card Container */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-stratified/20 transition-all duration-500">
        
        {/* Portrait Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Role Badge */}
          <div className="absolute top-6 left-6">
            <div className="bg-white/95 backdrop-blur-sm text-stratified px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-stratified/10">
              {member.role}
            </div>
          </div>

          {/* Hover Arrow */}
          <motion.div 
            className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight size={20} className="text-stratified" />
          </motion.div>

          {/* Quote Preview on Hover */}
          {member.quote && (
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white text-sm italic leading-relaxed line-clamp-3 drop-shadow-lg">
                "{member.quote}"
              </p>
            </div>
          )}
        </div>

        {/* Information Section */}
        <div className="p-8">
          <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-stratified transition-colors duration-300">
            {member.name}
          </h3>
          
          <p className="text-stratified font-semibold text-base mb-4 leading-tight">
            {member.title}
          </p>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2 text-stratified/70" />
            <span className="font-medium">{member.location}</span>
          </div>
        </div>

        {/* Subtle Border Glow */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 group-hover:ring-stratified/30 transition-all duration-500" />
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-stratified/20 to-stratified-light/20 -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default TeamMemberCard;
