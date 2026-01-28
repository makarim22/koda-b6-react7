import { useRef, useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const inputElement = useRef();

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

  const handleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputElement} />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleCheck(todo.id)}
              />
              <span
                className={`ml-3 text-lg ${
                  todo.isCompleted
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
