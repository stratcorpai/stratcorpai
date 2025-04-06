
import { FC } from 'react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

type AssessmentResultRadarChartProps = {
  completedAssessments: string[];
  results: Record<string, any>;
};

const AssessmentResultRadarChart: FC<AssessmentResultRadarChartProps> = ({ 
  completedAssessments,
  results 
}) => {
  // Format assessment names for display with proper capitalization
  const formatAssessmentName = (type: string) => {
    // Special case for AI readiness
    if (type === 'ai-readiness') {
      return 'AI Readiness';
    }
    
    // Handle other assessment types
    return type.split('-').map(word => {
      // Capitalize AI anywhere it appears as a whole word
      if (word.toLowerCase() === 'ai') {
        return 'AI';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };
  
  // Transform data for the radar chart
  const chartData = completedAssessments.map(type => ({
    name: formatAssessmentName(type),
    score: results[type]?.score || 0,
    id: type,
    fullMark: 100
  }));

  // Define chart colors with more appealing palette
  const chartConfig = {
    score: {
      label: "Score",
      color: "#3B82F6", // Blue color
      gradient: {
        startColor: "#3B82F6",
        endColor: "#93C5FD",
      }
    }
  };

  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
          <RadarChart 
            data={chartData} 
            cx="50%" 
            cy="50%" 
            outerRadius="80%"
          >
            <PolarGrid gridType="circle" stroke="#e5e7eb" strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickLine={false}
              style={{ textTransform: 'capitalize' }}
              dy={4} // Add offset to prevent clipping of labels
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              axisLine={false}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickCount={5}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Radar 
              name="Score" 
              dataKey="score" 
              stroke="var(--color-score)" 
              fill="var(--color-score)" 
              fillOpacity={0.6} 
              animationBegin={200}
              animationDuration={800}
            />
          </RadarChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
};

export default AssessmentResultRadarChart;
