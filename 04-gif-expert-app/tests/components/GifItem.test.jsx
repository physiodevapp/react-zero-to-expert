const { render, screen } = require("@testing-library/react");
const { default: GifItem } = require("../../src/components/GifItem");

describe("testing <GiftItem/>", () => {
  const title = "Goku";
  const url = "https://www.goku.org/";
  
  test("should match component snapshot", () => {
    const {container} = render(<GifItem title={title} url={url}/>);

    expect(container).toMatchSnapshot()
  });

  test('should show url image and alt', () => { 

    render(<GifItem title={title} url={url}/>);

    const {src, alt} = screen.getByRole('img')

    expect(src).toBe(url);
    expect(alt).toBe(title)
   });

   test('should show title ', () => { 
    
    render(<GifItem title={title} url={url}/>);

    expect(screen.getByText(title)).toBeTruthy()

    })
});