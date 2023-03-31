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
  UseGuards,
} from '@nestjs/common';

import { AnimalDto } from '../animals.dto';
import { AnimalsService } from '../animals.service';
import { AuthGuard } from '../../auth.guard';

@Controller('animals/test')
export class AnimalsTestController {
  constructor(private animalsService: AnimalsService) {}

  @Get('/list')
  list(): Promise<AnimalDto[]> {
    return this.animalsService.list();
  }

  @Get('/instance/:id')
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

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() animal: AnimalDto): Promise<AnimalDto> {
    return this.animalsService.add(animal);
  }

  @Get('/secret-route')
  @UseGuards(AuthGuard)
  secretRoute() {
    return 'secret';
  }
}
