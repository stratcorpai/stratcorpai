
import { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from './TeamData';
import TeamMemberCard from './TeamMemberCard';
import TeamMemberModal from './TeamMemberModal';

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberSelect = (index: number) => {
    setSelectedMember(index);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="relative">
      {/* Main Grid - Fixed alignment without staggering */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-full" // Ensure consistent height
          >
            <TeamMemberCard
              member={member}
              index={index}
              onSelect={() => handleMemberSelect(index)}
            />
          </motion.div>
        ))}
      </div>

      {/* Full-Page Modal */}
      {selectedMember !== null && (
        <TeamMemberModal
          member={teamMembers[selectedMember]}
          isOpen={selectedMember !== null}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TeamGrid;
