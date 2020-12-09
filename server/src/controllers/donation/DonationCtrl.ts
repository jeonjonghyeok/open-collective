import {BodyParams, Controller, Get, Post, Req, HeaderParams, Scope, ProviderScope} from "@tsed/common";
import { Description,Required, Returns } from "@tsed/schema";
import {Authenticate, Authorize} from "@tsed/passport";
import {Donation} from "../../models/donation/Donation";
import {DonationService} from "../../services/donation/DonationService";

// @Scope(ProviderScope.SINGLETON)
@Controller({
	path: "/donation"})
export class DonationCtrl {
	constructor(private donationService: DonationService) {

	}

    @Post("/")
    @(Returns(201,Donation).Description("Created"))
		save(
		@Description("Donation model")
		@BodyParams()
		@Required()
		donation: Donation
		) {
			return this.donationService.save(donation);
    }

    // @Get("/userinfo")
    // @Authorize("jwt")
    // @Returns(200,User)
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // getUserInfo(@Req() req: Req, @HeaderParams("authorization") token: string) {

    // return req.user;
    // }

}
