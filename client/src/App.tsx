import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import { Todo, TodoItem } from "./helpers/interfaces";
import Button from "@material-ui/core/Button";

const App: React.FC = () => {
    const [textValue, setTextValue] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleSubmit = (): void => {
        if (textValue === "") return;
        const newTodo = new TodoItem(textValue);
        setTextValue("");
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: string): void => {
        setTodos(todos.filter((x: Todo) => x.id !== id));
    };

    return (
        <div>
            <div style={{ margin: "20% 0 20px" }}>
                <input type="text" value={textValue} onChange={e => setTextValue(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    +
                </Button>
            </div>
            {todos.map(todo => {
                return <TodoCard key={todo.id} deleteTodo={deleteTodo} todo={todo} />;
            })}
        </div>
    );
};

export default App;
