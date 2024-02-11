import { initialState } from './users.type'
import { Status } from '../@types/enum'
import { fetchUsers } from './getUsers'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../../@types/users'

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setFavoriteUsers: (state, action: PayloadAction<User>) => {
			const user = action.payload;
			const index = state.favoriteUsers.findIndex((userId) => userId === user.id);
			if (index !== -1) {
				state.favoriteUsers = state.favoriteUsers.filter((userId) => userId !== user.id);
			} else {
				state.favoriteUsers.push(user.id);
			}

			localStorage.setItem('favoriteUsers', JSON.stringify(state.favoriteUsers));
		},
		clearFavoriteUsers: (state) => {
			state.favoriteUsers = [];
			localStorage.removeItem('favoriteUsers');
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = Status.pending
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				const usersData = action.payload.data;
				state.isFull = usersData.length === 0;
				if (!state.isFull) {
					state.users = state.users.concat(usersData);
					state.page++;
				}
				state.status = Status.fulfilled;
			})
			.addCase(fetchUsers.rejected, state => {
				state.status = Status.rejected
			})
	}
})

export default usersSlice.reducer

export const { setFavoriteUsers, clearFavoriteUsers } = usersSlice.actions

