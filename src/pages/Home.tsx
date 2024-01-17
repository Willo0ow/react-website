import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import ImageAndTextSection from "../components/ImageAndTextSection";
import FeaturedItemsSection from "../components/FeaturedItemsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ImageAndTextSection imageSide="left" isImageProminent={true} />
      <ImageAndTextSection imageSide="right" isImageProminent={false} />
      <FeaturedItemsSection />
    </div>
  );
};

export default Home;
