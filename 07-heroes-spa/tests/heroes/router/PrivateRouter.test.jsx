import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/heroes/context"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { PrivateRouter } from "../../../src/router/PrivateRouter"

describe('testing <PrivateRouter/> component', () => { 
  const user = {
    id: 0,
    name: 'physiodevapp',
  }

  test('should show children if authenticated', () => { 
    const userContext = {
      logged: true,
      user
    }
    Storage.prototype.setItem = jest.fn()

    render(
      <AuthContext.Provider value={userContext}>
        <MemoryRouter initialEntries={['/dc']}>
          <Routes>
            <Route path="login" element={
              <h1>Public route</h1>
            }/>
            <Route path="dc" element={
              <PrivateRouter>
                <h1>DC route</h1>
              </PrivateRouter>
            }/>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    // screen.debug();

    expect(screen.getByText('DC route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc')
  })  
})