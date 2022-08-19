import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SignInUseCase } from '@example/core/src/example/application/use-cases';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    const n = {};
    const signIn = new SignInUseCase(n as any);
    await signIn.execute();
    return this.appService.getHello();
  }
}
