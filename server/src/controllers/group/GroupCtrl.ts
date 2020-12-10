import {BodyParams, Controller, Get, Post, Req, HeaderParams, Scope, ProviderScope} from "@tsed/common";
import { Description,Required, Returns } from "@tsed/schema";
import {Authenticate, Authorize} from "@tsed/passport";
import {Group} from "../../models/group/Group";
import {GroupService} from "../../services/group/GroupService";

// @Scope(ProviderScope.SINGLETON)
@Controller({
	path: "/group"})
export class GroupCtrl {
	constructor(private groupService: GroupService) {

	}

    @Post("/")
    @(Returns(201,Group).Description("Created"))
		save(
		@Description("Group model")
		@BodyParams()
		@Required()
		group: Group
		) {
			return this.groupService.save(group);
    }

    // @Get("/userinfo")
    // @Authorize("jwt")
    // @Returns(200,User)
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // getUserInfo(@Req() req: Req, @HeaderParams("authorization") token: string) {

    // return req.user;
    // }

}
