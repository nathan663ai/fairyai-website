import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'banner';
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  className = '',
  aspectRatio = 'video'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    banner: 'aspect-banner'
  };

  return (
    <div className={`${aspectClasses[aspectRatio]} relative bg-gradient-to-br from-neutral-50 via-soft-blue-50 to-soft-green-50 rounded-lg overflow-hidden ${className}`}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}></div>

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-3 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-neutral-400 font-medium text-sm px-4 block">{label} Placeholder</span>
        </div>
      </div>

      {/* Border */}
      <div className="absolute inset-0 border-2 border-neutral-200 rounded-lg"></div>
    </div>
  );
};

export default ImagePlaceholder;
