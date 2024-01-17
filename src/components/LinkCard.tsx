import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "./LinkCard.css";
import BaseButton from "./BaseButton";

interface LinkCardProps {
  hasBorder?: boolean;
  withBackground?: boolean;
  withHoverButton?: boolean;
}

const LinkCard = ({
  hasBorder,
  withBackground,
  withHoverButton,
}: LinkCardProps) => {
  return (
    <div
      className={`px-6 py-8 md:py-12 group ${
        withBackground ? "link-card--with-background" : "link-card"
      } ${hasBorder && "border-slate-300 border-spacing-1 border"}`}
    >
      <p className="uppercase text-orange-800 font-medium text-sm link-card__category">
        category
      </p>
      <h2 className="text-2xl font-bold mt-[1rem] md:mt-[2rem]">
        Some interesting title with some details
      </h2>
      {withHoverButton ? (
        <div className="mt-[1rem] md:mt-[3rem] opacity-0 group-hover:opacity-100 transition-opacity">
          <BaseButton handleClick={() => console.log("clicked")} children={<span>Base button</span>} />
        </div>
      ) : (
        <ArrowLongRightIcon className="h-[40px] mt-[1rem] md:mt-[3rem]" />
      )}
    </div>
  );
};

export default LinkCard;
