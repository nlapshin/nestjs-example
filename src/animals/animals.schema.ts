import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AnimalModel {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;
}

export type AnimalDocument = AnimalModel & Document;
export const AnimalSchema = SchemaFactory.createForClass(AnimalModel);
