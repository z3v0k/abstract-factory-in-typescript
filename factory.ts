import { Color } from './color';
import { Shape } from './shape';

export abstract class AbstractFactory {
  abstract createShape(): Shape;
  abstract createColor(): Color;
}
