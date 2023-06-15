import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/heroes/context";
import { AppRouter } from "../../../src/router/AppRouter";

describe("testing <AppRouter/> component", () => {
  test("should go to login if not authenticated", () => {
    const userContext = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={userContext}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug()
    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test("should show Marvel component IF authenticated", () => {
    const userContext = {
      logged: true,
      user: {
        id: 0,
        name: "physiodevapp",
      },
    };

    render(
      <AuthContext.Provider value={userContext}>
        <MemoryRouter initialEntries={["/login"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText("physiodevapp")).toBeTruthy();
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
