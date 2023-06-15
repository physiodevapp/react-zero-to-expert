import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/heroes/context";
import { PublicRouter } from "../../../src/router/PublicRouter";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("PrivateRouter test", () => {
  const user = {
    id: 0,
    name: 'physiodevapp',
  }
  test("should return children when no authentication", () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Public route</h1>
        </PublicRouter>
      </AuthContext.Provider>
    )
    // screen.debug();

    expect(screen.getByText('Public route')).toBeTruthy()
  });

  test('should navigate if user is authenticated', () => { 
    const contextValue = {
      logged: true,
      user
    }
    render(
      <AuthContext.Provider value={contextValue}>

        <MemoryRouter initialEntries={['/login']}>

          <Routes>
            <Route path="login" element={
              <PublicRouter>
                <h1>Public route</h1>
              </PublicRouter>
            }
            />
            <Route path="marvel" element={<h1>Marvel route</h1>}/>
          </Routes>

        </MemoryRouter>

      </AuthContext.Provider>
    )
    screen.debug();
  })
});
