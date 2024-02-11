import { User } from "./users"

export interface UserInfoResponse {
  data: User
  support: Support
}

export interface Support {
  url: string
  text: string
}
