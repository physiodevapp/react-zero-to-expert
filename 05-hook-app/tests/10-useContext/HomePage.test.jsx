import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/10-useContext/HomePage";
import { UserContext } from "../../src/10-useContext/context/UserContext";

describe("testing <HomePage /> component", () => {
  const user = {
    id: 0,
    name: "physiodevapp",
    email: "physiodevapp@example.com",
  };

  test("should return component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();
    const preElement = screen.getByLabelText("pre");

    expect(preElement.innerHTML).toBe("null");
  });

  test("should return component with user", () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug()
    const preElement = screen.getByLabelText('pre');

    expect(preElement.innerHTML).toContain(user.id.toString());
    expect(preElement.innerHTML).toContain(user.name);
    expect(preElement.innerHTML).toContain(user.email);
  });
});
