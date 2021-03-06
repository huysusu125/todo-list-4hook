import React, { createContext, useEffect, useState } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const childContext = props.children;

    const [todos, setTodos] = useState([
        { id: 1, title: "việc 1" },
        { id: 2, title: "việc 2" },
        { id: 3, title: "việc 3" }
    ],)
    
    useEffect(() => {
        const todos = localStorage.getItem('todos')
        if (todos) setTodos(JSON.parse(todos))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


    const addTodo = todo => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const todoContextData = {
        todos: todos,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            {childContext}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
