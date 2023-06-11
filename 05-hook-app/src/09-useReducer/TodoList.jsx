import React from "react";
import { TodoItem } from "./TodoItem";

function TodoList({todos, onToggleTodo, onRemoveTodo}) {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} onRemoveTodo={onRemoveTodo}/>
        ))}
      </ul>
    </>
  );
}

export { TodoList };
