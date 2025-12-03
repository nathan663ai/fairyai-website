import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

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

// Helper to format duration
const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const SongPlayer: React.FC<SongPlayerProps> = ({ songs, className = '' }) => {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = songs.find(s => s.id === currentSongId);

  // Handle song play/pause
  const handleSongClick = (songId: string, audioUrl: string) => {
    if (currentSongId === songId && isPlaying) {
      // Pause current song
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentSongId === songId && !isPlaying) {
      // Resume current song
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      // Play new song
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      audio.play();
      setCurrentSongId(songId);
      setIsPlaying(true);
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden ${className}`}>
      {/* Track List */}
      <div className="divide-y divide-neutral-100">
        {songs.map((song) => {
          const isCurrentSong = currentSongId === song.id;
          const isThisSongPlaying = isCurrentSong && isPlaying;

          return (
            <div
              key={song.id}
              className={`flex items-center gap-3 p-4 hover:bg-neutral-50 transition-colors cursor-pointer ${isCurrentSong ? 'bg-amber-50' : ''}`}
              onClick={() => handleSongClick(song.id, song.url)}
            >
              {/* Play/Pause Button */}
              <button
                className="flex-shrink-0 w-10 h-10 bg-fairy-gold-500 hover:bg-fairy-gold-600 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-md"
                aria-label={isThisSongPlaying ? 'Pause' : 'Play'}
              >
                {isThisSongPlaying ? (
                  <Pause className="w-5 h-5" fill="currentColor" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                )}
              </button>

              {/* Song Info */}
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-neutral-900 truncate ${isCurrentSong ? 'text-fairy-gold-600' : ''}`}>
                  {song.title}
                </p>
                <p className="text-sm text-neutral-500 truncate">
                  {(song.style || '').replace(/_/g, ' ')}
                </p>
              </div>

              {/* Duration */}
              <span className="text-sm text-neutral-400 flex-shrink-0">
                {formatDuration(song.duration)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Now Playing Bar */}
      {currentSong ? (
        <div className="bg-neutral-50 border-t border-neutral-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold text-fairy-gold-500 uppercase tracking-wide">
              Now Playing
            </span>
            <span className="text-sm font-medium text-neutral-700 truncate">
              {currentSong.title}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 w-10 text-right">
              {formatDuration(Math.floor(currentTime))}
            </span>
            <div
              className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                if (audioRef.current && duration > 0) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const percentage = clickX / rect.width;
                  const newTime = percentage * duration;
                  audioRef.current.currentTime = newTime;
                  setCurrentTime(newTime);
                }
              }}
            >
              <div
                className="h-full bg-fairy-gold-500 rounded-full transition-all pointer-events-none"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <span className="text-xs text-neutral-500 w-10">
              {formatDuration(Math.floor(duration))}
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-neutral-50 border-t border-neutral-200 p-4 text-center">
          <p className="text-sm text-neutral-400">
            Select a song to play
          </p>
        </div>
      )}
    </div>
  );
};

export default SongPlayer;
