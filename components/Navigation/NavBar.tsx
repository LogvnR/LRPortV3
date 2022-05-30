import { FC } from 'react';

import { Fade as Hamburger } from 'hamburger-react';
import classes from '../../styles/Navigation/NavBar.module.css';

const NavBar: FC = () => {
  return (
    <nav className={classes.container}>
      <h4>lr</h4>
      <Hamburger
        size={24}
        color="white"
        direction="right"
        duration={0.3}
        easing="ease-in"
        label="Show menu"
        hideOutline={false}
        rounded
      />
    </nav>
  );
};

export default NavBar;
