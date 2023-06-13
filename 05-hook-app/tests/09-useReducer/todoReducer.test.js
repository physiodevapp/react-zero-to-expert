import { todoReducer } from "../../src/09-useReducer/todoReducer";

describe("testing todoReducer hook", () => {
  const initialState = [
    {
      id: 0,
      description: "Hello World",
      done: false,
    },
  ];

  test("should return default state", () => {
    const result = todoReducer(initialState, {});
    // console.log(result)

    expect(result).toBe(initialState);
  });

  test("should add new todo item", () => {
    const addAction = {
      type: "[TODO] Add Todo",
      payload: {
        id: 1,
        description: "Hello Country",
        done: false,
      },
    };
    const result = todoReducer(initialState, addAction);

    expect(result.length).toBe(2);
    expect(result).toContain(addAction.payload);
  });

  test("should remove todo item", () => {
    const addAction = {
      type: "[TODO] Add Todo",
      payload: {
        id: 1,
        description: "Hello Country",
        done: false,
      },
    };
    const removeAction = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const firstState = todoReducer(initialState, addAction);
    const resultState = todoReducer(firstState, removeAction);

    expect(resultState).toEqual(initialState);
  });

  test("should toggle done prop to true", () => {
    const toogleAction = {
      type: "[TODO] Toggle Todo",
      payload: 0,
    };
    const resultState = todoReducer(initialState, toogleAction);

    expect(resultState[0].done).toBeTruthy()
  });
});
