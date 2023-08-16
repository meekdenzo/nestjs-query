import { ApolloFederationDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { typeormOrmConfig } from '../../../helpers'
import { TagModule } from './tag/tag.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOrmConfig('federation_tag')),
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      federation: 2, // update version
      autoSchemaFile: 'examples/tag-graphql/schema.gql'
    }),
    TagModule
  ]
})
export class AppModule {}
