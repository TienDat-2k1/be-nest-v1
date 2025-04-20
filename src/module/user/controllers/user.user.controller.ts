import { Controller, Delete, Put } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectDatabaseConnection } from 'src/common/database/decorators/database.decorator';

@Controller({
  version: '1',
  path: '/user',
})
export class UserUserController {
  constructor(
    @InjectDatabaseConnection() private readonly dbConnection: Connection,
  ) {}

  @Delete('/delete')
  async delete() {}

  @Put('/update/phone-number')
  async updatePhoneNumber() {}
}
