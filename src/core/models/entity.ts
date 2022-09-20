import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export abstract class Entity {

  @Field(type => ID)
  id: number;

  @Field()
  uuid: string;

  @Field({defaultValue: false})
  deleteFlag: boolean;

  @Field()
  createdAt: Date;

  @Field({nullable: true})
  updatedAt?: Date;

  @Field({nullable: true})
  createdBy?: string;

  @Field({nullable: true})
  updatedBy?: string;
}