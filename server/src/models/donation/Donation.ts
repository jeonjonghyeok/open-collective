import {Model, ObjectID} from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import {UserInfo} from "@tsed/passport";
import {Format} from "@tsed/common";


@Model()
export class Donation {
    @ObjectID("id")
    _id: string;

    @Required()
    type: string;

    @Required()
    price: string;

    @ObjectID("id")
		@Required()
		uid: string;

	@Required()
		gid: string;
}
