import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Container, Typography, Box } from "@material-ui/core";

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const completedTodos = useSelector((state: RootState) => state.todo.completedTodos);

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Box
        border={1}
        borderRadius={8}
        p={4}
        bgcolor="#f4f4f4"
        maxWidth="md"
        margin="auto"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      >
        <Typography variant="h5" align="center" gutterBottom>
          TODO List
        </Typography>
        <Box
          bgcolor="#fff"
          p={2}
          borderRadius={8}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          mb={4}
        >
          <Typography variant="h6" gutterBottom>
            Add a TODO
          </Typography>
          <TodoForm />
        </Box>
        <Box
          bgcolor="#fff"
          p={2}
          borderRadius={8}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
          mb={4}
        >
          <Typography variant="h6" gutterBottom>
            Todo Items
          </Typography>
          <TodoList todos={todos} />
        </Box>
        <Box
          bgcolor="#fff"
          p={2}
          borderRadius={8}
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        >
          <Typography variant="h6" gutterBottom>
            Completed Items
          </Typography>
          <TodoList todos={completedTodos} />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
