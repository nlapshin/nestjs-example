import {
  Controller,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';

import { CatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  private cats: CatDto[];

  constructor() {
    this.cats = [
      { id: 1, name: 'barsik' },
      { id: 2, name: 'matroskin' },
    ];
  }

  @Get('/list')
  list(): CatDto[] {
    return this.cats;
  }

  @Get('/:id')
  instance(@Param() params): CatDto {
    return this.cats.find((cat) => cat.id === parseInt(params.id));
  }

  @Post('/:id')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() cat: CatDto): void {
    this.cats.push(cat);
  }
}
