import { Rectangle, Shape } from '../shapes/shapes';
import { AbstractFactory } from '../factory';
import { Blue, Color } from '../colors/colors';

export class BlueRectangleFactory extends AbstractFactory {
  createShape(): Shape {
    return new Rectangle();
  }

  createColor(): Color {
    return new Blue();
  }
}
