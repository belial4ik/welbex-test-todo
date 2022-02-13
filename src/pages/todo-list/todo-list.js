import React, { useState, useEffect } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  return (
    <>
      {
        todos.map(({id,title, completed}) => (
          <div key={id}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{completed ? 'сделано' : "не сделано"}</p>
          </div>
        ))
      }
    </>
  )
}

export default TodoList;