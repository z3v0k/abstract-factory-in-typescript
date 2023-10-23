import { AbstractFactory } from '../factory';
import { Circle, Shape } from '../shapes/shapes';
import { Blue, Color } from '../colors/colors';

export class BlueCircleFactory extends AbstractFactory {
  createShape(): Shape {
    return new Circle();
  }

  createColor(): Color {
    return new Blue();
  }
}
