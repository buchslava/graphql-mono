import { TodoService } from './todo.service';
import { TodoMutations, TodoInput, TodoResponse } from '../graphql.schema';
import { Args, Mutation, ResolveProperty, Resolver } from '@nestjs/graphql';
import { getTodoByDto } from './dto';

@Resolver(() => TodoMutations)
export class TodoMutationResolver {
    public constructor(
        private readonly todoService: TodoService,
    ) { }

    @Mutation(() => TodoMutations)
    public async todo(): Promise<TodoMutations | {}> {
        return {};
    }


    @ResolveProperty(() => TodoResponse)
    public async addTodo(@Args('todo') todoInput: TodoInput): Promise<TodoResponse> {
        try {
            const newTodoIds = await this.todoService.addTodo(todoInput.taskId, todoInput.title, todoInput.content);
            const todo = getTodoByDto(await this.todoService.getTodoById(newTodoIds[0]));
            return { todo };
        } catch (error) {
            return { error };
        }
    }

    @ResolveProperty(() => TodoResponse)
    public async delTodo(@Args('todoId') todoId: number): Promise<TodoResponse> {
        try {
            const todo = getTodoByDto(await this.todoService.getTodoById(todoId));
            if (!todo) {
                return {
                    error: `Todo ${todoId} is not found`
                };
            }
            await this.todoService.delTodo(todoId);
            return { todo };
        } catch (error) {
            return {
                error
            };
        }
    }

    @ResolveProperty(() => TodoResponse)
    public async setTodoStatus(@Args('todoId') todoId: string, @Args('todoStatus') status: string): Promise<TodoResponse> {
        try {
            const todo = getTodoByDto(await this.todoService.getTodoById(+todoId));
            if (!todo) {
                return {
                    error: `Todo ${todoId} is not found`
                };
            }
            await this.todoService.setTodoStatus(+todoId, status);
            return { todo };
        } catch (error) {
            return {
                error
            };
        }
    }
}
