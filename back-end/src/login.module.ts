import { Module } from '@nestjs/common';
import { LoginService } from './domain/services/login.service';
import { LoginComtroller } from './login/controllers/login.controller';

@Module({
  imports: [],
  controllers: [LoginComtroller],
  providers: [LoginService],
})
export class LoginModule {}
