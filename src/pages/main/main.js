import React from 'react';
//Logo
import logo from '../../assets/Todo-Logo.png';
//styles
import classes from './main.module.css';

const Main = () => {
  return (
    <div className={classes.descriptionPanel}>
      <img src={logo} alt="logo" width={300}/>
      <h2>This is my to-do list app, at the top of the page there is a transition between pages, you can go to the to-do list, where you can add, edit and delete the to-do list</h2>
    </div>
  )
};

export default Main;