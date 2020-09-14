import Board from '../Board/Board';

export default interface Movable {
  showAvailableMoves(board: Board, position: [number, number]): void;
  hideAvailableMoves(position: [number, number]): void;
}
