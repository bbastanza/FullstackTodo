import React from "react";
import { TodoProps } from "./../helpers/interfaces";

const TodoCard: React.FC<TodoProps> = ({ todo, deleteTodo }: TodoProps) => {
    console.log(todo);
    return (
        <div style={{ display: "flex" }}>
            <h3>{todo.text}</h3>
            <h3>{todo.id}</h3>
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
        </div>
    );
};

export default TodoCard;
