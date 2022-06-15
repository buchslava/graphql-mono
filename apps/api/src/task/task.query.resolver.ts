import { TaskService } from './task.service';
import { Context, Args, Query, Resolver } from '@nestjs/graphql';
import {
    Task,
} from '../graphql.schema';
import { getTaskByDto } from './dto';

@Resolver()
export class TaskQueryResolver {
    public constructor(
        private readonly taskService: TaskService,
    ) { }

    @Query(() => [Task])
    public async getTasksList(): Promise<Task[]> {
        try {
            const tasksResponse = await this.taskService.getTasks();
            return tasksResponse.map(s => getTaskByDto(s))
        } catch (e) {
            return [];
        }
    }
}
