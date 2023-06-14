import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/10-useContext/LoginPage";
import { UserContext } from "../../src/10-useContext/context/UserContext";

describe("testing <LoginPage />", () => {
  const user = {
    id: 0,
    name: "physiodevapp",
    email: "physiodevapp2example.com",
  };

  test("should return component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    // screen.debug();
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
  });

  test("should call setUser when firing click event", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const buttonElement = screen.getByRole("button", { name: "Set user" });

    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'physiodevapp', email: 'physiodevapp@example.org'})
  });
});
