import React from "react";
import { useRef, useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]); 
  const inputElement = useRef();

  const addCheckbox = () => {
    inputElement.current.setIsChecked(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: inputElement.current.value,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    inputElement.current.value = "";
  };

  <button onClick={addCheckbox}> </button>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputElement} />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted}/>
            <span>{todo.text}</span>
          </li>
        ))}
      </div>
    </div>
  );
}
