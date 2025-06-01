
interface ExpertiseItem {
  title: string;
  description: string;
}

interface ExpertiseGridProps {
  items: ExpertiseItem[];
}

const ExpertiseGrid = ({ items }: ExpertiseGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
          <h5 className="font-semibold mb-2 text-stratified">{item.title}</h5>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseGrid;
