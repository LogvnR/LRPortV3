import { FC, useState } from 'react';

import { Fade as Hamburger } from 'hamburger-react';
import classes from '../../styles/Navigation/NavBar.module.css';

const NavBar: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className={classes.container}>
      <h4>lr</h4>
      {menuToggle && (
        <div className={classes.menu}>
          <p>projects</p>
          <p>contact</p>
          <p>theme</p>
        </div>
      )}
      <div className={classes.hamburger}>
        <Hamburger
          toggled={menuToggle}
          toggle={setMenuToggle}
          size={24}
          color="white"
          direction="right"
          duration={0.3}
          easing="ease-in"
          label="Show menu"
          hideOutline={false}
          rounded
        />
      </div>
    </nav>
  );
};

export default NavBar;
