import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {

    const { todos } = useContext(TodoContext);
    //load auth context
    const {isAuthenticated} = useContext(AuthContext)
    return (
        <div className="todo-list">
            <TodoForm/>
            {isAuthenticated ? (<ul>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id}/>
                ))}
            </ul>) : <h1 style={{textAlign: 'center'}}>not authorized</h1>}
            
        </div>
    )
}

export default Todos;
