import {BodyParams, Controller, Get, Post, Req, HeaderParams, Scope, ProviderScope, PathParams} from "@tsed/common";
import { Required, Returns } from "@tsed/schema";
import {User} from "../../models/user/User";
import {Authenticate, Authorize} from "@tsed/passport";
import {Credential} from "../../models/user/Credential";
import {UserService} from "../../services/users/UserService";
import jwt from "jsonwebtoken";
// @Scope(ProviderScope.SINGLETON)
@Controller("/auth")
export class PassportCtrl {
	constructor(private userService: UserService) {

	}
    @Post("/signup")
    @Returns(201, User)
    @Authenticate("signup")
    signup(@Req() req:Req, @Required() @BodyParams("email") email: String, @Required() @BodyParams("password") password: String, @Required() @BodyParams("name") name: string ) {
        return req.user;
    }

    // @Returns(200, User)
    @Post("/login")
    @Authenticate("login")
    login(@Req() req:Req, @Required() @BodyParams("email") email: String, @Required() @BodyParams("password") password: String ) {
        return req.user;
    }

		@Get("/email/:key")
		async email(@Required() @PathParams("key") token: string) {
			const id = jwt.verify(token,'secretOrKey');
				const user = await this.userService.findOne(id);
				if (user){
				await this.userService.email(user);
				}
		}
    // @Get("/userinfo")
    // @Authorize("jwt")
    // @Returns(200,User)
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // getUserInfo(@Req() req: Req, @HeaderParams("authorization") token: string) {

    // return req.user;
    // }

}
