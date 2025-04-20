import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SessionRepository } from '../repositories/repositories/session.repository';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { SessionEntity } from '../repositories/entities/session.entity';

@Injectable()
export class SessionService {
  private readonly refreshTokenExpiration: number;
  private readonly appName: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly sessionRepository: SessionRepository,
    private readonly helperDateService: HelperDateService,
  ) {
    this.refreshTokenExpiration = this.configService.get<number>(
      'auth.jwt.refreshToken.expirationTime',
      0,
    );
  }

  async create() {
    const today = this.helperDateService.create();

    const create = new SessionEntity();

    return this.sessionRepository.create<SessionEntity>(create);
  }
}
