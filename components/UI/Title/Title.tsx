import { FC } from 'react';

import ScrollReveal from '../../Cards/ScrollReveal/ScrollReveal';

interface Props {
  title: string;
}

const Title: FC<Props> = ({ title }) => {
  return (
    <ScrollReveal className="flex flex-col items-center w-full">
      <>
        <h2 className="my-[1px] text-center pb-1 text-xl font-Raleway uppercase font-normal text-dark-blue dark:text-light-grey">
          {title}
        </h2>
        <div className="h-[2px] w-1/5 max-w-[90px] bg-gradient-to-r from-accent to-accent-alt"></div>
      </>
    </ScrollReveal>
  );
};

export default Title;
