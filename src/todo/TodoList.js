import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from 'react-router-dom'
import data from '../models/Todo.json'
import { Container } from 'bootstrap'
const TodoList = () => {

    const [todos, setTodos] = useState(data);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        let todos = localStorage.getItem('todos');
        todos = JSON.parse(todos);
        setTodos(todos);
    }, []);

    useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);
    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: title,
            description: description,
            state: false,
        };
        setTodos([newTodo, ...todos]);
        localStorage.setItem("todos", JSON.stringify(newTodo));
        setTitle("");
        setDescription("")
    }
    // if you wants to add Delete option you can use
    function deleteTodo(id) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id) {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.state = !todo.state;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }


    return (
        <div id="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>Title</h4>
                    <input
                        required
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div xs={12} md={12} >
                    <h4>Description</h4>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <button type="submit">Add Todo</button>
            </form>

            {todos.map((todo) => (
                <div key={todo.id} >{todo.state === false && (
                    <div className="todo">
                        <div className="todo-text">
                            <div>
                                <div >
                                    <input
                                        type="checkbox"
                                        id="state"
                                        checked={todo.state}
                                        onChange={() => toggleComplete(todo.id)}
                                    />
                                    <span>
                                        <Link to={`/list/${todo.id}`}>
                                            <span><h4 >Title :{todo.title}</h4></span>
                                        </Link>
                                        <p className="ml-3">Description :{todo.description}</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="align-left" onClick={() => deleteTodo(todo.id)}> Delete </button>
                            </div>

                        </div>

                    </div>
                )
                }
                </div>))
            }

            {todos.map((todo) => (
                <div key={todo.id}>{todo.state === true && (
                    <div className="todo">
                        <div className="todo-text">
                            <div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="state"
                                        checked={todo.state}
                                        onChange={() => toggleComplete(todo.id)}
                                    />
                                </div>
                                <div className="completed">
                                    <Link to={`/list/${todo.id}`}>
                                        <span><h4 >Title :{todo.title}</h4></span>
                                    </Link>
                                </div>
                                <p className="ml-3">Description :{todo.description}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteTodo(todo.id)}> Delete </button>
                            </div>

                        </div>

                    </div>
                )}
                </div>))
            }
        </div>
    )
}

export default TodoList;