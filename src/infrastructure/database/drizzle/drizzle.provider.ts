import * as schema from '@/infrastructure/database/drizzle/drizzle.schema';
import { EnvironmentService } from '@/infrastructure/environment/environment.service';
import { Provider } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const DRIZZLE = Symbol('DRIZZLE');

export type DrizzleClient = NodePgDatabase<typeof schema>;

export const DrizzleProvider: Provider = {
  provide: DRIZZLE,
  inject: [EnvironmentService],
  useFactory: (env: EnvironmentService): DrizzleClient => {
    const client = new Pool({
      connectionString: env.get('DATABASE_URL'),
      idleTimeoutMillis: 1000 * 60 * 2, // Two Minutes
    });

    return drizzle({
      client,
      schema,
    });
  },
};
