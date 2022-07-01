import { CreateUserInput } from "./dto/input/create-user.input";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { GetUserArgs } from "./dto/args/get-user.args";
import { UserService } from "./users.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./models/user";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => User, { name: "user", nullable: true })
  GetUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: "users", nullable: "items" })
  GetUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  CreateUser(@Args("createUserData") createUserData: CreateUserInput): User {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => User)
  UpdateUser(@Args("updateUserData") updateUserData: UpdateUserInput): User {
    return this.userService.updateUser(updateUserData);
  }
  @Mutation(() => User)
  deleteUser(@Args("deleteUserData") deleteUserData: DeleteUserInput): User {
    return this.userService.deleteUser(deleteUserData);
  }
}
