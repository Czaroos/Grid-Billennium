import Board from '../Board/Board';
import { diagonalMovements } from '../consts';
import Movable from './Movable.interface';

export default class MovableDiagonally implements Movable {
  public move = (next: [number, number]): [number, number] => {
    return next;
  };

  public showAvailableMoves = (
    board: Board,
    position: [number, number]
  ): void => {
    diagonalMovements.forEach((movement) => {
      if (
        board.isPositionAvailable([
          position[0] + movement[0],
          position[1] + movement[1],
        ])
      ) {
        document
          .getElementById(
            `[${position[0] + movement[0]}][${position[1] + movement[1]}]`
          )!
          .classList.add('green');
      } else if (
        board.isPositionAvailable([
          position[0] + movement[0],
          position[1] + movement[1],
        ]) === false
      ) {
        document
          .getElementById(
            `[${position[0] + movement[0]}][${position[1] + movement[1]}]`
          )!
          .classList.add('red');
      }
    });
  };
}
