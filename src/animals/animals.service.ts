import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { AnimalModel, AnimalDocument } from './animals.schema';
import { AnimalDto } from './animals.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(AnimalModel.name) private animalModel: Model<AnimalDocument>,
  ) {}

  list(): Promise<AnimalModel[]> {
    return this.animalModel.find().exec();
  }

  instance(id: number): Promise<AnimalModel> {
    return this.animalModel.findOne({ id }).exec();
  }

  add(animal: AnimalDto): Promise<AnimalModel> {
    const createdAnimal = new this.animalModel(animal);

    return createdAnimal.save();
  }
}
