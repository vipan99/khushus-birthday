import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SectionNavigationProps {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  sectionNames: string[];
}

const SectionNavigation = ({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  sectionNames,
}: SectionNavigationProps) => {
  const isFirst = currentSection === 0;
  const isLast = currentSection === totalSections - 1;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      {/* Navigation container */}
      <div className="bg-background/90 backdrop-blur-md rounded-full px-4 py-3 shadow-romantic flex items-center gap-4 border border-rose-light/30">
        {/* Previous button */}
        <Button
          onClick={onPrevious}
          disabled={isFirst}
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 hover:bg-rose-light/30 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-rose-dark" />
        </Button>

        {/* Section indicator */}
        <div className="flex items-center gap-2 px-4">
          {sectionNames.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'w-8 bg-rose'
                  : 'bg-rose-light/50 hover:bg-rose-light'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button
          onClick={onNext}
          disabled={isLast}
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 hover:bg-rose-light/30 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronRight className="w-6 h-6 text-rose-dark" />
        </Button>
      </div>

      {/* Current section name */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-elegant text-rose-dark shadow-romantic">
          {sectionNames[currentSection]}
        </span>
      </div>
    </div>
  );
};

export default SectionNavigation;
