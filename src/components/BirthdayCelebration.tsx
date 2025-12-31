import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const BirthdayCelebration = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['🎊', '🎉', '✨', '⭐', '💕', '🌟'];
    const newConfetti = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Confetti animation */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute text-2xl animate-fall pointer-events-none"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: '6s',
          }}
        >
          {item.color}
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-12 left-8 text-4xl animate-float">🎈</div>
      <div className="absolute top-20 right-12 text-4xl animate-float-slow animation-delay-200">🎈</div>
      <div className="absolute bottom-20 left-16 text-3xl animate-float animation-delay-400">🎁</div>
      <div className="absolute bottom-12 right-8 text-3xl animate-float-slow animation-delay-600">🎀</div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <Sparkles className="w-12 h-12 text-gold mx-auto mb-4 animate-sparkle" />
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-dark mb-4">
            Make a Wish! 
          </h2>
          <p className="font-elegant text-lg text-muted-foreground italic">
            Close your eyes and wish upon the candles
          </p>
        </div>

        {/* Birthday cake */}
        <div className="relative flex justify-center mb-12">
          <div className="relative">
            {/* Cake emoji with glow */}
            <div className="text-[150px] md:text-[200px] relative animate-float-slow">
              🎂
              {/* Candle glow effect */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-gold/30 rounded-full blur-xl animate-candle" />
            </div>
            
            {/* Sparkles around cake */}
            <div className="absolute -top-4 -left-4 text-3xl animate-sparkle">✨</div>
            <div className="absolute -top-4 -right-4 text-3xl animate-sparkle animation-delay-400">✨</div>
            <div className="absolute top-1/4 -left-8 text-2xl animate-sparkle animation-delay-200">⭐</div>
            <div className="absolute top-1/4 -right-8 text-2xl animate-sparkle animation-delay-600">⭐</div>
          </div>
        </div>

        {/* Birthday message */}
        <div className="text-center bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-glow">
          <h3 className="font-cursive text-4xl md:text-5xl text-gold mb-6">
            January 1st, 2026
          </h3>
          
          <p className="font-elegant text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
            On this magical day, I want you to know that you deserve all the happiness in the world. 
            May every candle on your cake bring you closer to your dreams, and may every wish you 
            make come true, my love.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="text-4xl animate-float">🎈</span>
            <span className="text-4xl animate-float animation-delay-200">🎁</span>
            <span className="text-4xl animate-float animation-delay-400">🎊</span>
            <span className="text-4xl animate-float animation-delay-600">🎉</span>
            <span className="text-4xl animate-float animation-delay-800">🎈</span>
          </div>

          <p className="font-cursive text-3xl md:text-4xl text-rose-dark">
            May all your dreams come true, my love! 💕
          </p>
        </div>

        {/* Celebration emojis */}
        <div className="flex justify-center gap-4 mt-8">
          <span className="text-4xl animate-bounce">🥳</span>
          <span className="text-5xl animate-bounce animation-delay-200">🎂</span>
          <span className="text-4xl animate-bounce animation-delay-400">🥳</span>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCelebration;
