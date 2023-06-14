import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/10-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("testing <MainApp/> component", () => {
  test("should return HomePage component", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should return LoginPage component", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getByText('LoginPage')).toBeTruthy()
  });
});
