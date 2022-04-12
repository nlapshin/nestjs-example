import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';

import { AnimalDto } from './animals.dto';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get('/list')
  list(): AnimalDto[] {
    return this.animalsService.list();
  }

  @Get('/:id')
  instance(@Param() params): AnimalDto {
    return this.animalsService.instance(+params.id);
  }

  @Post('/:id')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() animal: AnimalDto): void {
    return this.animalsService.add(animal);
  }
}
