import { render } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("testing <GifExpertApp/>", () => {
  test("should match snapshot", () => {

    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });
});
