import { createPgEnum } from '@/infrastructure/database/drizzle/factories/enum.factory';
import { GuestStatus } from '@/modules/guests/domain/enums/guest-status.enum';
import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { v7 as uuidV7 } from 'uuid';

export const guestStatusEnum = createPgEnum('guest_status', GuestStatus);

export const guestTable = pgTable('guests', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidV7()),
  name: varchar('name').notNull(),
  status: guestStatusEnum('status').notNull(),
  phone: varchar('phone').notNull(),
  observation: varchar('observation'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type DrizzleGuest = typeof guestTable.$inferSelect;

export type DrizzleGuestInsert = typeof guestTable.$inferInsert;
