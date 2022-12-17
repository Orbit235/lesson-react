import axios from 'axios'
import { Todo } from '../types/todo'

export const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export class TodoApi {
  static getTodos = (userId: number) => {
    return api.get('/todos', {
      params: {
        userId,
      },
    })
  }

  static addTodo = (todo: Todo) => {
    return api.post('/todos', todo)
  }

  static deleteTodo = (id: number) => {
    return api.delete(`/todos/${id}`)
  }
  static setChecekdTodo = (id: number, todo: Todo) => {
    return api.put(`/todos/${id}`, todo)
  }
}
