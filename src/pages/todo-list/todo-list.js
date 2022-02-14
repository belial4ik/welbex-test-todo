import React, { useState, useEffect } from 'react'
import { getTodoList } from '../../services/todoService'
import classes from './todo-list.module.css'

const TodoList = () => {
  const [ value, setValue  ] = useState('')
  const [todos, setTodos] = useState([])
  const [ visible, setVisible ] = useState(9)
  useEffect(() => {
    getTodoList().then(res => setTodos(res.data))
  }, [])

  const loadMore = () => {
    setVisible(visible + 9)
  }

  const handleChange = e => {
    setValue(e.target.value)
  }

  const deleteItem = (id) => {
    const newItem = [...todos]
    const res = newItem.filter((item) => {
      return item.id !== id
    })
    setTodos(res)
  }

  const switchHandler = id => {
    const newItem = [...todos]
    newItem.filter(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
    })
    setTodos(newItem)
  }

  const addButton = () => {
    const item = {
      userId: 11,
      id: 201 + Math.floor(Math.random() * 1000),
      title: value,
      completed: false
    }
    const newItem = [...todos, item]
    setTodos(newItem)
    setValue('')
  }

  return (
    <>
      <div className={classes.todoList}>
        <div>
          <input value={value} onChange={handleChange} />
          <button className={classes.addNewItemButton} onClick={addButton}>add</button>
        </div>
      {
        todos
          .slice(0, visible)
          .map(({ id, title, completed }) => (
          <div key={id}>
            <div className={classes.card}>
              <h3 style={{cursor: 'pointer'}} onClick={() => switchHandler(id)} className={completed ? classes.completed : ''}>{title}</h3>
              <button onClick={() => deleteItem(id)}>delete</button>
            </div>
          </div>
        ))
      }
      </div>
      <div style={{textAlign: 'center'}}>
        {
          visible < todos.length && <button className={classes.showMore} onClick={loadMore}>show more</button>
        }
      </div>
    </>
    
  )
}

export default TodoList;