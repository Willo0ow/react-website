import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <div className="px-6 py-8 md:py-12 border-slate-300 border-spacing-1 border service-card">
        <p className="uppercase text-orange-800 font-medium text-sm service-card__category">category</p>
        <h2 className="text-2xl font-bold mt-[1rem] md:mt-[2rem]">Some interesting title with some details</h2>
        <ArrowLongRightIcon className="h-[40px] mt-[1rem] md:mt-[3rem]" />
    </div>
  )
}

export default ServiceCard