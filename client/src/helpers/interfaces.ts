import uuid from "uuid";

export interface Todo {
    text: string;
    id: string;
    completed: boolean;
}

export class TodoItem {
    text;
    id;
    completed;
    constructor(text: string, completed?: boolean) {
        this.text = text;
        this.id = uuid.v4();
        this.completed = completed || false;
    }
}

export interface TodoProps {
    todo: Todo;
    deleteTodo: Function;
}
