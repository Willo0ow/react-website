import LinkCard from "./LinkCard";

const FeaturedItemsSection = () => {
  return (
    <section className="px-[24px] md:px-[48px] my-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mb-8">Featured Items</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <LinkCard withHoverButton={true} withBackground={true} />
          <LinkCard withHoverButton={true} withBackground={true} />
          <LinkCard withHoverButton={true} withBackground={true} />
          <LinkCard withHoverButton={true} withBackground={true} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSection;
