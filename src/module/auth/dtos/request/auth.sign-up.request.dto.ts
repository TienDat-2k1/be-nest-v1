import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { IsPassWord } from 'src/common/request/validations/request.is-password.validation';
import { UserCreateRequestDto } from 'src/module/user/dtos/request/user.create.request.dto';

export class AuthSignUpRequestDto extends OmitType(UserCreateRequestDto, []) {
  @ApiProperty({
    description: 'password string',
    required: true,
    minLength: 8,
    maxLength: 50,
  })
  @IsNotEmpty()
  @IsPassWord()
  @MinLength(8)
  @MaxLength(50)
  password: string;
}
