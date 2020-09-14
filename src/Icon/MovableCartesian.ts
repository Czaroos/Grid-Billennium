import { cartesianMovements } from '../consts';
import Movable from './Movable.interface';
import Board from '../Board/Board';

export default class MovableCartesian implements Movable {
  public hideAvailableMoves = () => {
    const elements = document.querySelectorAll('.green, .red')!;
    elements.forEach((element) => {
      element.classList.remove('green', 'red');
    });
  };

  public showAvailableMoves = (
    board: Board,
    position: [number, number]
  ): void => {
    cartesianMovements.forEach((movement) => {
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
