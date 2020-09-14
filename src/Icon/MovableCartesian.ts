import { Direction } from '../consts';
import Movable from './Movable.interface';
import Board from '../Board/Board';
import Icon from './Icon';

export default class MovableCartesian implements Movable {
  public move = (direction: Direction): [number, number] => {
    return [1, 3];
  };

  public showAvailableMoves = (): void => {
    console.log('available moves');
  };
}
