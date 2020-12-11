import {Model, ObjectID, Ref} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {Credential} from "./Credential";
import {UserInfo} from "@tsed/passport";
import {Format} from "@tsed/common";
import {Group} from "../group/Group";
import {Schema} from 'mongoose';
import {Donation} from "../donation/Donation";

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

		@Required(false)
		email_verify: boolean;

		@Required(false)
		key_for_verify: string;



    verifyPassword(password: string){
        return this.password === password;
    }

}
