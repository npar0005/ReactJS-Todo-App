// React imports
import React, {useState} from 'react';

// Component imports
import Header from './components/templates/Header';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

// Material UI imports
import Container from '@material-ui/core/Container';

// Styling imports
import './App.css';


const App = () => {
  const [todos, setTodos] = useState([{
    id: 0,
    name: 'Buy christmas gifts',
    complete: false 
  },
  {
    id: 1,
    name: 'Take out rubbish',
    complete: true 
  },
  {
    id: 2,
    name: 'Wash car',
    complete: false 
  }]); 

  // Add todo
  const addTodo = name => {
    setTodos([...todos, {id: Math.random(), name, complete: false}]);
  }

  // Remove todo item
  const removeTodo = _id => {
    setTodos(todos.filter(({id}) => _id !== id));
  }

  // Toggle complete of todo item
  const toggleComplete = _id => {
    setTodos(todos.map(({id, name, complete}) => ({
      id,
      name,
      complete: _id === id ? !complete : complete
    })));
  }


  return (
    
    <div className="App">
      <Header heading="Todo"/>
      <Container className="todo-wrapper">
        <AddTodo addTodo={addTodo} label="Your todo "/>
        {todos.length ? 
          <TodoItems 
            todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          /> : <p style={{textAlign: 'center'}}>No todos found</p>
        }
      </Container>
    </div>
  );
}

export default App;
