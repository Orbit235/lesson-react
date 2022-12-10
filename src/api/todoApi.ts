import axios from "axios";
import { Todo } from "../types/todo";

export const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export class TodoApi {
    static getTodos = () => {
        return api.get('/todos') 
    }

    static addTodo = (todo: Todo) => {
      return api.post('/todos', todo) 
    }

    static deleteTodo = (id: number) => {
      return api.delete(`/todos/${id}`) 
    }
  }