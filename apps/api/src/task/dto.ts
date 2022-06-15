import { Task, TaskPriority, Todo, TodoStatus } from "../graphql.schema";

export interface TodoDto {
    id: number;
    title: string;
    content: string;
    status: string;
}

export interface TaskDto {
    id: number;
    title: string;
    priority: string;
}

export function getTodoByDto(d: TodoDto): Todo {
    if (!d) {
        return null;
    }

    const res = new Todo();

    res.id = `${d.id}`;
    res.title = d.title || '';
    res.content = d.content || '';
    res.status = null;

    if (d.status === 'new') {
        res.status = TodoStatus.new;
    }
    if (d.status === 'cancelled') {
        res.status = TodoStatus.cancelled;
    }
    if (d.status === 'done') {
        res.status = TodoStatus.done;
    }

    return res;
}

export function getTaskByDto(d: TaskDto): Task {
    if (!d) {
        return null;
    }

    const res = new Task();

    res.id = `${d.id}`;
    res.title = d.title || '';
    res.priority = null;
    if (d.priority === 'low') {
        res.priority = TaskPriority.low;
    }
    if (d.priority === 'normal') {
        res.priority = TaskPriority.normal;
    }
    if (d.priority === 'high') {
        res.priority = TaskPriority.high;
    }

    return res;
}