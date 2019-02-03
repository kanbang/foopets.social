// taken from egghead.io

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) {
			return undefined
		}
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
	}
}

export const saveState = (state) => {
	try {
		const serialializedState = JSON.stringify(state)
		localStorage.setItem('state', serialializedState)
	} catch (err) {
		// ...
	}
}