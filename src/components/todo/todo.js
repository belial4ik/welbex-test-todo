import React from 'react'
import classes from './todo.module.css'

const Todo = (props) => {
  const { id, title, switchHandler, completed, deleteTodoButton } = props
  return (
    <div key={id}>
      <div className={classes.card}>
        <h3 style={{cursor: 'pointer'}} onClick={() => switchHandler(id)} className={completed ? classes.completed : ''}>{title}</h3>
        <button onClick={() => deleteTodoButton(id)}>delete</button>
      </div>
    </div>
  )
}

export default Todo