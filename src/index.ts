import './index.scss';
import Board from './board/Board';
import Icon from './icon/Icon';
import { VisibleIcon } from './consts';
import MovableCartesian from './icon/MovableCartesian';
import MovableDiagonally from './icon/MovableDiagonally';

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
