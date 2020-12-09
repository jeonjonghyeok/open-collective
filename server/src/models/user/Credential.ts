import {Model, ObjectID} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";

@Model()
export class Credential {
    @ObjectID("id")
    _id: string;

    @Required()
    email: string;

    @Required()
    password: string;
 
    @Required(false)
    @Property()
    token: string;
}