import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import { Todo, TodoItem } from "./helpers/interfaces";

const App: React.FC = () => {
    const [state, setState] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setState(value);
    };
    const handleSubmit = () => {
        const newTodo = new TodoItem(state);
        setState("");
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: string): void => {
        setTodos(
            // eslint-disable-next-line
            todos.filter((todo: Todo) => {
                if (todo.id !== id) return todo;
            })
        );
    };

    return (
        <div>
            <h1>Todo</h1>
            <input type="text" value={state} onChange={e => handleChange(e)} />
            <button onClick={handleSubmit}>Add</button>
            {todos.map(todo => {
                return <TodoCard deleteTodo={deleteTodo} todo={todo} />;
            })}
        </div>
    );
};

export default App;
