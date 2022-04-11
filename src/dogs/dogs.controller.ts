import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';

import { DogDto } from './dogs.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get('/list')
  list(): DogDto[] {
    return this.dogsService.list();
  }

  @Get('/:id')
  instance(@Param() params): DogDto {
    return this.dogsService.instance(+params.id);
  }

  @Post('/:id')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() dog: DogDto): void {
    return this.dogsService.add(dog);
  }
}
