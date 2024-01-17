import LinkCard from "../LinkCard"
const Services = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4">
        <LinkCard hasBorder={true} />
        <LinkCard hasBorder={true} />
        <LinkCard hasBorder={true} />
        <LinkCard hasBorder={true} />
    </section>
  )
}

export default Services