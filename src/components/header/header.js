import React from 'react'
import classes from './header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul className={classes.navList}>
        <li>
          <NavLink className={(navData) => navData.isActive ? classes.selected : ''} to='/'>Main</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? classes.selected : ''} to='todos'>Todo List</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header