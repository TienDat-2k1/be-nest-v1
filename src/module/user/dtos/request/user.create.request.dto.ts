import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class UserCreateRequestDto {
  @ApiProperty({
    required: true,
    maxLength: 100,
    example: faker.internet.email(),
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;
  name: string;
}
