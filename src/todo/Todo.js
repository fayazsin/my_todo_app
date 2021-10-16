import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Container } from 'bootstrap'


const Todo = () => {

    const history = useHistory();
    const { id } = useParams();
    const [todoitem, setTodoitem] = useState([]);
    const [todos, setTodos] = useState();



    useEffect(() => {
        let todos = localStorage.getItem('todos');
        todos = JSON.parse(todos);
        setTodos(todos);
        const todo = todos.filter((item) =>
            item.id == id
        );
        setTodoitem([...todo][0])
    }, [])

    const goPrevious = () => {
        history.goBack();
    };

    return (
        <div className="container my-5">
            <h3 >Title :{todoitem.title}</h3>
            <p >Description :{todoitem.description}</p>
            <button onClick={() => goPrevious()} > GoBack</button>
        </div>
    )
}

export default Todo;
