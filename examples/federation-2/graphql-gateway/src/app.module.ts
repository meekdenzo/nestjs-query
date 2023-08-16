import { ApolloFederationDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: 'examples/graphql-gateway/schema.gql',
      server: {
        // ... Apollo server options
        cors: true
      },
      gateway: {
        serviceList: [
          { name: 'todo-items', url: 'http://localhost:4001/graphql' },
          { name: 'sub-tasks', url: 'http://localhost:4002/graphql' },
          { name: 'tags', url: 'http://localhost:4003/graphql' },
          { name: 'user', url: 'http://localhost:4004/graphql' }
        ]
      }
    })
  ]
})
export class AppModule {}
