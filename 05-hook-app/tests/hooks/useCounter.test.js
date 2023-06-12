import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";
import { act } from "react-dom/test-utils";

describe("test useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should return initial counter value 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("should return current incremented value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("should return current decremented value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("should reset counter value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset()
    });
    
    expect(result.current.counter).toBe(100)
  });

});
