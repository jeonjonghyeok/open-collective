import {BodyParams, Controller, Get, Post, Req, HeaderParams, Scope, ProviderScope, PathParams} from "@tsed/common";
import { Description,Required, Returns, Status } from "@tsed/schema";
import {Authenticate, Authorize} from "@tsed/passport";
import {Group} from "../../models/group/Group";
import {GroupService} from "../../services/group/GroupService";
import {NotFound} from "@tsed/exceptions";

// @Scope(ProviderScope.SINGLETON)
@Controller({
	path: "/group"})
export class GroupCtrl {
	constructor(private groupService: GroupService) {

	}
	@Get("/:id")
	@(Status(200,Group).Description("Success"))
	async get(@Required() @PathParams("id") id:string): Promise<Group>{
		const group= await this.groupService.find(id);

		if(group)
		return group;

		throw new NotFound("Not Group");
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
