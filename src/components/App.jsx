import React, { useState } from "react";
import ToDoList from "./ToDoList";
import InputArea from "./InputArea";

function App() {

    
    const [items, setItems] = useState([])

    

    function handleChange1(inputText) {
        setItems(prevValue => {
            return [...prevValue, inputText];
        })
    }

    function deleteItem(id){
        setItems((prevValue) => {
            return prevValue.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea 
            addItem={handleChange1}
            />
            <div>
                <ul>
                    {items.map((item, index) => (
                        <ToDoList 
                        key={index}
                        id={index}
                        text={item}
                        onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
