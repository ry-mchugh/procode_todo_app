import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Button, TextField } from "@material-ui/core";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") {
      setError("Please enter a valid TODO item.");
      return; 
    }

    dispatch(addTodo(todoText));
    setTodoText("");
    setError("");
  };

  return (
    <div>
      <TextField
        label="Add a TODO"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add TODO
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TodoForm;