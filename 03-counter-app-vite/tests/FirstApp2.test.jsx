import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing <FirstApp/>", () => {
  const title = "Hola soy Goku";
  const subtitle = 123;

  test("should match snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('should show "Hola soy Goku"', () => {
    render(<FirstApp title={title} />);
    // screen.debug()
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show title in h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });

  test("should show subtitle by props", () => {

    render(<FirstApp title={title} subtitle={subtitle}/>);

    expect(screen.getAllByText(subtitle).length).toBe(2);

  });
});
