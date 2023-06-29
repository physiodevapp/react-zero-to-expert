import { Provider } from "react-redux";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn()
const mockStartLoginWithEmailPassword = jest.fn()
jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({email, password}) => () => mockStartLoginWithEmailPassword({email, password})
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn)  => fn()
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe("testing LoginPage", () => {

  afterEach(() => jest.clearAllMocks())

  test("should render LoginPage", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("should call startGoogleSignIn onClick", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-btn')
    fireEvent.click(googleBtn)

    expect(mockStartGoogleSignIn).toHaveBeenCalled()
  });

  test('should call startLoginWithEmailPassword on submit form', () => { 
    
    const email = 'physiodevapp@example.org'
    const password = '123456'

    render(<Provider store={store}>
      <MemoryRouter>
        <LoginPage/>
      </MemoryRouter>
    </Provider>)

    const emailField = screen.getByRole('textbox', {name: 'Email'})
    fireEvent.change(emailField, {target: {name: 'email', value: email}})

    const passwordField = screen.getByTestId('password')
    fireEvent.change(passwordField, {target: {name: 'password', value: password}})

    const loginForm = screen.getByLabelText('submit-form')
    fireEvent.submit(loginForm)

    expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
      email,
      password
    })

   })
});
