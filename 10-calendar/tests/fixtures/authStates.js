export const initialState = {
	status: 'checkin', // authenticated, not-authenticated,
	user: {},
	errorMessage: undefined,
}

export const authenticatedState = {
	status: 'authenticated', // authenticated, not-authenticated,
	user: {
		uid: 'abc',
		name: 'physiodevapp'
	},
	errorMessage: undefined,
}

export const notAuthenticatedState = {
	status: 'not-authenticated', // authenticated, not-authenticated,
	user: {},
	errorMessage: undefined,
}