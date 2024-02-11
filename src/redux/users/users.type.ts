import { User } from '../../@types/users'
import { Status } from '../@types/enum'

type UsersState = {
	users: User[]
	status: Status
	isFull: boolean
	page: number
	favoriteUsers: number[]
}

const favoriteUsersFromStorage = localStorage.getItem('favoriteUsers');
const defaultFavoriteUsers: number[] = favoriteUsersFromStorage ? JSON.parse(favoriteUsersFromStorage) : [];

export const initialState: UsersState = {
	users: [],
	status: Status.pending,
	isFull: false,
	page: 1,
	favoriteUsers: defaultFavoriteUsers,
}

