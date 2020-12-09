import {Controller, Get, Post} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }
}
