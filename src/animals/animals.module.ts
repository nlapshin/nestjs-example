import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnimalModel, AnimalSchema } from './animals.schema';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnimalModel.name, schema: AnimalSchema },
    ]),
  ],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
