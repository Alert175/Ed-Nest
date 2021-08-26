import { Controller, Get } from "@nestjs/common";

@Controller("/example")
export class ExampleController {
  @Get()
  handlerFindData(): string {
    return "example data";
  }
}
