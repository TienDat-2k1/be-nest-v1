import { Model, PopulateOptions } from 'mongoose';
import {
  IDatabaseCreateOptions,
  IDatabaseDocument,
  IDatabaseFindOptions,
  IDatabaseOptions,
} from '../interfaces/database.interface';
import { DatabaseEntityBase } from './database.entity.base';

export class DatabaseRepositoryBase<
  Entity extends DatabaseEntityBase,
  EntityDocument extends IDatabaseDocument<Entity>,
> {
  protected readonly _repository: Model<Entity>;
  readonly _join?: PopulateOptions | (string | PopulateOptions[]);

  constructor(
    repository: Model<Entity>,
    options?: PopulateOptions | (string | PopulateOptions[]),
  ) {
    this._repository = repository;
    this._join = options;
  }

  async create<T extends Entity>(
    data: T,
    options?: IDatabaseCreateOptions,
  ): Promise<EntityDocument> {
    const created = await this._repository.create([data], options);

    return created[0] as EntityDocument;
  }

  async findOne<T = EntityDocument>(
    find: Record<string, any>,
    options?: IDatabaseFindOptions,
  ) {
    const repo = this._repository.findOne<T>({
      ...find,
      deleted: options?.withDeleted ?? false,
    });

    return repo.exec();
  }

  async exists(
    find: Record<string, any>,
    options?: IDatabaseOptions,
  ): Promise<boolean> {
    const repository = this._repository.exists({
      ...find,
      deleted: options?.withDeleted ?? false,
    });

    if (options?.join) {
      repository.populate(
        (typeof options.join === 'boolean' && options.join
          ? this._join
          : options.join) as PopulateOptions | (string | PopulateOptions)[],
      );
    }

    const result = await repository;
    return result ? true : false;
  }
}
