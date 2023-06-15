import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/heroes/context";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("testing <Navbar/> component", () => {
  const userContext = {
    logged: true,
    user: {
      id: 0,
      name: "physiodevapp",
    },
    logout: jest.fn(),
  };

  beforeAll(() => jest.clearAllMocks());

  test("should show logged user", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={userContext}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug()
    expect(screen.getAllByText("physiodevapp").length).toBe(1);
  });

  test("should call logout and navigate when click logout", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={userContext}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    const logoutBtn = screen.getByRole("button", { name: "logout" });
    // console.log(logoutBtn.innerHTML)
    fireEvent.click(logoutBtn);

    expect(userContext.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
