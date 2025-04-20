import { UserDoc } from '../entities/user.entity';

export interface IUserService {
  create({ email, name, role, gender, password }): Promise<UserDoc>;

  createPassword(password: string): Promise<any>;

  existByEmail(email: string): Promise<boolean>;

  update();
  delete();
}
