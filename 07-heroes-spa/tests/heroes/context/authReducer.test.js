import { authReducer } from "../../../src/heroes/context/authReducer";
import { types } from "../../../src/heroes/types/types";

describe("testing authReducer function", () => {
  const user = {
    id: 0,
    name: "physiodevapp",
  };
  test("should return initialState", () => {

    expect(authReducer({ logged: false }, {})).toEqual({ logged: false });
  });

  test("should AuthProvider login function set user", () => {
    const action = {
      type: types.login,
      payload: user,
    };

    const state = authReducer({ logged: false }, action);

    // expect(state.logged).toBeTruthy()
    // expect(state.user.name).toBe(`physiodevapp`)
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("should AuthProvider logout function remove user", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, user }, action);

    expect(state).toEqual({
      logged: false
    });
  });
});
