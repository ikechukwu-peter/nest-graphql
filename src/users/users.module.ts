import { UserService } from "./users.service";
import { UserResolver } from "./users.resolver";
import { Module } from "@nestjs/common";

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
