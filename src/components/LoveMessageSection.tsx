import { Heart } from 'lucide-react';

const LoveMessageSection = () => {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Decorative flowers */}
      <div className="absolute top-8 left-8 text-4xl opacity-40 animate-float">🌷</div>
      <div className="absolute top-16 right-12 text-3xl opacity-30 animate-float-slow">🌹</div>
      <div className="absolute bottom-12 left-16 text-3xl opacity-35 animate-float animation-delay-400">🌸</div>
      <div className="absolute bottom-8 right-8 text-4xl opacity-40 animate-float-slow animation-delay-600">💐</div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">💌</span>
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-dark mb-4">
            A Letter of Love
          </h2>
          <div className="flex justify-center gap-2">
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <Heart className="w-5 h-5 text-rose fill-rose" />
          </div>
        </div>

        {/* Love message card */}
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic relative">
          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 text-3xl">🌹</div>
          <div className="absolute -top-4 -right-4 text-3xl">🌹</div>
          <div className="absolute -bottom-4 -left-4 text-3xl">🌹</div>
          <div className="absolute -bottom-4 -right-4 text-3xl">🌹</div>

          <div className="font-elegant text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
            <p className="first-letter:text-5xl first-letter:font-cursive first-letter:text-rose first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              My dearest Khushu, on this beautiful day that marks another year of your wonderful life, 
              I want you to know just how much you mean to me. You are the sunshine that brightens my 
              darkest days and the gentle breeze that calms my restless heart.
            </p>

            <p>
              Every moment spent with you feels like a precious gift. Your smile has the power to 
              light up the entire room, and your laughter is the sweetest melody I have ever heard. 
              You have filled my life with so much love, joy, and happiness that words can never 
              truly express how grateful I am to have you.
            </p>

            <p>
              On your special day, I wish you all the happiness in the world. May your dreams take 
              flight, may your heart always be filled with love, and may every moment bring you 
              the joy you so richly deserve. You are not just a year older today — you are a year 
              more beautiful, a year more amazing, and a year more loved.
            </p>

            <p className="text-center font-cursive text-2xl md:text-3xl text-rose-dark pt-4">
              Happy Birthday, my love! 🎂💕
            </p>
          </div>
        </div>

        {/* Floating hearts below */}
        <div className="flex justify-center gap-6 mt-8">
          <span className="text-3xl animate-float">💕</span>
          <span className="text-4xl animate-float animation-delay-200">❤️</span>
          <span className="text-3xl animate-float animation-delay-400">💕</span>
        </div>
      </div>
    </section>
  );
};

export default LoveMessageSection;
