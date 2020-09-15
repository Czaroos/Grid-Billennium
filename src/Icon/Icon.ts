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
  readonly _visibleIcon: VisibleIcon;
  private _board: Board;
  private _availableMoves: number[][];

  private constructor(
    board: Board,
    visibleIcon: VisibleIcon,
    moveAbility?: Movable
  ) {
    this._availableMoves = [];
    this._moveAbility = moveAbility;
    this._visibleIcon = visibleIcon;
    this._board = board;
    this._position = this.setInitialPosition();
    if (moveAbility) this.initializeShowAvailableMovesOnClick();
  }

  private initializeShowAvailableMovesOnClick = () => {
    document.getElementById(
      `[${this._position[0]}][${this._position[1]}]`
    )!.onclick = () => this.showAvailableMoves();
  };

  private initializeMoveOnClick = () => {
    this._availableMoves.forEach((move) => {
      document.getElementById(`[${move[0]}][${move[1]}]`)!.onclick = () =>
        this.move([move[0], move[1]]);
    });
  };

  private garbageCollector = () => {
    const previousPosition = document.getElementById(
      `[${this._position[0]}][${this._position[1]}]`
    )!;
    previousPosition.onclick = () => {};
    previousPosition.classList.remove('icon');
    previousPosition.innerHTML = '';
    this._availableMoves.forEach((move) => {
      document.getElementById(`[${move[0]}][${move[1]}]`)!.onclick = () => {};
    });
    this._availableMoves = [];
    this._board.hideAvailableMoves();
  };

  private setInitialPosition = (): [number, number] => {
    let position = randomizePosition(this._board);
    while (!this._board.isPositionAvailable(position)) {
      position = randomizePosition(this._board);
    }
    return position;
  };

  public setMoveAbility(moveAbility?: Movable) {
    this._moveAbility = moveAbility;
    this.initializeShowAvailableMovesOnClick();
  }

  private move(next: [number, number]): void {
    if (this._moveAbility) {
      this.garbageCollector();

      this._position = this._moveAbility.move(next);

      const currentPosition = document.getElementById(
        `[${this._position[0]}][${this._position[1]}]`
      )!;
      currentPosition.innerHTML = this._visibleIcon;
      currentPosition.classList.add('icon');
      currentPosition.onclick = () => this.showAvailableMoves();
    }
  }

  private showAvailableMoves(): void {
    this._board.hideAvailableMoves();
    if (this._moveAbility) {
      this._availableMoves = this._moveAbility.showAvailableMoves(
        this._board,
        this._position
      );
      this.initializeMoveOnClick();
    }
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
