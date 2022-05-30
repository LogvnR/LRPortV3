import { FC } from 'react';
import PhotoCard from './Cards/PhotoCard';
import NavBar from './Navigation/NavBar';

import photo1 from '../assets/backgrounds/lightMode1.jpg';

const Jumbotron: FC = () => {
  return (
    <PhotoCard image={photo1} option="Main">
      <>
        <NavBar />
        <div>Hello</div>
      </>
    </PhotoCard>
  );
};

export default Jumbotron;
