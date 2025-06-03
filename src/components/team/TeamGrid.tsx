
import { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from './TeamData';
import TeamMemberCard from './TeamMemberCard';
import TeamMemberPanel from './TeamMemberPanel';

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberSelect = (index: number) => {
    setSelectedMember(selectedMember === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`${index === 1 ? 'lg:mt-12' : ''} ${index === 2 ? 'lg:mt-6' : ''}`}
          >
            <TeamMemberCard
              member={member}
              index={index}
              isSelected={selectedMember === index}
              onSelect={() => handleMemberSelect(index)}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Detail Panel */}
      {selectedMember !== null && (
        <TeamMemberPanel
          member={teamMembers[selectedMember]}
          isOpen={selectedMember !== null}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default TeamGrid;
