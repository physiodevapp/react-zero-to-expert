import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Testing <CounterApp/>", () => {
  const initValue = 10;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={initValue} />);

    expect(container).toMatchSnapshot();
  });

  test("should show intial value", () => {
    render(<CounterApp value={initValue} />);

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      initValue.toString()
    );
  });

  test("should increment count by 1", () => {
    render(<CounterApp value={initValue} />);

    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText("11")).toBeTruthy();
  });

  test("should decrement count by 1", () => {
    render(<CounterApp value={initValue} />);

    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText("9")).toBeTruthy();
  });

  test('should works reset button', () => { 
    render(<CounterApp value={initValue}/>);

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

    expect(screen.getByText(initValue)).toBeTruthy()

   })

});
