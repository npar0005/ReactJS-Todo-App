import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const formStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const textStyle = {
  flex: '0.97',
}

const AddTodo = props => {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(name.length > 0)
      props.addTodo(name);
    setName("");
  }

  return (
    <form autoComplete="off" style={formStyle} onSubmit={handleSubmit}>
      <TextField 
        style={textStyle}
        id="standard-basic" 
        label={props.label} 
        value={name} 
        onChange={({target: {value}}) => setName(value)}
        />
    </form>
  );
}
export default AddTodo;