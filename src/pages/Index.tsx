import FloatingHearts from '@/components/FloatingHearts';
import FloatingPetals from '@/components/FloatingPetals';
import HeroSection from '@/components/HeroSection';
import LoveMessageSection from '@/components/LoveMessageSection';
import PhotoGallery from '@/components/PhotoGallery';
import TimelineSection from '@/components/TimelineSection';
import QuotesSection from '@/components/QuotesSection';
import BirthdayCelebration from '@/components/BirthdayCelebration';
import FinalLoveNote from '@/components/FinalLoveNote';

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background floating elements */}
      <FloatingHearts />
      <FloatingPetals />

      {/* Main sections */}
      <HeroSection />
      <LoveMessageSection />
      <PhotoGallery />
      <TimelineSection />
      <QuotesSection />
      <BirthdayCelebration />
      <FinalLoveNote />
    </main>
  );
};

export default Index;
