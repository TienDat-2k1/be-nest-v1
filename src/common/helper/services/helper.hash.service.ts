import { Injectable } from '@nestjs/common';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class HelperHashService {
  randomSalt(length: number): string {
    return genSaltSync(length);
  }
  bcrypt(password: string, salt: string): string {
    return hashSync(password, salt);
  }

  bcryptCompare(passwordString: string, passwordHash: string): boolean {
    return compareSync(passwordString, passwordHash);
  }
}
