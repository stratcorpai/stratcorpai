
import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, BarChart3 } from 'lucide-react';
import AssessmentResultChart from './AssessmentResultChart';

type IntegratedDashboardProps = {
  completedAssessments: string[];
  assessmentTypes: string[];
  onSelectAssessment: (type: string) => void;
};

const IntegratedDashboard: FC<IntegratedDashboardProps> = ({
  completedAssessments,
  assessmentTypes,
  onSelectAssessment
}) => {
  // Calculate completion percentage
  const completionPercentage = Math.round((completedAssessments.length / assessmentTypes.length) * 100);
  
  // Get saved results for completed assessments
  const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
  
  // Get average score across all completed assessments
  const averageScore = completedAssessments.length > 0
    ? Math.round(
        completedAssessments.reduce((sum, type) => sum + (savedResults[type]?.score || 0), 0) / 
        completedAssessments.length
      )
    : 0;
  
  // Format assessment type names for display
  const formatAssessmentName = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <section className="bg-gray-50 py-8 border-y border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-stratified" />
            Assessment Progress
          </h2>
          
          {completedAssessments.length < assessmentTypes.length && (
            <Button 
              className="bg-stratified hover:bg-stratified-dark text-white text-sm"
              onClick={() => {
                const nextIncomplete = assessmentTypes.find(type => !completedAssessments.includes(type));
                if (nextIncomplete) {
                  onSelectAssessment(nextIncomplete);
                }
              }}
            >
              Start Next Assessment
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Summary */}
          <Card className="md:col-span-1">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Completion</span>
                    <span className="text-sm font-medium">{completionPercentage}%</span>
                  </div>
                  <Progress value={completionPercentage} className="h-2" />
                </div>
                
                {completedAssessments.length > 0 && (
                  <div className="pt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Average Score</span>
                      <span className="text-sm font-medium">{averageScore}/100</span>
                    </div>
                    <Progress value={averageScore} className="h-2" />
                  </div>
                )}
                
                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-3">Quick Status</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {assessmentTypes.map(type => {
                      const isCompleted = completedAssessments.includes(type);
                      return (
                        <div 
                          key={type} 
                          className="flex items-center p-2 rounded-lg border bg-white hover:bg-gray-50 cursor-pointer"
                          onClick={() => onSelectAssessment(type)}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                          ) : (
                            <Clock className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" />
                          )}
                          <span className="text-xs truncate">{formatAssessmentName(type)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Chart if there are completed assessments */}
          {completedAssessments.length > 0 ? (
            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <AssessmentResultChart 
                  completedAssessments={completedAssessments} 
                  results={savedResults} 
                />
              </CardContent>
            </Card>
          ) : (
            <Card className="md:col-span-2 flex items-center justify-center">
              <CardContent className="text-center py-12">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No Assessments Completed</h3>
                <p className="text-sm text-gray-500 mb-4">Complete your first assessment to see your results here.</p>
                <Button 
                  className="bg-stratified hover:bg-stratified-dark text-white"
                  onClick={() => {
                    onSelectAssessment(assessmentTypes[0]);
                  }}
                >
                  Start First Assessment
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntegratedDashboard;
