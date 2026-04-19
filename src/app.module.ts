import { DatabaseModule } from '@/infrastructure/database/database.module';
import { EnvironmentModule } from '@/infrastructure/environment/environment.module';
import { GuestsModule } from '@/modules/guests/guests.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    // Infrastructure
    DatabaseModule,
    EnvironmentModule,

    // Modules
    GuestsModule,
  ],
})
export class AppModule {}
