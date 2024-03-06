import {
  Global,
  Inject,
  Logger,
  Module,
  OnModuleDestroy,
} from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { MongoClient } from 'mongodb';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

const logger = new Logger('DatabaseModule');

const databaseProviders: Provider[] = [
  {
    provide: MongoClient,

    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      logger.log('Connecting to MongoDB...');

      const client = new MongoClient(config.db.url, {
        minPoolSize: 20,
        maxPoolSize: 100,
      });
      await client.connect();

      logger.log('Successfully connected to MongoDB');
      return client;
    },
  },
];

@Global()
@Module({
  imports: [ConfigModule],
  providers: databaseProviders,
  exports: databaseProviders,
})
export class DatabaseModule implements OnModuleDestroy {
  constructor(@Inject(MongoClient) private mongoClient: MongoClient) {}

  public async onModuleDestroy() {
    await this.mongoClient.close();
  }
}
