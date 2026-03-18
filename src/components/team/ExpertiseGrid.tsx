import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);
        const words = item.description.split(' ');
        const shouldTruncate = isMobile && words.length > 18;
        const displayText = shouldTruncate && !isExpanded
          ? words.slice(0, 18).join(' ') + '...'
          : item.description;

        return (
          <div key={index} className="border-b border-border pb-6">
            <h5 className="font-heading text-stratified mb-2">{item.title}</h5>
            <p className="text-caption leading-relaxed">{displayText}</p>
            {shouldTruncate && (
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="text-stratified font-semibold text-sm mt-2 flex items-center gap-1 hover:text-stratified-dark transition-colors"
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpertiseGrid;
