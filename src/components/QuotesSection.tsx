import { Heart, Quote } from 'lucide-react';

const quotes = [
  {
    id: 1,
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher"
  },
  {
    id: 2,
    text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    author: "Maya Angelou"
  },
  {
    id: 3,
    text: "I love you not only for what you are, but for what I am when I am with you.",
    author: "Elizabeth Barrett Browning"
  },
];

const QuotesSection = () => {
  return (
    <section className="py-24 px-4 gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 left-12 text-4xl opacity-40 animate-float">💕</div>
      <div className="absolute top-20 right-8 text-3xl opacity-30 animate-float-slow">✨</div>
      <div className="absolute bottom-16 left-8 text-3xl opacity-35 animate-float animation-delay-400">🌹</div>
      <div className="absolute bottom-12 right-16 text-4xl opacity-40 animate-float-slow animation-delay-600">🌸</div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">💝</span>
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-dark mb-4">
            Words of Love
          </h2>
          <p className="font-elegant text-lg text-muted-foreground italic">
            Beautiful quotes that speak to my heart
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <Heart className="w-4 h-4 text-rose fill-rose" />
          </div>
        </div>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={quote.id}
              className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-romantic hover:shadow-glow transition-all duration-300 hover:-translate-y-2 relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <Quote className="w-10 h-10 text-rose fill-rose-light/50 rotate-180" />
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 text-2xl opacity-60 group-hover:animate-heartbeat">💕</div>

              {/* Quote text */}
              <blockquote className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 pt-4 italic">
                "{quote.text}"
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-2 justify-center">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-light to-transparent" />
                <span className="font-cursive text-xl text-rose-dark">{quote.author}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-light to-transparent" />
              </footer>

              {/* Bottom decoration */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-xl">🌹</div>
            </div>
          ))}
        </div>

        {/* Additional romantic message */}
        <div className="text-center mt-16 bg-background/60 backdrop-blur-sm rounded-2xl p-8 shadow-romantic">
          <p className="font-cursive text-3xl md:text-4xl text-rose-dark mb-4">
            "You are my favorite notification"
          </p>
          <p className="font-elegant text-lg text-muted-foreground italic">
            Every message from you makes my heart skip a beat 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
