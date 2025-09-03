import { Body, Post, Controller } from '@nestjs/common';
import { LoginService } from 'src/domain/services/login.service';

@Controller('login')
export class LoginComtroller {
  constructor(private readonly LoginService: LoginService) {}

  @Post()
  createGenre(@Body() params: { login: string; senha: string }) {
    const response = this.LoginService.verifyLogin(params);
    return {
      statusCode: response.code,
      message: response.message,
    };
  }
}
