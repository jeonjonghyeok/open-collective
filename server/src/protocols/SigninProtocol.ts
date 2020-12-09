import { BodyParams, Req } from "@tsed/common";
import { Forbidden } from '@tsed/exceptions';
import {Arg, OnInstall, OnVerify, Protocol} from "@tsed/passport";
import { Strategy } from "passport-local";
import {User} from "../models/user/User";
import {UserService} from "../services/users/UserService";
import * as jwt from "jsonwebtoken";

@Protocol({
    name: "signup",
    useStrategy: Strategy,
    settings: {
        usernameField:"email"
}
})
export class SigninProtocol implements OnVerify, OnInstall {
    constructor(private userService: UserService){

    }
    async $onVerify(@Req() req: Req, @BodyParams() user: any){
        const {email} = user;
        const userInfo = await this.userService.find(email);
        if(userInfo){
            throw new Forbidden("Email is already registerd");
        }
        const token = this.createJwt(user)
        user.token = token;

        return this.userService.save(user);
    }

    $onInstall(strategy: Strategy): void {

    }
    createJwt(user: User) {
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