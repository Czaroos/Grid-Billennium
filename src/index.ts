import './index.scss';
import Board from './Board/Board';
import Icon from './Icon/Icon';
import { VisibleIcon } from './consts';
import MovableCartesian from './Icon/MovableCartesian';
import MovableDiagonally from './Icon/MovableDiagonally';

const board = Board.getInstance(5);

const cartesianIcon = Icon.generateIcon(
  board,
  VisibleIcon.MINUS,
  new MovableCartesian()
);
const diagonalIcon = Icon.generateIcon(
  board,
  VisibleIcon.QUESTION_MARK,
  new MovableDiagonally()
);
const immovableIcon = Icon.generateIcon(board, VisibleIcon.HASHTAG);

// We can change icon moveability during program execution
// Uncomment line below to check

// immovableIcon.setMoveAbility(new MovableCartesian());
