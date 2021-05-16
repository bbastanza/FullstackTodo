import React from "react";
import { TodoProps } from "./../helpers/interfaces";
import Button from "@material-ui/core/Button";

const TodoCard: React.FC<TodoProps> = ({ todo, deleteTodo }: TodoProps) => {
    return (
        <div
            style={{
                display: "flex",
                background: "#666",
                height: 30,
                justifyContent: "space-between",
                width: 500,
                padding: "8px 0 7px",
                borderRadius: 3,
                alignItems: "center",
                margin: "5px 30px",
                boxShadow: "2px 2px 2px #101010",
            }}>
            <h3 style={{ paddingLeft: 30 }}>{todo.text}</h3>
            <Button size="large" variant="contained" color="secondary" onClick={() => deleteTodo(todo.id)}>
                &times;
            </Button>
        </div>
    );
};

export default TodoCard;
