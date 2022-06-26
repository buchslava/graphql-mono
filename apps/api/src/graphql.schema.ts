
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum TodoStatus {
    "new" = "new",
    canceled = "canceled",
    done = "done"
}

export enum TaskPriority {
    low = "low",
    normal = "normal",
    high = "high"
}

export class TodoInput {
    taskId: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class TaskInput {
    title?: Nullable<string>;
    priority?: Nullable<string>;
}

export class Todo {
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
    status?: Nullable<TodoStatus>;
}

export class Task {
    id: string;
    title?: Nullable<string>;
    todos: Todo[];
    priority?: Nullable<TaskPriority>;
}

export abstract class IQuery {
    abstract getTasksList(): Task[] | Promise<Task[]>;

    abstract getTodosList(taskId: string): Todo[] | Promise<Todo[]>;
}

export abstract class IMutation {
    abstract task(): Nullable<TaskMutations> | Promise<Nullable<TaskMutations>>;

    abstract todo(): Nullable<TodoMutations> | Promise<Nullable<TodoMutations>>;
}

export class TaskResponse {
    task?: Nullable<Task>;
    error?: Nullable<string>;
}

export class TodoResponse {
    todo?: Nullable<Todo>;
    error?: Nullable<string>;
}

export class TaskMutations {
    addTask: TaskResponse;
    delTask: TaskResponse;
    setTaskPriority: TaskResponse;
}

export class TodoMutations {
    addTodo: TodoResponse;
    delTodo: TodoResponse;
    setTodoStatus: TodoResponse;
}

type Nullable<T> = T | null;
