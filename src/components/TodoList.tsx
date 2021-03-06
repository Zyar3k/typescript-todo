import React from "react";
import { TodoListItems } from "./TodoListItems";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItems
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};
