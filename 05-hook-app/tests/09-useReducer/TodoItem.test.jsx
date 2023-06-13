import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/09-useReducer/TodoItem";

describe("testing <TodoItem /> component", () => {
  const todo = {
    id: 0,
    description: "Piedra del Alma",
    done: false,
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  test("should return pending todo", () => {
    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    // screen.debug()
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should return todo completed", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    // screen.debug()
    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should fire onclick event", () => {
    render(
      <TodoItem
        todo={todo}
        onRemoveTodo={onRemoveTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    screen.debug();
    const spanElement = screen.getByLabelText("span");

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should fire delete button click event", () => {
    render(<TodoItem todo={todo} onRemoveTodo={onRemoveTodoMock} />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    fireEvent.click(deleteButton);

    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id)
  });
});
