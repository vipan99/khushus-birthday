import { Heart, Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-4 gradient-romantic relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-8 text-4xl opacity-40 animate-float">🎬</div>
      <div className="absolute top-20 right-16 text-3xl opacity-30 animate-float-slow">✨</div>
      <div className="absolute bottom-16 left-12 text-3xl opacity-35 animate-float animation-delay-400">💕</div>
      <div className="absolute bottom-12 right-8 text-4xl opacity-40 animate-float-slow animation-delay-600">🌹</div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">🎥</span>
          <h2 className="font-cursive text-5xl md:text-6xl text-rose-dark mb-4">
            A Special Video for You
          </h2>
          <p className="font-elegant text-lg text-muted-foreground italic">
            Watch this with love in your heart
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <Heart className="w-5 h-5 text-rose fill-rose" />
            <Heart className="w-4 h-4 text-rose fill-rose" />
          </div>
        </div>

        {/* Video container */}
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-romantic relative">
          {/* Corner decorations */}
          <div className="absolute -top-3 -left-3 text-2xl">💕</div>
          <div className="absolute -top-3 -right-3 text-2xl">💕</div>
          <div className="absolute -bottom-3 -left-3 text-2xl">🌹</div>
          <div className="absolute -bottom-3 -right-3 text-2xl">🌹</div>

          {/* Video placeholder - Replace src with your video URL */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-rose-dark/10 relative group">
            {/* Replace this video src with your actual video URL */}
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=450&fit=crop"
            >
              {/* Add your video source here */}
              {/* Example: <source src="/your-video.mp4" type="video/mp4" /> */}
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Overlay when no video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-rose-dark/20 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full bg-rose/80 flex items-center justify-center mb-4 shadow-glow">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <p className="font-elegant text-white text-lg">
                Add your special video here
              </p>
              <p className="font-elegant text-white/70 text-sm mt-2">
                Replace the video source in the code
              </p>
            </div>
          </div>

          {/* Video caption */}
          <p className="text-center mt-6 font-cursive text-2xl text-rose-dark">
            Every moment with you is precious 💕
          </p>
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

export default VideoSection;
