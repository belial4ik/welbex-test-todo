import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodoList } from '../../services/todoService';
//styles
import classes from './todo-list.module.css'

//custom components
import Todo from '../../components/todo/todo'

const TodoList = (props) => {
  const { loadMore, visible } = props;
  const [ value, setValue  ] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodoList().then(res => setTodos(res.data));
  }, []);

  const handleChange = e => {
    setValue(e.target.value)
  };
  
  const removeTodo = id => {
    const newItem = [...todos];
    const res = newItem.filter((item) => {
      return item.id !== id;
    })
    setTodos(res);
  };

  const switchTitle = id => {
    const newItem = [...todos];
    newItem.filter(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      }
    })
    setTodos(newItem);
  };

  const addNewItem = () => {
    const item = {
      userId: 11,
      id: 201 + Math.floor(Math.random() * 1000),
      title: value,
      completed: false
    }
    const newItem = [...todos, item];
    setTodos(newItem);
    setValue('');
  };

  return (
    <>
      <div className={classes.todoList}>
        <div>
          <input placeholder='your todo' value={value} onChange={handleChange} />
          <button className={classes.addNewItemButton} onClick={addNewItem}>add</button>
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
              removeTodo={removeTodo}
              switchTitle={switchTitle}
            />
        ))
      };
      </div>
      <div style={{textAlign: 'center'}}>
        {
          visible < todos.length && <button className={classes.showMore} onClick={loadMore}>show more</button>
        }
      </div>
    </>
    
  )
};

const mapStateToProps = state => {
  const { visible } = state.visible;
  return {
    visible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMore: () => dispatch({ type: "GET_VISIBLE", payload: 10})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);