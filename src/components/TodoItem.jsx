import React from 'react'

const TodoItem = (props) => {

    const todo = props.todo;
    const deleteTodo = props.deleteTodoFunc;

    const style = {
        background: 'rgb(240, 240, 240)',
        color: 'black',
    }

    return (
        <div>
            <li onClick={() => deleteTodo(todo.id)} style={style}>{todo.title}</li>
        </div>
    )
}

export default TodoItem;
