import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface RatingBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ className = '', size = 'md' }) => {
  const { score, max, reviewCount, source } = BUSINESS_DATA.rating;

  const sizeClasses = {
    sm: 'text-xs py-1 px-2.5 gap-1.5',
    md: 'text-sm py-1.5 px-3.5 gap-2',
    lg: 'text-base py-2 px-4 gap-2.5'
  };

  const starSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  };

  return (
    <div
      id="verified-rating-badge"
      className={`inline-flex items-center rounded-full bg-[#F4EFEA] border border-[#E4D9CE] text-[#4A3E37] font-medium shadow-xs transition-colors hover:border-[#D0C2B4] ${sizeClasses[size]} ${className}`}
      aria-label={`${score} out of ${max} stars across ${reviewCount} ${source}`}
    >
      <div className="flex items-center text-[#B27D42]" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${starSizes[size]} fill-current stroke-current`}
          />
        ))}
      </div>
      <span className="font-semibold text-[#2C2723]">{score}/{max}</span>
      <span className="text-[#6D5D53] border-l border-[#DACDC0] pl-2">
        {reviewCount} {source}
      </span>
    </div>
  );
};
