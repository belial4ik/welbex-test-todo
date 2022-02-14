import React from 'react';
import { NavLink } from 'react-router-dom';

//styles
import classes from './header.module.css';

const Header = () => {
  const activeClass = navData => navData.isActive ? classes.selected : '';
  return (
    <nav>
      <ul className={classes.navList}>
        <li>
          <NavLink className={activeClass} to='/'>Main</NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to='todos'>Todo List</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;