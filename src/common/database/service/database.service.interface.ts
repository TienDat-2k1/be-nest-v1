export interface IDatabaseService {
  filterEqual<T = string>(
    field: string,
    filterValue: T,
  ): Record<string, { $eq: T }>;
}
