import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItems: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label
        className={todo.complete ? "todo-row completed" : "todo-row"}
      ></label>
      <input
        type='checkbox'
        checked={todo.complete}
        onChange={() => toggleComplete(todo)}
      />
      {todo.text}
    </li>
  );
};
