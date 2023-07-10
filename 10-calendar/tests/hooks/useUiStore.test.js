
import { act, renderHook } from '@testing-library/react'
import { useUiStore } from '../../src/hooks/useUiStore'
import { Provider } from 'react-redux'
import { uiSlice } from '../../src/store'
import { configureStore } from "@reduxjs/toolkit";

const getMockStore = (initialState) => {
	return configureStore({
		reducer: {
			ui: uiSlice.reducer,
		},
		preloadedState: {
			ui: {...initialState}
		}
	})
}

describe('Pruebas de useUiStore' , () => {
	test('debe de regresar los valores por defecto', () => {

		const mockStore = getMockStore(
			{
				isDateModalOpen: false,
			}
		)
		const { result } = renderHook(() => useUiStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		expect(result.current).toEqual({
			isDateModalOpen: false,
			closeDateModal: expect.any(Function),
			openDateModal: expect.any(Function),
			toggleDateModal: expect.any(Function),
		})
	});

	test('openDateModal debe de colocar true en el isDateModalOpen', () => {

		const mockStore = getMockStore({isDateModalOpen: false})
		const { result } = renderHook(() => useUiStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		const { isDateModalOpen, openDateModal } = result.current

		act(() => {
			openDateModal()
		})

		expect(result.current.isDateModalOpen).toBeTruthy()

	});

	test('closeDateModal debe de colocar false en isDateModalOpen', () => {
		const mockStore = getMockStore({isDateModalOpen: true})
		const { result } = renderHook(() => useUiStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		const { closeDateModal } = result.current

		act(() => {
			closeDateModal()
		})

		expect(result.current.isDateModalOpen).toBeFalsy()				
	});

	test('toggleDateModal debe cambiar el estado respectivamente', () => {
		const mockStore = getMockStore({isDateModalOpen: true})
		const { result } = renderHook(() => useUiStore(), {
			wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
		})

		const { toggleDateModal } = result.current
	
		act(() => {
			toggleDateModal()
		})

		expect(result.current.isDateModalOpen).toBeFalsy()	
		
		// Note #1: Sería necesario volver a importar la función
		// const { toggleDateModal2 } = result.current

		act(() => {
			result.current.toggleDateModal() // Note #1
		})
		expect(result.current.isDateModalOpen).toBeTruthy()				

	});
})