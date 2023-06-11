import React from "react";

function TodoItem({ todo, onRemoveTodo, onToggleTodo }) {

  const handleToggleClick = () => {
    onToggleTodo(todo.id)
  }

  const handleButtonClick = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span onClick={handleToggleClick} className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}>{todo.description}</span>
      <button onClick={handleButtonClick} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}

export { TodoItem };
