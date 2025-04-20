import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginRequestDTO {
  @ApiProperty({
    required: true,
    example: faker.internet.email(),
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
    example: faker.string.alphanumeric(10),
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
