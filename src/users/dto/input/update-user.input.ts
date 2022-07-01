import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  isSubscribed?: boolean;
}
