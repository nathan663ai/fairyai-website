import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={src} preload="metadata" aria-label={title || 'Audio player'} />

      {/* Player Controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause Button - Larger & More Modern */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="flex-shrink-0 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isLoading ? (
            <svg className="w-6 h-6 text-white animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : isPlaying ? (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Progress Bar & Time - Modern Layout */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Title - Above progress bar if exists */}
          {title && (
            <p className="text-sm font-medium text-neutral-700">{title}</p>
          )}

          {/* Progress Bar Container */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-medium tabular-nums min-w-[38px]">
              {formatTime(currentTime)}
            </span>

            {/* Modern Progress Bar */}
            <div className="flex-1 relative group/progress">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                disabled={isLoading}
                className="w-full h-1.5 bg-neutral-200 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed slider"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #22C55E ${(currentTime / duration) * 100}%, #E5E7EB ${(currentTime / duration) * 100}%, #E5E7EB 100%)`,
                }}
                aria-label="Seek audio"
              />
            </div>

            <span className="text-xs text-neutral-500 font-medium tabular-nums min-w-[38px]">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Loading State Text */}
      {isLoading && (
        <p className="text-xs text-neutral-400 mt-2 text-center animate-pulse">Loading audio...</p>
      )}
    </div>
  );
};

export default AudioPlayer;
