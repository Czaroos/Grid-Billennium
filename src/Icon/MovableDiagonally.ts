import { Direction } from '../consts';
import Movable from './Movable.interface';

export default class MovableDiagonally implements Movable {
  move = (direction: Direction): [number, number] => {
    return [1, 3];
  };

  showAvailableMoves = () => {
    console.log('available moves');
  };
}
