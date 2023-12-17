
import React from "react";
import { useState } from "react";

const UsestateHook = () => {

    const [todoItems, setTodoItems] = useState([])
    const [todoItem, setTodoItem] = useState({desc: '', status: ''})

    const submitHandler = () => {
        
        setTodoItems(prev => [...prev, todoItem])
    }

    const inputChangeHandler = (e) => {
        let elTodoItem = {desc: e.target.value, status: 'inProgress'}
        setTodoItem(elTodoItem)
    }

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={inputChangeHandler} />
                    <button type='submit'>submit</button>
                </form>
                {todoItems.map(item => <p>{item.desc}</p>)}
            </div>
        </div>
    )
}

export default UsestateHook