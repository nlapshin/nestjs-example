import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnimalModel, AnimalSchema } from '../animals.schema';
import { AnimalsTestController } from './animals.test.controller';
import { AnimalsService } from '../animals.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnimalModel.name, schema: AnimalSchema },
    ]),
  ],
  controllers: [AnimalsTestController],
  providers: [AnimalsService],
})
export class AnimalsTestModule {}
