import { getModelForClass, prop } from "@typegoose/typegoose";
import { WithId } from "mongodb";
import PaginatedClass from "../../utils/paginatedClass";

class Issue extends PaginatedClass{
    @prop({ required: true })
    title!: string;
  
    @prop({ required: true })
    description!: string;
}

const IssueModel = getModelForClass(Issue, {schemaOptions: {
    versionKey: false
}});


type IssueClassWithId = WithId<Issue>

export {
    Issue as IssueClass,
    IssueClassWithId,
    IssueModel
}