import { MapPin } from 'lucide-react';

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
  onSelect: () => void;
}

const TeamMemberCard = ({ member, onSelect }: TeamMemberCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-stratified/50"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border/70 mb-3 sm:mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[0.55rem] sm:text-[0.6rem] tracking-[0.1em] uppercase font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 bg-stratified text-white rounded">
          {member.role}
        </span>
      </div>
      <h3 className="font-heading text-[0.95rem] sm:text-[1.1rem] text-foreground mb-0.5 sm:mb-1 group-hover:text-stratified transition-colors">
        {member.name}
      </h3>
      <p className="text-[0.72rem] sm:text-[0.8rem] text-muted-foreground leading-[1.45] mb-1.5 sm:mb-2">
        {member.title}
      </p>
      <div className="flex items-center text-[0.7rem] sm:text-[0.75rem] text-muted-foreground">
        <MapPin size={11} className="mr-1 sm:mr-1.5 text-stratified/60 flex-shrink-0" />
        <span>{member.location}</span>
      </div>
    </button>
  );
};

export default TeamMemberCard;
