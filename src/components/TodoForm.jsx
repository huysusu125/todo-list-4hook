import React, {useState} from 'react'


const TodoForm = (props) => {
    const addTodo = props.addTodoFunc;
    
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
        <div>
            <form>
                <input type="text" name="title" placeholder="Nhập công việc" onChange={onTitle} value={title} />
                <button type="button" onClick={addTodoItem}>Thêm</button>
            </form>
        </div>
    )
}

export default TodoForm
