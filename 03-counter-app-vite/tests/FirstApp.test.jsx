import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing <FirstApp/>>", () => {
  test("should match with snapshot", () => {
    const title = "Hola, soy Goku";
    const { container } = render(<FirstApp title={title} />);
    // console.log(container)

    expect(container).toMatchSnapshot();
  });

  test("should show h1 title", () => {

    const title = 'Hola, soy Goku';
    const { container, getByText } = render(<FirstApp title={title} />);

    expect( getByText(title) ).toBeTruthy();

    const h1 = container.querySelector('h1');
    // console.log(h1.innerHTML)

    // expect(h1.innerHTML).toBe(title); // DOM strict equal
    expect(h1.innerHTML).toContain(title);

  });
});
