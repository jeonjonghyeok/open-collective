import {Model, ObjectID} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {UserInfo} from "@tsed/passport";
import {Format} from "@tsed/common";
import {User} from "../user/User";
import {Group} from "../group/Group";
import {Schema} from "mongoose";
@Model()
export class Donation {
    @ObjectID("id")
    _id: string;

    @Required()
    type: string;

    @Required()
    price: string;

		@Required(false)
		users: [{ type: Schema.Types.ObjectId, ref: User}]
		groups: [{ type: Schema.Types.ObjectId, ref: Group}]

		/*@Format("date-time")
		@Required()
		date: Date = new Date();
	*/

}
