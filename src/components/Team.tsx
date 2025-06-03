
import ContactCTA from './ContactCTA';
import TeamMember from './team/TeamMember';
import ExpertiseGrid from './team/ExpertiseGrid';
import { teamMembers, expertiseItems } from './team/TeamData';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6 gradient-text text-3xl md:text-4xl lg:text-5xl font-bold">Our Founding Team</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Led by world-class professionals with deep expertise in AI, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              role={member.role}
              name={member.name}
              title={member.title}
              location={member.location}
              image={member.image}
              description={member.description}
              quote={member.quote}
              education={member.education}
              currentRoles={member.currentRoles}
              advisoryFocus={member.advisoryFocus}
              linkedinUrl={member.linkedinUrl}
              emailUrl={member.emailUrl}
              reverse={member.reverse}
            />
          ))}
          
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl border border-gray-200">
            <h4 className="text-xl md:text-2xl font-bold mb-6 text-stratified">Combined Board-Ready Expertise & Value</h4>
            <ExpertiseGrid items={expertiseItems} />
          </div>

          <div className="mt-8 bg-gradient-to-r from-stratified-lighter/40 to-stratified-light/40 rounded-2xl p-6 md:p-8 text-center border border-stratified-lighter/30 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-3 text-stratified">Board & Fund Focus</h4>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              Scale-up boards in enterprise SaaS, AI, or regulated markets (Series B–D) • Operating partner/advisor to PE or VC funds • Innovation, AI, ESG, or GTM-focused board committees • International expansion and ecosystem development • Deep-tech and scientific discovery ventures
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-6">
              <ContactCTA variant="board-advisory" size="default" />
              <ContactCTA variant="consulting" size="default" />
              <ContactCTA variant="partnership" size="default" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
