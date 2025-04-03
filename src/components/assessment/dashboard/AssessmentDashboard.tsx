
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Award, BarChart3 } from 'lucide-react';
import AssessmentResultChart from './AssessmentResultChart';

type AssessmentDashboardProps = {
  completedAssessments: string[];
  assessmentTypes: string[];
  onSelectAssessment: (type: string) => void;
};

const AssessmentDashboard = ({
  completedAssessments,
  assessmentTypes,
  onSelectAssessment
}: AssessmentDashboardProps) => {
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
    <section className="py-8 bg-gray-50">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Overview Cards */}
            <div className="w-full md:w-2/3 space-y-6">
              {/* Progress Summary */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-stratified" />
                    Assessment Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                    
                    <Separator />
                    
                    <div className="pt-2">
                      <h4 className="text-sm font-medium mb-3">Assessment Status</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {assessmentTypes.map(type => {
                          const isCompleted = completedAssessments.includes(type);
                          return (
                            <div 
                              key={type} 
                              className="flex items-center justify-between p-3 rounded-lg border bg-white hover:bg-gray-50 cursor-pointer"
                              onClick={() => onSelectAssessment(type)}
                            >
                              <div className="flex items-center">
                                {isCompleted ? (
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                ) : (
                                  <Clock className="h-4 w-4 mr-2 text-amber-500" />
                                )}
                                <span className="text-sm">{formatAssessmentName(type)}</span>
                              </div>
                              {isCompleted ? (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  Completed
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                  Pending
                                </Badge>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Chart if there are completed assessments */}
              {completedAssessments.length > 0 && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Results Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AssessmentResultChart 
                      completedAssessments={completedAssessments} 
                      results={savedResults} 
                    />
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Achievements & Actions */}
            <div className="w-full md:w-1/3 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="mr-2 h-5 w-5 text-stratified" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className={`p-3 rounded-lg border ${completedAssessments.length > 0 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center">
                        <div className={`rounded-full p-1 mr-3 ${completedAssessments.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}>
                          <CheckCircle className={`h-4 w-4 ${completedAssessments.length > 0 ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">First Assessment</p>
                          <p className="text-xs text-gray-500">
                            {completedAssessments.length > 0 ? 'Completed!' : 'Complete any assessment'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-3 rounded-lg border ${completedAssessments.length >= 3 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center">
                        <div className={`rounded-full p-1 mr-3 ${completedAssessments.length >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}>
                          <CheckCircle className={`h-4 w-4 ${completedAssessments.length >= 3 ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Half Way There</p>
                          <p className="text-xs text-gray-500">
                            {completedAssessments.length >= 3 
                              ? 'You\'ve completed half of the assessments!' 
                              : `${completedAssessments.length}/3 assessments completed`}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-3 rounded-lg border ${completedAssessments.length === assessmentTypes.length ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="flex items-center">
                        <div className={`rounded-full p-1 mr-3 ${completedAssessments.length === assessmentTypes.length ? 'bg-green-500' : 'bg-gray-300'}`}>
                          <CheckCircle className={`h-4 w-4 ${completedAssessments.length === assessmentTypes.length ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Assessment Master</p>
                          <p className="text-xs text-gray-500">
                            {completedAssessments.length === assessmentTypes.length 
                              ? 'You\'ve completed all assessments!' 
                              : `${completedAssessments.length}/${assessmentTypes.length} assessments completed`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-stratified hover:bg-stratified-dark" 
                      onClick={() => {
                        const nextIncomplete = assessmentTypes.find(type => !completedAssessments.includes(type));
                        if (nextIncomplete) {
                          onSelectAssessment(nextIncomplete);
                        }
                      }}
                      disabled={completedAssessments.length === assessmentTypes.length}
                    >
                      {completedAssessments.length === assessmentTypes.length 
                        ? 'All Assessments Completed' 
                        : 'Start Next Assessment'}
                    </Button>
                    
                    <Button variant="outline" className="w-full" onClick={() => {}}>
                      View My Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentDashboard;
