
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { teamMembers } from './TeamData';
import TeamMemberDetails from './TeamMemberDetails';

const TeamCarousel = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Carousel
        orientation="vertical"
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-mt-4 h-[600px]">
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="pt-4 basis-auto">
              <Collapsible 
                open={expandedMember === index} 
                onOpenChange={() => toggleExpanded(index)}
              >
                <motion.div 
                  className="card-modern overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CollapsibleTrigger className="w-full text-left">
                    <div className="flex items-center gap-6 p-6">
                      <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden shadow-lg">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="uppercase tracking-wider text-xs text-stratified font-bold mb-1 bg-stratified-lighter/30 px-3 py-1 rounded-full inline-block">
                          {member.role}
                        </div>
                        <h3 className="text-xl font-black text-gray-900 mb-1 truncate">
                          {member.name}
                        </h3>
                        <p className="text-stratified font-semibold text-sm">
                          {member.title}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedMember === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-6 w-6 text-stratified" />
                      </motion.div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <AnimatePresence>
                      {expandedMember === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <TeamMemberDetails member={member} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CollapsibleContent>
                </motion.div>
              </Collapsible>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1/2 -translate-x-1/2 -top-12" />
        <CarouselNext className="left-1/2 -translate-x-1/2 -bottom-12" />
      </Carousel>
    </div>
  );
};

export default TeamCarousel;
