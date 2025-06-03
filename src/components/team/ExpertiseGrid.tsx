
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);
        const shouldTruncate = isMobile && item.description.split(' ').length > 15;
        const displayDescription = shouldTruncate && !isExpanded 
          ? truncateText(item.description, 15)
          : item.description;

        return (
          <motion.div 
            key={index} 
            className="relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-stratified/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h5 className="font-black mb-4 text-stratified text-xl leading-tight text-balance group-hover:text-stratified-dark transition-colors duration-300">
                {item.title}
              </h5>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 text-pretty">
                {displayDescription}
              </p>
              
              {shouldTruncate && (
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="text-stratified font-semibold hover:text-stratified-dark transition-colors flex items-center gap-2 text-sm mt-4 group/btn bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-stratified/20 hover:border-stratified/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} className="group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                  </motion.div>
                </motion.button>
              )}
            </div>

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 group-hover:ring-stratified/30 transition-all duration-500" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExpertiseGrid;
