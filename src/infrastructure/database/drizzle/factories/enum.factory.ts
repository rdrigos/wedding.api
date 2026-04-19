import { PgEnum, pgEnum } from 'drizzle-orm/pg-core';

export function createPgEnum<T extends Record<string, any>>(name: string, enumClass: T): PgEnum<[string, ...string[]]> {
  const values = Object.values(enumClass).map((value: any) => String(value)) as [string, ...string[]];

  if (values.length === 0) {
    throw new Error('Enum must have at least one string value');
  }

  return pgEnum(name, values);
}
