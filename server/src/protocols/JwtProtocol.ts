import {BodyParams, Req} from "@tsed/common";
import {OnInstall, OnVerify, Protocol, Arg} from "@tsed/passport";
import {Forbidden} from "@tsed/exceptions";
import {UserService} from "../services/users/UserService";
import {Credential} from "../models/user/Credential";
import {ExtractJwt, Strategy, StrategyOptions} from "passport-jwt";

@Protocol({
    name: "jwt",
    useStrategy: Strategy,
    settings: {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret",
      issuer: "accounts.examplesoft.com",
      audience: "yoursite.net"
    }
})
export class JwtProtocol implements OnVerify, OnInstall {
  constructor(private userService: UserService) {
  }

  async $onVerify(@Req() req: Req, @Arg(0) jwtPayload: any) {
    console.log("jwt ago");
    const user = await this.userService.find(jwtPayload.sub);
    console.log("User: "+user);
    if (!user) {
      throw new Forbidden("Wrong token");
    }

    req.user = user;

    return user;
  }

  $onInstall(strategy: Strategy): void {
    // intercept the strategy instance to adding extra configuration
  }
}