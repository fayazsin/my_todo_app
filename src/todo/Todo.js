import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import data from '../models/Todo.json'

const Todo = () => {

    const history = useHistory();
    const { id } = useParams();
    const [todoitem, setTodoitem] = useState([]);


    useEffect(() => {
        const todo = data.filter((item) => {
            return item.id == id
        });

        setTodoitem([...todo][0])
        console.log(todo);

    }, [])

    const goPrevious = () => {
        history.goBack();
    };

    return (
        <div className="container my-5">
            <h3 >Title :{todoitem.title}</h3>
            <p >Description :{todoitem.description}</p>
            <button onClick={goPrevious} > GoBack</button>
        </div>
    )
}

export default Todo;
