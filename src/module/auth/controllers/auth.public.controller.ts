import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectDatabaseConnection } from 'src/common/database/decorators/database.decorator';
import { UserService } from 'src/module/user/services/user.service';
import { AuthSignUpRequestDto } from '../dtos/request/auth.sign-up.request.dto';
import { ENUM_APP_STATUS_CODE_ERROR } from 'src/app/enums/app.status-code.enum';
import { ENUM_USER_STATUS_CODE_ERROR } from 'src/module/user/enums/user.status-code.enum';
import { AuthService } from '../services/auth.service';
import { AuthLoginRequestDTO } from '../dtos/request/auth.login.request.dto';
import { ENUM_USER_STATUS } from 'src/module/user/enums/user.enum';

@Controller({ version: '1', path: '/auth' })
export class AuthPublicController {
  constructor(
    @InjectDatabaseConnection() private connection: Connection,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/sign-up')
  async signUp(
    @Body() { email, name, password: passwordNatural }: AuthSignUpRequestDto,
  ): Promise<void> {
    const promises = [this.userService.existByEmail(email)];

    const [emailExist] = await Promise.all(promises);

    if (emailExist) {
      throw new ConflictException({
        statusCode: ENUM_USER_STATUS_CODE_ERROR.EMAIL_EXIST,
        message: 'user.error.emailExist',
      });
    }

    const password = this.authService.createPassword(passwordNatural);

    // const session = await this.connection.startSession();
    // session.startTransaction();

    try {
      await this.userService.signUp(
        { email, name, password: passwordNatural },
        { ...password },
        // { session },
      );
    } catch (error: any) {
      // await session.abortTransaction();
      // await session.endSession();

      throw new InternalServerErrorException({
        statusCode: ENUM_APP_STATUS_CODE_ERROR.UNKNOWN,
        message: 'http.serverError.internalServerError',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        _error: error.message,
      });
    }
    return;
  }

  @Post('/login/credential')
  async loginWithCredential({ email, password }: AuthLoginRequestDTO) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException({
        statusCode: ENUM_APP_STATUS_CODE_ERROR.NOTFOUND,
        message: 'user.error.notfound',
      });
    }

    const validate = this.authService.validateUser(password, user.password);

    if (!validate) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'auth.error.passwordNotMatch',
      });
    } else if (user.status !== ENUM_USER_STATUS.ACTIVE) {
      throw new ForbiddenException({
        statusCode: 403,
        message: 'user.error.inactive',
      });
    }
  }
}
