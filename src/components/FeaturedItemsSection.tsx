import LinkCard from "./LinkCard";

const FeaturedItemsSection = () => {
  const cards = Array.from({ length: 6 }, (_, index) => index + 1);
  return (
    <section className="px-[24px] md:px-[48px] my-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mb-8">Featured Items</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {cards.map((num) => (
            <LinkCard withHoverButton={true} withBackground={true} key={num} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItemsSection;
