import { UserModule } from "./users/users.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      debug: false,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
