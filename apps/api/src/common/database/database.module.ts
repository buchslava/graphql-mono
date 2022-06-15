import { ConfigModule } from './../config/config.module';
import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';

@Module({
    imports: [ConfigModule],
    providers: [databaseProviders],
    exports: [databaseProviders, ConfigModule],
})
export class DatabaseModule {}
