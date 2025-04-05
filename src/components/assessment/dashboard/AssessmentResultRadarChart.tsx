
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
  // Format assessment names for display
  const formatAssessmentName = (type: string) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
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
    <div className="w-full h-full">
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
