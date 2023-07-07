
import { authSlice, onLogin, onLogout, clearErrorMessage } from '../../../src/store/auth/authSlice'
import { initialState, authenticatedState } from '../../fixtures/authStates'
import { testUserCredencials } from '../../fixtures/testUser'

describe('Pruebas en authSlice', () => {
	test('debe regresar el estado inicial', () => {

		expect(authSlice.getInitialState()).toEqual(initialState)

	})

	test('debe de realizar un login', () => {

		const state = authSlice.reducer(initialState, onLogin(testUserCredencials))
		
		expect( state ).toEqual({
			status: 'authenticated',
			user: testUserCredencials,
			errorMessage: undefined,
		})

	})

	test('debe de realizar el logout', () => {
		
		const state = authSlice.reducer(authenticatedState, onLogout())
		expect( state ).toEqua({
			status: 'not-authenticated',
			user: {},
			errorMessage: undefined
		})

	})

	test('debe de realizar el logout', () => {
		
		const errorMessage = 'Invalid credentials'
		const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
		expect( state ).toEqua({
			status: 'not-authenticated',
			user: {},
			errorMessage: errorMessage
		})

	})

	test('debe de limpiar el mensaje de error', () => {
		const errorMessage = 'Invalid credentials'
		const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
		const newState = authSlice.reducer(state, clearErrorMessage())

		expect(newState.errorMessage).toBe(undefined)
	})

})