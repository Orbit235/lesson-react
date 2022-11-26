import { useEffect, useState } from "react"
import { TodoApi } from "../api/todoApi"

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

    return <></>
}

export default TodoList