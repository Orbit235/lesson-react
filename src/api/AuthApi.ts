import { LoginRequest, LoginResponse, RegisterRequest } from '../types/Auth'
import { api } from './todoApi'

export class AuthApi {
  static login = (user: LoginRequest) => {
    return api.post<LoginResponse>('/login', {
      email: user.email,
      password: user.password,
    })
  }
  static register = (user: RegisterRequest) => {
    return api.post<RegisterRequest>('/login', {
      email: user.email,
      password: user.password,
    })
  }
}
