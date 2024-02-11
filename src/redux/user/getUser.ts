import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserInfoResponse } from '../../@types/user'

export const fetchUser = createAsyncThunk<UserInfoResponse, string>(
	'user/fetchUsers',
	async function (id, { rejectWithValue }) {
		try {
			const response = await axios.get(`https://reqres.in/api/users/${id}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Server error.')
		}
	}
)
