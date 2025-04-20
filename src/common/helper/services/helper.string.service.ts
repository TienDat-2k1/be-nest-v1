import { Injectable } from '@nestjs/common';
import { IHelperStringPasswordOptions } from '../interfaces/helper.interface';

@Injectable()
export class HelperStringService {
  checkPasswordStrength(
    password: string,
    options?: IHelperStringPasswordOptions,
  ): boolean {
    const length = options?.length ?? 8;
    const regex = new RegExp(
      `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{${length},}$`,
    );

    return regex.test(password);
  }

  random(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );

      counter += 1;
    }

    return result;
  }
}
