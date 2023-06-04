import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Testing <FirstApp/>>", () => {
  // test("should match with snapshot", () => {
  //   const title = "Hola, soy Goku";
  //   const { container } = render(<FirstApp title={title} />);
  //   // console.log(container)

  //   expect(container).toMatchSnapshot();
  // });

  test("should show h1 title", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    expect(getByTestId("test-title").innerHTML).toBe(title);

    // const h1 = container.querySelector('h1');
    // console.log(h1.innerHTML)
    // expect(h1.innerHTML).toBe(title); // DOM strict equal
    // expect(h1.innerHTML).toContain(title);
  });

  test("should show subtitle with props", () => {
    const title = "Hola, soy Goku";
    const subtitle = "Soy un subtitulo";

    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
