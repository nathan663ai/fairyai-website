import React, { useState, useRef, useEffect } from 'react';

interface Song {
  id: string;
  title: string;
  style: string;
  url: string;
  duration: number;
}

interface SongPlayerProps {
  songs: Song[];
  className?: string;
}

const SongPlayer: React.FC<SongPlayerProps> = ({ songs, className = '' }) => {
  const [selectedSongId, setSelectedSongId] = useState<string>(songs[0]?.id || '');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectedSong = songs.find(s => s.id === selectedSongId) || songs[0];

  // Reset playback when song changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [selectedSongId]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-4 shadow-md ${className}`}>
      {/* Song Selector */}
      <div className="mb-4">
        <label htmlFor="song-select" className="block text-sm font-semibold text-neutral-700 mb-2">
          Select Song:
        </label>
        <select
          id="song-select"
          value={selectedSongId}
          onChange={(e) => setSelectedSongId(e.target.value)}
          className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-soft-blue-500"
        >
          {songs.map((song) => (
            <option key={song.id} value={song.id}>
              {song.title} ({song.style.replace(/_/g, ' ')})
            </option>
          ))}
        </select>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={selectedSong.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onLoadStart={() => setIsLoading(true)}
      />

      {/* Player Controls */}
      <div className="flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-soft-blue-500 to-soft-green-500 text-white hover:from-soft-blue-600 hover:to-soft-green-600 transition-all shadow-md disabled:opacity-50"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isLoading ? (
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Progress Bar */}
        <div className="flex-1">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-soft-blue-500"
            style={{
              background: `linear-gradient(to right, #3B82F6 0%, #22C55E ${(currentTime / duration) * 100}%, #E5E7EB ${(currentTime / duration) * 100}%, #E5E7EB 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-neutral-600 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || selectedSong.duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
