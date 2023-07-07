
import { calendarSlice, onSetActiveEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, events } from '../../../src/store/calendar/calendarSlice'
import { calendarWithEventsState, calendarWithActiveEventState, initialState } from '../../fixtures/calendarStates'

describe('Pruebas en calendarSlice', () => {
	test('debe regresar el estado por defecto', () => {

		const state = calendarSlice.getInitialState()

		expect(state).toEqual( initialState )

	})

	test('onSetActiveEvent debe activar el evento', () => {

		const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]))

		expect(state.activeEvent).toEqual(events[0])

	})

	test('onAddNewEvent debe de agregar el evento', () => {

		const newEvent = {
			id: '3',
			start: new Date('2020-10-21 13:00:00'),
			end: addHours(new Date('2020-10-21 15:00:00'), 2),
			title: "Fernando's birthday!!",
			notes: "Buy the cake",
		}

		const state = calendarSlice.reducer(calendarWithEventsState, onAddEvent(newEvent))

		expect(state.events).toEqual([...events, newEvent])

	})

	test('onUpdateEvent debe de actualizar el evento', () => {

		const updatedEvent = {
			id: '3',
			start: new Date('2020-10-21 13:00:00'),
			end: addHours(new Date('2020-10-21 15:00:00'), 2),
			title: "Fernando's birthday updated",
			notes: "Buy the cake",
		}

		const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent))

		expect(state.events).toContain(updatedEvent)

	})

	test('onDeleteEvent debe de borrar el evento activo', () => {

		const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent())

		expect(state.activeEvent).toBe(null)
		expect(state.events).not().contain(calendarWithActiveEventState.activeEvent)
	})

	test('onLoadEvents debe de establecer los eventos', () => {
		
		const state = calendarSlice.reducer(initialState, onLoadEvents(events))
		expect(stats.isLoadingEvents).toBeFalsy()
		expect(state.events).toEqual(events)

		const newState = calendarSlice.reducer(state, onLoadEvents(events))
		expect(state.events.length).toBe(events.length)
	})

	test('onLogoutCalendar debe de limpiar el estado', () => {

		const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar())

		expect( state ).toEqual(initialState)
		
	})

})