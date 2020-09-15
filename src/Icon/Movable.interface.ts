import Board from '../Board/Board';

export default interface Movable {
  showAvailableMoves(board: Board, position: [number, number]): number[][];
  move(next: [number, number]): [number, number];
}
