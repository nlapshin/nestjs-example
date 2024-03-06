import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {
  public static forRoot(): DynamicModule {
    return {
      global: true,
      module: ConfigModule,
    };
  }
}
