
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
    <section className="py-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <LineChart className="mr-2 h-5 w-5 text-stratified" />
            Assessment Dashboard
          </h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <IntegratedDashboard 
            completedAssessments={completedAssessments}
            assessmentTypes={assessmentTypes}
            onSelectAssessment={onSelectAssessment}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
