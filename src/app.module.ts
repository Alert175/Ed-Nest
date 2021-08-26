import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExampleController } from "./controllers/example.controller";

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
  providers: [AppService]
})

export class AppModule {
}
