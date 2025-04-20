import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraintInterface,
} from 'class-validator';
import { HelperStringService } from 'src/common/helper/services/helper.string.service';

export class IsPasswordConstraint implements ValidatorConstraintInterface {
  constructor(private readonly helperStringService: HelperStringService) {}
  validate(value: string): Promise<boolean> | boolean {
    return value
      ? this.helperStringService.checkPasswordStrength(value)
      : false;
  }
}

export function IsPassWord(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsPassword',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPasswordConstraint,
    });
  };
}
