import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/todoReducer"; 

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

  const [todos, todoDispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos]);

  // const todosCounter = () => {
  //   return todos.length
  // } 

  // const todosPendingCounter = () => {
  //   return todos.filter((todo) => todo.done).length
  // }

  const handleNewTodo = (todo)=> {
    const addAction = {
      type: '[TODO] Add Todo',
      payload: todo,
    }

    todoDispatch(addAction);
  }

  const handleRemoveTodo = (id) => {
    const removeAction = {
      type: '[TODO] Remove Todo',
      payload: id,
    }

    todoDispatch(removeAction);
  }

  const handleToggleTodo = (id) => {
    const toggleAction = {
      type: '[TODO] Toggle Todo',
      payload: id,
    }

    todoDispatch(toggleAction)
  }  

  return {
    todos,
    todosCounter: todos.length,
    todosPendingCounter: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
}
