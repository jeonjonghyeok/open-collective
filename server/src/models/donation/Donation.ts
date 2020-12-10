import {Model, ObjectID, VirtualRef, VirtualRefs, Ref} from "@tsed/mongoose";
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
    price: Number;

	@Ref(Group)
	gid: Ref<Group>;

	@Ref(Group)
	gids: Ref<Group>[];

	@Ref(User)
	uid: Ref<User>;

	@Ref(User)
	uids: Ref<User>[];

}
