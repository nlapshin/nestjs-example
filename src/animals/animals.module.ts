import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnimalModel, AnimalSchema } from './animals.schema';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { AnimalsTestModule } from './test/animals.test.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnimalModel.name, schema: AnimalSchema },
    ]),
    AnimalsTestModule,
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
