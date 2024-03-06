import { Injectable } from '@nestjs/common';
import { cleanEnv, str } from 'envalid';

export interface IConfig {
  db: {
    url: string;
  };
}

@Injectable()
export class ConfigService implements IConfig {
  public env = cleanEnv(process.env, {
    NODE_ENV: str({ default: 'development' }),
    MONGO_URL: str({ default: 'mongodb://0.0.0.0:27017' }),
  });

  public db = {
    url: this.env.MONGO_URL,
  };
}
