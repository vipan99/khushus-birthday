import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Birthday/romantic music - using a royalty-free romantic piano piece
  // Replace this URL with your own music file
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} preload="auto">
        <source src={musicUrl} type="audio/mpeg" />
        {/* Add your music file here - replace the src above */}
        {/* Example: <source src="/birthday-music.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* Music control button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMusic}
          variant="ghost"
          size="icon"
          className={`rounded-full w-14 h-14 bg-background/80 backdrop-blur-md shadow-romantic hover:shadow-glow transition-all border border-rose-light/30 ${
            isPlaying ? 'animate-pulse-glow' : ''
          }`}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-rose-dark" />
          ) : (
            <VolumeX className="w-6 h-6 text-rose-dark/60" />
          )}
        </Button>

        {/* Music hint - shows only before first interaction */}
        {!hasInteracted && (
          <div className="absolute top-full right-0 mt-2 whitespace-nowrap animate-fade-in">
            <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-romantic flex items-center gap-2 border border-rose-light/30">
              <Music className="w-4 h-4 text-rose" />
              <span className="font-elegant text-sm text-rose-dark">Click to play music</span>
              <span className="text-lg">🎵</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BackgroundMusic;
