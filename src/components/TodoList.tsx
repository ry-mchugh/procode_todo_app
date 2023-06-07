import React from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../features/todo/todoSlice";
import { toggleTodo, deleteTodo } from "../features/todo/todoSlice";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface TodoListProps {
  todos: Todo[];
}
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} button>
          <ListItemIcon>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
          </ListItemIcon>
          <ListItemText primary={todo.text} />
          <DeleteIcon onClick={() => handleDeleteTodo(todo.id)} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;