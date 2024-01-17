import heroImage from "../assets/home/hero_md.webp";
interface Props {
  imageSide: "left" | "right";
  isImageProminent?: boolean;
}

const ImageAndTextSection = ({ imageSide, isImageProminent }: Props) => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className={`${isImageProminent? 'basis-4/6' : 'basis-2/6'} ${imageSide === 'left' ? 'order-1': 'order-2'}`}>
        <img src={heroImage} alt="random" className={`object-cover w-full h-full ${imageSide === 'left'? 'object-right-top': 'object-left-top'}`} />
      </div>

      <div className={`${isImageProminent? 'basis-2/6' : 'basis-4/6'} ${imageSide === 'left' ? 'order-2': 'order-1'} shrink-0 p-8`}>
        <p className="uppercase text-orange-800 font-medium text-sm my-3">Heading</p>
        <h3 className="text-xl md:text-3xl font-bold my-2">Title</h3>
        <p className="text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptatum.
        </p>
      </div>
    </section>
  );
};

export default ImageAndTextSection;
