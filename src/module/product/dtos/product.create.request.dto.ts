import { faker } from '@faker-js/faker/.';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProductCreateDTO {
  @ApiProperty({
    required: true,
    description: 'Name of product',
    minLength: 1,
    maxLength: 300,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({})
  @IsString()
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  discount: number | null;

  @ApiProperty()
  price: number;

  @ApiProperty()
  @IsString()
  slug?: string;
}
