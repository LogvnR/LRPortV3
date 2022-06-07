import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import classes from '../../styles/Cards/PhotoCard.module.css';

interface Props {
  image: StaticImageData;
  children: JSX.Element;
  id?: string;
  option: string;
}

const PhotoCard: FC<Props> = ({ image, children, option, id }) => {
  return (
    <section className={classes.container} id={id}>
      <div
        className={
          option === 'Main'
            ? classes.content
            : `${classes.content} ${classes['sub-content']}`
        }
      >
        {children}
      </div>
      <Image src={image} layout="fill" alt="Header Photo" priority />
    </section>
  );
};

export default PhotoCard;
