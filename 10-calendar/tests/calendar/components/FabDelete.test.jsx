
import { render, screen } from '@testing-library/react'
import { FabDelete } from '../../../src/calendar/components/FabDelete'
import { Provider } from 'react-redux'
import { store } from '../../../src/store'
import { useCalendarStore } from '../../../src/hooks/useCalendarStore'

jest.mock('../../../src/hooks/useCalendarStore')

describe('Pruebas en <FabDelete />', () => {

  test('debe de mostrar el componente correctamente', () => {

		useCalendarStore.mockReturnValue({
			isEventSelected: false
		})

		render(
			<FabDelete/>
		)
		screen.debug()

		const btn = screen.getByLabelText('btn-delete')
		
		expect(btn.classList).toContain('btn')
		expect(btn.classList).toContain('btn-danger')
		expect(btn.classList).toContain('fab-danger')
		expect(btn.style.display).toBe('none')

	})



})