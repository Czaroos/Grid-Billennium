import './index.scss';
import Board from './Board/Board';
import Icon from './Icon/Icon';
import { VisibleIcon } from './consts';
import MovableCartesian from './Icon/MovableCartesian';

const board = Board.getInstance(5);
const icon = Icon.generateIcon(
  board,
  VisibleIcon.MINUS,
  new MovableCartesian()
);
const icon2 = Icon.generateIcon(
  board,
  VisibleIcon.QUESTION_MARK,
  new MovableCartesian()
);
const icon3 = Icon.generateIcon(
  board,
  VisibleIcon.HASHTAG,
  new MovableCartesian()
);

icon.showAvailableMoves();
icon.hideAvailableMoves();
