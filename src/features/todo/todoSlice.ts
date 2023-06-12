import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  completedTodos: Todo[];
}

const initialState: TodoState = {
  todos: [],
  completedTodos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      if (todo.completed) {
        state.completedTodos.push(todo);
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload
        );
      } else {
        state.todos.push(todo);
        state.completedTodos = state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
    }
  },
  deleteTodo: (state, action: PayloadAction<number>) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    state.completedTodos = state.completedTodos.filter(
      (todo) => todo.id !== action.payload
    );
  },
},
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
