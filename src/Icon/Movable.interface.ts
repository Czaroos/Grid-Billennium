import { Direction } from '../consts';

export default interface Movable {
  move(direction: Direction): [number, number];
  showAvailableMoves(): void;
}
