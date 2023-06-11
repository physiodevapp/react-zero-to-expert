import React from "react";
import { useForm } from '../hooks'

function TodoAdd({ onNewTodo }) {

  const { description, onChange, onReset } = useForm({
    description: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim()) {
      onNewTodo({
        id: new Date().getTime(),
        description,
        done: false,
      });

      onReset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What to do"
        className="form-control"
        type="text"
        name="description"
        onChange={onChange}
        value={description}
      />

      <button className="btn btn-outline-primary mt-1" type="submit">
        Submit
      </button>
    </form>
  );
}

export { TodoAdd };
