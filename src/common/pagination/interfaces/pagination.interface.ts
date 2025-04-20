import { ENUM_PAGINATION_ORDER_DIRECTION_TYPE } from '../enums/pagination.enum';

export type IPaginationOrder = Record<
  string,
  ENUM_PAGINATION_ORDER_DIRECTION_TYPE
>;
