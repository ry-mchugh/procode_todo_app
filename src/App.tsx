import React from "react";
import TodoForm from "./components/TodoForm";
import { Container, Typography, Box } from "@material-ui/core";

const App: React.FC = () => {
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
      </Box>
    </Container>
  )
};

export default App;