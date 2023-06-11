import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

function TodoApp() {

  const { todos, todosCounter, todosPendingCounter, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo()

  return (
    <>
      <h2>
        {/* TodoApp: {todosCounter()} <small>pendientes: {todosPendingCounter()}</small> */}
        TodoApp: {todosCounter} <small>pendientes: {todosPendingCounter}</small>
      </h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            onToggleTodo={handleToggleTodo} 
            onRemoveTodo = { handleRemoveTodo }
          />
        </div>
        <div className="col-5">
          <h2>Agreggate TODO</h2>
          <hr />
          <TodoAdd 
            onNewTodo={handleNewTodo}
          />
        </div>
      </div>
    </>
  );
}

export { TodoApp };
