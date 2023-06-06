import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Prueba de useFetchGifs", () => {
  test("should return isLoading true and no gifs", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
});

describe("Prueba de useFetchGifs", () => {
  test("should return gifs array and isLoading false", async() => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0),
      {
        timeout: 10000
      }
    )

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  });
});