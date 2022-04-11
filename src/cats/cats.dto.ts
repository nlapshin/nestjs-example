import { IsNotEmpty } from 'class-validator';

export class CatDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
}
