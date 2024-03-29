import Image, { StaticImageData } from 'next/image';

interface PhotoCardProps {
  image: StaticImageData;
  children: JSX.Element;
  id?: string;
  option: string;
}

const PhotoCard = ({ image, children, option, id }: PhotoCardProps) => {
  return (
    <section
      className="w-full relative min-h-[390px] md:min-h-[750px] lg:h-screen"
      id={id}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col z-[1] bg-gradient-to-b ${
          option === 'Main'
            ? 'from-[#64a0d8] via-[#bddcfa]/50 to-white dark:from-[#192734] dark:via-[#181a1b]/60 dark:to-[#0c0d0e]'
            : 'from-white via-[#687887]/75 to-[#294056] dark:from-[#0c0d0e] dark:via-[#101214]/50 dark:to-[#11171d]'
        }`}
      >
        {children}
      </div>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt="Header Photo"
        priority
      />
    </section>
  );
};

export default PhotoCard;
