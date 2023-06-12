import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { act } from "react-dom/test-utils";

describe("test useForm custom hook", () => {
  const initialFormData = {
    name: "Fernando",
    email: "fernando@example.org",
  };

  test("should return form arguments", () => {
    const { result } = renderHook(() => useForm(initialFormData));
    // console.log(result.current)

    expect(result.current).toEqual({
      name: initialFormData.name,
      email: initialFormData.email,
      form: initialFormData,
      onChange: expect.any(Function),
      onReset: expect.any(Function),
    })
  });

  test("should return current input changed value", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm());
    const { onChange } = result.current;
    // const target = {name: 'name', value: newValue}
    act(()=> {
      onChange({target: {name: 'name', value: newValue}})
    })
    // console.log(result.current)

    expect(result.current.name).toBe(newValue);
    expect(result.current.form.name).toBe(newValue);
  });

  test('should reset form data', () => { 
    const newValue = 'Juan';
    const  { result } = renderHook(() => useForm(initialFormData))
    const { onChange, onReset } = result.current;

    act(() => {
      onChange({target: {name: 'name', value: newValue}})
      onReset()
    })

    expect(result.current.name).toBe(initialFormData.name);
    expect(result.current.form.name).toBe(initialFormData.name)
  
   })


});
