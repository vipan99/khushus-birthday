import { Heart } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    title: "The First Hello",
    date: "Our Beginning",
    description: "The moment our eyes met and my world changed forever. Little did I know, you would become my everything.",
    emoji: "💫",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    title: "First Adventure Together",
    date: "Our Journey",
    description: "Every adventure with you became a treasure. Together, we discovered that the best journeys are the ones we share.",
    emoji: "🌟",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Building Dreams",
    date: "Growing Together",
    description: "With every passing day, our love grew stronger. We built dreams together, one beautiful moment at a time.",
    emoji: "💕",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Your Special Day",
    date: "1 January 2026",
    description: "Today we celebrate the most beautiful soul. Happy Birthday, my love! Here's to forever with you.",
    emoji: "🎂",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop"
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 right-8 text-4xl opacity-30 animate-float">✨</div>
      <div className="absolute bottom-20 left-8 text-3xl opacity-40 animate-float-slow">🌹</div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">📖</span>
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-dark mb-4">
            Our Story of Love
          </h2>
          <p className="font-elegant text-lg text-muted-foreground italic">
            A timeline of precious memories
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <Heart className="w-4 h-4 text-rose fill-rose" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-light via-rose to-rose-light transform -translate-x-1/2 hidden md:block" />

          {/* Timeline events */}
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:py-8`}
              >
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="bg-background rounded-2xl p-6 shadow-romantic hover:shadow-glow transition-shadow duration-300">
                    <span className="text-4xl mb-3 block">{event.emoji}</span>
                    <h3 className="font-cursive text-3xl text-rose-dark mb-2">{event.title}</h3>
                    <p className="font-elegant text-gold font-semibold mb-3">{event.date}</p>
                    <p className="font-elegant text-foreground/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-rose border-4 border-background shadow-glow z-10 animate-pulse-glow" />
                </div>

                {/* Image */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="relative group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full max-w-xs mx-auto aspect-square object-cover rounded-2xl shadow-romantic group-hover:shadow-glow transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -top-2 -right-2 text-2xl animate-float">💕</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-12 font-elegant text-muted-foreground text-sm italic">
          ✨ Replace these milestones with your actual memories ✨
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
