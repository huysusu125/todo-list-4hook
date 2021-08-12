import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    

    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;
    const { addTodo } = useContext(TodoContext);

    const [title, setTitle] = useState('');
    const onTitle = (e) => {
        setTitle(e.target.value);
    }

    const addTodoItem = (e) => {
        if (title !== '') {
            addTodo({
                id: 4,
                title,
            })
            setTitle('');
        }

    }

    return (
        <div style={style}>
            <form>
                <input type="text" name="title" placeholder="Nhập công việc" onChange={onTitle} value={title} />
                <button type="button" onClick={addTodoItem}>Thêm</button>
            </form>
        </div>
    )
}

export default TodoForm
