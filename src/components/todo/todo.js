import React from 'react';
//styles
import classes from './todo.module.css';

const Todo = props => {
  const { id, title, switchTitle, completed, removeTodo } = props;
  return (
    <div key={id}>
      <div className={classes.card}>
        <h3 style={{cursor: 'pointer'}} onClick={() => switchTitle(id)} className={completed ? classes.completed : ''}>{title}</h3>
        <button onClick={() => removeTodo(id)}>delete</button>
      </div>
    </div>
  )
};

export default Todo;