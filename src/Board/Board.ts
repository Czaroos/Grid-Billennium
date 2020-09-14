export default class Board {
  private _size: number;
  private _fields: object[][];
  private static _instance: Board;

  private constructor(size: number) {
    this._size = size;
    this._fields = [];
    this.generateBoard();
  }

  public static getInstance(size: number): Board {
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
    var _cellBlack = '<div class="black"></div>',
      _cellWhite = '<div class="white"></div>';

    var _gridContainer = document.getElementById('container')!;
    _gridContainer.style.gridTemplateColumns = '1fr '.repeat(this._size);
    for (var i = 0; i < this._size; i++) {
      for (var j = 0; j < this._size; j++) {
        if ((i + j) % 2 == 0) {
          _gridContainer.insertAdjacentHTML('beforeend', _cellBlack);
        } else {
          _gridContainer.insertAdjacentHTML('beforeend', _cellWhite);
        }
      }
    }
  };

  public isPositionAvailable = (position: [number, number]) => {};

  public log = (): void => {
    console.log(this._size, this._fields);
  };
}