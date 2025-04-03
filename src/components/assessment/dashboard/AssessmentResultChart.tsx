
import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

type AssessmentResultChartProps = {
  completedAssessments: string[];
  results: Record<string, any>;
};

const AssessmentResultChart: FC<AssessmentResultChartProps> = ({ 
  completedAssessments,
  results 
}) => {
  // Format assessment names for display
  const formatAssessmentName = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Transform data for the chart
  const chartData = completedAssessments.map(type => ({
    name: formatAssessmentName(type),
    score: results[type]?.score || 0,
    id: type
  }));
  
  // Define chart colors
  const chartConfig = {
    score: {
      label: "Score",
      color: "#3B82F6"
    }
  };

  return (
    <div className="w-full aspect-[16/9]">
      <ChartContainer config={chartConfig}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis 
            domain={[0, 100]} 
            tick={{ fontSize: 12 }}
            tickCount={6}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar 
            dataKey="score" 
            fill="var(--color-score)" 
            barSize={30} 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AssessmentResultChart;
