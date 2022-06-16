import { TaskQueryResolver } from './task.query.resolver';
import { TaskService } from './task.service';
import { TaskMutationResolver } from './task.mutations.resolver';
import { DatabaseModule } from '../common/database/database.module';
import { Module } from '@nestjs/common';
import { TodoMutationResolver } from './todo.mutations.resolver';
import { TodoQueryResolver } from './todo.query.resolver';
import { TodoService } from './todo.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        TaskMutationResolver,
        TaskQueryResolver,
        TaskService,
        TodoMutationResolver,
        TodoQueryResolver,
        TodoService,
    ],
    exports: [TodoService],
})
export class TaskModule { }
