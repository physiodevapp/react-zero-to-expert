import { render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Testing <CounterApp/>", () => {
  const initValue = 100;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={initValue} />);

    expect(container).toMatchSnapshot();
  });

  test("should show intial value", () => {
    render(<CounterApp value={initValue} />);

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(initValue.toString());
  });
});
