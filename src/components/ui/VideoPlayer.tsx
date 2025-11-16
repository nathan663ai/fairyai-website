import React, { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  aspectRatio?: 'square' | 'video' | 'portrait';
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  comingSoonText?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  aspectRatio = 'video',
  className = '',
  autoplay = false,
  muted = false,
  loop = false,
  controls = true,
  comingSoonText,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle autoplay on desktop only
  useEffect(() => {
    if (autoplay && !isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, show play button
        setShowPlayButton(true);
      });
    }
  }, [autoplay, isMobile]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setShowPlayButton(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  const shouldAutoplay = autoplay && !isMobile;

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        autoPlay={shouldAutoplay}
        muted={muted || shouldAutoplay}
        loop={loop}
        controls={controls && !showPlayButton}
        playsInline
        preload={autoplay ? 'auto' : 'metadata'}
        onPlay={() => {
          setIsPlaying(true);
          setShowPlayButton(false);
        }}
        onPause={() => setIsPlaying(false)}
        aria-label="Video player"
      >
        <p className="text-neutral-600">
          Your browser does not support the video element. Please update your browser.
        </p>
      </video>

      {/* Play Button Overlay (Mobile or when paused) */}
      {showPlayButton && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg cursor-pointer transition-opacity hover:bg-opacity-40"
          onClick={handlePlayClick}
        >
          <button
            className="bg-white bg-opacity-90 rounded-full p-6 shadow-2xl hover:bg-opacity-100 transition-all hover:scale-110"
            aria-label="Play video"
          >
            <svg
              className="w-12 h-12 text-soft-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {/* Coming Soon Text Overlay */}
      {comingSoonText && (
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-center">
          <p className="text-sm font-semibold">{comingSoonText}</p>
        </div>
      )}

      {/* Loading Gradient Background (shown when no poster) */}
      {!poster && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-soft-blue-50 to-soft-green-50 rounded-lg -z-10" />
      )}
    </div>
  );
};

export default VideoPlayer;
