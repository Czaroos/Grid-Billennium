import Board from '../Board/Board';
import Movable from './Movable.interface';

export default class MovableDiagonally implements Movable {
  public hideAvailableMoves = () => {};

  public showAvailableMoves = (
    board: Board,
    position: [number, number]
  ): void => {};
}
