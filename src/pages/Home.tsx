import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ImageAndTextSection from "../components/ImageAndTextSection";
import FeaturedItemsSection from "../components/FeaturedItemsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ImageAndTextSection imageSide="left" isImageProminent={true} />
      <ImageAndTextSection imageSide="right" isImageProminent={false} />
      <FeaturedItemsSection />
    </div>
  );
};

export default Home;
