import {Model, ObjectID} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {Credential} from "./Credential";
import {UserInfo} from "@tsed/passport";
import {Format} from "@tsed/common";

@Model()
export class User {
    @ObjectID("id")
    _id: string;

    @Format("email")
    @Required()
    email: string;

    @Required(false)
    name: string;

    @Required()
    password: string;

    @Required(false)
    token: string;

		@Required(false)
		address: string;

		@Required(false)
		crypto: string;

    verifyPassword(password: string){
        return this.password === password;
    }

}
