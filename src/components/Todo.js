import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = props => {
  const {id, name, complete} = props.todo;
  const {toggleComplete, removeTodo} = props;
  const labelId = `checkbox-list-label-${id}`;

  const textStyle = {
    textDecoration: complete ? 'line-through' : 'none'
  };

  return (
    <ListItem key={id} role="Todo item" dense button onClick={_ => toggleComplete(id)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={complete}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} style={textStyle} primary={name} />

      <ListItemSecondaryAction onClick={_ => removeTodo(id)}>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;