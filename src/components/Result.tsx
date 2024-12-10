import { MacRecommendation } from '../types';
import { Monitor, Laptop, Package } from 'lucide-react';

interface ResultProps {
  recommendation: MacRecommendation;
  onReset: () => void;
}

export function Result({ recommendation, onReset }: ResultProps) {
  const getIcon = (name: string) => {
    if (name.includes('iMac')) return <Monitor className="h-6 w-6" />;
    if (name.includes('MacBook')) return <Laptop className="h-6 w-6" />;
    return <Package className="h-6 w-6" />;
  };

  return (
    <div className="w-full max-w-2xl animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recommendation.imageUrl}
          alt={recommendation.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            {getIcon(recommendation.name)}
            <h2 className="text-2xl font-semibold text-gray-800">
              {recommendation.name}
            </h2>
          </div>
          <p className="text-gray-600 mb-4">{recommendation.description}</p>
          <p className="text-xl font-medium text-blue-600 mb-6">
            Starting at {recommendation.price}
          </p>
          <div className="flex justify-between">
            <button
              onClick={onReset}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Start Over
            </button>
            <a
              href={`https://apple.com/shop/buy-mac/${recommendation.name.toLowerCase().replace(/ /g, '-').replace('"', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}