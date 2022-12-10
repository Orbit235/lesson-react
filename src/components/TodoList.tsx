import { AddIcon, SmallAddIcon } from '@chakra-ui/icons'
import {
  Flex,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TodoApi } from '../api/todoApi'
import { Todo } from '../types/todo'
import TodoItem from './TodoItem'
const TodoList = () => {
  const [todos, setTodos] = useState([] as Todo[])
  const [newTodo, setNewTodo] = useState('')

  const loadData = () => {
    TodoApi.getTodos()
      .then((response) => {
        console.log(response.data)
        setTodos(response.data.map((item) => ({ ...item, isDeleted: false })))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteItem = (i: number) => {
    console.log('deleting', i)
    setTodos(
      todos.map((item, idx) => ({
        ...item,
        isDeleted: idx == i ? true : item.isDeleted,
      }))
    )
    TodoApi.deleteTodo(i + 1)
  }

  const addItem = (todo: Todo) => {
    console.debug('adding item', todo.title)
    setTodos([
      ...todos,
      {
        userId: 1,
        title: todo.title,
        completed: false,
        isDeleted: false,
      },
    ])
  }

  useEffect(() => {
    if (todos.length == 0) loadData()
  }, [])

  return (
    <Flex flexDirection={'column'} gap={5}>
      <FormControl>
        <InputGroup>
          <Input
            placeholder={'Введите дела'}
            value={newTodo}
            onChange={(event) => {
              setNewTodo(event.target.value)
            }}
          />
          <InputRightElement>
            <Button
              variant={'ghost'}
              onClick={() => {
                const newTodoItem: Todo = {
                  userId: 1,
                  title: newTodo,
                  completed: false,
                  isDeleted: false,
                }
                TodoApi.addTodo(newTodoItem)
                addItem(newTodoItem)
                setNewTodo('')
              }}
            >
              <AddIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {todos.map((item, idx) => {
        return (
          <TodoItem
            todo={item}
            serial={idx + 1}
            key={idx}
            deleteItem={() => deleteItem(idx)}
          />
        )
      })}
    </Flex>
  )
}
export default TodoList
