import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './App.module.css';
import Main from './pages/main/main'
import TodoList from './pages/todo-list/todo-list'

function App() {
  return (
    <div className="App">
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to='/'>Main</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? styles.selected : ''} to='todos'>Todo List</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
