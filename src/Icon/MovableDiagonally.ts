import { Direction } from '../consts';
import Movable from './Movable.interface';

export default class MovableDiagonally implements Movable {
  public move = (direction: Direction): [number, number] => {
    return [1, 3];
  };

  public showAvailableMoves = () => {
    console.log('available moves');
  };
}
