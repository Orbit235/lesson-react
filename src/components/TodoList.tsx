import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { TodoApi } from "../api/todoApi"
import TodoItem from "./TodoItem"
const TodoList = () => {
    const [ todos, setTodos ] = useState([])
    const loadData = () => {
        TodoApi.getTodos()
            .then((response) => {
                    console.log(response.data)
                    setTodos(response.data.map((item) => ({...item, isDeleted: false})))
            })
            .catch ((err) => {console.log(err);
            })
    }

const deleteItem = (i: number) => {
    console.log ('deleting', i);
    setTodos(todos.map ((item, idx) => ({...item,
        isDeleted: idx == i ? true : item.isDeleted})))
}



useEffect(() => {
    loadData()
}, [])

    return (
    <Flex flexDirection= {'column'} gap={5}>
        {
            todos.map((item, idx) => {
                return <TodoItem todo={item} serial={idx+1} key={idx} deleteItem={() => deleteItem(idx)}/>
            })
        }
       </Flex>
)
    }
export default TodoList