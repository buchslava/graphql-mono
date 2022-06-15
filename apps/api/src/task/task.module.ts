import { TaskQueryResolver } from './task.query.resolver';
import { TaskService } from './task.service';
import { TaskMutationResolver } from './task.mutations.resolver';
import { DatabaseModule } from '../common/database/database.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    providers: [
        TaskMutationResolver,
        TaskQueryResolver,
        TaskService,
    ],
    exports: [TaskService],
})
export class TaskModule {}
