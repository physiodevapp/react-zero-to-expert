
import { act, renderHook } from '@testing-library/react'
import { useAuthStore } from '../../src/hooks/useAuthStore'
import { Provider } from 'react-redux'
import { store, authSlice } from '../../src/store/'
import { configureStore } from "@reduxjs/toolkit";
import { initialState } from '../fixtures/authStates'
import { testUserCredentials } from '../fixtures/testUSer'

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

    test('debe recresar los valores por defecto', () => {
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
				StartLogout: expect.any(Function),
				startRegister: expect.any(Function),
			})
    });

		test('startLogin debe de realizar el login correctamente', async () => {
			localStorage.clear();
			const mockStore = getMockStore({...initialState})
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

})