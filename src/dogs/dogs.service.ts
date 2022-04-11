import { Injectable } from '@nestjs/common';

import { Dog } from './dogs.interface';

@Injectable()
export class DogsService {
  private dogs: Dog[];

  constructor() {
    this.dogs = [
      { id: 1, name: 'barbos' },
      { id: 2, name: 'sharik' },
    ];
  }

  list(): Dog[] {
    return this.dogs;
  }

  instance(id: number): Dog {
    console.log(id);

    return this.dogs.find((dog) => dog.id === id);
  }

  add(dog: Dog) {
    this.dogs.push(dog);
  }
}
