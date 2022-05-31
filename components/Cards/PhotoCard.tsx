import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import useStore from '../../helpers/store';

import classes from '../../styles/Cards/PhotoCard.module.css';

interface Props {
  image: StaticImageData;
  children: JSX.Element;
  option: string;
}

const PhotoCard: FC<Props> = ({ image, children, option }) => {
  const { theme } = useStore();
  return (
    <section className={classes.container}>
      <div
        className={
          option === 'Main'
            ? classes.content
            : `${classes.content} ${classes['sub-content']}`
        }
      >
        {children}
      </div>
      <Image src={image} layout="fill" alt="Header Photo" />
    </section>
  );
};

export default PhotoCard;
