import { Type } from '@nestjs/common';
import {
  InjectConnection,
  InjectModel,
  Prop,
  PropOptions,
  Schema,
  SchemaFactory,
  SchemaOptions,
} from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { DATABASE_CONNECTION_NAME } from '../constant/database.constant';
import { IDatabaseContainOptions } from '../interfaces/database.interface';

// Entity Decorator
export function DatabaseEntity(options?: SchemaOptions): ClassDecorator {
  return Schema({
    ...options,
    timestamps: options?.timestamps ?? { createdAt: true, updatedAt: true },
  });
}

// Props decorator
export function DatabaseProp(options?: PropOptions<any>): PropertyDecorator {
  return Prop(options);
}

// Schema Decorator
export function DatabaseSchema<T = any, N = MongooseSchema<T>>(
  entity: Type<T>,
): N {
  return SchemaFactory.createForClass<T>(entity) as N;
}

// InjectModel Decorator
export function InjectDatabaseModel(
  entity: any,
  connectionName?: string,
): ParameterDecorator {
  return InjectModel(entity, connectionName ?? DATABASE_CONNECTION_NAME);
}

// Connection Decorator
export function InjectDatabaseConnection(
  connectionName?: string,
): ParameterDecorator {
  return InjectConnection(connectionName ?? DATABASE_CONNECTION_NAME);
}

// Query contain Decorator
export function DatabaseHelperQueryContain(
  field: string,
  value: string,
  options: IDatabaseContainOptions,
) {
  if (options.fullWord) {
    return {
      [field]: {
        $regex: new RegExp(`\\b${value}\\b`),
        $options: 'i',
      },
    };
  }

  return {
    [field]: {
      $regex: new RegExp(value),
      $options: 'i',
    },
  };
}
