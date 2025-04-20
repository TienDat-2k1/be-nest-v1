import { ClientSession, Document, PopulateOptions } from 'mongoose';
import { IPaginationOrder } from 'src/common/pagination/interfaces/pagination.interface';

export interface IDatabaseOptions {
  select?: Record<string, boolean | number> | string;
  join?: boolean | PopulateOptions | PopulateOptions[];
  session?: ClientSession;
  withDeleted?: boolean;
}
export type IDatabaseDocument<T> = T & Document;

export type IDatabaseCreateOptions = Pick<IDatabaseOptions, 'session'>;

export interface IDatabaseFindOptions extends IDatabaseOptions {
  order?: IPaginationOrder;
}

export interface IDatabaseContainOptions {
  fullWord: boolean;
}
