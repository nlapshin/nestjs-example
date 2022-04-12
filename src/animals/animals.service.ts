import { Injectable } from '@nestjs/common';

import { Animal } from './animals.interface';

@Injectable()
export class AnimalsService {
  private animals: Animal[];

  constructor() {
    this.animals = [
      { id: 1, name: 'barbos', type: 'dog' },
      { id: 2, name: 'sharik', type: 'dog' },
      { id: 3, name: 'barsik', type: 'cat' },
    ];
  }

  list(): Animal[] {
    return this.animals;
  }

  instance(id: number): Animal {
    console.log(id);

    return this.animals.find((dog) => dog.id === id);
  }

  add(animal: Animal) {
    this.animals.push(animal);
  }
}
