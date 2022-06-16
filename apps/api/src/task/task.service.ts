import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { TaskDto } from './dto';

@Injectable()
export class TaskService {
    public constructor(@Inject('DbConnectionToken') private readonly db: Knex) { }

    public async getTasks(): Promise<TaskDto[]> {
        return this.db('task');
    }

    public async getTaskById(taskId: number): Promise<TaskDto> {
        return this.db('task').first().where({ id: taskId });
    }

    public async addTask(title: string, priority: string): Promise<number> {
        return this.db.insert({ title, priority }).into('task');
    }

    public async delTask(taskId: number): Promise<number> {
        await this.db('task').delete().where('id', taskId);
        return taskId;

    }
}
