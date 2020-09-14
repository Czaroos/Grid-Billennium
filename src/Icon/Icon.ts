import Board from '../Board/Board';
import { Direction, VisibleIcon } from '../consts';
import Movable from './Movable.interface';

const randomizePosition = (board: Board): [number, number] => {
  return [
    Math.floor(Math.random() * board.getSize()),
    Math.floor(Math.random() * board.getSize()),
  ];
};

export default class Icon {
  private _moveAbility: Movable | undefined;
  private _position: [number, number];
  private _visibleIcon: VisibleIcon;

  constructor(board: Board, visibleIcon: VisibleIcon, moveAbility?: Movable) {
    this._moveAbility = moveAbility;
    this._visibleIcon = visibleIcon;
    this._position = this.setInitialPosition(board);
  }

  private setInitialPosition = (board: Board): [number, number] => {
    let position = randomizePosition(board);
    while (!board.isPositionAvailable(position)) {
      position = randomizePosition(board);
    }
    return position;
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

  public static generateIcon = (
    board: Board,
    visibleIcon: VisibleIcon,
    moveAbility?: Movable
  ): Icon => {
    const icon = new Icon(board, visibleIcon, moveAbility);
    let element = document.getElementById(
      `[${icon._position[0]}][${icon._position[1]}]`
    )!;
    element.innerHTML = icon._visibleIcon;
    element.classList.add('icon');
    return icon;
  };
}
