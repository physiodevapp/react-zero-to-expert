import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("should change text value", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });
    // screen.debug()

    expect(input.value).toBe("Saitama");
  });

  test("should call onAddCategory if input is not empty", () => {
    const inputValue = 'Saitama';
    const onAddCategory = jest.fn()

    render(<AddCategory onAddCategory={onAddCategory}/>);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue)
  });

  test('should not call onAddCategory if input is empty', () => { 
    // const inputValue = ''
    const onAddCategory = jest.fn();
    
    render(<AddCategory onAddCategory={onAddCategory}/>)
    const form = screen.getByRole('form')
    // const input = screen.getByRole('textbox');

    // fireEvent.input(input, {target: {value: inputValue}})
    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled()

   })

});
