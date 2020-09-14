import { Size, TILE_HEIGHT, TILE_WIDTH } from '../consts';

export default class Board {
  readonly size: Size;
  private static _instance: Board;

  private constructor(size: Size) {
    this.size = size;
    this.generateBoard();
    this.initializeOnClickEvent();
  }

  public static getInstance(size: Size): Board {
    if (!Board._instance) {
      Board._instance = new Board(size);
    }

    return Board._instance;
  }

  initializeOnClickEvent = () => {
    const elements = document.querySelectorAll('.white, .black')!;
    elements.forEach((element) => {
      if (element.innerHTML === '')
        element.addEventListener('click', () => this.hideAvailableMoves());
    });
  };

  private generateBoard = (): void => {
    var _gridContainer = document.getElementById('container')!;
    _gridContainer.style.gridTemplateColumns = '1fr '.repeat(this.size);
    _gridContainer.style.width = `${TILE_WIDTH * this.size}px`;
    _gridContainer.style.height = `${TILE_HEIGHT * this.size}px`;
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
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

  public hideAvailableMoves = () => {
    const elements = document.querySelectorAll('.green, .red')!;
    elements.forEach((element) => {
      element.classList.remove('green', 'red');
    });
  };

  public isPositionAvailable = (
    position: [number, number]
  ): boolean | undefined => {
    if (
      0 > position[0] ||
      0 > position[1] ||
      position[0] >= this.size ||
      position[1] >= this.size
    ) {
      return undefined;
    }
    const element = document.getElementById(
      `[${position[0]}][${position[1]}]`
    )!;
    const elementHTML = element.innerHTML;
    if (elementHTML === '') return true;
    else return false;
  };
}
