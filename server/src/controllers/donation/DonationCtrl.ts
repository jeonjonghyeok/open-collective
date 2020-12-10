import {BodyParams, Controller, Get, Post, Req, HeaderParams, Scope, ProviderScope, PathParams} from "@tsed/common";
import { Description,Required, Returns, Status } from "@tsed/schema";
import {Authenticate, Authorize} from "@tsed/passport";
import {Donation} from "../../models/donation/Donation";
import {DonationService} from "../../services/donation/DonationService";
import {NotFound} from "@tsed/exceptions";

// @Scope(ProviderScope.SINGLETON)
@Controller({
	path: "/donation"})
export class DonationCtrl {
	constructor(private donationService: DonationService) {

	}

	@Get("/:id")
	@(Status(200,Donation).Description("Success"))
	async get(@Required() @PathParams("id") id:string): Promise<Donation>{
		const donation= await this.donationService.find(id);

		if(donation)
		return donation;

		throw new NotFound("Not Donation");
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
