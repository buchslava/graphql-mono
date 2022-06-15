import { ConfigService } from './../config/config.service';
import knex from 'knex';
import { Knex } from 'knex';

// tslint:disable-next-line: no-any
export const databaseProviders: any = {
    provide: 'DbConnectionToken',
    useFactory: async (config: ConfigService): Promise<Knex> => {
        return knex({
            client: 'sqlite3',
            connection: {
                filename: '/Users/slava/tasks.db3'
            },
            useNullAsDefault: true,
        });
    },
    inject: [ConfigService],
};
