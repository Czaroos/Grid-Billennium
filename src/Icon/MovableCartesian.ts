import { cartesianMovements } from '../consts';
import Movable from './Movable';
import Board from '../board/Board';

export default class MovableCartesian implements Movable {
  public move = (next: [number, number]): [number, number] => {
    return next;
  };

  public showAvailableMoves = (
    board: Board,
    position: [number, number]
  ): number[][] => {
    const availableMoves: number[][] = [];
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
        availableMoves.push([
          position[0] + movement[0],
          position[1] + movement[1],
        ]);
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
    return availableMoves;
  };
}
