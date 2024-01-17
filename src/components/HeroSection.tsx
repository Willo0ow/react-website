import "./HeroSection.css";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
  title?: string;
  fitContentHeight?: boolean;
}

const HeroSection = ({ title, fitContentHeight }: HeroSectionProps) => {
  return (
    <section
      className={`home-hero text-white grid items-center justify-center py-[8rem] sm:py-[8rem] md:py-[10rem] relative ${
        fitContentHeight ? "md:h-fit" : "md:h-screen"
      }`}
    >
      <div className="max-w-[70%] mx-auto text-center">
        <p className="font-medium text-xl md:text-2xl mb-2 md:mb-4">
          Facilis quae reprehenderit nobis molestias labore.
        </p>
        <h1 className="font-bold text-4xl md:text-6xl">
          {title || "Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
        </h1>
      </div>
      {!fitContentHeight && (
        <ArrowDownCircleIcon className="h-[48px] w-[48px] absolute bottom-3 left-1/2 transform -translate-x-1/2" />
      )}
    </section>
  );
};

export default HeroSection;
