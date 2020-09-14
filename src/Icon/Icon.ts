import Board from '../Board/Board';
import { VisibleIcon } from '../consts';
import Movable from './Movable.interface';

const randomizePosition = (board: Board): [number, number] => {
  return [
    Math.floor(Math.random() * board.size),
    Math.floor(Math.random() * board.size),
  ];
};

export default class Icon {
  private _moveAbility: Movable | undefined;
  private _position: [number, number];
  private _visibleIcon: VisibleIcon;
  private _board: Board;

  private constructor(
    board: Board,
    visibleIcon: VisibleIcon,
    moveAbility?: Movable
  ) {
    this._moveAbility = moveAbility;
    this._visibleIcon = visibleIcon;
    this._board = board;
    this._position = this.setInitialPosition();
  }

  private setInitialPosition = (): [number, number] => {
    let position = randomizePosition(this._board);
    while (!this._board.isPositionAvailable(position)) {
      position = randomizePosition(this._board);
    }
    return position;
  };

  public setMoveAbility(moveAbility?: Movable) {
    this._moveAbility = moveAbility;
  }

  public move = (direction: [number, number]): void => {
    this._position = [
      this._position[0] + direction[0],
      this._position[1] + direction[1],
    ];
  };

  public showAvailableMoves(): void {
    if (this._moveAbility)
      this._moveAbility.showAvailableMoves(this._board, this._position);
  }

  public hideAvailableMoves(): void {
    if (this._moveAbility) this._moveAbility.hideAvailableMoves(this._position);
  }

  public getPosition = () => {
    return this._position;
  };

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
