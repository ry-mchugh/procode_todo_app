import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todo/todoSlice';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

const CompletedList: React.FC = () => {
  const completedTodos = useSelector((state: any) => state.todo.completedTodos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <List>
      {completedTodos.map((todo: any) => (
        <ListItem key={todo.id} button>
          <ListItemIcon>
            <Checkbox
              checked = {todo.completed}
              onChange={() => handleToggleTodo (todo.id)}
            />
          </ListItemIcon>
          <ListItemText primary={todo.text} />
          <DeleteIcon onClick={() => handleDeleteTodo (todo.id)} />
        </ListItem>
      ))}
    </List>
  );
};

export default CompletedList;