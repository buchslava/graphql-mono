import { TaskService } from './task.service';
import { TaskMutations, TaskInput, TaskResponse } from '../graphql.schema';
import { Args, Mutation, ResolveProperty, Resolver } from '@nestjs/graphql';
import { getTaskByDto } from './dto';

@Resolver(() => TaskMutations)
export class TaskMutationResolver {
    public constructor(
        private readonly taskService: TaskService,
    ) { }

    @Mutation(() => TaskMutations)
    public async task(): Promise<TaskMutations | {}> {
        return {};
    }


    @ResolveProperty(() => TaskResponse)
    public async addTask(@Args('task') taskInput: TaskInput): Promise<TaskResponse> {
        try {
            const newTaskIds = await this.taskService.addTask(taskInput.title, taskInput.priority);
            const task = getTaskByDto(await this.taskService.getTaskById(newTaskIds[0]));
            return { task };
        } catch (error) {
            return { error };
        }
    }

    @ResolveProperty(() => TaskResponse)
    public async delTask(@Args('taskId') taskId: number): Promise<TaskResponse> {
        try {
            const task = getTaskByDto(await this.taskService.getTaskById(taskId));
            if (!task) {
                return {
                    error: `Task ${taskId} is not found`
                };
            }
            await this.taskService.delTask(taskId);
            return { task };
        } catch (error) {
            return {
                error
            };

        }
    }
}
