import { makeAutoObservable } from 'mobx'
import { LoginResponse } from '../types/Auth'

class UserStore {
  user: LoginResponse
  constructor() {
    makeAutoObservable(this)
  }
  setUser = (user: LoginResponse) => {
    this.user = user
  }
}

export default new UserStore()
