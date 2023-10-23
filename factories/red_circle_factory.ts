import { AbstractFactory } from '../factory';
import { Circle, Shape } from '../shapes/shapes';
import { Color, Red } from '../colors/colors';

export class RedCircleFactory extends AbstractFactory {
  createShape(): Shape {
    return new Circle();
  }

  createColor(): Color {
    return new Red();
  }
}
