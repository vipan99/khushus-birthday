import { useState, useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import FloatingPetals from '@/components/FloatingPetals';
import HeroSection from '@/components/HeroSection';
import LoveMessageSection from '@/components/LoveMessageSection';
import PhotoGallery from '@/components/PhotoGallery';
import TimelineSection from '@/components/TimelineSection';
import QuotesSection from '@/components/QuotesSection';
import BirthdayCelebration from '@/components/BirthdayCelebration';
import FinalLoveNote from '@/components/FinalLoveNote';
import VideoSection from '@/components/VideoSection';
import SectionNavigation from '@/components/SectionNavigation';
import BackgroundMusic from '@/components/BackgroundMusic';

const sections = [
  { name: 'Welcome', component: HeroSection },
  { name: 'A Letter of Love', component: LoveMessageSection },
  { name: 'Our Beautiful Moments', component: PhotoGallery },
  { name: 'Our Story of Love', component: TimelineSection },
  { name: 'Words of Love', component: QuotesSection },
  { name: 'Make a Wish!', component: BirthdayCelebration },
  { name: 'A Special Video', component: VideoSection },
  { name: 'My Final Note to You', component: FinalLoveNote },
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (currentSection < sections.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSection((prev) => prev - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isTransitioning]);

  // Reset transition lock after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background floating elements */}
      <FloatingHearts />
      <FloatingPetals />
      
      {/* Background music player */}
      <BackgroundMusic />

      {/* Current section with animation */}
      <div
        key={currentSection}
        className="animate-fade-in"
      >
        <CurrentSectionComponent />
      </div>

      {/* Navigation */}
      <SectionNavigation
        currentSection={currentSection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        sectionNames={sections.map((s) => s.name)}
      />
    </main>
  );
};

export default Index;
