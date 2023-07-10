
import { act, renderHook, waitFor } from '@testing-library/react'
import { useAuthStore } from '../../src/hooks/useAuthStore'
import { Provider } from 'react-redux'
import { authSlice } from '../../src/store/'
import { configureStore } from "@reduxjs/toolkit";
import { initialState, notAuthenticatedState } from '../fixtures/authStates'
import { testUserCredentials } from '../fixtures/testUser'
import { calendarApi } from '../../src/api'

const getMockStore = (initialState) => {
	return configureStore({
		reducer: {
			auth: authSlice.reducer,
		},
		preLoadedState: {
			auth: {...initialState}
		}
	})
}

describe('Probar useAuthStore', () => {

	beforeEach(() => {
		localStorage.clear()
	})

	test('debe regresar los valores por defecto', () => {
		const mockStore = getMockStore({...initialState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		expect(result.current).toEqual({
			status: 'checkin',
			user: {},
			errorMessage: undefined,
			checkAuthToken: expect.any(Function),
			startLogin: expect.any(Function),
			startLogout: expect.any(Function),
			startRegister: expect.any(Function),
		})
	});

	test('startLogin debe de realizar el login correctamente', async () => {
		const mockStore = getMockStore({...notAuthenticatedState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		await act(async () => {
			await result.current.startLogin( testUserCredentials )
		})

		const { errorMessage, status, user } = result.current

		expect({errorMessage, status, user}).toEqual({
			status: 'authenticated',
			user: {
				uid: '64a2b3b57958fd4de202b76c',
				name: 'user1',
			},
			errorMessage: undefined,
		})

		expect(localStorage.getItem('token')).toEqual(expect.any(String))
		expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String))

	})

	test('startLogin debe fallar la autenticación',async () => {
		const mockStore = getMockStore({...notAuthenticatedState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		await act(async () => {
			await result.current.startLogin( {
				email: 'some@user.org',
				password: '12gfde'
			})
		})

		const { errorMessage, status, user } = result.current
		expect(localStorage.getItem('token')).toBe(null)

		expect({errorMessage, status, user}).toEqual({
			status: 'not-authenticated',
			user: {},
			errorMessage: expect.any(String),
		})

		await waitFor(
			() => expect(result.current.errorMessage).toBe(undefined)
		)

	})

	test('startRegister debe de crear un usuario', async() => {
		const newUser = {
			email: 'some@user.org',
			password: '12gfde',
			name: 'user sample'
		}
		const mockStore = getMockStore({...notAuthenticatedState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
			data: {
				ok: true,
				uid: 'Some Id',
				name: 'user sample',
				token: 'Some token,'
			}
		})

		await act(async () => {
			await result.current.startRegister( newUser)
		})

		const { errorMessage, status, user } = result.current
		expect({errorMessage, status, user}).toEqual({
			status: 'authenticated',
			user: {
				name: 'user sample',
				uid: 'Some Id'
			},
			errorMessage: undefined,
		})

		spy.mockRestore()

	})

	test('startRegister debe fallar la creación', async () => {

		const mockStore = getMockStore({...notAuthenticatedState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		await act(async () => {
			await result.current.startRegister( testUserCredentials)
		})

		const { errorMessage, status, user } = result.current

		expect({errorMessage, status, user}).toEqual({
			status: 'not-authenticated',
			user: {},
			errorMessage: 'This user already exists',
		})

	})

	test('checkAuthToken debe fallar si no hay token', async() => {
		const mockStore = getMockStore({...initialState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		await act(async () => {
			await result.current.checkAuthToken()
		})

		const { errorMessage, status, user } = result.current

		expect({errorMessage, status, user}).toEqual({
			status: 'not-authenticated',
			user: {},
			errorMessage: undefined,
		})

	})

	test('checkAuthToken debe autenticar usuario si hay token', async() => {
		
		const { data } = await calendarApi.post('/auth', testUserCredentials)
		localStorage.setItem('token', data.token)

		const mockStore = getMockStore({...initialState})
		const { result } = renderHook(() => useAuthStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		await act(async () => {
			await result.current.checkAuthToken()
		})

		const { errorMessage, status, user } = result.current

		expect({errorMessage, status, user}).toEqual({
			status: 'authenticated',
			user: {
				uid: '64a2b3b57958fd4de202b76c',
    		name: 'user1',
			},
			errorMessage: undefined,
		})
	});


})