import React from 'react';
import { Route, Routes } from 'react-router-dom';

//coustom components
import Header from './components/header';
import Main from './pages/main';
import TodoList from './pages/todo-list';
import Error from './components/error';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/todos' element={<TodoList />} />
        //error route 
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
};

export default App;