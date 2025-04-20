import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DateTime, Duration } from 'luxon';
import { IHelperDateCreateOptions } from '../interfaces/helper.interface';
import { ENUM_HELPER_DATE_DAY_OF } from '../enum/helper.enum';

@Injectable()
export class HelperDateService {
  private readonly defTz: string;

  constructor(private readonly configService: ConfigService) {
    this.defTz = this.configService.get<string>(
      'app.timezone',
      'Asia/Ho_Chi_Minh',
    );
  }

  create(date?: Date, options?: IHelperDateCreateOptions): Date {
    const mDate = date
      ? DateTime.fromJSDate(date).setZone(this.defTz)
      : DateTime.now().setZone(this.defTz);

    if (options?.dayOf && options.dayOf === ENUM_HELPER_DATE_DAY_OF.START) {
      mDate.startOf('day');
    } else if (
      options?.dayOf &&
      options.dayOf === ENUM_HELPER_DATE_DAY_OF.END
    ) {
      mDate.endOf('day');
    }

    return mDate.toJSDate();
  }

  forward(date: Date, duration: Duration) {
    return DateTime.fromJSDate(date)
      .setZone(this.defTz)
      .plus(duration)
      .toJSDate();
  }
}
