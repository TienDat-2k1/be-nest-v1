import { Injectable } from '@nestjs/common';
import { IAuthPasswordOptions } from '../interface/auth.interface';
import { ConfigService } from '@nestjs/config';
import { HelperHashService } from 'src/common/helper/services/helper.hash.service';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { Duration } from 'luxon';

@Injectable()
export class AuthService {
  private readonly passwordSaltLength: number;
  private readonly passwordExpiredTemporary: number;
  private readonly passwordExpiredIn: number;

  constructor(
    private readonly configService: ConfigService,
    private readonly helperHashService: HelperHashService,
    private readonly helperDateService: HelperDateService,
  ) {
    this.passwordSaltLength = this.configService.get<number>(
      'auth.password.saltLength',
      10,
    );
    this.passwordExpiredIn = this.configService.get<number>(
      'auth.password.expiredIn',
      0,
    );
    this.passwordExpiredTemporary = this.configService.get<number>(
      'auth.passwordTemporary',
      0,
    );
  }

  createSalt(length: number): string {
    return this.helperHashService.randomSalt(length);
  }

  createPassword(password: string, options?: IAuthPasswordOptions) {
    const salt = this.createSalt(this.passwordSaltLength);
    const passwordHash = this.helperHashService.bcrypt(password, salt);
    const passwordCreated = this.helperDateService.create();
    const today = this.helperDateService.create();
    const passwordExpired: Date = this.helperDateService.forward(
      today,
      Duration.fromObject({
        seconds: options?.temporary
          ? this.passwordExpiredTemporary
          : this.passwordExpiredIn,
      }),
    );

    return { passwordHash, passwordExpired, passwordCreated, salt };
  }

  validateUser(passwordString: string, passwordHash: string) {
    return this.helperHashService.bcryptCompare(passwordString, passwordHash);
  }
}
