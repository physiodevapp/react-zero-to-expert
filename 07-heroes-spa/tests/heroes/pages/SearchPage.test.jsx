import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () =>({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate
}))

describe("testing <SearchPage/>", () => {

  beforeAll(() => jest.clearAllMocks())

  test("should show component correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug()

    expect(container).toMatchSnapshot();
  });

  test("should show Batman and input with query param value", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug()
    const input = screen.getByRole("textbox");
    const img = screen.getByRole("img");

    expect(input.value).toBe("batman");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
  });

  test("should keep hidden Search a hero div", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const searchHeroDiv = screen.getByLabelText("search-hero");

    expect(searchHeroDiv.style.display).toBe("none");
  });

  test("should display error div if no hero found", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const searchNoHeroDiv = screen.getByLabelText("search-no-hero");

    expect(searchNoHeroDiv.style.display).not.toBe("none");
  });

  test("should call navigate on input change", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    const form = screen.getByRole('form')

    fireEvent.change(input, { target: { name: 'searchText', value: "batman123" } } );
    fireEvent.submit(form)

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=batman123")
  });
});
