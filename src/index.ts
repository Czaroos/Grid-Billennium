import './index.scss';
import Board from './Board/Board';
import Icon from './Icon/Icon';
import { VisibleIcon } from './consts';
import MovableCartesian from './Icon/MovableCartesian';

const board = Board.getInstance(5);
const icon = Icon.generateIcon(
  board,
  VisibleIcon.ASTRIX,
  new MovableCartesian()
);

console.log(board.getFields(), board.getSize());
