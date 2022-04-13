import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  HttpException,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { AnimalDto } from './animals.dto';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get('/list')
  list(): Promise<AnimalDto[]> {
    return this.animalsService.list();
  }

  @Get('/:id')
  async instance(@Param('id', ParseIntPipe) id: number): Promise<AnimalDto> {
    const animal = await this.animalsService.instance(id);

    if (animal === null) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Incorrect id',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return animal;
  }

  @Post('/:id')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() animal: AnimalDto): Promise<AnimalDto> {
    return this.animalsService.add(animal);
  }
}
