"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Todo = {
  id: number;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: () => void;
  updateTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

let nextId = 4;

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Context" },
    { id: 3, title: "Build Todo App" },
  ]);

  const addTodo = () => {
    setTodos([...todos, { id: nextId++, title: "New Todo" }]);
  };

  const updateTodo = (id: number, title: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, title } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
