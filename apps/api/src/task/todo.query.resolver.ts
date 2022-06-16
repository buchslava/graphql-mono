import { TodoService } from './todo.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Todo } from '../graphql.schema';
import { getTodoByDto } from './dto';

@Resolver()
export class TodoQueryResolver {
    public constructor(
        private readonly todoService: TodoService,
    ) { }

    @Query(() => [Todo])
    public async getTodosList(@Args('taskId') taskId: number): Promise<Todo[]> {
        try {
            const todoResponse = await this.todoService.getTodos(taskId);
            return todoResponse.map(s => getTodoByDto(s))
        } catch (e) {
            return [];
        }
    }
}
