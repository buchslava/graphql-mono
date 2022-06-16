import { ConfigService } from './../config/config.service';
import knex from 'knex';
import { Knex } from 'knex';

export const databaseProviders: any = {
    provide: 'DbConnectionToken',
    useFactory: async (config: ConfigService): Promise<Knex> => {
        return knex({
            client: 'sqlite3',
            connection: {
                filename: config.get('dbfile')
            },
            useNullAsDefault: true,
        });
    },
    inject: [ConfigService],
};
