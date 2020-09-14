import { Size } from '../consts';

export default class Board {
  private _size: Size;
  private _fields: object[][];
  private static _instance: Board;

  private constructor(size: Size) {
    this._size = size;
    this._fields = [];
    this.generateBoard();
  }

  public static getInstance(size: Size): Board {
    if (!Board._instance) {
      Board._instance = new Board(size);
    }

    return Board._instance;
  }

  public getSize(): number {
    return this._size;
  }

  public getFields(): object[][] {
    return this._fields;
  }

  private generateBoard = (): void => {
    var _gridContainer = document.getElementById('container')!;
    _gridContainer.style.gridTemplateColumns = '1fr '.repeat(this._size);
    _gridContainer.style.width = `${80 * this._size}px`;
    _gridContainer.style.height = `${80 * this._size}px`;
    for (var i = 0; i < this._size; i++) {
      for (var j = 0; j < this._size; j++) {
        if ((i + j) % 2 == 0) {
          var _cellBlack = `<div class="black" id="[${i}][${j}]"></div>`;
          _gridContainer.insertAdjacentHTML('beforeend', _cellBlack);
        } else {
          var _cellWhite = `<div class="white" id="[${i}][${j}]"></div>`;
          _gridContainer.insertAdjacentHTML('beforeend', _cellWhite);
        }
      }
    }
  };

  public isPositionAvailable = (position: [number, number]): boolean => {
    const element = document.getElementById(`[${position[0]}][${position[1]}]`)!
      .innerHTML;
    if (element === '') return true;
    else return false;
  };
}
