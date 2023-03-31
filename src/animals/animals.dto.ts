import { IsNotEmpty } from 'class-validator';

export class AnimalDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  type: string;
}

// Data transfer object
