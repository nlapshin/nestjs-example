import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Body,
  Req,
  Request,
} from '@nestjs/common';

import { DogDto } from './dogs.dto';
import { DogsService } from './dogs.service';

// /dogs/list GET
// GET /dogs/:id
// POST /dogs/
@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get('/list')
  list(@Req() req: Request): DogDto[] {
    console.log(req);

    return this.dogsService.list();
  }

  @Get('/:id')
  instance(@Param() params): DogDto {
    console.log(params); // params.id - int
    // Все параметры забираем из request, response объектов
    return this.dogsService.instance(+params.id);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() dog: DogDto): void {
    return this.dogsService.add(dog);
  }
}

// У меня есть специальный decorator builder
// Есть конфиг роута -> делает кучу декораторов.
