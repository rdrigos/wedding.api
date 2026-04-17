import { AppModule } from '@/app.module';
import { EnvironmentService } from '@/infrastructure/environment/environment.service';
import { NestFactory } from '@nestjs/core';

(async () => {
  const app = await NestFactory.create(AppModule);

  // Resolve required services from the DI container
  const env = app.get(EnvironmentService);

  // Retrieve host and port configuration from environment
  const host = env.get('HOST');
  const port = env.get('PORT');

  // Start the HTTP server
  await app.listen(port, host);
})();
