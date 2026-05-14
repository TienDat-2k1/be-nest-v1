import { OmitType } from '@nestjs/swagger';
import { UserCreateRequestDto } from './user.create.request.dto';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { IsPassWord } from 'src/common/request/validations/request.is-password.validation';

export class UserSignupDTO extends OmitType(UserCreateRequestDto, [
  'roleId',
] as const) {
  @IsNotEmpty()
  @IsPassWord()
  @MinLength(8)
  @MaxLength(50)
  password: string;
}
