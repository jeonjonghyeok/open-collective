import {Model, ObjectID} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {UserInfo} from "@tsed/passport";
import {Format} from "@tsed/common";
import {User} from "../user/User";
import { Schema } from 'mongoose';

@Model()
export class Group {
    @ObjectID("id")
    _id: string;

    @Format("email")
    @Required()
    email: string;

    @Required(false)
    name: string;

		@Required(false)
		page: string;

		@Required(false)
		github: string;

		@Required(false)
		total_price: number;

	@Required(false)
	users: [{ type:Schema.Types.ObjectId, ref: User}]



}


