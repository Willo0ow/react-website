import LinkCard from "./LinkCard";

const ServicesSection = () => {
  const cards = Array.from({ length: 4 }, (_, index) => index + 1);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((num) => (
        <LinkCard hasBorder={true} key={num} />
      ))}
    </section>
  );
};

export default ServicesSection;
