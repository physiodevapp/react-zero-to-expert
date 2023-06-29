import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "../../fixtures/authFixtures";

describe("Testing authSlice", () => {
  test('should return initalState & be "auth"', () => {
    // console.log({authSlice})
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});
    // console.log({state})
    expect(state).toEqual(initialState);
  });

  test("should login", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    // console.log({ state });
    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
    });
  });

  test("should logout without arguments", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    // console.log({state})
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("should logout with arguments", () => {
    const messageError = "This is a testing error";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage: messageError })
    );
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: messageError,
    });
  });

  test('should change status to "checking"', () => {
    const state = authSlice.reducer(initialState, checkingCredentials());
    expect(state.status).toBe('checking')
  });
});
