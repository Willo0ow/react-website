import ServiceCard from "../ServiceCard"
const Services = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
    </section>
  )
}

export default Services