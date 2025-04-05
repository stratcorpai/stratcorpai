
import React from 'react';
import { LineChart } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import IntegratedDashboard from './dashboard/IntegratedDashboard';

type DashboardSectionProps = {
  completedAssessments: string[];
  assessmentTypes: string[];
  onSelectAssessment: (type: string) => void;
};

const DashboardSection: React.FC<DashboardSectionProps> = ({
  completedAssessments,
  assessmentTypes,
  onSelectAssessment
}) => {
  if (completedAssessments.length === 0) {
    return null;
  }
  
  return (
    <Accordion 
      type="single" 
      defaultValue="dashboard" 
      collapsible
      className="border-y border-gray-200"
    >
      <AccordionItem value="dashboard" className="border-none">
        <AccordionTrigger className="bg-gray-50 py-3 px-4 hover:no-underline">
          <span className="flex items-center text-lg font-semibold text-gray-800">
            <LineChart className="mr-2 h-5 w-5 text-stratified" />
            Assessment Dashboard
          </span>
        </AccordionTrigger>
        <AccordionContent className="bg-gray-50 py-2 px-0">
          <div className="py-2">
            <IntegratedDashboard 
              completedAssessments={completedAssessments}
              assessmentTypes={assessmentTypes}
              onSelectAssessment={onSelectAssessment}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DashboardSection;
