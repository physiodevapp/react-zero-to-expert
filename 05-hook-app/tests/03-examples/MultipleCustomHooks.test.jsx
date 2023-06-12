import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("test <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show current rendered component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      errors: null,
    });

    render(<MultipleCustomHooks />);
    // screen.debug()
    const nextButton = screen.getByRole("button", { name: "Next" });

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));
    expect(nextButton.disabled).toBeTruthy();
  });

  test("should return a Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hello World" }],
      isLoading: false,
      errors: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    screen.debug();

    expect(screen.getByText("Hello World")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test("should return increment quoteIndex", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hello World" }],
      isLoading: false,
      errors: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
