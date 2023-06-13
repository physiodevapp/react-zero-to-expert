import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/09-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("testing <TodoApp/>", () => {
  test("should return TodoApp component correctly", () => {
    useTodo.mockReturnValue({
      todos: [
        {id: 0, description: 'Todo #1', done: false},
        {id: 1, description: 'Todo #2', done: true},
      ],
      todosCounter: 2,
      todosPendingCounter: 1,
      handleNewTodo: jest.fn(),
      handleRemoveTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
    });
    render(<TodoApp />);
    screen.debug();

    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
  });
});
