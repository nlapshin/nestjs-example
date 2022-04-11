import { IsNotEmpty } from 'class-validator';

export class DogDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
}
