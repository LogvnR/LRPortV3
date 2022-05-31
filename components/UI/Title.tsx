import { FC } from 'react';

import classes from '../../styles/UI/Title.module.css';

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div className={classes.border}></div>
    </div>
  );
};

export default Title;
