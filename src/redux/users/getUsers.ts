import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { InfoUsers } from '../../@types/users'

type fetchUsersArguments = {
	page: number
	per_page: number
}

export const fetchUsers = createAsyncThunk<InfoUsers, fetchUsersArguments>(
	'users/fetchUsers',
	async function ({ page = 1, per_page }, { rejectWithValue }) {
		try {
			const response = await axios.get(`https://reqres.in/api/users?per_page=${per_page}&page=${page}`)
			return response.data
		} catch (error) {
			return rejectWithValue('Server error.')
		}
	}
)
