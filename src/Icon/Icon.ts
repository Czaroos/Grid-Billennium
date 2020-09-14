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
    this.initializeShowAvailableMovesOnClick();
  }

  private initializeShowAvailableMovesOnClick = () => {
    console.log('initalized show available onclick');
    const element = document.getElementById(
      `[${this._position[0]}][${this._position[1]}]`
    )!;

    console.log(element);

    element.addEventListener('click', () => this.showAvailableMoves());
  };

  private initializeMoveOnClick = () => {
    console.log('initalized move onclick');
    const elements = document.querySelectorAll('.green')!;
    elements.forEach((element) => {
      element.addEventListener('click', () =>
        this.move([parseInt(element.id[1], 10), parseInt(element.id[4], 10)])
      );
    });
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
  }

  initializeRegularTilesOnClick = () => {
    const elements = document.querySelectorAll('.white, .black')!;
    elements.forEach((element) => {
      if (element.innerHTML === '')
        element.addEventListener('click', () => this.hideAvailableMoves());
    });
  };

  private move(next: [number, number]): void {
    this.hideAvailableMoves();
    this.initializeRegularTilesOnClick();
    if (this._moveAbility) {
      const previousPosition = document.getElementById(
        `[${this._position[0]}][${this._position[1]}]`
      )!;
      previousPosition.classList.remove('icon');
      previousPosition.innerHTML = '';

      this._position = this._moveAbility.move(next);

      const currentPosition = document.getElementById(
        `[${this._position[0]}][${this._position[1]}]`
      )!;
      currentPosition.innerHTML = this._visibleIcon;
      currentPosition.classList.add('icon');
      this.initializeShowAvailableMovesOnClick();
    }
  }

  private showAvailableMoves(): void {
    this.hideAvailableMoves();
    if (this._moveAbility) {
      this._moveAbility.showAvailableMoves(this._board, this._position);
      this.initializeMoveOnClick();
    }
  }

  public hideAvailableMoves = () => {
    const elements = document.querySelectorAll('.green, .red')!;
    elements.forEach((element) => {
      element.classList.remove('green', 'red');
    });
  };

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
