import {BodyParams, Req, Inject, Constant} from "@tsed/common";
import {OnInstall, OnVerify, Protocol} from "@tsed/passport";
import {IStrategyOptions, Strategy} from "passport-local";
import {Forbidden} from "@tsed/exceptions";
import {UserService} from "../services/users/UserService";
import {Credential} from "../models/user/Credential";
import * as jwt from "jsonwebtoken";
import {User} from "../models/user/User";

@Protocol<IStrategyOptions>({
  name: "login",
  useStrategy: Strategy,
  settings: {
    usernameField: "email",
    passwordField: "password"
  }
})
export class LoginProtocol implements OnVerify, OnInstall {
  @Inject()
  userService: UserService;
  @Constant("passport.protocols.jwt.settings")
  jwtSettings: any;


  async $onVerify(@Req() request: Req, @BodyParams() credentials: any) {
    const {email, password} = credentials;
    const found = await this.userService.find(email);

    if (!found) {
      throw new Forbidden("Not User Please Register");
    }
    if (!found.verifyPassword(password)){
      throw new Forbidden("check password");
    }

    const token = this.createJwt(found);
    found.token=token;

    console.log("found: "+found);
    console.log("token:"+token);


    // this.userService.update(found)
    this.userService.attachToken(credentials,token);
    
    return found.token;
  }

  $onInstall(strategy: Strategy): void {
    // intercept the strategy instance to adding extra configuration
  }
  createJwt(user: User) {
    const {issuer, audience, secretOrKey, maxAge = 3600} = this.jwtSettings;
    const now = Date.now();

    return jwt.sign(
      {
        iss: issuer,
        sub: user._id,
      },
      secretOrKey
    );
  }
}