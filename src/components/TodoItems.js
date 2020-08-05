import React from 'react';

import Todo from './Todo';
import List from '@material-ui/core/List';


const TodoItems = ({todos, toggleComplete, removeTodo}) => {
  return (
    <List>
      {
        todos.map((todo, i) => 
          <Todo toggleComplete={toggleComplete} removeTodo={removeTodo} key={i} todo={todo} />
        )
      }
    </List>
  );
}

export default TodoItems;