import { Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative gradient-hero px-4 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float opacity-60">🌹</div>
      <div className="absolute top-20 right-16 text-3xl animate-float-slow animation-delay-400 opacity-50">✨</div>
      <div className="absolute bottom-32 left-16 text-5xl animate-float animation-delay-600 opacity-40">🌸</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-float-slow animation-delay-200 opacity-50">💐</div>
      <div className="absolute top-1/4 right-1/4 text-2xl animate-sparkle opacity-60">⭐</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl animate-sparkle animation-delay-800 opacity-50">✨</div>

      {/* Glowing background effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-rose-light/30 blur-3xl animate-pulse-glow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Cake emoji */}
        <div className="text-7xl md:text-8xl mb-6 animate-float">🎂</div>

        {/* Main heading */}
        <h1 className="font-cursive text-6xl md:text-8xl lg:text-9xl text-rose-dark mb-6 animate-fade-in-up">
          Happy Birthday
        </h1>
        
        <h2 className="font-cursive text-5xl md:text-7xl lg:text-8xl text-gold mb-8 animate-fade-in-up animation-delay-200">
          Khushu
        </h2>

        {/* Hearts decoration */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in animation-delay-400">
          <Heart className="w-8 h-8 text-rose animate-heartbeat fill-rose" />
          <span className="text-3xl">🎂</span>
          <Heart className="w-8 h-8 text-rose animate-heartbeat fill-rose animation-delay-200" />
        </div>

        {/* Subtitle */}
        <p className="font-elegant text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 italic">
          "On this magical day, the stars aligned to bring the most beautiful soul into this world. 
          Today, we celebrate you — your love, your light, and everything that makes you so incredibly special."
        </p>

        {/* Sparkles */}
        <div className="flex justify-center gap-2 mt-8 animate-fade-in animation-delay-800">
          <Sparkles className="w-6 h-6 text-gold animate-sparkle" />
          <span className="text-2xl">💕</span>
          <Sparkles className="w-6 h-6 text-gold animate-sparkle animation-delay-400" />
        </div>
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center animate-fade-in">
        <p className="font-elegant text-foreground/60 text-sm">
          Use the navigation buttons below or arrow keys
        </p>
        <span className="text-2xl">💕</span>
      </div>
    </section>
  );
};

export default HeroSection;
