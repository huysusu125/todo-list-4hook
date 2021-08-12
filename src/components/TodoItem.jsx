import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'

const TodoItem = (props) => {
    const todo = props.todo;
    const { deleteTodo } = useContext(TodoContext);

    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;
    

    return (
        <div style={style}>
            <li onClick={() => deleteTodo(todo.id)} >{todo.title}</li>
        </div>
    )
}

export default TodoItem
