import React from 'react'
import classes from './main.module.css'
import logo from '../../assets/Todo-Logo.png'

const Main = () => {
  return (
    <div className={classes.desriptionPanel}>
      <img src={logo} alt="img" width={300}/>
      <div>
        <h2>This is my to-do list app, at the top of the page there is a transition between pages, you can go to the to-do list, where you can add, edit and delete the to-do list</h2>
      </div>
    </div>
  )
}

export default Main