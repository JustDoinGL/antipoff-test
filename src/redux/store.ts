import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import usersSlice from './users/usersSlice'
import registrationSlice from './registration/registrationSlice'

const store = configureStore({
	reducer: {
		usersSlice,
		userSlice,
		registrationSlice,
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch