import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CookieSessionModule } from 'nestjs-cookie-session';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './common/config/config.service';
import { TaskModule } from './task/task.module';

const config: ConfigService = new ConfigService('./apps/api/.env');

@Module({
  imports: [
    TaskModule,
    CookieSessionModule.forRoot({
      session: { secret: '1234567890' },
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: config.get('APP_PLAYGROUND') !== 'no',
      installSubscriptionHandlers: true,
      tracing: true,
      engine: {
        apiKey: config.get('ENGINE_API_KEY'),
      },
      fieldResolverEnhancers: ['interceptors'],
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
