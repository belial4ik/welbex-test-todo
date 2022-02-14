import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTodoList } from '../../services/todoService'
//styles
import classes from './todo-list.module.css'

//custom components
import Todo from '../../components/todo/todo'

const TodoList = (props) => {
  const { loadMoreButton, visible } = props

  const [ value, setValue  ] = useState('')
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodoList().then(res => setTodos(res.data))
  }, [])

  const handleChange = e => {
    setValue(e.target.value)
  }
  
  const deleteTodoButton = (id) => {
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
            <Todo
              id={id}
              title={title}
              completed={completed}
              key={id}
              deleteTodoButton={deleteTodoButton}
              switchHandler={switchHandler}
            />
        ))
      }
      </div>
      <div style={{textAlign: 'center'}}>
        {
          visible < todos.length && <button className={classes.showMore} onClick={loadMoreButton}>show more</button>
        }
      </div>
    </>
    
  )
}

const mapStateToProps = state => {
  return {
    visible : state.visible.visible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMoreButton: () => dispatch({ type: "GET_VISIBLE", payload: 9 })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);