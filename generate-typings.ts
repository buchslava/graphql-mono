import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory: GraphQLDefinitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./apps/api/src/**/*.graphql'],
    path: join(process.cwd(), 'apps/api/src/graphql.schema.ts'),
    outputAs: 'class',
    watch: true,
});
