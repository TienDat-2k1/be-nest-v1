import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserSignupDTO } from '../dtos/request/user.sign-up.request.dto';

@Controller({
  version: '1',
  path: '/user',
})
export class UserPublicController {
  constructor(private readonly userService: UserService) {}

  // @Post('/sign-up')
  // async signUp(
  //   @Body()
  //   body: UserSignupDTO,
  // ): Promise<any> {
  //   return this.userService.signUp(body);
  // }
}
