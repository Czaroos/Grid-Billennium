import Board from '../Board/Board';

export default interface Movable {
  showAvailableMoves(board: Board, position: [number, number]): void;
  move(next: [number, number]): [number, number];
}
