import { User } from '../../@types/users'
import { Status } from '../@types/enum'

type UserState = {
	user: User | null
	status: Status
}

export const initialState: UserState = {
	user: null, 
	status: Status.pending,
}

