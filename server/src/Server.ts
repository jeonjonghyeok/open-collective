// import {Configuration, Inject} from "@tsed/di";
import {Configuration, GlobalAcceptMimesMiddleware, Inject, PlatformApplication} from "@tsed/common";
import "@tsed/mongoose";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/swagger";
import "@tsed/typeorm";
import "@tsed/passport";
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
// import cors from "cors";
import "@tsed/ajv";
import mongooseConfig from "./config/mongoose";
export const rootDir = __dirname;
import {User} from "./models/user/User";
import session from "express-session";

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 5010,
  httpsPort: false, // CHANGE
  mongoose: mongooseConfig,
  exclude: [
    "**/*.spec.ts"
  ],
  mount: {
    "/rest": [
      `${rootDir}/controllers/**/*.ts`
    ]
  },
  componentsScan: [
    "${rootDir}/protocols/*.ts", // scan protocols directory
    // "${rootDir}/services/**/*.ts"
  ],
  swagger: [
    {
      path: "/api-docs"
    }
  ],
  passport: {userInfoModel: User}
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;
  
  $beforeRoutesInit(): void {
    this.app
      // .use(cors())
      .use(cookieParser())
      // .use(GlobalAcceptMimesMiddleware)
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
      .use(session({
        secret: "mysecretkey",
        resave: true,
        saveUninitialized: true,
        // maxAge: 36000,
        cookie: {
          path: "/",
          httpOnly: true,
          secure: false,
          // maxAge: null
        }
      }));
  }
}
