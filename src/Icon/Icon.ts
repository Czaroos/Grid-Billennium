import Board from '../Board/Board';
import { Direction } from '../consts';
import Movable from './Movable.interface';

class Icon {
  private _moveAbility: Movable | undefined;
  private _position: [number, number];

  constructor(board: Board, moveAbility?: Movable) {
    this._moveAbility = moveAbility;
    this._position = this.setInitialPosition(board);
  }

  private setInitialPosition = (board: Board): [number, number] => {
    const randomFormula = Math.floor(Math.random() * board.getSize());
    //if position != occupied
    return [randomFormula, randomFormula];
  };

  public setMoveAbility(moveAbility?: Movable) {
    this._moveAbility = moveAbility;
  }

  public move(direction: Direction): void {
    if (this._moveAbility) this._position = this._moveAbility.move(direction);
  }

  public showAvailableMoves(): void {
    if (this._moveAbility) this._moveAbility.showAvailableMoves();
  }
}
