
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

  // Define chart colors
  const chartConfig = {
    score: {
      label: "Score",
      color: "#3B82F6" // Blue color
    }
  };

  return (
    <div className="w-full aspect-[16/9]">
      <ChartContainer config={chartConfig}>
        <RadarChart 
          data={chartData} 
          cx="50%" 
          cy="50%" 
          outerRadius="80%"
        >
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={false}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]} 
            axisLine={false}
            tick={{ fontSize: 10, fill: "#6b7280" }}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Radar 
            name="Score" 
            dataKey="score" 
            stroke="var(--color-score)" 
            fill="var(--color-score)" 
            fillOpacity={0.5} 
          />
        </RadarChart>
      </ChartContainer>
    </div>
  );
};

export default AssessmentResultRadarChart;
