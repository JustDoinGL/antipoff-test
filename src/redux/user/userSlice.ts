import { initialState } from './user.type'
import { Status } from '../@types/enum'
import { fetchUser } from './getUser'
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUser.pending, state => {
				state.status = Status.pending
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.user = action.payload.data;
				state.status = Status.fulfilled;
			})
			.addCase(fetchUser.rejected, state => {
				state.status = Status.rejected
			})
	}
})

export default userSlice.reducer


