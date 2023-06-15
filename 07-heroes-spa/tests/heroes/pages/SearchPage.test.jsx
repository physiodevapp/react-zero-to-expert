import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('testing <SearchPage/>', () => { 
  test('should show component correctly', () => { 
    const { container } = render(
      <MemoryRouter >
        <SearchPage/>
      </MemoryRouter>
    )  
    // screen.debug()

    expect(container).toMatchSnapshot()
  });

  test('should show Batman and input with query param value', () => { 
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage/>
      </MemoryRouter>
    )  
    // screen.debug()
    const input = screen.getByRole('textbox')
    const img = screen.getByRole('img')

    expect(input.value).toBe('batman')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
  })

  test('should keep hidden Search a hero div', () => { 
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage/>
      </MemoryRouter>
    )  
    const searchHeroDiv = screen.getByLabelText('search-hero')

    expect(searchHeroDiv.style.display).toBe('none')
  })
})