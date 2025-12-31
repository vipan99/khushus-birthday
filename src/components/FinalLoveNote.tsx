import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const FinalLoveNote = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 16 + Math.random() * 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <section className="py-24 px-4 gradient-hero relative overflow-hidden min-h-screen flex items-center">
      {/* Floating petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-2xl animate-fall pointer-events-none"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: '10s',
            fontSize: `${petal.size}px`,
          }}
        >
          🌸
        </div>
      ))}

      {/* Decorative hearts */}
      <div className="absolute top-16 left-8 text-4xl opacity-50 animate-float">💕</div>
      <div className="absolute top-24 right-16 text-5xl opacity-40 animate-float-slow">❤️</div>
      <div className="absolute bottom-32 left-16 text-4xl opacity-45 animate-float animation-delay-400">💕</div>
      <div className="absolute bottom-24 right-8 text-5xl opacity-50 animate-float-slow animation-delay-600">💗</div>
      <div className="absolute top-1/2 left-8 text-3xl opacity-40 animate-heartbeat">💖</div>
      <div className="absolute top-1/2 right-8 text-3xl opacity-40 animate-heartbeat animation-delay-400">💖</div>

      {/* Glowing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-rose-light/20 blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Final message */}
        <div className="mb-12">
          <span className="text-6xl mb-6 block animate-heartbeat">💝</span>
          <h2 className="font-cursive text-5xl md:text-7xl text-rose-dark mb-8">
            My Final Note to You
          </h2>
        </div>

        {/* Love letter */}
        <div className="bg-background/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-glow mb-12">
          <div className="font-elegant text-xl md:text-2xl leading-relaxed text-foreground/90 space-y-6">
            <p>
              My dearest Khushu,
            </p>
            <p>
              As I write this, my heart is overflowing with love for you. You are not just my partner, 
              you are my best friend, my confidant, my home. Every day with you is a gift that I cherish 
              more than words could ever express.
            </p>
            <p>
              Thank you for being you — for your kindness, your laughter, your strength, and your 
              unconditional love. You make every moment brighter and every challenge easier to face.
            </p>
            <p>
              On your birthday and every day, I promise to love you, support you, and be there for you 
              through every joy and every storm. You are my everything, and I am so incredibly blessed 
              to call you mine.
            </p>
          </div>
        </div>

        {/* Signature */}
        <div className="space-y-6">
          <div className="flex justify-center gap-2">
            <Heart className="w-8 h-8 text-rose fill-rose animate-heartbeat" />
            <Heart className="w-10 h-10 text-rose fill-rose animate-heartbeat animation-delay-200" />
            <Heart className="w-8 h-8 text-rose fill-rose animate-heartbeat animation-delay-400" />
          </div>

          <p className="font-cursive text-5xl md:text-6xl text-gold">
            Forever Yours
          </p>

          <div className="flex justify-center gap-3">
            <span className="text-3xl animate-float">💕</span>
            <span className="text-4xl animate-float animation-delay-200">❤️</span>
            <span className="text-3xl animate-float animation-delay-400">💕</span>
          </div>

          <p className="font-elegant text-xl text-muted-foreground italic">
            With all my love, now and always
          </p>

          {/* Final decoration */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-4 bg-rose-light/30 px-8 py-4 rounded-full">
              <span className="text-3xl">🌹</span>
              <span className="font-cursive text-3xl text-rose-dark">Happy Birthday, My Love!</span>
              <span className="text-3xl">🌹</span>
            </div>
          </div>
        </div>

        {/* Floating hearts at bottom */}
        <div className="flex justify-center gap-6 mt-12">
          <span className="text-4xl animate-float">💕</span>
          <span className="text-5xl animate-heartbeat">❤️</span>
          <span className="text-4xl animate-float animation-delay-400">💕</span>
        </div>
      </div>
    </section>
  );
};

export default FinalLoveNote;
