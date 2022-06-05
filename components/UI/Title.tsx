import { FC } from 'react';

import classes from '../../styles/UI/Title.module.css';
import ScrollReveal from '../Cards/ScrollReveal';

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
    <ScrollReveal className={classes.container}>
      <>
        <h2>{title}</h2>
        <div className={classes.border}></div>
      </>
    </ScrollReveal>
  );
};

export default Title;
