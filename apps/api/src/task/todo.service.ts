import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { TodoDto } from './dto';

@Injectable()
export class TodoService {
    public constructor(@Inject('DbConnectionToken') private readonly db: Knex) { }

    public async getTodos(taskId: number): Promise<TodoDto[]> {
        return this.db('todo').where('task_id', taskId);
    }

    public async getTodoById(todoId: number): Promise<TodoDto> {
        return this.db('todo').first().where({ id: todoId });
    }

    public async addTodo(taskId: string, title: string, content: string): Promise<number> {
        return this.db.insert({ task_id: +taskId, title, content, status: 'new' }).into('todo');
    }

    public async delTodo(todoId: number): Promise<number> {
        await this.db('todo').delete().where('id', todoId);
        return todoId;

    }

    public async setTodoStatus(todoId: number, status: string): Promise<number> {
        return this.db('todo').update({ status }).where({ id: todoId });
    }
}
