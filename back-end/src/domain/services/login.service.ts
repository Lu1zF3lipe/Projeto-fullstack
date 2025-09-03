import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  public verifyLogin(params: { login: string; senha: string }) {
    const { login, senha } = params;

    if (!login || !senha) {
      return {
        code: 400,
        message: 'Operação não realizada. Faltando parâmetros.',
      };
    } else if (login === 'admin' && senha === 'admin') {
      return {
        code: 200,
        message: 'Operação realizada com sucesso.',
      };
    } else {
      return {
        code: 401,
        message: 'Operação não realizada. Usuário ou senha inválidos.',
      };
    }
  }
}
