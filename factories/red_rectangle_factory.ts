import { Rectangle, Shape } from '../shapes/shapes';
import { AbstractFactory } from '../factory';
import { Color, Red } from '../colors/colors';

export class RedRectangleFactory extends AbstractFactory {
  createShape(): Shape {
    return new Rectangle();
  }

  createColor(): Color {
    return new Red();
  }
}
