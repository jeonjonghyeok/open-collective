import { BodyParams, Req } from "@tsed/common";
import { Forbidden } from '@tsed/exceptions';
import {Arg, OnInstall, OnVerify, Protocol} from "@tsed/passport";
import { Strategy } from "passport-local";
import {User} from "../models/user/User";
import {UserService} from "../services/users/UserService";
import * as jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';

@Protocol({
    name: "signup",
    useStrategy: Strategy,
    settings: {
        usernameField:"email"
}
})
export class SigninProtocol implements OnVerify, OnInstall {
    constructor(private userService: UserService){}
    async $onVerify(@Req() req: Req, @BodyParams() user: any){
        const {email} = user;
        const userInfo = await this.userService.find(email);
        if(userInfo){
            throw new Forbidden("Email is already registerd");
        }
        const token = this.createJwt(user)
        user.token = token;
			user.email_verify = false;
			user.key_for_verify = token;
			const verificationLink= 'http://localhost:5010/'+'auth/email/' + user.key_for_verify

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'e3dadev@gmail.com',
					pass: 'jeju1028!'
				}
			});

			const mailOptions = {
				from: 'e3dadev@gmail.com',
				to: user.email,
				subject: 'email verification',
				html: `<p><a href="${verificationLink}"><a/></p>`
			};
			transporter.sendMail(mailOptions, function (error,info) {
	if(error) {
		throw new Forbidden("send email error")
	}
			})

        return this.userService.save(user);
    }

    $onInstall(strategy: Strategy): void {

    }
			createJwt(user:User) {
        const now = Date.now();

        return jwt.sign(
          {
            sub: user._id,
            // exp: now + 3600 * 1000,
            // iat: now
          },
          "secretOrKey"
        );
      }
}
