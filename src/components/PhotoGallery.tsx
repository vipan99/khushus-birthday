import { useState } from 'react';
import { Heart, X } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=500&fit=crop",
    caption: "Beautiful moments together"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=500&fit=crop",
    caption: "Adventures with you"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=500&fit=crop",
    caption: "Laughter and joy"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop",
    caption: "Cherished memories"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&h=500&fit=crop",
    caption: "Forever grateful"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1501238295340-c810d3c156d2?w=400&h=500&fit=crop",
    caption: "Love grows stronger"
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-24 px-4 gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-8 text-3xl opacity-40">📸</div>
      <div className="absolute top-20 right-16 text-4xl opacity-30 animate-float">🌸</div>
      <div className="absolute bottom-16 left-12 text-3xl opacity-35 animate-float-slow">💕</div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">📷</span>
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-dark mb-4">
            Our Beautiful Moments
          </h2>
          <p className="font-elegant text-lg text-muted-foreground italic">
            Every picture tells a story of love
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <Heart className="w-4 h-4 text-rose fill-rose" />
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden shadow-romantic cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-elegant text-lg text-white text-center">
                    {photo.caption}
                  </p>
                </div>

                {/* Heart icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-8 h-8 text-white fill-white/50 animate-heartbeat" />
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Note about replacing photos */}
        <p className="text-center mt-8 font-elegant text-muted-foreground text-sm italic">
          ✨ Replace these placeholder images with your actual photos ✨
        </p>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <p className="text-center mt-4 font-elegant text-xl text-white">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
