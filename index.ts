// Import stylesheets
import { BlueCircleFactory } from './factories/blue_circle_factory';
import { BlueRectangleFactory } from './factories/blue_rectangle_factory';
import { RedCircleFactory } from './factories/red_circle_factory';
import { RedRectangleFactory } from './factories/red_rectangle_factory';
import { RedSquareFactory } from './factories/red_square_factory';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Abstract Factory</h1>`;

const redCircleFactory = new RedCircleFactory();
const redCircle = redCircleFactory.createShape();
const redColorCircle = redCircleFactory.createColor();
redCircle.draw();
redColorCircle.fill();

const blueCircleFactory = new BlueCircleFactory();
const blueCircle = blueCircleFactory.createShape();
const blueColorCircle = blueCircleFactory.createColor();
blueCircle.draw();
blueColorCircle.fill();

const redRectangleFactory = new RedRectangleFactory();
const redRectangle = redRectangleFactory.createShape();
const redColorRectangle = redRectangleFactory.createColor();
redRectangle.draw();
redColorRectangle.fill();

const blueRectangleFactory = new BlueRectangleFactory();
const blueRectangle = blueRectangleFactory.createShape();
const blueColorRectangle = blueRectangleFactory.createColor();
blueRectangle.draw();
blueColorRectangle.fill();

const redSquareFactory = new RedSquareFactory();
const redSquare = redSquareFactory.createShape();
const redColorSquare = redSquareFactory.createColor();
redSquare.draw();
redColorSquare.fill();
