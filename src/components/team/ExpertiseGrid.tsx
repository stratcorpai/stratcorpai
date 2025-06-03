
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ExpertiseItem {
  title: string;
  description: string;
}

interface ExpertiseGridProps {
  items: ExpertiseItem[];
}

const ExpertiseGrid = ({ items }: ExpertiseGridProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);
        const shouldTruncate = isMobile && item.description.split(' ').length > 15;
        const displayDescription = shouldTruncate && !isExpanded 
          ? truncateText(item.description, 15)
          : item.description;

        return (
          <div key={index} className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-stratified/5 hover:to-stratified-light/10 transition-all duration-300 border border-gray-200 hover:border-stratified-light hover:shadow-lg">
            <h5 className="font-bold mb-3 text-stratified text-lg leading-tight">{item.title}</h5>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">{displayDescription}</p>
            
            {shouldTruncate && (
              <button
                onClick={() => toggleItem(index)}
                className="text-stratified font-medium hover:text-stratified-dark transition-colors flex items-center gap-1 text-sm mt-2"
              >
                {isExpanded ? 'Show Less' : 'Read More'}
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpertiseGrid;
