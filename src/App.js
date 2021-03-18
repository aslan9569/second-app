import React from 'react';
import "./styles.css";
import {useState} from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";


function App(props) {

    const [todos, setTodos] = useState(
        [
            {
                text: "Купить бананы",
                favorite: true,
            },
            {
                text: "Продать квартиру",
                favorite: true,
            },
            {
                text: "Выучить уроки по JS",
                favorite: true,
            }
        ]
    );

    const [text, setText] = useState("");



    const deleteTodo = (indexOfRemovingItem) => {
        const filtered = todos.filter((todo, index) => {
            if (index === indexOfRemovingItem) {
                return false;
            } else {
                return true;
            }
        });
        setTodos(filtered);
    };

    const makeFavorite = (i) => {
        const newTodos = todos.map((item, index) => {
            if (i === index) {
                return {
                    ...item,
                    favorite: !item.favorite
                }
            }


        return item ;

        });
        setTodos(newTodos);
    }



    const addTodo = () => {
        setTodos([{
            text: text,
            favorite: false
        }, ...todos
        ]);

setText("")

    }


    return (
        <div className="app">
            <Header />
            <Form text={text} setText={setText} addTodo={addTodo} />
            <Todos todos={todos} makeFavorite={makeFavorite} deleteTodos={deleteTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;