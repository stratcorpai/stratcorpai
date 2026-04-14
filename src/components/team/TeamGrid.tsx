import { useState } from 'react';
import { teamMembers } from './TeamData';
import TeamMemberCard from './TeamMemberCard';
import TeamMemberModal from './TeamMemberModal';

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member}
            index={index}
            onSelect={() => setSelectedMember(index)}
          />
        ))}
      </div>
      {selectedMember !== null && (
        <TeamMemberModal
          member={teamMembers[selectedMember]}
          isOpen={true}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default TeamGrid;
