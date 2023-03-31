import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimalType = 'cats' | 'dogs';

@Schema()
export class AnimalModel {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: AnimalType;
}

export type AnimalDocument = AnimalModel & Document;
export const AnimalSchema = SchemaFactory.createForClass(AnimalModel);
