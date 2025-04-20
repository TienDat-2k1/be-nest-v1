import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectDatabaseConnection } from 'src/common/database/decorators/database.decorator';
import { UserService } from '../services/user.service';

@Controller({ version: '1', path: '/user' })
export class UserAdminController {
  constructor(
    @InjectDatabaseConnection() private readonly dbConnection: Connection,
    private readonly userService: UserService,
  ) {}

  @Post('/create')
  async create() {
    try {
      return {};
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: 400,
        message: 'http.serverError.internalServerError',
        _error: error.message,
      });
    }
  }

  @Get('/list')
  async getList() {}

  @Get('/:user')
  async get() {}

  @Put('/update/:user')
  async update() {}

  @Patch('update/:user/status')
  async updateStatus() {}
}
