import { AbstractFactory } from '../factory';
import { Shape, Square } from '../shapes/shapes';
import { Color, Red } from '../colors/colors';

export class RedSquareFactory extends AbstractFactory {
  createShape(): Shape {
    return new Square();
  }

  createColor(): Color {
    return new Red();
  }
}
