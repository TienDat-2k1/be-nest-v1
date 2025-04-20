import { Injectable } from '@nestjs/common';
import { IDatabaseService } from './database.service.interface';

@Injectable()
export class DatabaseService implements IDatabaseService {
  filterEqual<T = string>(
    field: string,
    filterValue: T,
  ): Record<string, { $eq: T }> {
    return {
      [field]: {
        $eq: filterValue,
      },
    };
  }
}
