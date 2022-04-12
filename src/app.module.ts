import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [AnimalsModule],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, DogsService],
})
export class AppModule {}
