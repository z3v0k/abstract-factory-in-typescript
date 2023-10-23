import { AbstractFactory } from '../factory';
import { Shape, Square } from '../shapes/shapes';
import { Blue, Color } from '../colors/colors';

export class BlueSquareFactory extends AbstractFactory {
  createShape(): Shape {
    return new Square();
  }

  createColor(): Color {
    return new Blue();
  }
}
