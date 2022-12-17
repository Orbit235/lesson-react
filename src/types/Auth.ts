import { string } from 'yup'

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  user: { id: number; email: string }
  aceessToken: string
}

export type RegisterResponse = LoginResponse
export type RegisterRequest = LoginRequest
