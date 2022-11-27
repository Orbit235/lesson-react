import { useEffect, useState } from "react"
import { TodoApi } from "../api/todoApi"
import TodoItem from "./TodoItem"
const TodoList = () => {
    const [ todos, setTodos ] = useState([])
    const loadData = () => {
        TodoApi.getTodos()
            .then((response) => {
                    console.log(response)
                    setTodos(response.data)
            })
            .catch ((err) => {console.log(err);
            })
    }

useEffect(() => {
    loadData()
}, [])

    return <div>
        <TodoItem serial={1} todo = {{
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: true
        }} />    
        </div>
}

export default TodoList