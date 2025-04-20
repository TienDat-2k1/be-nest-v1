import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/repositories/user.repository';
import { ConfigService } from '@nestjs/config';
import { UserDoc, UserEntity } from '../entities/user.entity';
import { AuthSignUpRequestDto } from 'src/module/auth/dtos/request/auth.sign-up.request.dto';
import { DatabaseHelperQueryContain } from 'src/common/database/decorators/database.decorator';
import { IAuthPassword } from 'src/module/auth/interface/auth.interface';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';
import {
  IDatabaseCreateOptions,
  IDatabaseFindOptions,
} from 'src/common/database/interfaces/database.interface';

@Injectable()
export class UserService {
  private readonly userPrefix: string;

  constructor(
    private readonly userRepo: UserRepository,
    private readonly helperStringService: HelperStringService,
    private readonly configService: ConfigService,
  ) {
    this.userPrefix = this.configService.get('user.userPrefix', '');
  }

  create() {
    const create: UserEntity = new UserEntity();

    return this.userRepo.create<UserEntity>(create);
  }

  // random user Name
  createRandomUserName(): string {
    const suffix = this.helperStringService.random(6);

    return `${this.userPrefix}-${suffix}`;
  }

  // check email exist in database
  async existByEmail(email: string) {
    return this.userRepo.exists(
      DatabaseHelperQueryContain('email', email, { fullWord: true }),
    );
  }

  async findOneByEmail(email: string, options?: IDatabaseFindOptions) {
    return this.userRepo.findOne<UserDoc>({ email }, options);
  }

  // signup account
  signUp(
    { email, name }: AuthSignUpRequestDto,
    { passwordCreated, passwordExpired, passwordHash, salt }: IAuthPassword,
    options?: IDatabaseCreateOptions,
  ) {
    const create = new UserEntity();

    create.name = name;
    create.username = this.createRandomUserName();
    create.email = email;

    // create password
    create.password = passwordHash;
    create.passwordExpired = passwordExpired;
    create.passwordCreated = passwordCreated;
    create.salt = salt;

    create.verification = {
      email: false,
      phoneNumber: false,
    };

    return this.userRepo.create<UserEntity>(create, options);
  }

  update() {}

  delete() {}
}
