interface Direction {
  [direction: string]: [number, number];
}

const availableMovements: Direction = {
  EAST: [0, -1],
  NORTH: [1, 0],
  NORTHEAST: [1, -1],
  NORTHWEST: [1, 1],
  SOUTH: [-1, 0],
  SOUTHEAST: [-1, -1],
  SOUTHWEST: [-1, 1],
  WEST: [0, 1],
};

export const cartesianMovements: number[][] = [
  availableMovements['EAST'],
  availableMovements['NORTH'],
  availableMovements['SOUTH'],
  availableMovements['WEST'],
];

export const diagonalMovements: number[][] = [
  availableMovements['NORTHEAST'],
  availableMovements['NORTHWEST'],
  availableMovements['SOUTHEAST'],
  availableMovements['SOUTHWEST'],
];

export const enum VisibleIcon {
  ASTRIX = '*',
  EQUALS = '=',
  EXCLAMATION_MARK = '!',
  HASHTAG = '#',
  MINUS = '-',
  PLUS = '+',
  QUESTION_MARK = '?',
  SEMICOLON = ';',
  TILDA = '~',
}

export type Size = 5 | 6 | 7 | 8 | 9 | 10;

export const TILE_WIDTH = 100;
export const TILE_HEIGHT = 100;
