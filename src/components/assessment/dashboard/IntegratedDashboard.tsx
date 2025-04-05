
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AssessmentResultRadarChart from './AssessmentResultRadarChart';

interface IntegratedDashboardProps {
  completedAssessments: string[];
  assessmentTypes: string[];
  onSelectAssessment: (type: string) => void;
}

const IntegratedDashboard: React.FC<IntegratedDashboardProps> = ({
  completedAssessments,
  assessmentTypes,
  onSelectAssessment
}) => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  // Get assessment results from localStorage
  const getAssessmentResults = () => {
    const results: Record<string, any> = {};
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    
    completedAssessments.forEach(type => {
      if (savedResults[type]) {
        results[type] = savedResults[type];
      }
    });
    
    return results;
  };
  
  const results = getAssessmentResults();
  
  // Calculate average score across all assessments
  const calculateAverageScore = () => {
    if (completedAssessments.length === 0) return 0;
    
    let totalScore = 0;
    completedAssessments.forEach(type => {
      totalScore += results[type]?.score || 0;
    });
    
    return Math.round(totalScore / completedAssessments.length);
  };
  
  // Format assessment name for display
  const formatAssessmentName = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Count completed and remaining assessments
  const completedCount = completedAssessments.length;
  const remainingCount = assessmentTypes.length - completedCount;
  
  // Calculate average score
  const averageScore = calculateAverageScore();
  
  return (
    <div className="p-4">
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="overview">Dashboard Overview</TabsTrigger>
          <TabsTrigger value="details">Assessment Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-stratified">{averageScore}%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Completed Assessments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">{completedCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Remaining Assessments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-500">{remainingCount}</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Results Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Assessment Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {completedAssessments.length > 0 ? (
                  <AssessmentResultRadarChart 
                    completedAssessments={completedAssessments} 
                    results={results} 
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Complete an assessment to see results</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedAssessments.length > 0 ? (
                  completedAssessments.map(type => (
                    <div 
                      key={type} 
                      onClick={() => onSelectAssessment(type)}
                      className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">{formatAssessmentName(type)}</div>
                        <div className="text-sm text-muted-foreground">
                          Completed on {new Date(results[type]?.completedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-xl font-bold text-stratified">{results[type]?.score}%</div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-muted-foreground">
                    No completed assessments yet
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IntegratedDashboard;
