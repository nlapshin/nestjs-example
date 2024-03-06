import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return decorator(() => {
      return 'Hello World!';
    });
  }
}

function decorator(originalMethod) {
  console.time('start');

  const res = originalMethod();

  console.timeEnd('start');

  return res;
}
