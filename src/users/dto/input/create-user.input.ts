import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsNotEmpty()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  isSubscribed?: boolean;
}
