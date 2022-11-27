import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";


interface TodoItemProps {
    serial: number
    todo: {
        userId: number
        id: number
        title: string
        completed: boolean
    }
}
const TodoItem: FC <TodoItemProps> = (props) => {
    console.log (props.todo);
    
    return (
        <Flex rounded={'xl'} bg={"gray.300"} gap={3} p={3}> 
        <Checkbox isChecked={props.todo.completed} />
        <Text> <Text as='span' color={'blackAlpha.300'}> {props.serial} </Text> {props.todo.title} </Text>
        </Flex>
 )
}

export default TodoItem