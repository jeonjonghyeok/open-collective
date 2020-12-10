import {Model, ObjectID, Ref} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {UserInfo} from "@tsed/passport";
import {Format} from "@tsed/common";
import {User} from "../user/User";
import { Schema } from 'mongoose';
import {Donation} from "../donation/Donation";
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

	@Ref(User)
	uid: Ref<User>;

	@Ref(User)
	uids: Ref<User>[];



}


