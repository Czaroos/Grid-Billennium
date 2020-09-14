import './index.scss';
import Board from './Board/Board';

const board = Board.getInstance(10);
console.log(board.getFields(), board.getSize());
