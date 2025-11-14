import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait';
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  className = '',
  aspectRatio = 'video'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]'
  };

  return (
    <div className={`${aspectClasses[aspectRatio]} bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-neutral-400 font-medium text-center px-4">{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
